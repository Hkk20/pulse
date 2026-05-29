import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import TopBar from './TopBar';
import { useLocation } from 'react-router-dom';

const pageMeta = {
  '/': { title: 'Dashboard', subtitle: 'Your business at a glance' },
  '/staff': { title: 'Staff Management', subtitle: 'Manage your team' },
  '/payroll': { title: 'Payroll', subtitle: 'Salaries & payments' },
  '/operations': { title: 'Operations', subtitle: 'Orders & inventory' },
  '/settings': { title: 'Settings', subtitle: 'App configuration' },
};

export default function AppLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();
  const meta = pageMeta[location.pathname] || { title: 'Pulse', subtitle: '' };

  return (
    <div className="flex h-screen overflow-hidden bg-background">
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      <div className="flex-1 flex flex-col overflow-hidden">
        <TopBar
          onMenuClick={() => setSidebarOpen(true)}
          title={meta.title}
          subtitle={meta.subtitle}
        />
        <main className="flex-1 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
}