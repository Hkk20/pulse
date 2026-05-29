import { useState } from 'react';
import { Bell, Building2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const Toggle = ({ checked, onChange }) => (
  <label className="relative inline-flex cursor-pointer items-center">
    <input type="checkbox" checked={checked} onChange={(event) => onChange(event.target.checked)} className="peer sr-only" />
    <span className="h-5 w-9 rounded-full border-2 border-transparent bg-input shadow-sm transition peer-checked:bg-primary" />
    <span className="absolute left-0.5 top-0.5 h-4 w-4 rounded-full bg-background shadow-lg transition peer-checked:translate-x-4" />
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
    <div className="p-4 lg:p-8 max-w-3xl mx-auto space-y-6">
      <section className="rounded-2xl border bg-card text-card-foreground shadow animate-slide-up">
        <div className="flex flex-col space-y-1.5 p-6 pb-4">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-primary/10">
              <Building2 className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h2 className="font-heading text-lg font-semibold leading-none tracking-tight">Business Profile</h2>
              <p className="text-sm text-muted-foreground">Your business name, address, and contact info</p>
            </div>
          </div>
        </div>

        <div className="p-6 pt-0 space-y-4">
          <div>
            <Label htmlFor="business-name" className="text-xs font-medium text-muted-foreground">Business Name</Label>
            <Input id="business-name" value={profile.name} onChange={(event) => updateProfile('name', event.target.value)} className="mt-1.5 rounded-xl" />
          </div>
          <div>
            <Label htmlFor="business-address" className="text-xs font-medium text-muted-foreground">Address</Label>
            <Input id="business-address" value={profile.address} onChange={(event) => updateProfile('address', event.target.value)} className="mt-1.5 rounded-xl" />
          </div>
          <div>
            <Label htmlFor="business-phone" className="text-xs font-medium text-muted-foreground">Phone</Label>
            <Input id="business-phone" value={profile.phone} onChange={(event) => updateProfile('phone', event.target.value)} className="mt-1.5 rounded-xl" />
          </div>
        </div>
      </section>

      <section className="rounded-2xl border bg-card text-card-foreground shadow animate-slide-up">
        <div className="flex flex-col space-y-1.5 p-6 pb-4">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-primary/10">
              <Bell className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h2 className="font-heading text-lg font-semibold leading-none tracking-tight">Notifications</h2>
              <p className="text-sm text-muted-foreground">Control how you receive alerts</p>
            </div>
          </div>
        </div>

        <div className="p-6 pt-0 space-y-4">
          {[
            ['payroll', 'Payroll reminders', 'Get notified before pay day'],
            ['stock', 'Low stock alerts', 'When inventory drops below threshold'],
            ['orders', 'New order notifications', 'Alert for every incoming order'],
            ['staff', 'Staff activity', 'Clock-in and clock-out alerts'],
          ].map(([key, title, description]) => (
            <div key={key} className="flex items-center justify-between py-2">
              <div>
                <p className="text-sm font-medium text-foreground">{title}</p>
                <p className="text-xs text-muted-foreground">{description}</p>
              </div>
              <Toggle checked={toggles[key]} onChange={(value) => updateToggle(key, value)} />
            </div>
          ))}
        </div>
      </section>

      <div className="flex justify-end">
        <Button className="bg-primary hover:bg-primary/90 rounded-xl px-8">Save Changes</Button>
      </div>
    </div>
  );
}
