import { Star } from 'lucide-react';

const staff = [
  { name: 'Emeka A.', role: 'Head Chef', rating: 4.9, hours: 48, avatar: '👨‍🍳' },
  { name: 'Fatima B.', role: 'Cashier', rating: 4.8, hours: 42, avatar: '💁‍♀️' },
  { name: 'David O.', role: 'Rider', rating: 4.7, hours: 45, avatar: '🏍️' },
  { name: 'Grace N.', role: 'Waitress', rating: 4.6, hours: 40, avatar: '👩‍🍳' },
];

export default function TopStaff() {
  return (
    <div className="rounded-2xl border border-border bg-card p-7">
      <div className="mb-8 flex items-center justify-between">
        <h3 className="text-2xl font-bold text-foreground">Top Performers</h3>
        <button className="text-base font-medium text-primary hover:underline">View all</button>
      </div>
      <div className="space-y-8">
        {staff.map((member) => (
          <div key={member.name} className="flex items-center gap-4">
            <div className="flex h-[50px] w-[50px] items-center justify-center rounded-2xl bg-muted text-xl">{member.avatar}</div>
            <div className="min-w-0 flex-1">
              <p className="text-lg font-bold text-foreground">{member.name}</p>
              <p className="text-base text-muted-foreground">{member.role}</p>
            </div>
            <div className="text-right">
              <div className="flex items-center justify-end gap-1">
                <Star className="h-4 w-4 fill-warning text-warning" />
                <span className="text-base font-bold text-foreground">{member.rating}</span>
              </div>
              <p className="text-sm text-muted-foreground">{member.hours}h/wk</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
