import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Mon', revenue: 4200, expenses: 2400 },
  { name: 'Tue', revenue: 3800, expenses: 1398 },
  { name: 'Wed', revenue: 5200, expenses: 2800 },
  { name: 'Thu', revenue: 4780, expenses: 3908 },
  { name: 'Fri', revenue: 6890, expenses: 4800 },
  { name: 'Sat', revenue: 8390, expenses: 3800 },
  { name: 'Sun', revenue: 5490, expenses: 2300 },
];

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-card border border-border rounded-xl p-3 shadow-xl">
        <p className="text-xs font-semibold text-foreground mb-2">{label}</p>
        {payload.map((entry, i) => (
          <div key={i} className="flex items-center gap-2 text-xs">
            <div className="w-2 h-2 rounded-full" style={{ backgroundColor: entry.color }} />
            <span className="text-muted-foreground capitalize">{entry.name}:</span>
            <span className="font-semibold text-foreground">₦{entry.value.toLocaleString()}</span>
          </div>
        ))}
      </div>
    );
  }
  return null;
};

export default function RevenueChart() {
  return (
    <div className="bg-card rounded-2xl border border-border p-5 lg:p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-heading font-bold text-foreground">Revenue Overview</h3>
          <p className="text-sm text-muted-foreground mt-0.5">Weekly performance</p>
        </div>
        <div className="flex gap-4 text-xs">
          <span className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-primary" />
            Revenue
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-accent" />
            Expenses
          </span>
        </div>
      </div>
      <div className="h-64 lg:h-72">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ top: 5, right: 5, left: -20, bottom: 0 }}>
            <defs>
              <linearGradient id="revGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="hsl(263, 70%, 58%)" stopOpacity={0.3} />
                <stop offset="100%" stopColor="hsl(263, 70%, 58%)" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="expGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="hsl(24, 95%, 53%)" stopOpacity={0.2} />
                <stop offset="100%" stopColor="hsl(24, 95%, 53%)" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(250, 15%, 90%)" vertical={false} />
            <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: 'hsl(250, 10%, 45%)' }} />
            <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: 'hsl(250, 10%, 45%)' }} />
            <Tooltip content={<CustomTooltip />} />
            <Area type="monotone" dataKey="revenue" stroke="hsl(263, 70%, 58%)" fill="url(#revGrad)" strokeWidth={2.5} dot={false} />
            <Area type="monotone" dataKey="expenses" stroke="hsl(24, 95%, 53%)" fill="url(#expGrad)" strokeWidth={2} dot={false} />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}