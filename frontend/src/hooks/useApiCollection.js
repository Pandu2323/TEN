import { useEffect, useState } from 'react';
import { seeded } from '../data/content.js';
import { apiGet } from '../services/api.js';

export function useApiCollection(name) {
  const [items, setItems] = useState(seeded[name] || []);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;
    setLoading(true);

    apiGet(`/${name}`)
      .then((data) => mounted && setItems(data.items || data))
      .catch(() => mounted && setItems(seeded[name] || []))
      .finally(() => mounted && setLoading(false));

    return () => {
      mounted = false;
    };
  }, [name]);

  return { items, loading, setItems };
}
