import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Plus, Search, Filter, Grid3X3, List } from 'lucide-react';
import StaffCard from '@/components/staff/StaffCard';
import AddStaffModal from '@/components/staff/AddStaffModal';

const mockStaff = [
  { id: 1, name: 'Emeka Adebayo', role: 'Cook', phone: '+234 801 234 5678', email: 'emeka@pulse.com', hours: 48, status: 'active', avatar: '👨‍🍳' },
  { id: 2, name: 'Fatima Bello', role: 'Cashier', phone: '+234 802 345 6789', email: 'fatima@pulse.com', hours: 42, status: 'active', avatar: '💁‍♀️' },
  { id: 3, name: 'David Okoye', role: 'Rider', phone: '+234 803 456 7890', email: 'david@pulse.com', hours: 45, status: 'active', avatar: '🏍️' },
  { id: 4, name: 'Grace Nnamdi', role: 'Waitress', phone: '+234 804 567 8901', email: 'grace@pulse.com', hours: 40, status: 'active', avatar: '👩‍🍳' },
  { id: 5, name: 'Kunle Adeola', role: 'Manager', phone: '+234 805 678 9012', email: 'kunle@pulse.com', hours: 50, status: 'active', avatar: '👔' },
  { id: 6, name: 'Amina Yusuf', role: 'Cleaner', phone: '+234 806 789 0123', email: 'amina@pulse.com', hours: 35, status: 'off', avatar: '🧹' },
];

export default function Staff() {
  const [showAdd, setShowAdd] = useState(false);
  const [search, setSearch] = useState('');
  const [view, setView] = useState('grid');

  const filtered = mockStaff.filter(s =>
    s.name.toLowerCase().includes(search.toLowerCase()) ||
    s.role.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-4 lg:p-8 max-w-7xl mx-auto space-y-6">
      {/* Controls */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex items-center gap-3 w-full sm:w-auto">
          <div className="flex items-center gap-2 bg-muted rounded-xl px-4 py-2.5 flex-1 sm:w-72">
            <Search className="w-4 h-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search staff..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="bg-transparent text-sm outline-none w-full"
            />
          </div>
          <button className="p-2.5 rounded-xl bg-muted hover:bg-muted/80 transition-colors">
            <Filter className="w-4 h-4 text-muted-foreground" />
          </button>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex bg-muted rounded-xl p-1">
            <button
              onClick={() => setView('grid')}
              className={`p-2 rounded-lg transition-colors ${view === 'grid' ? 'bg-card shadow-sm' : ''}`}
            >
              <Grid3X3 className="w-4 h-4" />
            </button>
            <button
              onClick={() => setView('list')}
              className={`p-2 rounded-lg transition-colors ${view === 'list' ? 'bg-card shadow-sm' : ''}`}
            >
              <List className="w-4 h-4" />
            </button>
          </div>
          <Button onClick={() => setShowAdd(true)} className="bg-primary hover:bg-primary/90 rounded-xl gap-2">
            <Plus className="w-4 h-4" />
            <span className="hidden sm:inline">Add Staff</span>
          </Button>
        </div>
      </div>

      {/* Summary Bar */}
      <div className="flex gap-3 overflow-x-auto pb-1">
        {[
          { label: 'Total', count: mockStaff.length, color: 'bg-primary/10 text-primary' },
          { label: 'Active', count: mockStaff.filter(s => s.status === 'active').length, color: 'bg-success/10 text-success' },
          { label: 'Off Duty', count: mockStaff.filter(s => s.status === 'off').length, color: 'bg-muted text-muted-foreground' },
        ].map(s => (
          <div key={s.label} className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap ${s.color}`}>
            {s.count} {s.label}
          </div>
        ))}
      </div>

      {/* Staff Grid */}
      <div className={`grid gap-4 ${view === 'grid' ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1'}`}>
        {filtered.map((member, i) => (
          <div
            key={member.id}
            className="animate-slide-up"
            style={{ animationDelay: `${i * 60}ms`, animationFillMode: 'backwards' }}
          >
            <StaffCard member={member} />
          </div>
        ))}
      </div>

      <AddStaffModal open={showAdd} onOpenChange={setShowAdd} />
    </div>
  );
}