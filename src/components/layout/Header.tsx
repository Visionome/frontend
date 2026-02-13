import { Moon, Sun } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface HeaderProps {
  darkMode: boolean;
  onToggleDark: () => void;
}

export function Header({ darkMode, onToggleDark }: HeaderProps) {
  return (
    <header className="flex h-14 items-center justify-between border-b px-4">
      <div className="flex items-center gap-3">
        <img src="/frontend/assets/visionome-logo.png" alt="VISIONome" className="h-8" />
        <span className="text-lg font-semibold tracking-tight">VISIONome</span>
      </div>
      <Button variant="ghost" size="icon" onClick={onToggleDark} aria-label="Toggle dark mode">
        {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
      </Button>
    </header>
  );
}
