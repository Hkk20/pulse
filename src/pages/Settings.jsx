import { useState } from 'react';
import { Bell, Building2 } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const Toggle = ({ checked, onChange }) => (
  <label className="relative inline-flex cursor-pointer items-center">
    <input type="checkbox" checked={checked} onChange={(event) => onChange(event.target.checked)} className="peer sr-only" />
    <span className="h-6 w-11 rounded-full bg-muted transition peer-checked:bg-primary" />
    <span className="absolute left-1 top-1 h-4 w-4 rounded-full bg-card shadow transition peer-checked:translate-x-5" />
  </label>
);

export default function Settings() {
  const [profile, setProfile] = useState({
    name: "Mama's Kitchen",
    address: '15 Broad Street, Lagos',
    phone: '+234 812 345 6789',
  });
  const [toggles, setToggles] = useState({
    payroll: true,
    stock: true,
    orders: false,
    staff: true,
  });

  const updateProfile = (key, value) => setProfile((current) => ({ ...current, [key]: value }));
  const updateToggle = (key, value) => setToggles((current) => ({ ...current, [key]: value }));

  return (
    <div className="mx-auto max-w-[880px] space-y-8">
      <section className="rounded-2xl border border-border bg-card p-8 shadow-md shadow-slate-200/60">
        <div className="flex items-center gap-4">
          <div className="flex h-[50px] w-[50px] items-center justify-center rounded-2xl bg-primary/10 text-primary">
            <Building2 className="h-6 w-6" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-foreground">Business Profile</h2>
            <p className="text-lg text-muted-foreground">Your business name, address, and contact info</p>
          </div>
        </div>

        <div className="mt-8 space-y-6">
          <div>
            <Label htmlFor="business-name" className="text-base text-muted-foreground">Business Name</Label>
            <Input id="business-name" value={profile.name} onChange={(event) => updateProfile('name', event.target.value)} className="mt-2 h-11 rounded-2xl bg-card text-lg" />
          </div>
          <div>
            <Label htmlFor="business-address" className="text-base text-muted-foreground">Address</Label>
            <Input id="business-address" value={profile.address} onChange={(event) => updateProfile('address', event.target.value)} className="mt-2 h-11 rounded-2xl bg-card text-lg" />
          </div>
          <div>
            <Label htmlFor="business-phone" className="text-base text-muted-foreground">Phone</Label>
            <Input id="business-phone" value={profile.phone} onChange={(event) => updateProfile('phone', event.target.value)} className="mt-2 h-11 rounded-2xl bg-card text-lg" />
          </div>
        </div>
      </section>

      <section className="rounded-2xl border border-border bg-card p-8 shadow-md shadow-slate-200/60">
        <div className="flex items-center gap-4">
          <div className="flex h-[50px] w-[50px] items-center justify-center rounded-2xl bg-primary/10 text-primary">
            <Bell className="h-6 w-6" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-foreground">Notifications</h2>
            <p className="text-lg text-muted-foreground">Control how you receive alerts</p>
          </div>
        </div>

        <div className="mt-8 space-y-8">
          {[
            ['payroll', 'Payroll reminders', 'Get notified before pay day'],
            ['stock', 'Low stock alerts', 'When inventory drops below threshold'],
            ['orders', 'New order notifications', 'Alert for every incoming order'],
            ['staff', 'Staff activity', 'Track attendance changes'],
          ].map(([key, title, description]) => (
            <div key={key} className="flex items-center justify-between gap-6">
              <div>
                <p className="text-lg font-bold text-foreground">{title}</p>
                <p className="text-base text-muted-foreground">{description}</p>
              </div>
              <Toggle checked={toggles[key]} onChange={(value) => updateToggle(key, value)} />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
