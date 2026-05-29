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
    <div className="bg-card rounded-2xl border border-border p-5 hover:shadow-lg hover:border-primary/20 transition-all duration-300 group">
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center text-xl group-hover:scale-110 transition-transform">
            {member.avatar}
          </div>
          <div>
            <h4 className="text-sm font-bold text-foreground">{member.name}</h4>
            <Badge variant="outline" className={`text-[10px] mt-1 px-2 py-0.5 ${colorClass}`}>
              {member.role}
            </Badge>
          </div>
        </div>
        <button className="p-1.5 rounded-lg hover:bg-muted opacity-0 group-hover:opacity-100 transition-all">
          <MoreHorizontal className="w-4 h-4 text-muted-foreground" />
        </button>
      </div>

      <div className="mt-4 space-y-2">
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <Phone className="w-3.5 h-3.5" />
          <span>{member.phone}</span>
        </div>
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <Mail className="w-3.5 h-3.5" />
          <span className="truncate">{member.email}</span>
        </div>
      </div>

      <div className="mt-4 pt-4 border-t border-border flex items-center justify-between">
        <div className="flex items-center gap-1.5">
          <Clock className="w-3.5 h-3.5 text-muted-foreground" />
          <span className="text-xs text-muted-foreground">{member.hours}h this week</span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className={`w-2 h-2 rounded-full ${member.status === 'active' ? 'bg-success' : 'bg-muted-foreground'}`} />
          <span className="text-xs font-medium capitalize text-muted-foreground">{member.status}</span>
        </div>
      </div>
    </div>
  );
}
