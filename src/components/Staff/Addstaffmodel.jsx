import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const roles = ['Cook', 'Cashier', 'Rider', 'Waitress', 'Manager', 'Cleaner'];

export default function AddStaffModal({ open, onOpenChange }) {
  const [form, setForm] = useState({ name: '', email: '', phone: '', role: '', bank: '', account: '' });

  const update = (key, val) => setForm((f) => ({ ...f, [key]: val }));

  if (!open) return null;

  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4'>
      <div className='w-full max-w-2xl rounded-3xl border border-border bg-card p-6 shadow-2xl'>
        <div className='flex items-start justify-between gap-4'>
          <div>
            <h2 className='text-xl font-semibold text-foreground'>Add Staff Member</h2>
            <p className='text-sm text-muted-foreground mt-1'>Create a profile for payroll, scheduling and reporting.</p>
          </div>
          <button onClick={() => onOpenChange(false)} className='text-sm font-medium text-muted-foreground hover:text-foreground'>Close</button>
        </div>

        <div className='mt-6 grid gap-4 sm:grid-cols-2'>
          <div>
            <Label htmlFor='staff-name'>Full Name</Label>
            <Input
              id='staff-name'
              placeholder='e.g. Emeka Adebayo'
              value={form.name}
              onChange={(e) => update('name', e.target.value)}
              className='mt-2 rounded-xl'
            />
          </div>
          <div>
            <Label htmlFor='staff-role'>Role</Label>
            <select
              id='staff-role'
              value={form.role}
              onChange={(e) => update('role', e.target.value)}
              className='mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20'
            >
              <option value=''>Select role</option>
              {roles.map((role) => (
                <option key={role} value={role.toLowerCase()}>{role}</option>
              ))}
            </select>
          </div>
          <div>
            <Label htmlFor='staff-email'>Email Address</Label>
            <Input
              id='staff-email'
              placeholder='staff@example.com'
              value={form.email}
              onChange={(e) => update('email', e.target.value)}
              className='mt-2 rounded-xl'
            />
          </div>
          <div>
            <Label htmlFor='staff-phone'>Phone Number</Label>
            <Input
              id='staff-phone'
              placeholder='+234 800 000 0000'
              value={form.phone}
              onChange={(e) => update('phone', e.target.value)}
              className='mt-2 rounded-xl'
            />
          </div>
          <div>
            <Label htmlFor='staff-bank'>Bank Name</Label>
            <Input
              id='staff-bank'
              placeholder='e.g. GTBank'
              value={form.bank}
              onChange={(e) => update('bank', e.target.value)}
              className='mt-2 rounded-xl'
            />
          </div>
          <div>
            <Label htmlFor='staff-account'>Account Number</Label>
            <Input
              id='staff-account'
              placeholder='0123456789'
              value={form.account}
              onChange={(e) => update('account', e.target.value)}
              className='mt-2 rounded-xl'
            />
          </div>
        </div>

        <div className='mt-6 flex flex-col gap-3 sm:flex-row justify-end'>
          <Button variant='outline' className='rounded-xl w-full sm:w-auto' onClick={() => onOpenChange(false)}>
            Cancel
          </Button>
          <Button className='rounded-xl w-full sm:w-auto'>Add Staff</Button>
        </div>
      </div>
    </div>
  );
}
