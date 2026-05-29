import React from 'react';
import { UserPlus, Wallet, ShoppingCart, AlertCircle, CheckCircle2 } from 'lucide-react';

const activities = [
  { id: 1, icon: Wallet, color: 'bg-primary/15 text-primary', title: 'Payroll processed', desc: '₦485,000 paid to 12 staff', time: '2 min ago' },
  { id: 2, icon: ShoppingCart, color: 'bg-accent/15 text-accent', title: 'New order #1024', desc: 'Table 7 — 3 items', time: '15 min ago' },
  { id: 3, icon: UserPlus, color: 'bg-success/15 text-success', title: 'Staff added', desc: 'Amara O. joined as Cook', time: '1 hr ago' },
  { id: 4, icon: CheckCircle2, color: 'bg-chart-5/15 text-chart-5', title: 'Order delivered', desc: 'Order #1022 completed', time: '2 hrs ago' },
  { id: 5, icon: AlertCircle, color: 'bg-warning/15 text-warning', title: 'Low inventory', desc: 'Rice stock below 10kg', time: '3 hrs ago' },
];

export default function RecentActivity() {
  return (
    <div className="bg-card rounded-2xl border border-border p-5 lg:p-6">
      <div className="flex items-center justify-between mb-5">
        <h3 className="text-lg font-heading font-bold text-foreground">Recent Activity</h3>
        <button className="text-xs font-medium text-primary hover:underline">View all</button>
      </div>
      <div className="space-y-4">
        {activities.map((a, i) => (
          <div
            key={a.id}
            className="flex items-start gap-3 animate-slide-up"
            style={{ animationDelay: `${i * 60}ms`, animationFillMode: 'backwards' }}
          >
            <div className={`p-2 rounded-xl ${a.color} shrink-0`}>
              <a.icon className="w-4 h-4" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold text-foreground">{a.title}</p>
              <p className="text-xs text-muted-foreground mt-0.5 truncate">{a.desc}</p>
            </div>
            <span className="text-[11px] text-muted-foreground whitespace-nowrap">{a.time}</span>
          </div>
        ))}
      </div>
    </div>
  );
}