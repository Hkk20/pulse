import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Phone, Mail, MoreHorizontal, Clock } from 'lucide-react';

const roleColors = {
  cook: 'bg-accent/15 text-accent border-accent/30',
  cashier: 'bg-primary/15 text-primary border-primary/30',
  rider: 'bg-success/15 text-success border-success/30',
  waitress: 'bg-chart-4/15 text-chart-4 border-chart-4/30',
  manager: 'bg-chart-5/15 text-chart-5 border-chart-5/30',
  cleaner: 'bg-warning/15 text-warning border-warning/30',
};

export default function StaffCard({ member }) {
  const colorClass = roleColors[member.role?.toLowerCase()] || roleColors.cook;

  return (
    <div className="bg-card rounded-2xl border border-border p-6 hover:shadow-xl hover:border-primary/25 transition-all duration-300 group">
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-3">
          <div className="w-[60px] h-[60px] rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center text-2xl group-hover:scale-105 transition-transform">
            {member.avatar}
          </div>
          <div>
            <h4 className="text-lg font-bold text-foreground">{member.name}</h4>
            <Badge variant="outline" className={`text-xs mt-2 px-3 py-1 rounded-xl ${colorClass}`}>
              {member.role}
            </Badge>
          </div>
        </div>
        <button className="p-1.5 rounded-lg hover:bg-muted opacity-0 group-hover:opacity-100 transition-all">
          <MoreHorizontal className="w-4 h-4 text-muted-foreground" />
        </button>
      </div>

      <div className="mt-5 space-y-3">
        <div className="flex items-center gap-3 text-base text-muted-foreground">
          <Phone className="w-4 h-4" />
          <span>{member.phone}</span>
        </div>
        <div className="flex items-center gap-3 text-base text-muted-foreground">
          <Mail className="w-4 h-4" />
          <span className="truncate">{member.email}</span>
        </div>
      </div>

      <div className="mt-6 pt-5 border-t border-border flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Clock className="w-4 h-4 text-muted-foreground" />
          <span className="text-base text-muted-foreground">{member.hours}h this week</span>
        </div>
        <div className="flex items-center gap-2">
          <span className={`w-2 h-2 rounded-full ${member.status === 'active' ? 'bg-success' : 'bg-muted-foreground'}`} />
          <span className="text-base font-medium capitalize text-muted-foreground">{member.status}</span>
        </div>
      </div>
    </div>
  );
}
