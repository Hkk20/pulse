export function Input({ className = '', ...props }) {
  return (
    <input
      className={`w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20 ${className}`}
      {...props}
    />
  );
}
