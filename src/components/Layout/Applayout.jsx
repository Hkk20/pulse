import { useState } from 'react';
import Sidebar from './Sidebar';
import TopBar from './Topbar';

export default function AppLayout({ children, title, subtitle }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className='flex h-screen overflow-hidden bg-background'>
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      <div className='flex flex-1 flex-col overflow-hidden'>
        <TopBar onMenuClick={() => setSidebarOpen(true)} title={title} subtitle={subtitle} />
        <main className='flex-1 overflow-y-auto'>{children}</main>
      </div>
    </div>
  );
}
