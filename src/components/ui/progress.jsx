export function Progress({ value = 0, className = '', ...props }) {
  return (
    <div className={`h-2 overflow-hidden rounded-full bg-slate-800 ${className}`} {...props}>
      <div className="h-full rounded-full bg-gradient-to-r from-primary to-accent transition-all" style={{ width: `${Math.max(0, Math.min(100, value))}%` }} />
    </div>
  );
}
