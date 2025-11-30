import { AcademicLayout } from "@/components/layout/AcademicLayout";
import { SectionHeader } from "@/components/academic/SectionHeader";
import { AuthorCard } from "@/components/academic/AuthorCard";
import { Users, Award, Camera, Mic } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Autores = () => {
  return (
    <AcademicLayout>
      <SectionHeader 
        title="Autores"
        subtitle="Equipo de investigación multimedia"
        icon={Users}
      />
      
      <div className="px-6 md:px-12 py-12 max-w-5xl">
        {/* Introducción del equipo */}
        <section className="mb-12">
          <div className="academic-body">
            <p>
              Este trabajo ha sido elaborado por un equipo multidisciplinario de estudiantes de 
              tercer año de Periodismo, cada uno aportando competencias específicas en áreas como 
              producción audiovisual, gestión de redes sociales y comunicación deportiva.
            </p>
          </div>
        </section>

        {/* Fichas de autores */}
        <section className="mb-12">
          <h2 className="academic-heading">Miembros del Equipo</h2>
          
          <div className="space-y-6">
            <AuthorCard 
              name="Antonio Spada"
              role="Coordinador y Analista Deportivo"
              institution="Grado en Periodismo — Tercer Año"
              email="a.spada@estudiantes.es"
              bio="Futbolista semiprofesional de origen venezolano. Posee un nivel C1 de inglés y B1 de italiano. Su experiencia en el ámbito deportivo aporta una perspectiva práctica sobre la industria del fútbol, especialmente en temas relacionados con el rendimiento, la profesionalización y la realidad de los deportistas dentro del ecosistema mediático."
              specialization="Periodismo Deportivo y Análisis Futbolístico"
            />
            
            <AuthorCard 
              name="Israel Calero"
              role="Director de Producción Audiovisual"
              institution="Grado en Periodismo — Tercer Año"
              email="i.calero@estudiantes.es"
              bio="Técnico Superior en Producción Audiovisual. De nacionalidad española, cuenta con amplios conocimientos en narrativa audiovisual, gestión técnica y producción de contenidos digitales. Posee un nivel C1 de inglés. Su formación aporta al proyecto una visión profesional sobre los procesos técnicos, además de contar con amplia experiencia en la edición de videos."
              specialization="Producción Audiovisual y Edición de Video"
            />
            
            <AuthorCard 
              name="Juan Arrufat"
              role="Responsable de Entrevistas"
              institution="Grado en Periodismo — Tercer Año"
              email="j.arrufat@estudiantes.es"
              bio="Técnico Superior en Producción Audiovisual. Natural de Sevilla (Andalucía). Posee un nivel C1 de inglés. Especializado en producción, edición y planificación de contenidos, contribuye al proyecto con una mirada técnica vinculada a las nuevas dinámicas del periodismo digital. Siendo el artífice principal de varias entrevistas."
              specialization="Entrevistas y Producción de Contenidos"
            />
            
            <AuthorCard 
              name="Erik Allerding"
              role="Gestor de Redes Sociales"
              institution="Grado en Periodismo — Tercer Año"
              email="e.allerding@estudiantes.es"
              bio="Cantante de origen boliviano-ecuatoriano y español, concretamente madrileño. Posee un nivel C1 de inglés. Su experiencia en el ámbito artístico y musical fortalece el enfoque creativo del proyecto, su soltura al hablar, su experiencia utilizando ordenadores y demás aplicaciones, lo hacen un autor muy importante en la presentación, aportando competencias en comunicación digital y construcción de identidad en redes sociales."
              specialization="Redes Sociales y Comunicación Digital"
            />
          </div>
        </section>

        {/* Contribuciones */}
        <section className="mb-12">
          <h2 className="academic-heading">Contribuciones al Trabajo</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <ContributionCard 
              author="Antonio Spada"
              icon={Award}
              contributions={[
                "Coordinación general del proyecto",
                "Análisis de contenidos deportivos",
                "Redacción de conclusiones",
                "Gestión de contactos profesionales"
              ]}
            />
            
            <ContributionCard 
              author="Israel Calero"
              icon={Camera}
              contributions={[
                "Edición de videos de entrevistas",
                "Producción audiovisual",
                "Gestión técnica del canal YouTube",
                "Post-producción de contenidos"
              ]}
            />
            
            <ContributionCard 
              author="Juan Arrufat"
              icon={Mic}
              contributions={[
                "Realización de entrevistas",
                "Coordinación con periodistas",
                "Planificación de contenidos",
                "Revisión editorial"
              ]}
            />
            
            <ContributionCard 
              author="Erik Allerding"
              icon={Users}
              contributions={[
                "Gestión de redes sociales",
                "Diseño de publicaciones Instagram",
                "Estrategia de contenidos",
                "Community management"
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
                  El equipo desea expresar su agradecimiento a todas las personas que han hecho 
                  posible la realización de este proyecto:
                </p>
                
                <ul className="space-y-2 ml-4">
                  <li className="text-muted-foreground">
                    • A <strong>Jesús Flores</strong>, profesor de la asignatura de Multimedia, 
                    por su orientación y apoyo constante durante el desarrollo del proyecto.
                  </li>
                  <li className="text-muted-foreground">
                    • A los <strong>cuatro periodistas deportivos</strong> que generosamente 
                    compartieron su tiempo y experiencia en las entrevistas realizadas.
                  </li>
                  <li className="text-muted-foreground">
                    • A nuestras <strong>familias y amigos</strong> por su comprensión y apoyo 
                    durante las semanas de trabajo intensivo.
                  </li>
                  <li className="text-muted-foreground">
                    • A la comunidad de <strong>WordPress, Instagram y YouTube</strong> por 
                    proporcionar las plataformas que hicieron posible este proyecto multimedia.
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
  icon: typeof Award;
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
