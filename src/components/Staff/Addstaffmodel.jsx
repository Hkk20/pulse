import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const roles = ['Cook', 'Cashier', 'Rider', 'Waitress', 'Manager', 'Cleaner'];

export default function AddStaffModal({ open, onOpenChange }) {
  const [form, setForm] = useState({ name: '', email: '', phone: '', role: '', bank: '', account: '' });

  const update = (key, val) => setForm(f => ({ ...f, [key]: val }));

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md rounded-2xl">
        <DialogHeader>
          <DialogTitle className="font-heading text-xl">Add Staff Member</DialogTitle>
        </DialogHeader>
        <div className="space-y-4 py-4">
          <div className="grid grid-cols-2 gap-3">
            <div>
              <Label className="text-xs font-medium text-muted-foreground">Full Name</Label>
              <Input
                placeholder="e.g. Emeka Adebayo"
                value={form.name}
                onChange={e => update('name', e.target.value)}
                className="mt-1.5 rounded-xl"
              />
            </div>
            <div>
              <Label className="text-xs font-medium text-muted-foreground">Role</Label>
              <Select value={form.role} onValueChange={v => update('role', v)}>
                <SelectTrigger className="mt-1.5 rounded-xl">
                  <SelectValue placeholder="Select role" />
                </SelectTrigger>
                <SelectContent>
                  {roles.map(r => <SelectItem key={r} value={r.toLowerCase()}>{r}</SelectItem>)}
                </SelectContent>
              </Select>
            </div>
          </div>
          <div>
            <Label className="text-xs font-medium text-muted-foreground">Email Address</Label>
            <Input placeholder="staff@example.com" value={form.email} onChange={e => update('email', e.target.value)} className="mt-1.5 rounded-xl" />
          </div>
          <div>
            <Label className="text-xs font-medium text-muted-foreground">Phone Number</Label>
            <Input placeholder="+234 800 000 0000" value={form.phone} onChange={e => update('phone', e.target.value)} className="mt-1.5 rounded-xl" />
          </div>
          <div className="pt-2 border-t border-border">
            <p className="text-xs font-semibold text-foreground mb-3">Bank Details</p>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <Label className="text-xs font-medium text-muted-foreground">Bank Name</Label>
                <Input placeholder="e.g. GTBank" value={form.bank} onChange={e => update('bank', e.target.value)} className="mt-1.5 rounded-xl" />
              </div>
              <div>
                <Label className="text-xs font-medium text-muted-foreground">Account Number</Label>
                <Input placeholder="0123456789" value={form.account} onChange={e => update('account', e.target.value)} className="mt-1.5 rounded-xl" />
              </div>
            </div>
          </div>
        </div>
        <DialogFooter>
          <Button variant="outline" onClick={() => onOpenChange(false)} className="rounded-xl">Cancel</Button>
          <Button className="bg-primary hover:bg-primary/90 rounded-xl">Add Staff</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}