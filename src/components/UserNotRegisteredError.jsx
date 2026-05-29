export default function UserNotRegisteredError() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-6">
      <div className="max-w-md rounded-2xl border border-border bg-card p-6 text-center shadow">
        <h1 className="text-xl font-semibold text-foreground">User not registered</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          This account is not registered for this Pulse app.
        </p>
      </div>
    </div>
  );
}
