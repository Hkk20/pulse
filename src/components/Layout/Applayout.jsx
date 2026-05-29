import { useState } from 'react';
import Sidebar from './Sidebar';
import TopBar from './Topbar';

export default function AppLayout({ children, title, subtitle }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className='min-h-screen bg-background text-foreground'>
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      <div className='lg:pl-[360px]'>
        <TopBar onMenuClick={() => setSidebarOpen(true)} title={title} subtitle={subtitle} />
        <main className='px-4 py-10 sm:px-6 lg:px-10'>{children}</main>
      </div>
    </div>
  );
}
