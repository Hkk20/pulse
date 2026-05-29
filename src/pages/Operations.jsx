import { ClipboardList, Package, Plus, ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import OrderCard from '@/components/Operations/Ordercard';

const orders = [
  { id: 1024, status: 'new', customer: 'Table 7', items: [{ qty: 2, name: 'Jollof Rice', price: 3000 }, { qty: 1, name: 'Grilled Chicken', price: 2500 }], time: '2 min ago', location: 'Dine-in', total: 8500 },
  { id: 1023, status: 'preparing', customer: 'Uber Eats — Tunde', items: [{ qty: 3, name: 'Pepper Soup', price: 4000 }, { qty: 2, name: 'Fried Plantain', price: 1500 }], time: '12 min ago', location: 'Delivery', total: 15000 },
  { id: 1022, status: 'ready', customer: 'Table 3', items: [{ qty: 1, name: 'Fried Rice', price: 3200 }, { qty: 2, name: 'Suya', price: 1500 }], time: '25 min ago', location: 'Dine-in', total: 6200 },
  { id: 1021, status: 'delivered', customer: 'Walk-in', items: [{ qty: 3, name: 'Shawarma', price: 1500 }], time: '1 hr ago', location: '', total: 4500 },
  { id: 1020, status: 'new', customer: 'Table 1', items: [{ qty: 2, name: 'Egusi Soup', price: 4000 }, { qty: 2, name: 'Pounded Yam', price: 2000 }], time: '5 min ago', location: 'Dine-in', total: 12000 },
  { id: 1019, status: 'preparing', customer: 'Bolt Food — Ada', items: [{ qty: 2, name: 'Ofada Rice', price: 3500 }, { qty: 3, name: 'Moi Moi', price: 900 }], time: '18 min ago', location: 'Delivery', total: 9800 },
];

export default function Operations() {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div className="flex rounded-2xl bg-muted p-1">
          <button className="flex h-10 items-center gap-2 rounded-2xl bg-card px-5 text-lg font-semibold shadow-sm">
            <ShoppingCart className="h-5 w-5" />
            Orders
          </button>
          <button className="flex h-10 items-center gap-2 rounded-2xl px-5 text-lg font-medium text-muted-foreground">
            <Package className="h-5 w-5" />
            Inventory
          </button>
          <button className="flex h-10 items-center gap-2 rounded-2xl px-5 text-lg font-medium text-muted-foreground">
            <ClipboardList className="h-5 w-5" />
            Tasks
          </button>
        </div>
        <Button className="h-[46px] gap-2 rounded-2xl px-6 text-lg shadow-lg shadow-primary/25">
          <Plus className="h-5 w-5" />
          New Order
        </Button>
      </div>

      <div className="grid gap-5 xl:grid-cols-3">
        {orders.map((order) => (
          <OrderCard key={order.id} order={order} />
        ))}
      </div>
    </div>
  );
}
