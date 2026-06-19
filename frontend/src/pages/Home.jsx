import { useEffect, useState } from 'react';
import CategoryCard from '../components/cards/CategoryCard.jsx';
import StatCard from '../components/cards/StatCard.jsx';
import ContentGrid from '../components/ui/ContentGrid.jsx';
import Link from '../components/ui/Link.jsx';
import SectionHeader from '../components/ui/SectionHeader.jsx';
import { buttonPrimary, buttonSecondary, glass, gradientText, shell } from '../components/ui/classes.js';
import { categories } from '../data/content.js';
import { useApiCollection } from '../hooks/useApiCollection.js';

function TypingText() {
  const words = ['Java Developer', 'Web Developer', 'Software Engineer', 'DevOps Engineer', 'Full Stack Developer'];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setIndex((value) => (value + 1) % words.length), 1600);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="mb-5 h-10 text-2xl font-semibold text-white md:text-3xl">
      Learn <span className="text-cyan-300">{words[index]}</span><span className="ml-1 animate-pulse text-cyan-300">|</span>
    </div>
  );
}

function Preview({ title, accent, type, shaded }) {
  const { items } = useApiCollection(type);
  return (
    <section className={`py-24 ${shaded ? 'bg-neutral-900/30' : ''}`}>
      <div className={shell}>
        <SectionHeader
          title={title}
          accent={accent}
          subtitle={type === 'tutorials' ? 'Dive into trending coding masterclasses and guides.' : 'Download developer-grade notes, sheets, guides and project code.'}
        />
        <ContentGrid type={type} items={items.slice(0, 3)} emptyTitle={`No ${type} Available Yet`} />
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden pt-24">
        <div className="absolute left-[10%] top-[10%] h-96 w-96 rounded-full bg-cyan-400/15 blur-[120px]" />
        <div className="absolute bottom-[10%] right-[10%] h-96 w-96 rounded-full bg-violet-500/15 blur-[120px]" />
        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
          <div className="mb-6 inline-flex rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-cyan-300">
            The Future of Tech Education is Here
          </div>
          <h1 className="mb-6 text-5xl font-extrabold leading-tight tracking-tight text-white md:text-6xl">
            Master Technology<br />
            <span className={gradientText}>From Beginner to Professional</span>
          </h1>
          <TypingText />
          <p className="mx-auto mb-10 max-w-2xl text-lg leading-8 text-neutral-400">
            Master coding, software architecture, system design, databases, DevOps and prepare for technical interviews with modern structured guides.
          </p>
          <div className="mb-14 flex flex-col justify-center gap-4 sm:flex-row">
            <Link href="/tutorials" className={buttonPrimary}>Start Learning -&gt;</Link>
            <Link href="/notes" className={buttonSecondary}>Download Notes</Link>
          </div>
          <div className="grid gap-6 border-t border-white/[0.06] pt-10 sm:grid-cols-3">
            {['500+ Tutorials', '200+ PDF Notes', '10K+ Students Helped'].map((item) => {
              const [value, ...label] = item.split(' ');
              return <StatCard key={item} value={value} label={label.join(' ')} />;
            })}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className={shell}>
          <SectionHeader title="Featured" accent="Categories" subtitle="Explore structured learning modules across core software engineering subjects." />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-5">
            {categories.map((category) => <CategoryCard key={category.id} item={category} />)}
          </div>
        </div>
      </section>

      <section className="border-y border-white/[0.04] bg-neutral-900/50 py-16">
        <div className={`${shell} grid gap-8 md:grid-cols-4`}>
          <StatCard value="500+" label="Tutorials Published" />
          <StatCard value="200+" label="PDFs Available" />
          <StatCard value="10,000+" label="Students Helped" />
          <StatCard value="150+" label="Projects Shared" />
        </div>
      </section>

      <Preview title="Featured" accent="Tutorials" type="tutorials" />
      <Preview title="Latest" accent="PDF Libraries" type="notes" shaded />

      <section className="py-24">
        <div className={shell}>
          <div className={`${glass} mx-auto max-w-3xl text-center`}>
            <h2 className="mb-4 text-3xl font-bold text-white">Stay <span className={gradientText}>Updated</span></h2>
            <p className="mb-6 text-neutral-400">Get the latest tutorials, notes and resources delivered directly to your inbox.</p>
            <form className="mx-auto flex max-w-xl flex-col gap-3 sm:flex-row" onSubmit={(event) => event.preventDefault()}>
              <input className="min-w-0 flex-1 rounded-lg border border-white/10 bg-white/[0.03] px-4 py-3 text-white outline-none focus:border-cyan-300" type="email" placeholder="Enter your email address" required />
              <button className={buttonPrimary}>Subscribe</button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
