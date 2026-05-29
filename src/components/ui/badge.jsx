export function Badge({ children, className = '', variant = 'default', ...props }) {
  const variants = {
    default: 'bg-muted text-foreground border border-border',
    accent: 'bg-accent text-accent-foreground',
    success: 'bg-emerald-500/10 text-emerald-500 border border-emerald-500/10',
  };

  return (
    <span className={`inline-flex items-center rounded-full px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.08em] ${variants[variant] ?? variants.default} ${className}`} {...props}>
      {children}
    </span>
  );
}
