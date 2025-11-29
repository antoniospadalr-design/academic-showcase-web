import { AcademicLayout } from "@/components/layout/AcademicLayout";
import { SectionHeader } from "@/components/academic/SectionHeader";
import { AuthorCard } from "@/components/academic/AuthorCard";
import { Users, Award, BookOpen, Target } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Autores = () => {
  return (
    <AcademicLayout>
      <SectionHeader 
        title="Autores"
        subtitle="Equipo de investigación"
        icon={Users}
      />
      
      <div className="px-6 md:px-12 py-12 max-w-5xl">
        {/* Introducción del equipo */}
        <section className="mb-12">
          <div className="academic-body">
            <p>
              Este trabajo ha sido elaborado por el <strong>Equipo Alpha</strong>, un grupo 
              de investigación conformado por estudiantes del Grado en Educación de la 
              Universidad Complutense de Madrid. Cada miembro ha contribuido con sus 
              conocimientos y competencias específicas para lograr un trabajo riguroso 
              y comprehensivo.
            </p>
          </div>
        </section>

        {/* Fichas de autores */}
        <section className="mb-12">
          <h2 className="academic-heading">Miembros del Equipo</h2>
          
          <div className="space-y-6">
            <AuthorCard 
              name="María García López"
              role="Coordinadora del Proyecto"
              institution="Universidad Complutense de Madrid"
              email="m.garcia@ucm.es"
              bio="Estudiante de cuarto curso del Grado en Educación con especialización en Tecnología Educativa. Interesada en la investigación sobre metodologías activas y el uso de herramientas digitales en el aula. Ha participado en proyectos de innovación docente y cuenta con experiencia en coordinación de equipos de trabajo."
              specialization="Tecnología Educativa y Metodologías Activas"
            />
            
            <AuthorCard 
              name="Carlos Rodríguez Martín"
              role="Responsable de Investigación Bibliográfica"
              institution="Universidad Complutense de Madrid"
              email="c.rodriguez@ucm.es"
              bio="Estudiante del Grado en Educación con formación complementaria en análisis de datos educativos. Experiencia en gestión documental y revisión sistemática de literatura. Colaborador en el grupo de investigación GITE-UCM durante el último año académico."
              specialization="Análisis de Datos y Gestión Documental"
            />
            
            <AuthorCard 
              name="Ana Fernández Ruiz"
              role="Analista de Herramientas Tecnológicas"
              institution="Universidad Complutense de Madrid"
              email="a.fernandez@ucm.es"
              bio="Estudiante del Grado en Educación con especial interés en la inteligencia artificial aplicada al ámbito educativo. Cuenta con certificaciones en herramientas de productividad y ha realizado cursos especializados en IA generativa. Miembro activo de la comunidad EdTech UCM."
              specialization="Inteligencia Artificial y EdTech"
            />
            
            <AuthorCard 
              name="David Sánchez Pérez"
              role="Editor y Diseñador Web"
              institution="Universidad Complutense de Madrid"
              email="d.sanchez@ucm.es"
              bio="Estudiante del Grado en Educación con conocimientos avanzados en diseño web y comunicación visual. Experiencia en la creación de recursos educativos digitales y materiales multimedia. Colaborador en proyectos de divulgación científica del departamento de Didáctica."
              specialization="Diseño Web y Comunicación Visual"
            />
          </div>
        </section>

        {/* Contribuciones */}
        <section className="mb-12">
          <h2 className="academic-heading">Contribuciones al Trabajo</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <ContributionCard 
              author="María García López"
              icon={Target}
              contributions={[
                "Coordinación general del proyecto",
                "Redacción de introducción y conclusiones",
                "Supervisión de coherencia y estilo",
                "Gestión de plazos y entregas"
              ]}
            />
            
            <ContributionCard 
              author="Carlos Rodríguez Martín"
              icon={BookOpen}
              contributions={[
                "Búsqueda y selección de fuentes",
                "Elaboración de la revisión bibliográfica",
                "Redacción de marco teórico",
                "Formateo de citas APA"
              ]}
            />
            
            <ContributionCard 
              author="Ana Fernández Ruiz"
              icon={Award}
              contributions={[
                "Análisis de herramientas de IA",
                "Evaluación de plataformas educativas",
                "Redacción del desarrollo",
                "Creación de visualizaciones de datos"
              ]}
            />
            
            <ContributionCard 
              author="David Sánchez Pérez"
              icon={Users}
              contributions={[
                "Diseño y desarrollo de la web",
                "Integración de recursos multimedia",
                "Maquetación de contenidos",
                "Revisión de accesibilidad"
              ]}
            />
          </div>
        </section>

        {/* Agradecimientos */}
        <section>
          <h2 className="academic-heading">Agradecimientos</h2>
          
          <Card className="bg-secondary/30">
            <CardContent className="p-8">
              <div className="academic-body space-y-4">
                <p>
                  El equipo desea expresar su agradecimiento a todas las personas e 
                  instituciones que han hecho posible la realización de este trabajo:
                </p>
                
                <ul className="space-y-2 ml-4">
                  <li className="text-muted-foreground">
                    • A la <strong>Dra. Elena Martínez</strong>, profesora de la asignatura, 
                    por su orientación y apoyo constante durante el desarrollo del proyecto.
                  </li>
                  <li className="text-muted-foreground">
                    • Al <strong>Departamento de Didáctica y Organización Escolar</strong> de 
                    la UCM por facilitar el acceso a recursos bibliográficos especializados.
                  </li>
                  <li className="text-muted-foreground">
                    • A la <strong>Biblioteca de la Facultad de Educación</strong> por su 
                    asistencia en la localización de fuentes y gestión de préstamos interbibliotecarios.
                  </li>
                  <li className="text-muted-foreground">
                    • A nuestras <strong>familias y compañeros</strong> por su comprensión 
                    y apoyo durante las semanas de trabajo intensivo.
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </AcademicLayout>
  );
};

interface ContributionCardProps {
  author: string;
  icon: typeof Target;
  contributions: string[];
}

function ContributionCard({ author, icon: Icon, contributions }: ContributionCardProps) {
  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 bg-primary/10 rounded-lg">
            <Icon className="h-5 w-5 text-primary" />
          </div>
          <h4 className="font-serif font-semibold text-foreground">{author}</h4>
        </div>
        <ul className="space-y-2">
          {contributions.map((contribution, index) => (
            <li key={index} className="text-sm text-muted-foreground flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
              {contribution}
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}

export default Autores;
