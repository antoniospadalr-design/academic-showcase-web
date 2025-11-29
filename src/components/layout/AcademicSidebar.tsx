import { NavLink, useLocation } from "react-router-dom";
import { 
  Home, 
  BookOpen, 
  Target, 
  Wrench, 
  Layers, 
  CheckCircle, 
  Library, 
  Users,
  Menu,
  X,
  GraduationCap
} from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

const navItems = [
  { title: "Portada", url: "/", icon: Home },
  { title: "Introducción", url: "/introduccion", icon: BookOpen },
  { title: "Objetivos", url: "/objetivos", icon: Target },
  { title: "Metodología", url: "/metodologia", icon: Wrench },
  { title: "Desarrollo", url: "/desarrollo", icon: Layers },
  { title: "Conclusiones", url: "/conclusiones", icon: CheckCircle },
  { title: "Bibliografía", url: "/bibliografia", icon: Library },
  { title: "Autores", url: "/autores", icon: Users },
];

export function AcademicSidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 left-4 z-50 lg:hidden p-3 bg-sidebar rounded-lg shadow-lg text-sidebar-foreground hover:bg-sidebar-accent transition-colors"
        aria-label="Toggle menu"
      >
        {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </button>

      {/* Overlay for mobile */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-foreground/20 backdrop-blur-sm z-30 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={cn(
          "fixed left-0 top-0 h-screen w-72 bg-sidebar text-sidebar-foreground z-40 transition-transform duration-300 ease-in-out flex flex-col shadow-xl",
          isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        )}
      >
        {/* Header */}
        <div className="p-6 border-b border-sidebar-border">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-sidebar-primary rounded-lg">
              <GraduationCap className="h-6 w-6 text-sidebar-primary-foreground" />
            </div>
            <div>
              <h1 className="font-serif text-lg font-semibold text-sidebar-foreground">
                Trabajo Académico
              </h1>
              <p className="text-xs text-sidebar-foreground/70">
                Universidad 2024-2025
              </p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 py-4 px-3 overflow-y-auto">
          <ul className="space-y-1">
            {navItems.map((item) => {
              const isActive = location.pathname === item.url;
              return (
                <li key={item.url}>
                  <NavLink
                    to={item.url}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200",
                      isActive
                        ? "bg-sidebar-primary text-sidebar-primary-foreground shadow-md"
                        : "text-sidebar-foreground/80 hover:bg-sidebar-accent hover:text-sidebar-foreground"
                    )}
                  >
                    <item.icon className={cn(
                      "h-5 w-5 transition-transform",
                      isActive && "scale-110"
                    )} />
                    <span>{item.title}</span>
                    {isActive && (
                      <div className="ml-auto w-1.5 h-1.5 rounded-full bg-sidebar-primary-foreground" />
                    )}
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Footer */}
        <div className="p-4 border-t border-sidebar-border">
          <div className="text-xs text-sidebar-foreground/60 text-center">
            <p>Grupo de Investigación</p>
            <p className="font-medium text-sidebar-primary mt-1">Ciencias de la Educación</p>
          </div>
        </div>
      </aside>
    </>
  );
}
