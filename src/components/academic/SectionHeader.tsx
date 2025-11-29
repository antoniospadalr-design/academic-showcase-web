import { ReactNode } from "react";
import { LucideIcon } from "lucide-react";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  icon?: LucideIcon;
  children?: ReactNode;
}

export function SectionHeader({ title, subtitle, icon: Icon, children }: SectionHeaderProps) {
  return (
    <header className="border-b border-border bg-secondary/30 px-6 py-8 md:px-12 md:py-12">
      <div className="max-w-4xl">
        <div className="flex items-center gap-4 mb-4">
          {Icon && (
            <div className="p-3 bg-primary rounded-xl shadow-md">
              <Icon className="h-6 w-6 text-primary-foreground" />
            </div>
          )}
          <div>
            <h1 className="academic-title text-3xl md:text-4xl">{title}</h1>
            {subtitle && (
              <p className="academic-subtitle text-base md:text-lg mt-2">{subtitle}</p>
            )}
          </div>
        </div>
        {children}
      </div>
    </header>
  );
}
