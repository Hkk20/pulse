import { CheckCircle2, Clock, DollarSign, Download, FileText, Plus, Users, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import StatCard from '@/components/dashboard/Statcard';
import PayrollTable from '@/components/payroll/payrolltable';

export default function Payroll() {
  return (
    <div className="space-y-8">
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        <StatCard label="Total Payroll" value="₦485,000" change="+8.2%" changeType="up" icon={DollarSign} gradient="purple" />
        <StatCard label="Staff Count" value="24" change="+2" changeType="up" icon={Users} gradient="teal" />
        <StatCard label="Pending" value="₦202,000" icon={Clock} gradient="orange" />
        <StatCard label="Processed" value="₦283,000" icon={CheckCircle2} gradient="pink" />
      </div>

      <div className="flex flex-col gap-5 rounded-2xl border border-border bg-gradient-to-r from-primary/5 via-card to-accent/5 p-6 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <h2 className="text-xl font-bold text-foreground">May 2026 Payroll</h2>
          <p className="mt-1 text-lg text-muted-foreground">Ready to process for 24 staff members</p>
        </div>
        <div className="flex flex-wrap gap-4">
          <Button variant="outline" className="h-11 gap-2 rounded-2xl bg-card px-5 text-lg shadow-sm">
            <Download className="h-5 w-5" />
            Export
          </Button>
          <Button variant="outline" className="h-11 gap-2 rounded-2xl bg-card px-5 text-lg shadow-sm">
            <FileText className="h-5 w-5" />
            Receipts
          </Button>
          <Button className="h-11 gap-2 rounded-2xl px-6 text-lg shadow-xl shadow-primary/25">
            <Zap className="h-5 w-5" />
            Pay All Now
          </Button>
        </div>
      </div>

      <PayrollTable />
    </div>
  );
}
