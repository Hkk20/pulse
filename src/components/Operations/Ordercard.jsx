import { Badge } from '@/components/ui/badge';
import { ChevronRight, Clock, MapPin } from 'lucide-react';

const statusStyles = {
  new: 'bg-chart-5/10 text-chart-5 border-chart-5/20',
  preparing: 'bg-accent/10 text-accent border-accent/20',
  ready: 'bg-success/10 text-success border-success/20',
  delivered: 'bg-muted text-muted-foreground border-border',
};

export default function OrderCard({ order }) {
  return (
    <div className="group cursor-pointer rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:border-primary/25 hover:shadow-xl">
      <div className="flex items-start justify-between">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-lg font-bold text-foreground">#{order.id}</span>
            <Badge variant="outline" className={`rounded-xl px-3 py-1 text-xs capitalize ${statusStyles[order.status]}`}>
              {order.status}
            </Badge>
          </div>
          <p className="mt-1 text-base text-muted-foreground">{order.customer}</p>
        </div>
        <ChevronRight className="h-5 w-5 text-muted-foreground transition-all group-hover:translate-x-1 group-hover:text-primary" />
      </div>

      <div className="mt-5 space-y-2">
        {order.items.map((item) => (
          <div key={`${order.id}-${item.name}`} className="flex justify-between text-base">
            <span className="text-muted-foreground">
              {item.qty}x {item.name}
            </span>
            <span className="font-bold text-foreground">₦{item.price.toLocaleString()}</span>
          </div>
        ))}
      </div>

      <div className="mt-5 flex items-center justify-between border-t border-border pt-4">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1 text-base text-muted-foreground">
            <Clock className="h-4 w-4" />
            {order.time}
          </div>
          {order.location && (
            <div className="flex items-center gap-1 text-base text-muted-foreground">
              <MapPin className="h-4 w-4" />
              {order.location}
            </div>
          )}
        </div>
        <span className="text-lg font-bold text-foreground">₦{order.total.toLocaleString()}</span>
      </div>
    </div>
  );
}
