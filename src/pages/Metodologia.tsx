import { AcademicLayout } from "@/components/layout/AcademicLayout";
import { SectionHeader } from "@/components/academic/SectionHeader";
import { Wrench, Database, Search, FileText, Users, GitBranch, CheckSquare } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

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
              Este trabajo adopta un enfoque metodológico mixto, combinando técnicas de 
              investigación cualitativa y cuantitativa para abordar de manera integral 
              el objeto de estudio. La elección de este enfoque responde a la complejidad 
              del fenómeno analizado, que requiere tanto la comprensión profunda de las 
              experiencias y percepciones de los actores educativos como el análisis 
              sistemático de datos cuantitativos sobre adopción y uso de tecnologías de IA.
            </p>
            
            <p>
              El diseño metodológico se estructura en tres fases principales: (1) revisión 
              sistemática de literatura, (2) análisis documental de herramientas y plataformas, 
              y (3) síntesis integradora de hallazgos. Cada fase contribuye a los objetivos 
              específicos del estudio y permite triangular la información obtenida desde 
              múltiples fuentes.
            </p>
          </div>
        </section>

        {/* Fases del Trabajo */}
        <section className="mb-12">
          <h2 className="academic-heading">2.2 Fases del Trabajo</h2>
          
          <div className="space-y-6">
            <PhaseCard 
              number={1}
              title="Revisión Sistemática de Literatura"
              period="Semanas 1-4"
              description="Búsqueda, selección y análisis crítico de fuentes académicas relevantes sobre IA en educación superior."
              activities={[
                "Definición de criterios de inclusión/exclusión",
                "Búsqueda en bases de datos (Scopus, WoS, ERIC)",
                "Selección mediante protocolo PRISMA",
                "Análisis temático de contenidos"
              ]}
              icon={Search}
            />
            
            <PhaseCard 
              number={2}
              title="Análisis de Herramientas"
              period="Semanas 5-8"
              description="Exploración y evaluación práctica de las principales herramientas de IA aplicadas a la educación."
              activities={[
                "Identificación de herramientas relevantes",
                "Pruebas de funcionalidad",
                "Evaluación con rúbrica diseñada",
                "Documentación de hallazgos"
              ]}
              icon={Database}
            />
            
            <PhaseCard 
              number={3}
              title="Síntesis e Integración"
              period="Semanas 9-12"
              description="Integración de hallazgos, elaboración de conclusiones y redacción del informe final."
              activities={[
                "Triangulación de datos",
                "Elaboración de visualizaciones",
                "Redacción académica",
                "Revisión y corrección"
              ]}
              icon={FileText}
            />
          </div>
        </section>

        {/* Herramientas Utilizadas */}
        <section className="mb-12">
          <h2 className="academic-heading">2.3 Herramientas Utilizadas</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <ToolCard 
              title="Gestión Bibliográfica"
              tools={[
                { name: "Zotero", use: "Gestión de referencias y citas" },
                { name: "Mendeley", use: "Lectura y anotación de PDFs" },
                { name: "Connected Papers", use: "Mapeo de literatura relacionada" }
              ]}
            />
            
            <ToolCard 
              title="Búsqueda y Análisis"
              tools={[
                { name: "Scopus", use: "Base de datos principal" },
                { name: "Web of Science", use: "Verificación cruzada" },
                { name: "Google Scholar", use: "Búsqueda complementaria" }
              ]}
            />
            
            <ToolCard 
              title="Visualización de Datos"
              tools={[
                { name: "Canva", use: "Infografías y gráficos" },
                { name: "Flourish", use: "Visualizaciones interactivas" },
                { name: "Miro", use: "Mapas conceptuales" }
              ]}
            />
            
            <ToolCard 
              title="Colaboración"
              tools={[
                { name: "Google Workspace", use: "Documentos compartidos" },
                { name: "Notion", use: "Gestión del proyecto" },
                { name: "Discord", use: "Comunicación del equipo" }
              ]}
            />
          </div>
        </section>

        {/* Criterios de Calidad */}
        <section className="mb-12">
          <h2 className="academic-heading">2.4 Criterios de Calidad</h2>
          
          <div className="academic-body mb-8">
            <p>
              Para garantizar la rigurosidad del trabajo, se han aplicado los siguientes 
              criterios de calidad adaptados de las directrices para investigación cualitativa:
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <QualityCard 
              title="Credibilidad"
              description="Triangulación de fuentes y métodos, revisión por pares entre miembros del equipo."
            />
            <QualityCard 
              title="Transferibilidad"
              description="Descripción detallada del contexto y procedimientos para permitir aplicabilidad en otros entornos."
            />
            <QualityCard 
              title="Dependencia"
              description="Documentación exhaustiva del proceso de investigación mediante auditoría de seguimiento."
            />
            <QualityCard 
              title="Confirmabilidad"
              description="Registro de decisiones metodológicas y reflexividad sobre el papel de los investigadores."
            />
          </div>
        </section>

        {/* Proceso de Trabajo en Equipo */}
        <section>
          <h2 className="academic-heading">2.5 Organización del Equipo</h2>
          
          <Card className="bg-secondary/30">
            <CardContent className="p-8">
              <div className="flex items-center gap-4 mb-6">
                <Users className="h-8 w-8 text-primary" />
                <div>
                  <h3 className="font-serif text-xl font-semibold">Distribución de Responsabilidades</h3>
                  <p className="text-muted-foreground">Modelo de trabajo colaborativo con roles rotativos</p>
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium text-foreground mb-3">Roles Asignados</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <CheckSquare className="h-4 w-4 text-accent" />
                      <span>Coordinador/a de proyecto</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckSquare className="h-4 w-4 text-accent" />
                      <span>Responsable de búsqueda bibliográfica</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckSquare className="h-4 w-4 text-accent" />
                      <span>Encargado/a de análisis de herramientas</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckSquare className="h-4 w-4 text-accent" />
                      <span>Editor/a y diseñador/a web</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-medium text-foreground mb-3">Dinámicas de Trabajo</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <GitBranch className="h-4 w-4 text-accent" />
                      <span>Reuniones semanales de seguimiento</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <GitBranch className="h-4 w-4 text-accent" />
                      <span>Revisión cruzada de borradores</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <GitBranch className="h-4 w-4 text-accent" />
                      <span>Control de versiones documentales</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <GitBranch className="h-4 w-4 text-accent" />
                      <span>Retroalimentación continua</span>
                    </li>
                  </ul>
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
  icon: typeof Search;
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
      <CardHeader className="pb-2">
        <CardTitle className="text-base font-medium">{title}</CardTitle>
      </CardHeader>
      <CardContent>
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

interface QualityCardProps {
  title: string;
  description: string;
}

function QualityCard({ title, description }: QualityCardProps) {
  return (
    <Card className="bg-card">
      <CardContent className="p-5">
        <h4 className="font-serif font-semibold text-primary mb-2">{title}</h4>
        <p className="text-sm text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  );
}

export default Metodologia;
