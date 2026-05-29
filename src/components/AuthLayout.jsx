import { Activity } from 'lucide-react';

export default function AuthLayout({ children, title, subtitle }) {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="mb-8 flex flex-col items-center text-center">
          <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center shadow-lg shadow-primary/25">
            <Activity className="w-6 h-6 text-primary-foreground" />
          </div>
          <h1 className="mt-4 text-2xl font-heading font-bold text-foreground">{title || 'Pulse'}</h1>
          {subtitle && <p className="mt-2 text-sm text-muted-foreground">{subtitle}</p>}
        </div>
        <div className="rounded-2xl border border-border bg-card p-6 shadow">
          {children}
        </div>
      </div>
    </div>
  );
}
