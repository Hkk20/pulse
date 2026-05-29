import React from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';

export default function StatCard({ label, value, change, changeType, icon: Icon, gradient }) {
  const isPositive = changeType === 'up';
  const gradients = {
    purple: 'from-primary/10 to-primary/5 border-primary/20',
    orange: 'from-accent/10 to-accent/5 border-accent/20',
    teal: 'from-success/10 to-success/5 border-success/20',
    pink: 'from-chart-4/10 to-chart-4/5 border-chart-4/20',
  };
  const iconBgs = {
    purple: 'bg-primary/15 text-primary',
    orange: 'bg-accent/15 text-accent',
    teal: 'bg-success/15 text-success',
    pink: 'bg-chart-4/15 text-chart-4',
  };

  return (
    <div className={`
      relative overflow-hidden rounded-2xl border p-5 lg:p-6
      bg-gradient-to-br ${gradients[gradient] || gradients.purple}
      hover:shadow-lg transition-all duration-300 group
    `}>
      <div className="flex items-start justify-between">
        <div className="space-y-3">
          <p className="text-sm font-medium text-muted-foreground">{label}</p>
          <p className="text-2xl lg:text-3xl font-heading font-bold text-foreground">{value}</p>
          {change && (
            <div className={`flex items-center gap-1.5 text-xs font-semibold ${isPositive ? 'text-success' : 'text-destructive'}`}>
              {isPositive ? <TrendingUp className="w-3.5 h-3.5" /> : <TrendingDown className="w-3.5 h-3.5" />}
              <span>{change}</span>
              <span className="text-muted-foreground font-normal">vs last week</span>
            </div>
          )}
        </div>
        <div className={`p-3 rounded-xl ${iconBgs[gradient] || iconBgs.purple} group-hover:scale-110 transition-transform duration-300`}>
          <Icon className="w-5 h-5" />
        </div>
      </div>

      {/* Decorative element */}
      <div className="absolute -right-4 -bottom-4 w-24 h-24 rounded-full bg-current opacity-[0.03]" />
    </div>
  );
}