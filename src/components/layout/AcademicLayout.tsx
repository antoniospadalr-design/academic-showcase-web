import { ReactNode } from "react";
import { AcademicSidebar } from "./AcademicSidebar";

interface AcademicLayoutProps {
  children: ReactNode;
}

export function AcademicLayout({ children }: AcademicLayoutProps) {
  return (
    <div className="min-h-screen bg-background">
      <AcademicSidebar />
      <main className="lg:ml-72 min-h-screen">
        <div className="animate-fade-in">
          {children}
        </div>
      </main>
    </div>
  );
}
