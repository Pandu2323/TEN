import { useState } from 'react';
import FormInput from '../components/ui/FormInput.jsx';
import PageHeader from '../components/ui/PageHeader.jsx';
import { apiPost } from '../services/api.js';
import { buttonPrimary, glass, input, shell } from '../components/ui/classes.js';

const info = [
  ['Email Us', 'theepochnova@gmail.com'],
  ['Location', 'India'],
  ['Response Time', 'Within 24-48 hours'],
];

export default function Contact() {
  const [sent, setSent] = useState(false);

  async function submit(event) {
    event.preventDefault();
    const payload = Object.fromEntries(new FormData(event.currentTarget));
    await apiPost('/contacts', payload).catch(() => null);
    setSent(true);
    event.currentTarget.reset();
  }

  return (
    <>
      <PageHeader title="Contact" accent="Us" subtitle="Have questions, suggestions, or want to collaborate? We'd love to hear from you." />
      <section className="py-10">
        <div className={`${shell} grid items-start gap-8 lg:grid-cols-[1.3fr_1fr]`}>
          <form className={`${glass} grid gap-5`} onSubmit={submit}>
            <h2 className="text-2xl font-bold text-white">Send us a Message</h2>
            {sent && <p className="rounded-lg border border-emerald-400/20 bg-emerald-400/10 px-4 py-3 text-sm text-emerald-300">Message sent successfully.</p>}
            <FormInput name="name" label="Full Name" placeholder="Enter your full name" />
            <FormInput name="email" label="Email Address" type="email" placeholder="Enter your email address" />
            <FormInput name="subject" label="Subject" placeholder="What is this regarding?" />
            <label className="grid gap-2 text-sm font-medium text-neutral-300">
              Message
              <textarea className={input} name="message" rows="5" placeholder="Write your message here..." required />
            </label>
            <button className={buttonPrimary}>Send Message</button>
          </form>

          <div className="grid gap-5">
            {info.map(([title, value]) => (
              <div key={title} className={`${glass} flex items-center gap-5`}>
                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-cyan-300">@</div>
                <div>
                  <h3 className="text-sm font-semibold text-neutral-400">{title}</h3>
                  <p className="font-medium text-white">{value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/[0.04] bg-neutral-900/15 py-20">
        <div className={`${shell} max-w-4xl`}>
          <h2 className="mb-8 text-3xl font-bold text-white">Frequently Asked <span className="text-cyan-300">Questions</span></h2>
          <div className="grid gap-4">
            {['Is all the content free?', 'How often do you upload new content?', 'Can I contribute or collaborate?', 'Do you provide certificates?'].map((question) => (
              <details key={question} className={glass}>
                <summary className="cursor-pointer list-none text-lg font-semibold text-white">{question}</summary>
                <p className="mt-4 text-neutral-400">Yes. The platform is designed to stay practical, open and helpful for learners.</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
