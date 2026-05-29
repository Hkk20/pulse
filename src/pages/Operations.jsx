import React, { useState } from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { ShoppingCart, Package, ClipboardCheck, Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import OrderCard from '@/components/operations/OrderCard';
import InventoryRow from '@/components/operations/InventoryRow';

const orders = [
  { id: '1024', customer: 'Table 7', status: 'new', time: '2 min ago', location: 'Dine-in', total: 8500, items: [{ name: 'Jollof Rice', qty: 2, price: 3000 }, { name: 'Grilled Chicken', qty: 1, price: 2500 }] },
  { id: '1023', customer: 'Uber Eats — Tunde', status: 'preparing', time: '12 min ago', location: 'Delivery', total: 15000, items: [{ name: 'Pepper Soup', qty: 3, price: 4000 }, { name: 'Fried Plantain', qty: 2, price: 1500 }] },
  { id: '1022', customer: 'Table 3', status: 'ready', time: '25 min ago', location: 'Dine-in', total: 6200, items: [{ name: 'Fried Rice', qty: 1, price: 3200 }, { name: 'Suya', qty: 2, price: 1500 }] },
  { id: '1021', customer: 'Walk-in', status: 'delivered', time: '1 hr ago', total: 4500, items: [{ name: 'Shawarma', qty: 3, price: 1500 }] },
  { id: '1020', customer: 'Table 1', status: 'new', time: '5 min ago', location: 'Dine-in', total: 12000, items: [{ name: 'Egusi Soup', qty: 2, price: 4000 }, { name: 'Pounded Yam', qty: 2, price: 2000 }] },
  { id: '1019', customer: 'Bolt Food — Ada', status: 'preparing', time: '18 min ago', location: 'Delivery', total: 9800, items: [{ name: 'Ofada Rice', qty: 2, price: 3500 }, { name: 'Moi Moi', qty: 3, price: 900 }] },
];

const inventory = [
  { name: 'Rice', emoji: '🍚', current: 8, max: 50, unit: 'kg', category: 'Grain' },
  { name: 'Chicken', emoji: '🍗', current: 15, max: 30, unit: 'pcs', category: 'Protein' },
  { name: 'Palm Oil', emoji: '🫒', current: 3, max: 20, unit: 'ltrs', category: 'Oil' },
  { name: 'Tomatoes', emoji: '🍅', current: 25, max: 40, unit: 'kg', category: 'Vegetable' },
  { name: 'Plantain', emoji: '🍌', current: 18, max: 25, unit: 'bunches', category: 'Produce' },
  { name: 'Flour', emoji: '🌾', current: 30, max: 50, unit: 'kg', category: 'Grain' },
  { name: 'Peppers', emoji: '🌶️', current: 5, max: 15, unit: 'kg', category: 'Vegetable' },
];

const tasks = [
  { id: 1, task: 'Restock rice — below 10kg', assignee: 'Kunle A.', priority: 'high', done: false },
  { id: 2, task: 'Clean kitchen exhaust', assignee: 'Amina Y.', priority: 'medium', done: false },
  { id: 3, task: 'Update menu prices', assignee: 'Fatima B.', priority: 'low', done: true },
  { id: 4, task: 'Fix POS printer', assignee: 'David O.', priority: 'high', done: false },
  { id: 5, task: 'Order disposable containers', assignee: 'Grace N.', priority: 'medium', done: true },
];

const priorityColors = {
  high: 'bg-destructive/10 text-destructive',
  medium: 'bg-warning/10 text-warning',
  low: 'bg-success/10 text-success',
};

export default function Operations() {
  const [tab, setTab] = useState('orders');

  return (
    <div className="p-4 lg:p-8 max-w-7xl mx-auto space-y-6">
      <Tabs value={tab} onValueChange={setTab}>
        <div className="flex items-center justify-between gap-4 flex-wrap">
          <TabsList className="bg-muted rounded-xl p-1">
            <TabsTrigger value="orders" className="rounded-lg gap-2 data-[state=active]:bg-card data-[state=active]:shadow-sm">
              <ShoppingCart className="w-4 h-4" />
              <span className="hidden sm:inline">Orders</span>
            </TabsTrigger>
            <TabsTrigger value="inventory" className="rounded-lg gap-2 data-[state=active]:bg-card data-[state=active]:shadow-sm">
              <Package className="w-4 h-4" />
              <span className="hidden sm:inline">Inventory</span>
            </TabsTrigger>
            <TabsTrigger value="tasks" className="rounded-lg gap-2 data-[state=active]:bg-card data-[state=active]:shadow-sm">
              <ClipboardCheck className="w-4 h-4" />
              <span className="hidden sm:inline">Tasks</span>
            </TabsTrigger>
          </TabsList>
          <Button className="bg-primary hover:bg-primary/90 rounded-xl gap-2">
            <Plus className="w-4 h-4" />
            <span className="hidden sm:inline">New {tab === 'orders' ? 'Order' : tab === 'inventory' ? 'Item' : 'Task'}</span>
          </Button>
        </div>

        <TabsContent value="orders" className="mt-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {orders.map((order, i) => (
              <div
                key={order.id}
                className="animate-slide-up"
                style={{ animationDelay: `${i * 60}ms`, animationFillMode: 'backwards' }}
              >
                <OrderCard order={order} />
              </div>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="inventory" className="mt-6">
          <div className="bg-card rounded-2xl border border-border divide-y divide-border">
            {inventory.map((item, i) => (
              <div
                key={item.name}
                className="animate-slide-up"
                style={{ animationDelay: `${i * 40}ms`, animationFillMode: 'backwards' }}
              >
                <InventoryRow item={item} />
              </div>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="tasks" className="mt-6">
          <div className="bg-card rounded-2xl border border-border divide-y divide-border">
            {tasks.map((t, i) => (
              <div
                key={t.id}
                className="flex items-center gap-4 p-4 hover:bg-muted/30 transition-colors animate-slide-up"
                style={{ animationDelay: `${i * 40}ms`, animationFillMode: 'backwards' }}
              >
                <input
                  type="checkbox"
                  defaultChecked={t.done}
                  className="w-4 h-4 rounded border-border accent-primary"
                />
                <div className="flex-1 min-w-0">
                  <p className={`text-sm font-medium ${t.done ? 'line-through text-muted-foreground' : 'text-foreground'}`}>
                    {t.task}
                  </p>
                  <p className="text-xs text-muted-foreground mt-0.5">Assigned to {t.assignee}</p>
                </div>
                <span className={`text-[10px] font-semibold px-2 py-1 rounded-lg capitalize ${priorityColors[t.priority]}`}>
                  {t.priority}
                </span>
              </div>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}