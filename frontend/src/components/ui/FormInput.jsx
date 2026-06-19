import { input } from './classes.js';

export default function FormInput({ label, name, type = 'text', placeholder }) {
  return (
    <label className="grid gap-2 text-sm font-medium text-neutral-300">
      {label}
      <input className={input} name={name} type={type} placeholder={placeholder} required />
    </label>
  );
}
