import { useState } from 'react';
import { ClipboardList, Package, Plus, ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import InventoryRow from '@/components/Operations/Inventory';
import OrderCard from '@/components/Operations/Ordercard';

const orders = [
  { id: 1024, status: 'new', customer: 'Table 7', items: [{ qty: 2, name: 'Jollof Rice', price: 3000 }, { qty: 1, name: 'Grilled Chicken', price: 2500 }], time: '2 min ago', location: 'Dine-in', total: 8500 },
  { id: 1023, status: 'preparing', customer: 'Uber Eats — Tunde', items: [{ qty: 3, name: 'Pepper Soup', price: 4000 }, { qty: 2, name: 'Fried Plantain', price: 1500 }], time: '12 min ago', location: 'Delivery', total: 15000 },
  { id: 1022, status: 'ready', customer: 'Table 3', items: [{ qty: 1, name: 'Fried Rice', price: 3200 }, { qty: 2, name: 'Suya', price: 1500 }], time: '25 min ago', location: 'Dine-in', total: 6200 },
  { id: 1021, status: 'delivered', customer: 'Walk-in', items: [{ qty: 3, name: 'Shawarma', price: 1500 }], time: '1 hr ago', location: '', total: 4500 },
  { id: 1020, status: 'new', customer: 'Table 1', items: [{ qty: 2, name: 'Egusi Soup', price: 4000 }, { qty: 2, name: 'Pounded Yam', price: 2000 }], time: '5 min ago', location: 'Dine-in', total: 12000 },
  { id: 1019, status: 'preparing', customer: 'Bolt Food — Ada', items: [{ qty: 2, name: 'Ofada Rice', price: 3500 }, { qty: 3, name: 'Moi Moi', price: 900 }], time: '18 min ago', location: 'Delivery', total: 9800 },
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

const priorityStyles = {
  high: 'bg-destructive/10 text-destructive',
  medium: 'bg-warning/10 text-warning',
  low: 'bg-success/10 text-success',
};

export default function Operations() {
  const [tab, setTab] = useState('orders');

  return (
    <div className="p-4 lg:p-8 max-w-7xl mx-auto space-y-6">
      <div className="flex items-center justify-between gap-4 flex-wrap">
        <div className="inline-flex h-9 items-center justify-center rounded-xl bg-muted p-1 text-muted-foreground">
          {[
            ['orders', ShoppingCart, 'Orders'],
            ['inventory', Package, 'Inventory'],
            ['tasks', ClipboardList, 'Tasks'],
          ].map(([value, Icon, label]) => (
            <button
              key={value}
              onClick={() => setTab(value)}
              className={`inline-flex items-center justify-center whitespace-nowrap rounded-lg px-3 py-1 text-sm font-medium transition-all gap-2 ${tab === value ? 'bg-card text-foreground shadow-sm' : ''}`}
            >
              <Icon className="w-4 h-4" />
              <span className="hidden sm:inline">{label}</span>
            </button>
          ))}
        </div>
        <Button className="bg-primary hover:bg-primary/90 rounded-xl gap-2">
          <Plus className="w-4 h-4" />
          <span className="hidden sm:inline">New {tab === 'orders' ? 'Order' : tab === 'inventory' ? 'Item' : 'Task'}</span>
        </Button>
      </div>

      {tab === 'orders' && (
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {orders.map((order, index) => (
            <div key={order.id} className="animate-slide-up" style={{ animationDelay: `${index * 60}ms`, animationFillMode: 'backwards' }}>
              <OrderCard order={order} />
            </div>
          ))}
        </div>
      )}

      {tab === 'inventory' && (
        <div className="mt-6 bg-card rounded-2xl border border-border divide-y divide-border">
          {inventory.map((item, index) => (
            <div key={item.name} className="animate-slide-up" style={{ animationDelay: `${index * 40}ms`, animationFillMode: 'backwards' }}>
              <InventoryRow item={item} />
            </div>
          ))}
        </div>
      )}

      {tab === 'tasks' && (
        <div className="mt-6 bg-card rounded-2xl border border-border divide-y divide-border">
          {tasks.map((task, index) => (
            <div key={task.id} className="flex items-center gap-4 p-4 hover:bg-muted/30 transition-colors animate-slide-up" style={{ animationDelay: `${index * 40}ms`, animationFillMode: 'backwards' }}>
              <input type="checkbox" defaultChecked={task.done} className="w-4 h-4 rounded border-border accent-primary" />
              <div className="flex-1 min-w-0">
                <p className={`text-sm font-medium ${task.done ? 'line-through text-muted-foreground' : 'text-foreground'}`}>{task.task}</p>
                <p className="text-xs text-muted-foreground mt-0.5">Assigned to {task.assignee}</p>
              </div>
              <span className={`text-[10px] font-semibold px-2 py-1 rounded-lg capitalize ${priorityStyles[task.priority]}`}>{task.priority}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
