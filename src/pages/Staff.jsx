import { useMemo, useState } from 'react';
import { Filter, Grid3X3, List, Plus, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import StaffCard from '@/components/Staff/Staffcard';
import AddStaffModal from '@/components/Staff/Addstaffmodel';

const staffMembers = [
  { name: 'Emeka Adebayo', role: 'Cook', email: 'emeka@pulse.com', phone: '+234 801 234 5678', avatar: '👨‍🍳', status: 'active', hours: 48 },
  { name: 'Fatima Bello', role: 'Cashier', email: 'fatima@pulse.com', phone: '+234 802 345 6789', avatar: '💁‍♀️', status: 'active', hours: 42 },
  { name: 'David Okoye', role: 'Rider', email: 'david@pulse.com', phone: '+234 803 456 7890', avatar: '🏍️', status: 'active', hours: 45 },
  { name: 'Grace Nnamdi', role: 'Waitress', email: 'grace@pulse.com', phone: '+234 804 567 8901', avatar: '👩‍🍳', status: 'active', hours: 40 },
  { name: 'Kunle Adeola', role: 'Manager', email: 'kunle@pulse.com', phone: '+234 805 678 9012', avatar: '👔', status: 'active', hours: 50 },
  { name: 'Amina Yusuf', role: 'Cleaner', email: 'amina@pulse.com', phone: '+234 806 789 0123', avatar: '🧹', status: 'off', hours: 35 },
];

export default function Staff() {
  const [query, setQuery] = useState('');
  const [open, setOpen] = useState(false);

  const filteredStaff = useMemo(() => {
    const needle = query.trim().toLowerCase();
    if (!needle) return staffMembers;
    return staffMembers.filter((member) =>
      [member.name, member.role, member.email, member.phone].some((field) => field.toLowerCase().includes(needle))
    );
  }, [query]);

  return (
    <div className="p-4 lg:p-8 max-w-7xl mx-auto space-y-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex items-center gap-3 w-full sm:w-auto">
          <div className="flex items-center gap-2 bg-muted rounded-xl px-4 py-2.5 flex-1 sm:w-72">
            <Search className="h-4 w-4 text-muted-foreground" />
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search staff..."
              className="w-full bg-transparent text-sm outline-none"
            />
          </div>
          <button className="p-2.5 rounded-xl bg-muted hover:bg-muted/80 transition-colors">
            <Filter className="h-4 w-4 text-muted-foreground" />
          </button>
        </div>

        <div className="flex items-center gap-2">
          <div className="flex bg-muted rounded-xl p-1">
            <button className="p-2 rounded-lg bg-card shadow-sm transition-colors">
              <Grid3X3 className="h-4 w-4" />
            </button>
            <button className="p-2 rounded-lg transition-colors">
              <List className="h-4 w-4" />
            </button>
          </div>
          <Button onClick={() => setOpen(true)} className="bg-primary hover:bg-primary/90 rounded-xl gap-2">
            <Plus className="h-4 w-4" />
            <span className="hidden sm:inline">Add Staff</span>
          </Button>
        </div>
      </div>

      <div className="flex gap-3 overflow-x-auto pb-1">
        <span className="px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap bg-primary/10 text-primary">6 Total</span>
        <span className="px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap bg-success/10 text-success">5 Active</span>
        <span className="px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap bg-muted text-muted-foreground">1 Off Duty</span>
      </div>

      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {filteredStaff.map((member, index) => (
          <div key={member.email} className="animate-slide-up" style={{ animationDelay: `${index * 60}ms`, animationFillMode: 'backwards' }}>
            <StaffCard member={member} />
          </div>
        ))}
      </div>

      <AddStaffModal open={open} onOpenChange={setOpen} />
    </div>
  );
}
