import React from 'react';
import { DollarSign, Users, ShoppingCart, TrendingUp } from 'lucide-react';
import StatCard from '@/components/dashboard/StatCard';
import RevenueChart from '@/components/dashboard/RevenueChart';
import RecentActivity from '@/components/dashboard/RecentActivity';
import TopStaff from '@/components/dashboard/TopStaff';

const stats = [
  { label: "Today's Revenue", value: '₦248,500', change: '+12.5%', changeType: 'up', icon: DollarSign, gradient: 'purple' },
  { label: 'Total Staff', value: '24', change: '+2', changeType: 'up', icon: Users, gradient: 'teal' },
  { label: 'Active Orders', value: '18', change: '+5.2%', changeType: 'up', icon: ShoppingCart, gradient: 'orange' },
  { label: 'Net Profit', value: '₦89,200', change: '-2.1%', changeType: 'down', icon: TrendingUp, gradient: 'pink' },
];

export default function Dashboard() {
  return (
    <div className="p-4 lg:p-8 space-y-6 max-w-7xl mx-auto">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        {stats.map((s, i) => (
          <div
            key={s.label}
            className="animate-slide-up"
            style={{ animationDelay: `${i * 80}ms`, animationFillMode: 'backwards' }}
          >
            <StatCard {...s} />
          </div>
        ))}
      </div>

      {/* Chart + Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-6">
        <div className="lg:col-span-2">
          <RevenueChart />
        </div>
        <RecentActivity />
      </div>

      {/* Top staff */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
        <TopStaff />
        {/* Quick Actions */}
        <div className="bg-gradient-to-br from-primary to-primary/80 rounded-2xl p-6 lg:p-8 text-primary-foreground flex flex-col justify-between min-h-[240px]">
          <div>
            <h3 className="text-lg font-heading font-bold">Quick Actions</h3>
            <p className="text-sm opacity-80 mt-1">Common tasks at your fingertips</p>
          </div>
          <div className="grid grid-cols-2 gap-3 mt-6">
            {['Run Payroll', 'Add Staff', 'New Order', 'View Reports'].map((action) => (
              <button
                key={action}
                className="py-3 px-4 rounded-xl bg-white/15 hover:bg-white/25 text-sm font-medium transition-colors backdrop-blur-sm text-left"
              >
                {action}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}