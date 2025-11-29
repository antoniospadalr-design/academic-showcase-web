import { AcademicLayout } from "@/components/layout/AcademicLayout";
import { ArrowRight, BookOpen, Users, Calendar, Award } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-academic.jpg";

const Index = () => {
  return (
    <AcademicLayout>
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/60" />
        </div>
        
        {/* Content */}
        <div className="relative z-10 px-6 md:px-12 py-16 max-w-4xl">
          <div className="animate-fade-in">
            <span className="inline-block px-4 py-2 bg-accent/20 text-accent rounded-full text-sm font-medium mb-6">
              Trabajo de Investigación Universitaria
            </span>
            
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6">
              El Impacto de la Inteligencia Artificial en la Educación Superior
            </h1>
            
            <p className="text-lg md:text-xl text-primary-foreground/90 leading-relaxed mb-8 max-w-2xl">
              Un análisis exhaustivo sobre la transformación digital en las universidades 
              y el rol de las tecnologías emergentes en los procesos de enseñanza-aprendizaje.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                asChild 
                size="lg" 
                className="bg-accent hover:bg-accent/90 text-accent-foreground font-medium"
              >
                <Link to="/introduccion">
                  Comenzar Lectura
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button 
                asChild 
                variant="outline" 
                size="lg"
                className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
              >
                <Link to="/autores">
                  Conocer al Equipo
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Info Cards */}
      <section className="px-6 md:px-12 py-16 bg-secondary/30">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <InfoCard 
              icon={BookOpen}
              title="Asignatura"
              value="Tecnología Educativa"
              subtitle="Grado en Educación"
            />
            <InfoCard 
              icon={Users}
              title="Grupo"
              value="Equipo Alpha"
              subtitle="4 investigadores"
            />
            <InfoCard 
              icon={Calendar}
              title="Curso Académico"
              value="2024-2025"
              subtitle="Segundo Semestre"
            />
            <InfoCard 
              icon={Award}
              title="Universidad"
              value="UCM"
              subtitle="Facultad de Educación"
            />
          </div>
        </div>
      </section>

      {/* Quick Navigation */}
      <section className="px-6 md:px-12 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-8 text-center">
            Estructura del Trabajo
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <NavCard 
              number="01"
              title="Introducción"
              description="Contexto y marco teórico del impacto de la IA en educación superior"
              href="/introduccion"
            />
            <NavCard 
              number="02"
              title="Objetivos"
              description="Metas generales y específicas de la investigación"
              href="/objetivos"
            />
            <NavCard 
              number="03"
              title="Metodología"
              description="Enfoque metodológico y herramientas utilizadas"
              href="/metodologia"
            />
            <NavCard 
              number="04"
              title="Desarrollo"
              description="Análisis multimedia con recursos interactivos"
              href="/desarrollo"
            />
            <NavCard 
              number="05"
              title="Conclusiones"
              description="Hallazgos principales y reflexiones finales"
              href="/conclusiones"
            />
            <NavCard 
              number="06"
              title="Bibliografía"
              description="Fuentes consultadas en formato APA 7ª edición"
              href="/bibliografia"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 md:px-12 py-8 bg-primary text-primary-foreground">
        <div className="max-w-6xl mx-auto text-center">
          <p className="font-serif text-lg mb-2">
            Trabajo Académico — Universidad Complutense de Madrid
          </p>
          <p className="text-sm text-primary-foreground/70">
            © 2024-2025 Equipo Alpha. Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </AcademicLayout>
  );
};

interface InfoCardProps {
  icon: typeof BookOpen;
  title: string;
  value: string;
  subtitle: string;
}

function InfoCard({ icon: Icon, title, value, subtitle }: InfoCardProps) {
  return (
    <div className="bg-card rounded-xl p-6 border border-border hover:shadow-md transition-shadow">
      <div className="flex items-start gap-4">
        <div className="p-3 bg-primary/10 rounded-lg">
          <Icon className="h-6 w-6 text-primary" />
        </div>
        <div>
          <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">{title}</p>
          <p className="font-serif text-xl font-semibold text-foreground">{value}</p>
          <p className="text-sm text-muted-foreground">{subtitle}</p>
        </div>
      </div>
    </div>
  );
}

interface NavCardProps {
  number: string;
  title: string;
  description: string;
  href: string;
}

function NavCard({ number, title, description, href }: NavCardProps) {
  return (
    <Link 
      to={href}
      className="group bg-card rounded-xl p-6 border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300"
    >
      <span className="text-5xl font-serif font-bold text-primary/20 group-hover:text-primary/40 transition-colors">
        {number}
      </span>
      <h3 className="font-serif text-xl font-semibold text-foreground mt-2 mb-2 group-hover:text-primary transition-colors">
        {title}
      </h3>
      <p className="text-sm text-muted-foreground leading-relaxed">
        {description}
      </p>
      <div className="mt-4 flex items-center text-sm text-accent font-medium opacity-0 group-hover:opacity-100 transition-opacity">
        Leer más <ArrowRight className="ml-2 h-4 w-4" />
      </div>
    </Link>
  );
}

export default Index;
