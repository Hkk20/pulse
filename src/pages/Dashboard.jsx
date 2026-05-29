import { ShoppingBag, TrendingUp, Users } from 'lucide-react';
import StatCard from '@/components/dashboard/Statcard';
import RevenueChart from '@/components/dashboard/Revenuechart';
import RecentActivity from '@/components/dashboard/Recentactivity';
import TopStaff from '@/components/dashboard/Topstaff';

export default function Dashboard() {
  return (
    <div className="space-y-8">
      <div className="grid gap-5 md:grid-cols-3">
        <StatCard label="Revenue" value="₦1.24M" change="+14%" changeType="up" icon={ShoppingBag} gradient="purple" />
        <StatCard label="Orders" value="362" change="+6%" changeType="up" icon={TrendingUp} gradient="orange" />
        <StatCard label="Team Cost" value="₦384K" change="-3%" changeType="down" icon={Users} gradient="teal" />
      </div>

      <div className="grid gap-8 xl:grid-cols-[1.35fr_0.9fr]">
        <RevenueChart />
        <RecentActivity />
      </div>

      <div className="grid gap-8 xl:grid-cols-2">
        <TopStaff />
        <section className="rounded-2xl bg-primary p-10 text-primary-foreground">
          <h2 className="text-2xl font-bold">Quick Actions</h2>
          <p className="mt-3 text-lg font-semibold text-white/80">Common tasks at your fingertips</p>
          <div className="mt-[215px] grid gap-4 sm:grid-cols-2">
            {['Run Payroll', 'Add Staff', 'New Order', 'View Reports'].map((action) => (
              <button key={action} className="rounded-2xl bg-white/20 px-5 py-4 text-left text-lg font-bold text-white transition hover:bg-white/25">
                {action}
              </button>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
