export function Button({ children, className = '', variant = 'default', size = 'default', ...props }) {
  const base = 'inline-flex items-center justify-center rounded-full font-semibold transition focus:outline-none focus:ring-2 focus:ring-slate-400/30 disabled:opacity-50';
  const variants = {
    default: 'bg-primary text-primary-foreground hover:bg-primary/90',
    outline: 'border border-border bg-transparent text-foreground hover:bg-muted',
    ghost: 'bg-transparent text-foreground hover:bg-muted',
  };
  const sizes = {
    default: 'px-4 py-2 text-sm',
    sm: 'px-3 py-2 text-sm',
  };

  return (
    <button className={`${base} ${variants[variant] ?? variants.default} ${sizes[size] ?? sizes.default} ${className}`} {...props}>
      {children}
    </button>
  );
}
