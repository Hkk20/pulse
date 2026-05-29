import React from 'react';
import { Badge } from '@/components/ui/badge';
import { CheckCircle2, Clock, XCircle } from 'lucide-react';

const statusConfig = {
  paid: { icon: CheckCircle2, label: 'Paid', class: 'bg-success/10 text-success border-success/20' },
  pending: { icon: Clock, label: 'Pending', class: 'bg-warning/10 text-warning border-warning/20' },
  failed: { icon: XCircle, label: 'Failed', class: 'bg-destructive/10 text-destructive border-destructive/20' },
};

const payrollData = [
  { name: 'Emeka Adebayo', role: 'Cook', base: 85000, bonus: 15000, commission: 0, total: 100000, status: 'paid' },
  { name: 'Fatima Bello', role: 'Cashier', base: 65000, bonus: 5000, commission: 3000, total: 73000, status: 'paid' },
  { name: 'David Okoye', role: 'Rider', base: 50000, bonus: 0, commission: 12000, total: 62000, status: 'pending' },
  { name: 'Grace Nnamdi', role: 'Waitress', base: 55000, bonus: 8000, commission: 5000, total: 68000, status: 'paid' },
  { name: 'Kunle Adeola', role: 'Manager', base: 120000, bonus: 20000, commission: 0, total: 140000, status: 'pending' },
  { name: 'Amina Yusuf', role: 'Cleaner', base: 40000, bonus: 2000, commission: 0, total: 42000, status: 'paid' },
];

export default function PayrollTable() {
  return (
    <div className="bg-card rounded-2xl border border-border overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-border bg-muted/30">
              {['Staff', 'Role', 'Base Salary', 'Bonus', 'Commission', 'Total', 'Status'].map(h => (
                <th key={h} className="text-left px-5 py-4 text-xs font-semibold text-muted-foreground uppercase tracking-wider">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {payrollData.map((row, i) => {
              const s = statusConfig[row.status];
              return (
                <tr
                  key={row.name}
                  className="border-b border-border last:border-0 hover:bg-muted/30 transition-colors animate-slide-up"
                  style={{ animationDelay: `${i * 50}ms`, animationFillMode: 'backwards' }}
                >
                  <td className="px-5 py-4">
                    <span className="text-sm font-semibold text-foreground">{row.name}</span>
                  </td>
                  <td className="px-5 py-4 text-sm text-muted-foreground">{row.role}</td>
                  <td className="px-5 py-4 text-sm font-medium text-foreground">₦{row.base.toLocaleString()}</td>
                  <td className="px-5 py-4 text-sm text-success font-medium">+₦{row.bonus.toLocaleString()}</td>
                  <td className="px-5 py-4 text-sm text-accent font-medium">+₦{row.commission.toLocaleString()}</td>
                  <td className="px-5 py-4 text-sm font-bold text-foreground">₦{row.total.toLocaleString()}</td>
                  <td className="px-5 py-4">
                    <Badge variant="outline" className={`text-[10px] px-2.5 py-1 gap-1 ${s.class}`}>
                      <s.icon className="w-3 h-3" />
                      {s.label}
                    </Badge>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}