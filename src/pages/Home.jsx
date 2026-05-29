import { Link } from "react-router-dom";

const features = [
  {
    title: "Staff Management",
    description: "Create profiles, save bank details, assign roles, and track attendance in one secure system.",
    accent: "bg-cyan-500/10 text-cyan-200",
  },
  {
    title: "One-Click Payroll",
    description: "Auto-calculate salaries, include commissions and bonuses, then pay everyone in a single action.",
    accent: "bg-amber-500/10 text-amber-200",
  },
  {
    title: "Business Dashboard",
    description: "See daily sales, expenses, profit and staff cost at a glance from a clean control center.",
    accent: "bg-violet-500/10 text-violet-200",
  },
  {
    title: "Future Operations",
    description: "Prepare for orders, inventory, dispatch slips and task coordination as the business grows.",
    accent: "bg-sky-500/10 text-sky-200",
  },
];

export default function Home() {
  return (
    <div className="space-y-16">
      <section className="rounded-[2rem] border border-slate-800/80 bg-slate-950/90 p-8 shadow-[0_30px_80px_rgba(0,0,0,0.24)] sm:p-12">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/15 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-100">
              The operating system for small business
            </div>
            <h1 className="max-w-3xl text-4xl font-extrabold leading-tight text-white sm:text-5xl">
              Run staff, payroll, sales, and operations from one bright control screen.
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-slate-300">
              Pulse turns messy manual work into an organized digital system. Manage workers, pay your team instantly, track sales, and keep operations aligned from a single dashboard.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <Link
                to="/staff"
                className="inline-flex items-center justify-center rounded-full bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
              >
                Start free trial
              </Link>
              <Link
                to="/dashboard"
                className="inline-flex items-center justify-center rounded-full border border-slate-700 bg-slate-900/80 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:border-slate-600"
              >
                Explore features
              </Link>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              <div className="rounded-3xl border border-slate-800/90 bg-slate-900/80 p-5">
                <p className="text-2xl font-semibold text-white">10× faster</p>
                <p className="mt-2 text-sm text-slate-400">Payroll runs in seconds, not hours.</p>
              </div>
              <div className="rounded-3xl border border-slate-800/90 bg-slate-900/80 p-5">
                <p className="text-2xl font-semibold text-white">All in one</p>
                <p className="mt-2 text-sm text-slate-400">Staff, finance, sales and ops in a single view.</p>
              </div>
              <div className="rounded-3xl border border-slate-800/90 bg-slate-900/80 p-5">
                <p className="text-2xl font-semibold text-white">Built for SMBs</p>
                <p className="mt-2 text-sm text-slate-400">Restaurants, shops, salons, hotels and more.</p>
              </div>
            </div>
          </div>
          <div className="space-y-6 rounded-[2rem] border border-slate-800/90 bg-gradient-to-br from-slate-900/80 via-slate-950/90 to-slate-900/70 p-6 shadow-[0_24px_60px_rgba(0,0,0,0.32)] sm:p-8">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-sm uppercase tracking-[0.24em] text-cyan-400">Live overview</p>
                <p className="text-xl font-semibold text-white">Pulse Control</p>
              </div>
              <span className="rounded-full bg-slate-800/80 px-3 py-1 text-sm text-slate-300">Active</span>
            </div>
            <div className="rounded-3xl bg-gradient-to-br from-cyan-500/15 to-violet-500/10 p-8 text-center text-slate-50">
              <p className="text-sm uppercase tracking-[0.24em] text-slate-300">Business snapshot</p>
              <p className="mt-4 text-3xl font-bold">$24.8K</p>
              <p className="mt-2 text-slate-400">Today&apos;s sales • 18% growth</p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl border border-slate-800/90 bg-slate-950/80 p-5">
                <p className="text-sm text-slate-400">Sales</p>
                <p className="mt-3 font-semibold text-white">Auto calculate, commissions, bonuses</p>
              </div>
              <div className="rounded-3xl border border-slate-800/90 bg-slate-950/80 p-5">
                <p className="text-sm text-slate-400">Staff</p>
                <p className="mt-3 font-semibold text-white">Attendance, roles and bank details</p>
              </div>
              <div className="rounded-3xl border border-slate-800/90 bg-slate-950/80 p-5">
                <p className="text-sm text-slate-400">Payroll</p>
                <p className="mt-3 font-semibold text-white">Send all salaries at once</p>
              </div>
              <div className="rounded-3xl border border-slate-800/90 bg-slate-950/80 p-5">
                <p className="text-sm text-slate-400">Orders</p>
                <p className="mt-3 font-semibold text-white">Pending, dispatched and kitchen tickets</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((feature) => (
          <div key={feature.title} className={`rounded-[2rem] border border-slate-800/90 p-6 shadow-[0_24px_50px_rgba(0,0,0,0.2)] ${feature.accent}`}>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-200/80">{feature.title}</p>
            <p className="mt-4 text-base leading-7 text-slate-100">{feature.description}</p>
          </div>
        ))}
      </section>

      <section className="rounded-[2rem] border border-slate-800/90 bg-gradient-to-r from-cyan-500/10 via-violet-500/10 to-slate-900/60 p-8 text-slate-100 shadow-[0_30px_60px_rgba(15,23,42,0.45)]">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.24em] text-cyan-300/75">Pulse is not just a payment app.</p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight text-white sm:text-4xl">It is the operating system for running a business.</h2>
            <p className="mt-4 text-slate-300 sm:text-lg">Turn messy manual processes into an organized digital system for restaurants, shops, salons, hotels, pharmacies and growing businesses.</p>
          </div>
          <Link
            to="/staff"
            className="inline-flex h-fit rounded-full bg-white px-7 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-500/20 transition hover:bg-slate-100"
          >
            See Pulse in action
          </Link>
        </div>
      </section>
    </div>
  );
}
