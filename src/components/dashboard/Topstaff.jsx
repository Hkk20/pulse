import React from 'react';
import { Star } from 'lucide-react';

const staff = [
  { name: 'Emeka A.', role: 'Head Chef', rating: 4.9, hours: 48, avatar: '👨‍🍳' },
  { name: 'Fatima B.', role: 'Cashier', rating: 4.8, hours: 42, avatar: '💁‍♀️' },
  { name: 'David O.', role: 'Rider', rating: 4.7, hours: 45, avatar: '🏍️' },
  { name: 'Grace N.', role: 'Waitress', rating: 4.6, hours: 40, avatar: '👩‍🍳' },
];

export default function TopStaff() {
  return (
    <div className="bg-card rounded-2xl border border-border p-5 lg:p-6">
      <div className="flex items-center justify-between mb-5">
        <h3 className="text-lg font-heading font-bold text-foreground">Top Performers</h3>
        <button className="text-xs font-medium text-primary hover:underline">View all</button>
      </div>
      <div className="space-y-3">
        {staff.map((s, i) => (
          <div
            key={s.name}
            className="flex items-center gap-3 p-3 rounded-xl hover:bg-muted/50 transition-colors cursor-pointer group"
          >
            <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center text-lg group-hover:scale-110 transition-transform">
              {s.avatar}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold text-foreground">{s.name}</p>
              <p className="text-xs text-muted-foreground">{s.role}</p>
            </div>
            <div className="text-right">
              <div className="flex items-center gap-1 justify-end">
                <Star className="w-3 h-3 text-warning fill-warning" />
                <span className="text-xs font-bold text-foreground">{s.rating}</span>
              </div>
              <p className="text-[11px] text-muted-foreground">{s.hours}h/wk</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}