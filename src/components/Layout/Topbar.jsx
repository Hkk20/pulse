import React from 'react';
import { Menu, Bell, Search, Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function TopBar({ onMenuClick, title, subtitle }) {
  return (
    <header className="sticky top-0 z-30 bg-background/95 backdrop-blur-xl border-b border-border">
      <div className="flex h-[108px] items-center justify-between px-4 lg:px-10">
        <div className="flex items-center gap-4">
          <button
            onClick={onMenuClick}
            className="lg:hidden p-2 rounded-xl hover:bg-muted transition-colors"
          >
            <Menu className="w-5 h-5" />
          </button>
          <div>
            <h2 className="text-2xl lg:text-3xl font-heading font-bold text-foreground">{title}</h2>
            {subtitle && <p className="text-lg text-muted-foreground mt-1">{subtitle}</p>}
          </div>
        </div>

        <div className="flex items-center gap-2 lg:gap-3">
          {/* Search - hidden on mobile */}
          <div className="hidden md:flex items-center gap-3 bg-muted rounded-2xl px-5 h-[52px] w-80">
            <Search className="w-5 h-5 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search anything..."
              className="bg-transparent text-lg outline-none w-full placeholder:text-muted-foreground/60"
            />
          </div>

          <button className="relative p-3 rounded-xl hover:bg-muted transition-colors">
            <Bell className="w-6 h-6 text-muted-foreground" />
            <span className="absolute top-2.5 right-2.5 w-2.5 h-2.5 bg-accent rounded-full" />
          </button>

          <Button size="sm" className="hidden sm:flex h-11 gap-2 bg-primary hover:bg-primary/90 text-primary-foreground rounded-2xl px-6 shadow-lg shadow-primary/25">
            <Plus className="w-5 h-5" />
            <span className="text-lg font-bold">Quick Add</span>
          </Button>

          {/* Avatar */}
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white text-lg font-bold cursor-pointer">
            P
          </div>
        </div>
      </div>
    </header>
  );
}
