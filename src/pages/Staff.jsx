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
    <div className="space-y-9">
      <div className="flex flex-col gap-7 xl:flex-row xl:items-center xl:justify-between">
        <div className="flex flex-1 flex-col gap-6 md:flex-row md:items-center">
          <div className="flex h-[50px] w-full items-center gap-3 rounded-2xl bg-muted px-5 md:max-w-[360px]">
            <Search className="h-5 w-5 text-muted-foreground" />
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search staff..."
              className="w-full bg-transparent text-lg outline-none placeholder:text-muted-foreground/70"
            />
          </div>
          <button className="flex h-[48px] w-[48px] items-center justify-center rounded-2xl bg-muted text-muted-foreground">
            <Filter className="h-5 w-5" />
          </button>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex h-[50px] items-center rounded-2xl bg-muted p-1">
            <button className="flex h-10 w-10 items-center justify-center rounded-xl bg-card shadow-sm">
              <Grid3X3 className="h-5 w-5" />
            </button>
            <button className="flex h-10 w-10 items-center justify-center rounded-xl text-muted-foreground">
              <List className="h-5 w-5" />
            </button>
          </div>
          <Button onClick={() => setOpen(true)} className="h-[46px] gap-2 rounded-2xl px-6 text-lg shadow-lg shadow-primary/25">
            <Plus className="h-5 w-5" />
            Add Staff
          </Button>
        </div>
      </div>

      <div className="flex flex-wrap gap-4">
        <span className="rounded-2xl bg-primary/10 px-5 py-2.5 text-base font-bold text-primary">6 Total</span>
        <span className="rounded-2xl bg-success/10 px-5 py-2.5 text-base font-bold text-success">5 Active</span>
        <span className="rounded-2xl bg-muted px-5 py-2.5 text-base font-bold text-muted-foreground">1 Off Duty</span>
      </div>

      <div className="grid gap-5 lg:grid-cols-2 xl:grid-cols-3">
        {filteredStaff.map((member) => (
          <StaffCard key={member.email} member={member} />
        ))}
      </div>

      <AddStaffModal open={open} onOpenChange={setOpen} />
    </div>
  );
}
