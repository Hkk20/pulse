import { CheckCircle2, Clock, DollarSign, Download, FileText, Users, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import StatCard from '@/components/dashboard/Statcard';
import PayrollTable from '@/components/payroll/payrolltable';

export default function Payroll() {
  return (
    <div className="p-4 lg:p-8 max-w-7xl mx-auto space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        <StatCard label="Total Payroll" value="₦485,000" change="+8.2%" changeType="up" icon={DollarSign} gradient="purple" />
        <StatCard label="Staff Count" value="24" change="+2" changeType="up" icon={Users} gradient="teal" />
        <StatCard label="Pending" value="₦202,000" icon={Clock} gradient="orange" />
        <StatCard label="Processed" value="₦283,000" icon={CheckCircle2} gradient="pink" />
      </div>

      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl p-5 border border-primary/10">
        <div>
          <h2 className="text-base font-heading font-bold text-foreground">May 2026 Payroll</h2>
          <p className="text-sm text-muted-foreground mt-0.5">Ready to process for 24 staff members</p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="rounded-xl gap-2">
            <Download className="h-4 w-4" />
            <span className="hidden sm:inline">Export</span>
          </Button>
          <Button variant="outline" className="rounded-xl gap-2">
            <FileText className="h-4 w-4" />
            <span className="hidden sm:inline">Receipts</span>
          </Button>
          <Button className="bg-primary hover:bg-primary/90 rounded-xl gap-2 shadow-lg shadow-primary/25">
            <Zap className="h-4 w-4" />
            Pay All Now
          </Button>
        </div>
      </div>

      <PayrollTable />
    </div>
  );
}
