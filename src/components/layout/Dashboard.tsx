import { NavLink, Outlet } from 'react-router-dom';
import { Dna, FlaskConical, HelpCircle } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Header } from './Header';
import { useState, useEffect } from 'react';

const NAV_ITEMS = [
  { to: '/', icon: Dna, label: 'Visualizer' },
  { to: '/analyzer', icon: FlaskConical, label: 'Analyzer' },
  { to: '/help', icon: HelpCircle, label: 'Help' },
] as const;

export function Dashboard() {
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
  }, [darkMode]);

  return (
    <div className="flex h-full flex-col">
      <Header darkMode={darkMode} onToggleDark={() => setDarkMode((d) => !d)} />
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar - desktop */}
        <nav className="hidden w-16 flex-col items-center gap-2 border-r py-4 md:flex">
          {NAV_ITEMS.map(({ to, icon: Icon, label }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              className={({ isActive }) =>
                cn(
                  'flex h-12 w-12 items-center justify-center rounded-lg transition-colors',
                  isActive
                    ? 'bg-primary/10 text-primary'
                    : 'text-muted-foreground hover:bg-accent hover:text-accent-foreground',
                )
              }
              title={label}
            >
              <Icon className="h-5 w-5" />
            </NavLink>
          ))}
        </nav>

        {/* Main content */}
        <main className="flex-1 overflow-auto">
          <Outlet />
        </main>

        {/* Bottom nav - mobile */}
        <nav className="fixed bottom-0 left-0 right-0 flex items-center justify-around border-t bg-background py-2 md:hidden">
          {NAV_ITEMS.map(({ to, icon: Icon, label }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              className={({ isActive }) =>
                cn(
                  'flex flex-col items-center gap-1 text-xs transition-colors',
                  isActive ? 'text-primary' : 'text-muted-foreground',
                )
              }
            >
              <Icon className="h-5 w-5" />
              <span>{label}</span>
            </NavLink>
          ))}
        </nav>
      </div>
    </div>
  );
}
