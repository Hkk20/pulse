import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { AlertTriangle } from 'lucide-react';

export default function InventoryRow({ item }) {
  const pct = Math.min((item.current / item.max) * 100, 100);
  const isLow = pct < 25;

  return (
    <div className="flex items-center gap-4 p-4 rounded-xl hover:bg-muted/30 transition-colors group">
      <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center text-lg shrink-0">
        {item.emoji}
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2">
          <p className="text-sm font-semibold text-foreground truncate">{item.name}</p>
          {isLow && (
            <Badge variant="outline" className="bg-destructive/10 text-destructive border-destructive/20 text-[10px] px-1.5 gap-1">
              <AlertTriangle className="w-3 h-3" />
              Low
            </Badge>
          )}
        </div>
        <div className="flex items-center gap-3 mt-1.5">
          <Progress value={pct} className="h-1.5 flex-1" />
          <span className="text-xs text-muted-foreground whitespace-nowrap">
            {item.current}/{item.max} {item.unit}
          </span>
        </div>
      </div>
      <span className="text-xs font-medium text-muted-foreground">{item.category}</span>
    </div>
  );
}