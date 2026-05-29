import { ShoppingBag, TrendingUp, Users } from 'lucide-react';
import StatCard from '@/components/dashboard/Statcard';
import RevenueChart from '@/components/dashboard/Revenuechart';
import RecentActivity from '@/components/dashboard/Recentactivity';
import TopStaff from '@/components/dashboard/Topstaff';

export default function Dashboard() {
  return (
    <div className="p-4 lg:p-8 space-y-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        <StatCard label="Today's Revenue" value="₦248,500" change="+12.5%" changeType="up" icon={ShoppingBag} gradient="purple" />
        <StatCard label="Total Staff" value="24" change="+2" changeType="up" icon={Users} gradient="teal" />
        <StatCard label="Active Orders" value="18" change="+5.2%" changeType="up" icon={ShoppingBag} gradient="orange" />
        <StatCard label="Net Profit" value="₦89,200" change="-2.1%" changeType="down" icon={TrendingUp} gradient="pink" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-6">
        <div className="lg:col-span-2">
          <RevenueChart />
        </div>
        <RecentActivity />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
        <TopStaff />
        <section className="bg-gradient-to-br from-primary to-primary/80 rounded-2xl p-6 lg:p-8 text-primary-foreground flex flex-col justify-between min-h-[240px]">
          <div>
            <h2 className="text-lg font-heading font-bold">Quick Actions</h2>
            <p className="text-sm opacity-80 mt-1">Common tasks at your fingertips</p>
          </div>
          <div className="grid grid-cols-2 gap-3 mt-6">
            {['Run Payroll', 'Add Staff', 'New Order', 'View Reports'].map((action) => (
              <button key={action} className="py-3 px-4 rounded-xl bg-white/15 hover:bg-white/25 text-sm font-medium transition-colors backdrop-blur-sm text-left">
                {action}
              </button>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
