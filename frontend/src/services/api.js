export const API_BASE = import.meta.env.VITE_API_URL || 'http://127.0.0.1:5000/api';

export async function apiGet(path) {
  const response = await fetch(`${API_BASE}${path}`);
  if (!response.ok) throw new Error('API request failed');
  return response.json();
}

export async function apiPost(path, payload, token) {
  const response = await fetch(`${API_BASE}${path}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
    },
    body: JSON.stringify(payload),
  });
  if (!response.ok) throw new Error('API request failed');
  return response.json();
}
