import { Routes, Route, useLocation } from "react-router-dom";
import ScrollToTop from "./api/scrolltotop";
import AppLayout from "./components/Layout/Applayout";
import Home from "./pages/Home";
import Staff from "./pages/Staff";
import Payroll from "./pages/Payroll";
import Dashboard from "./pages/Dashboard";
import Operations from "./pages/Operations";
import Settings from "./pages/Settings";

const pageMeta = {
  '/dashboard': { title: 'Dashboard', subtitle: 'Business overview' },
  '/staff': { title: 'Staff Management', subtitle: 'Manage your team' },
  '/payroll': { title: 'Payroll', subtitle: 'Salaries & payments' },
  '/operations': { title: 'Operations', subtitle: 'Orders & inventory' },
  '/settings': { title: 'Settings', subtitle: 'App configuration' },
  '/': { title: 'Dashboard', subtitle: 'Business overview' },
};

export default function App() {
  const location = useLocation();
  const meta = pageMeta[location.pathname] ?? pageMeta['/dashboard'];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <ScrollToTop />
      <AppLayout title={meta.title} subtitle={meta.subtitle}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/staff" element={<Staff />} />
          <Route path="/payroll" element={<Payroll />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/operations" element={<Operations />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </AppLayout>
    </div>
  );
}
