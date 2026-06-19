import PageHeader from '../components/ui/PageHeader.jsx';
import { glass, shell } from '../components/ui/classes.js';

function DashboardCard({ title, value }) {
  return (
    <div className={`${glass} min-h-32`}>
      <span className="text-sm text-neutral-400">{title}</span>
      <strong className="mt-6 block text-3xl text-white">{value}</strong>
    </div>
  );
}

export default function UserDashboard() {
  return (
    <>
      <PageHeader title="User" accent="Dashboard" subtitle="Track learning activity, saved material and progress." />
      <section className="py-10">
        <div className={`${shell} grid gap-6`}>
          <div className="grid gap-5 md:grid-cols-4">
            <DashboardCard title="Continue Learning" value="2 paths" />
            <DashboardCard title="Saved Notes" value="8 items" />
            <DashboardCard title="Progress" value="36%" />
            <DashboardCard title="Certificates" value="Soon" />
          </div>
          <div className={glass}>
            <h3 className="mb-5 text-xl font-bold text-white">Learning Plan</h3>
            <ul className="grid gap-3">
              {['Finish Java OOP notes', 'Watch React Components tutorial', 'Start Backend Developer Roadmap'].map((item) => (
                <li key={item} className="rounded-lg border border-white/10 bg-white/[0.03] px-4 py-3 text-neutral-300">{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
