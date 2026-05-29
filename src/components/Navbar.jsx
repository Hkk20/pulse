import { NavLink } from "react-router-dom";

const links = [
  { to: "/", label: "Home" },
  { to: "/staff", label: "Staff" },
  { to: "/payroll", label: "Payroll" },
  { to: "/dashboard", label: "Dashboard" },
  { to: "/operations", label: "Operations" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-30 border-b border-slate-800/80 bg-slate-950/95 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <NavLink to="/" className="flex items-center gap-3 text-lg font-extrabold tracking-[0.22em] text-cyan-400">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-cyan-500/15 text-cyan-300 ring-1 ring-cyan-400/20">P</span>
          Pulse
        </NavLink>
        <nav className="flex flex-wrap items-center gap-3 md:gap-6">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `rounded-full px-3 py-2 text-sm font-semibold transition ${
                  isActive ? "bg-cyan-500/15 text-cyan-200 shadow-sm shadow-cyan-500/10" : "text-slate-300 hover:text-white"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}
