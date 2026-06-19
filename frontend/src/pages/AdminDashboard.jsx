import { useState } from 'react';
import FormInput from '../components/ui/FormInput.jsx';
import PageHeader from '../components/ui/PageHeader.jsx';
import { buttonPrimary, glass, input, shell } from '../components/ui/classes.js';
import { useApiCollection } from '../hooks/useApiCollection.js';
import { apiPost } from '../services/api.js';

function getStoredAuth() {
  try {
    return JSON.parse(localStorage.getItem('epochNovaAuth') || 'null');
  } catch (_error) {
    return null;
  }
}

export default function AdminDashboard() {
  const [collection, setCollection] = useState('tutorials');
  const [auth, setAuth] = useState(getStoredAuth);
  const { items, setItems } = useApiCollection(collection);

  async function login(event) {
    event.preventDefault();
    const payload = Object.fromEntries(new FormData(event.currentTarget));
    const data = await apiPost('/auth/login', payload).catch(() => null);
    if (data?.token) {
      localStorage.setItem('epochNovaAuth', JSON.stringify(data));
      setAuth(data);
    }
  }

  async function create(event) {
    event.preventDefault();
    const payload = Object.fromEntries(new FormData(event.currentTarget));
    const saved = await apiPost(`/${collection}`, payload, auth?.token).catch(() => ({ item: { ...payload, _id: crypto.randomUUID(), status: 'draft' } }));
    setItems((previous) => [saved.item || saved, ...previous]);
    event.currentTarget.reset();
  }

  if (!auth?.token || auth?.user?.role !== 'admin') {
    return (
      <>
        <PageHeader title="Admin" accent="Dashboard" subtitle="Sign in to manage platform content." />
        <section className="py-10">
          <div className={shell}>
            <form className={`${glass} mx-auto grid max-w-md gap-5`} onSubmit={login}>
              <h3 className="text-2xl font-bold text-white">Admin Login</h3>
              <FormInput label="Email" name="email" type="email" placeholder="admin@theepochnova.com" />
              <FormInput label="Password" name="password" type="password" placeholder="admin123" />
              <button className={buttonPrimary}>Login</button>
              <p className="text-sm text-neutral-500">Seed admin: admin@theepochnova.com / admin123</p>
            </form>
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      <PageHeader title="Admin" accent="Dashboard" subtitle="Manage tutorials, notes and resources end to end." />
      <section className="py-10">
        <div className={`${shell} grid gap-6`}>
          <div className={`${glass} flex flex-wrap gap-2`}>
            {['tutorials', 'notes', 'resources'].map((item) => (
              <button
                key={item}
                className={`rounded-lg border px-4 py-2 text-sm font-medium transition ${collection === item ? 'border-transparent bg-gradient-to-r from-cyan-300 to-violet-500 text-black' : 'border-white/10 bg-white/[0.03] text-neutral-300 hover:bg-white/10'}`}
                onClick={() => setCollection(item)}
              >
                {item}
              </button>
            ))}
          </div>

          <div className="grid gap-6 lg:grid-cols-[420px_1fr]">
            <form className={`${glass} grid gap-5`} onSubmit={create}>
              <h3 className="text-xl font-bold text-white">Create {collection.slice(0, -1)}</h3>
              <FormInput label="Title" name="title" placeholder="Content title" />
              <FormInput label="Category" name="category" placeholder="java, sql, dsa, development..." />
              <label className="grid gap-2 text-sm font-medium text-neutral-300">
                Description
                <textarea className={input} name="description" rows="4" placeholder="Short description" required />
              </label>
              <button className={buttonPrimary}>Publish</button>
            </form>

            <div className={glass}>
              <h3 className="mb-5 text-xl font-bold text-white">Manage Content</h3>
              <div className="grid gap-3">
                {items.map((item) => (
                  <div key={item._id} className="flex items-center justify-between gap-4 rounded-lg border border-white/10 bg-white/[0.03] p-4">
                    <div>
                      <strong className="block text-white">{item.title}</strong>
                      <span className="text-sm text-neutral-500">{item.category || 'general'}</span>
                    </div>
                    <span className="rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1 text-xs text-cyan-300">{item.status || 'draft'}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
