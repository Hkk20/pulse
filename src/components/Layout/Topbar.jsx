import React from 'react';
import { Menu, Bell, Search, Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function TopBar({ onMenuClick, title, subtitle }) {
  return (
    <header className="sticky top-0 z-30 bg-background/80 backdrop-blur-xl border-b border-border">
      <div className="flex items-center justify-between px-4 lg:px-8 py-4">
        <div className="flex items-center gap-4">
          <button
            onClick={onMenuClick}
            className="lg:hidden p-2 rounded-xl hover:bg-muted transition-colors"
          >
            <Menu className="w-5 h-5" />
          </button>
          <div>
            <h2 className="text-xl lg:text-2xl font-heading font-bold text-foreground">{title}</h2>
            {subtitle && <p className="text-sm text-muted-foreground mt-0.5">{subtitle}</p>}
          </div>
        </div>

        <div className="flex items-center gap-2 lg:gap-3">
          {/* Search - hidden on mobile */}
          <div className="hidden md:flex items-center gap-2 bg-muted rounded-xl px-4 py-2.5 w-64">
            <Search className="w-4 h-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search anything..."
              className="bg-transparent text-sm outline-none w-full placeholder:text-muted-foreground/60"
            />
          </div>

          <button className="relative p-2.5 rounded-xl hover:bg-muted transition-colors">
            <Bell className="w-5 h-5 text-muted-foreground" />
            <span className="absolute top-2 right-2 w-2 h-2 bg-accent rounded-full" />
          </button>

          <Button size="sm" className="hidden sm:flex gap-2 bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl px-4">
            <Plus className="w-4 h-4" />
            <span className="text-sm font-medium">Quick Add</span>
          </Button>

          {/* Avatar */}
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white text-sm font-bold cursor-pointer">
            P
          </div>
        </div>
      </div>
    </header>
  );
}
