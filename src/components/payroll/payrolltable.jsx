import { Badge } from '@/components/ui/badge';
import { CheckCircle2, Clock } from 'lucide-react';

const payrollData = [
  { name: 'Emeka Adebayo', role: 'Cook', base: 85000, bonus: 15000, commission: 0, total: 100000, status: 'paid' },
  { name: 'Fatima Bello', role: 'Cashier', base: 65000, bonus: 5000, commission: 3000, total: 73000, status: 'paid' },
  { name: 'David Okoye', role: 'Rider', base: 50000, bonus: 0, commission: 12000, total: 62000, status: 'pending' },
  { name: 'Grace Nnamdi', role: 'Waitress', base: 55000, bonus: 8000, commission: 5000, total: 68000, status: 'paid' },
  { name: 'Kunle Adeola', role: 'Manager', base: 120000, bonus: 20000, commission: 0, total: 140000, status: 'pending' },
  { name: 'Amina Yusuf', role: 'Cleaner', base: 40000, bonus: 2000, commission: 0, total: 42000, status: 'paid' },
];

const money = (value) => `₦${value.toLocaleString()}`;

export default function PayrollTable() {
  return (
    <div className="overflow-hidden rounded-2xl border border-border bg-card">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[980px]">
          <thead>
            <tr className="border-b border-border bg-card">
              {['Staff', 'Role', 'Base Salary', 'Bonus', 'Commission', 'Total', 'Status'].map((heading) => (
                <th key={heading} className="px-7 py-5 text-left text-sm font-bold uppercase tracking-wider text-muted-foreground">
                  {heading}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {payrollData.map((row) => {
              const paid = row.status === 'paid';
              const Icon = paid ? CheckCircle2 : Clock;
              return (
                <tr key={row.name} className="border-b border-border last:border-0 hover:bg-muted/25">
                  <td className="px-7 py-5 text-lg font-bold text-foreground">{row.name}</td>
                  <td className="px-7 py-5 text-lg text-muted-foreground">{row.role}</td>
                  <td className="px-7 py-5 text-lg font-semibold text-foreground">{money(row.base)}</td>
                  <td className="px-7 py-5 text-lg font-semibold text-success">+{money(row.bonus)}</td>
                  <td className="px-7 py-5 text-lg font-semibold text-accent">+{money(row.commission)}</td>
                  <td className="px-7 py-5 text-lg font-bold text-foreground">{money(row.total)}</td>
                  <td className="px-7 py-5">
                    <Badge
                      variant="outline"
                      className={`gap-1 rounded-xl px-3 py-1 text-xs ${paid ? 'border-success/20 bg-success/10 text-success' : 'border-warning/25 bg-warning/10 text-warning'}`}
                    >
                      <Icon className="h-3 w-3" />
                      {paid ? 'Paid' : 'Pending'}
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
