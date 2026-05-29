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
    <div className="bg-card rounded-2xl border border-border p-5 hover:shadow-lg hover:border-primary/20 transition-all duration-300 group cursor-pointer">
      <div className="flex items-start justify-between">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-sm font-bold text-foreground">#{order.id}</span>
            <Badge variant="outline" className={`text-[10px] px-2 py-0.5 capitalize ${statusStyles[order.status]}`}>
              {order.status}
            </Badge>
          </div>
          <p className="text-xs text-muted-foreground mt-1">{order.customer}</p>
        </div>
        <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
      </div>

      <div className="mt-4 space-y-1.5">
        {order.items.map((item) => (
          <div key={`${order.id}-${item.name}`} className="flex justify-between text-xs">
            <span className="text-muted-foreground">
              {item.qty}x {item.name}
            </span>
            <span className="font-medium text-foreground">₦{item.price.toLocaleString()}</span>
          </div>
        ))}
      </div>

      <div className="mt-4 pt-3 border-t border-border flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1 text-xs text-muted-foreground">
            <Clock className="w-3 h-3" />
            {order.time}
          </div>
          {order.location && (
            <div className="flex items-center gap-1 text-xs text-muted-foreground">
              <MapPin className="w-3 h-3" />
              {order.location}
            </div>
          )}
        </div>
        <span className="text-sm font-bold text-foreground">₦{order.total.toLocaleString()}</span>
      </div>
    </div>
  );
}
