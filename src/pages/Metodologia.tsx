import { AcademicLayout } from "@/components/layout/AcademicLayout";
import { SectionHeader } from "@/components/academic/SectionHeader";
import { Wrench, Users, FileText, Camera, CheckSquare, Mic } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Metodologia = () => {
  return (
    <AcademicLayout>
      <SectionHeader 
        title="Metodología"
        subtitle="Enfoque, procesos y herramientas de investigación"
        icon={Wrench}
      />
      
      <div className="px-6 md:px-12 py-12 max-w-5xl">
        {/* Enfoque Metodológico */}
        <section className="mb-12">
          <h2 className="academic-heading">2.1 Enfoque Metodológico</h2>
          
          <div className="academic-body space-y-6">
            <p>
              La metodología de este trabajo de investigación cuenta con una parte práctica (las 
              entrevistas y búsqueda de profesionales) además de la creación de herramientas 
              multimedia como páginas web, blogs y redes sociales (Instagram, YouTube y WordPress), 
              pero por otro lado también se desarrolló mediante un enfoque más analítico el cual 
              estaremos explicando en este apartado. El proceso se desarrolló en varias fases 
              complementarias que permitieron integrar herramientas de producción multimedia, 
              investigación documental y entrevistas estructuradas.
            </p>
          </div>
        </section>

        {/* Fases del Trabajo */}
        <section className="mb-12">
          <h2 className="academic-heading">2.2 Fases del Trabajo</h2>
          
          <div className="space-y-6">
            <PhaseCard 
              number={1}
              title="Investigación Documental"
              period="Fase inicial"
              description="Se llevó a cabo una investigación documental acerca del tema (periodismo deportivo) centrada en tres ejes principales: transformación digital del periodismo, evolución del periodismo deportivo y problemas actuales del sector."
              activities={[
                "Transformación digital del periodismo",
                "Evolución del periodismo deportivo",
                "Intrusismo profesional y precarización",
                "Especialización y marca personal"
              ]}
              icon={FileText}
            />
            
            <PhaseCard 
              number={2}
              title="Búsqueda de Profesionales"
              period="Fase de contacto"
              description="Se evaluaron distintos perfiles de periodistas que pudieran encajar dentro del proyecto de investigación, contactándolos para pautar entrevistas."
              activities={[
                "Identificación de periodistas especializados",
                "Contacto con profesionales de distintas disciplinas",
                "Coordinación de entrevistas",
                "Elaboración de ocho preguntas estructuradas"
              ]}
              icon={Users}
            />
            
            <PhaseCard 
              number={3}
              title="Realización de Entrevistas"
              period="Fase de recopilación"
              description="Se realizaron entrevistas estructuradas a periodistas especializados en baloncesto, fútbol masculino, fútbol femenino y fútbol formativo."
              activities={[
                "Entrevistas grabadas en video",
                "Registro y categorización de respuestas",
                "Análisis de patrones comunes",
                "Identificación de diferencias disciplinares"
              ]}
              icon={Mic}
            />

            <PhaseCard 
              number={4}
              title="Desarrollo de Plataformas"
              period="Fase práctica"
              description="Diseño y desarrollo de sitio WordPress y perfiles en Instagram y YouTube para experimentar con formatos del periodismo digital."
              activities={[
                "Creación de página web en WordPress",
                "Gestión de perfil de Instagram",
                "Producción y gestión de canal YouTube",
                "Diseño de parrilla multimedia"
              ]}
              icon={Camera}
            />
          </div>
        </section>

        {/* Herramientas */}
        <section className="mb-12">
          <h2 className="academic-heading">2.3 Herramientas Utilizadas</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <ToolCard 
              title="Plataformas Multimedia"
              tools={[
                { name: "WordPress", use: "Sitio web principal del proyecto" },
                { name: "Instagram", use: "Narrativas visuales y actualidad" },
                { name: "YouTube", use: "Contenido audiovisual y entrevistas" }
              ]}
            />
            
            <ToolCard 
              title="Producción de Contenido"
              tools={[
                { name: "Canva", use: "Diseño de publicaciones y gráficos" },
                { name: "Aplicaciones de edición", use: "Edición de videos de entrevistas" },
                { name: "Herramientas de redes", use: "Gestión y programación" }
              ]}
            />
            
            <ToolCard 
              title="Investigación"
              tools={[
                { name: "Scopus", use: "Base de datos académica" },
                { name: "Google Scholar", use: "Búsqueda de literatura" },
                { name: "Medios digitales", use: "As, Clarín, Meridiano TV, VIP Deportivo" }
              ]}
            />
            
            <ToolCard 
              title="Colaboración"
              tools={[
                { name: "Google Workspace", use: "Documentos compartidos" },
                { name: "WhatsApp", use: "Coordinación del equipo" },
                { name: "Discord", use: "Comunicación y reuniones" }
              ]}
            />
          </div>
        </section>

        {/* Proceso */}
        <section>
          <h2 className="academic-heading">2.4 Integración y Cohesión</h2>
          
          <Card className="bg-secondary/30">
            <CardContent className="p-8">
              <div className="academic-body space-y-6">
                <p>
                  Para asegurar coherencia entre plataformas, se definió una línea editorial común 
                  basada en tres pilares:
                </p>
                
                <div className="grid md:grid-cols-3 gap-6 mt-6">
                  <div className="p-4 bg-card rounded-lg border border-border">
                    <CheckSquare className="h-6 w-6 text-accent mb-2" />
                    <h4 className="font-serif font-semibold text-foreground mb-2">Rigor Informativo</h4>
                    <p className="text-sm text-muted-foreground">
                      Contenido contrastado con fuentes claras
                    </p>
                  </div>
                  
                  <div className="p-4 bg-card rounded-lg border border-border">
                    <CheckSquare className="h-6 w-6 text-accent mb-2" />
                    <h4 className="font-serif font-semibold text-foreground mb-2">Accesibilidad Visual</h4>
                    <p className="text-sm text-muted-foreground">
                      Diseños adaptados y lenguaje claro
                    </p>
                  </div>
                  
                  <div className="p-4 bg-card rounded-lg border border-border">
                    <CheckSquare className="h-6 w-6 text-accent mb-2" />
                    <h4 className="font-serif font-semibold text-foreground mb-2">Perspectiva Crítica</h4>
                    <p className="text-sm text-muted-foreground">
                      Enfoque reflexivo sobre problemas estructurales
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </AcademicLayout>
  );
};

interface PhaseCardProps {
  number: number;
  title: string;
  period: string;
  description: string;
  activities: string[];
  icon: typeof FileText;
}

function PhaseCard({ number, title, period, description, activities, icon: Icon }: PhaseCardProps) {
  return (
    <Card className="hover:shadow-md transition-shadow">
      <CardContent className="p-6">
        <div className="flex gap-6">
          <div className="flex-shrink-0">
            <div className="w-14 h-14 rounded-xl bg-primary flex items-center justify-center">
              <Icon className="h-7 w-7 text-primary-foreground" />
            </div>
          </div>
          <div className="flex-1">
            <div className="flex items-start justify-between mb-2">
              <h3 className="font-serif text-lg font-semibold text-foreground">
                Fase {number}: {title}
              </h3>
              <span className="text-xs bg-accent/20 text-accent px-2 py-1 rounded-full font-medium">
                {period}
              </span>
            </div>
            <p className="text-muted-foreground mb-4">{description}</p>
            <ul className="space-y-1">
              {activities.map((activity, index) => (
                <li key={index} className="text-sm text-foreground/80 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                  {activity}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

interface ToolCardProps {
  title: string;
  tools: Array<{ name: string; use: string }>;
}

function ToolCard({ title, tools }: ToolCardProps) {
  return (
    <Card>
      <CardContent className="p-6">
        <h4 className="font-serif font-semibold text-primary mb-4">{title}</h4>
        <ul className="space-y-3">
          {tools.map((tool, index) => (
            <li key={index} className="flex justify-between items-start">
              <span className="font-medium text-foreground text-sm">{tool.name}</span>
              <span className="text-xs text-muted-foreground text-right max-w-[60%]">{tool.use}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}

export default Metodologia;
