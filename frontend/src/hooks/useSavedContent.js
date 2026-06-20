import { useCallback, useEffect, useMemo, useState } from 'react';
import { apiGet, apiPut } from '../services/api.js';

export const SAVED_ITEMS_EVENT = 'epochNovaSavedItemsChange';

function getCacheKey(token) {
  return token ? `epochNovaSavedItems:${token.slice(0, 18)}` : 'epochNovaSavedItems:guest';
}

function normalizeSavedItem(item) {
  if (!item) return null;
  const id = String(item._id || item.id || item.slug || item.title || '').trim();
  if (!id) return null;

  return {
    ...item,
    _id: id,
    id,
    type: item.type || item.collection || 'tutorials',
    title: item.title || '',
    description: item.description || item.excerpt || '',
  };
}

function flattenSavedByType(savedByType = {}) {
  return ['tutorials', 'notes', 'roadmaps', 'resources'].flatMap((key) =>
    Array.isArray(savedByType[key]) ? savedByType[key] : []
  );
}

export function useSavedContent(token) {
  const [savedItems, setSavedItems] = useState([]);
  const [loading, setLoading] = useState(Boolean(token));
  const [error, setError] = useState('');

  const normalizedItems = useMemo(() => savedItems.map(normalizeSavedItem).filter(Boolean), [savedItems]);
  const savedIds = useMemo(() => new Set(normalizedItems.map((item) => String(item?._id)).filter(Boolean)), [normalizedItems]);
  const savedByType = useMemo(
    () =>
      normalizedItems.reduce(
        (acc, item) => {
          const type = item.type || 'tutorials';
          if (!acc[type]) acc[type] = [];
          acc[type].push(item);
          return acc;
        },
        { tutorials: [], notes: [], roadmaps: [], resources: [] }
      ),
    [normalizedItems]
  );
  const savedCount = normalizedItems.length;

  const persistCache = useCallback(
    (items) => {
      if (!token) return;
      try {
        localStorage.setItem(getCacheKey(token), JSON.stringify(items));
      } catch (_error) {
        // ignore storage failures
      }
    },
    [token]
  );

  const loadCache = useCallback(() => {
    if (!token) return [];
    try {
      const raw = localStorage.getItem(getCacheKey(token));
      const cached = raw ? JSON.parse(raw) : [];
      return Array.isArray(cached) ? cached.map(normalizeSavedItem).filter(Boolean) : [];
    } catch (_error) {
      return [];
    }
  }, [token]);

  const refresh = useCallback(async () => {
    if (!token) {
      setSavedItems([]);
      setLoading(false);
      return [];
    }

    setLoading(true);
    setError('');

    try {
      const data = await apiGet('/dashboard/saved-items', token);
      const items = Array.isArray(data.items)
        ? data.items
        : Array.isArray(data.savedItems)
          ? data.savedItems
          : data.savedByType
            ? flattenSavedByType(data.savedByType)
            : [];
      setSavedItems(items);
      persistCache(items);
      return items;
    } catch (err) {
      setError(err.message || 'Failed to load saved content');
      const cached = loadCache();
      setSavedItems(cached);
      return cached;
    } finally {
      setLoading(false);
    }
  }, [loadCache, persistCache, token]);

  const toggleSaved = useCallback(async (contentId) => {
    if (!token) {
      throw new Error('Login required');
    }

    const data = await apiPut(`/dashboard/saved-items/${contentId}`, {}, token);
    const items = Array.isArray(data.savedItems)
      ? data.savedItems
      : Array.isArray(data.items)
        ? data.items
        : data.savedByType
          ? flattenSavedByType(data.savedByType)
          : [];
    setSavedItems(items);
    persistCache(items);
    window.dispatchEvent(new CustomEvent(SAVED_ITEMS_EVENT, { detail: { contentId } }));
    await refresh();
    return data;
  }, [persistCache, refresh, token]);

  useEffect(() => {
    refresh();
    const sync = () => {
      refresh();
    };

    window.addEventListener(SAVED_ITEMS_EVENT, sync);
    window.addEventListener('storage', sync);
    return () => {
      window.removeEventListener(SAVED_ITEMS_EVENT, sync);
      window.removeEventListener('storage', sync);
    };
  }, [refresh]);

  return {
    savedItems: normalizedItems,
    savedIds,
    savedByType,
    savedCount,
    loading,
    error,
    refresh,
    toggleSaved,
  };
}
