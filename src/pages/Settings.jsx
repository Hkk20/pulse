import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Building2, Bell, Shield, Palette } from 'lucide-react';

const sections = [
  {
    icon: Building2,
    title: 'Business Profile',
    desc: 'Your business name, address, and contact info',
    fields: [
      { label: 'Business Name', placeholder: "e.g. Mama's Kitchen", value: "Mama's Kitchen" },
      { label: 'Address', placeholder: 'e.g. 15 Broad Street, Lagos', value: '15 Broad Street, Lagos' },
      { label: 'Phone', placeholder: '+234 800 000 0000', value: '+234 812 345 6789' },
    ]
  },
  {
    icon: Bell,
    title: 'Notifications',
    desc: 'Control how you receive alerts',
    toggles: [
      { label: 'Payroll reminders', desc: 'Get notified before pay day', on: true },
      { label: 'Low stock alerts', desc: 'When inventory drops below threshold', on: true },
      { label: 'New order notifications', desc: 'Alert for every incoming order', on: false },
      { label: 'Staff activity', desc: 'Clock-in and clock-out alerts', on: true },
    ]
  },
];

export default function Settings() {
  return (
    <div className="p-4 lg:p-8 max-w-3xl mx-auto space-y-6">
      {sections.map((section, i) => (
        <Card
          key={section.title}
          className="rounded-2xl animate-slide-up"
          style={{ animationDelay: `${i * 100}ms`, animationFillMode: 'backwards' }}
        >
          <CardHeader className="pb-4">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-primary/10">
                <section.icon className="w-5 h-5 text-primary" />
              </div>
              <div>
                <CardTitle className="font-heading text-lg">{section.title}</CardTitle>
                <CardDescription className="text-sm">{section.desc}</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            {section.fields && section.fields.map(f => (
              <div key={f.label}>
                <Label className="text-xs font-medium text-muted-foreground">{f.label}</Label>
                <Input defaultValue={f.value} placeholder={f.placeholder} className="mt-1.5 rounded-xl" />
              </div>
            ))}
            {section.toggles && section.toggles.map(t => (
              <div key={t.label} className="flex items-center justify-between py-2">
                <div>
                  <p className="text-sm font-medium text-foreground">{t.label}</p>
                  <p className="text-xs text-muted-foreground">{t.desc}</p>
                </div>
                <Switch defaultChecked={t.on} />
              </div>
            ))}
          </CardContent>
        </Card>
      ))}

      <div className="flex justify-end">
        <Button className="bg-primary hover:bg-primary/90 rounded-xl px-8">Save Changes</Button>
      </div>
    </div>
  );
}