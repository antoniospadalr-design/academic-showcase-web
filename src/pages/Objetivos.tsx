import { AcademicLayout } from "@/components/layout/AcademicLayout";
import { SectionHeader } from "@/components/academic/SectionHeader";
import { Target, CheckCircle2, Lightbulb, Users, Cpu, BarChart3 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Objetivos = () => {
  return (
    <AcademicLayout>
      <SectionHeader 
        title="Objetivos"
        subtitle="Metas de investigación y alcance del estudio"
        icon={Target}
      />
      
      <div className="px-6 md:px-12 py-12 max-w-5xl">
        {/* Objetivo General */}
        <section className="mb-16">
          <h2 className="academic-heading flex items-center gap-3">
            <div className="p-2 bg-accent/20 rounded-lg">
              <Lightbulb className="h-5 w-5 text-accent" />
            </div>
            Objetivo General
          </h2>
          
          <Card className="bg-secondary/50 border-accent/30">
            <CardContent className="p-8">
              <p className="text-lg md:text-xl leading-relaxed text-foreground">
                Analizar el estado actual del periodismo deportivo en la era digital mediante la 
                creación y gestión de plataformas multimedia (WordPress, Instagram y YouTube), 
                complementado con entrevistas a periodistas especializados, con el fin de 
                comprender las transformaciones profesionales, los desafíos del intrusismo y las 
                nuevas dinámicas de producción de contenidos deportivos en el ecosistema digital.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Objetivos Específicos */}
        <section className="mb-16">
          <h2 className="academic-heading flex items-center gap-3">
            <div className="p-2 bg-primary/10 rounded-lg">
              <CheckCircle2 className="h-5 w-5 text-primary" />
            </div>
            Objetivos Específicos
          </h2>
          
          <div className="grid gap-6">
            <ObjectiveCard 
              number={1}
              title="Experimentar con Plataformas Digitales"
              description="Crear y gestionar un sitio web en WordPress y perfiles activos en Instagram y YouTube para experimentar de primera mano con los formatos, lenguajes y dinámicas propias del periodismo deportivo digital."
              icon={Cpu}
            />
            
            <ObjectiveCard 
              number={2}
              title="Recopilar Perspectivas Profesionales"
              description="Realizar entrevistas estructuradas a periodistas especializados en baloncesto, fútbol masculino, fútbol femenino y fútbol formativo para obtener una visión directa sobre los retos actuales de la profesión."
              icon={Users}
            />
            
            <ObjectiveCard 
              number={3}
              title="Analizar la Transformación Digital"
              description="Estudiar cómo la digitalización y las redes sociales han modificado las rutinas de producción, difusión e interacción en el periodismo deportivo contemporáneo."
              icon={BarChart3}
            />
            
            <ObjectiveCard 
              number={4}
              title="Identificar el Problema del Intrusismo"
              description="Examinar críticamente el fenómeno del intrusismo profesional y su impacto en la legitimidad, calidad y valoración del trabajo periodístico en el ámbito deportivo."
              icon={Target}
            />
            
            <ObjectiveCard 
              number={5}
              title="Evaluar Estrategias de Marca Personal"
              description="Comprender la importancia de la construcción de marca personal, la gestión de comunidades digitales y la adaptación a algoritmos de plataformas como requisitos profesionales actuales."
              icon={Lightbulb}
            />

            <ObjectiveCard 
              number={6}
              title="Integrar Teoría y Práctica"
              description="Vincular el marco teórico revisado con la experiencia práctica de producción multimedia y los testimonios profesionales para ofrecer un análisis integral del periodismo deportivo actual."
              icon={CheckCircle2}
            />
          </div>
        </section>

        {/* Especialización Temática */}
        <section>
          <h2 className="academic-heading">Especialización Temática</h2>
          
          <div className="academic-body space-y-6">
            <p>
              El presente trabajo se especializa en tres áreas temáticas interrelacionadas 
              que constituyen los pilares fundamentales del análisis:
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <SpecializationCard 
                title="Producción Multimedia"
                items={[
                  "Creación de sitio WordPress",
                  "Gestión de perfil Instagram",
                  "Producción de canal YouTube",
                  "Diseño de parrilla multimedia"
                ]}
              />
              
              <SpecializationCard 
                title="Análisis Profesional"
                items={[
                  "Entrevistas estructuradas",
                  "Periodismo de baloncesto",
                  "Periodismo de fútbol",
                  "Comparativa disciplinar"
                ]}
              />
              
              <SpecializationCard 
                title="Contexto Digital"
                items={[
                  "Intrusismo profesional",
                  "Algoritmos y visibilidad",
                  "Marca personal",
                  "Nuevos modelos de negocio"
                ]}
              />
            </div>
          </div>
        </section>
      </div>
    </AcademicLayout>
  );
};

interface ObjectiveCardProps {
  number: number;
  title: string;
  description: string;
  icon: typeof Target;
}

function ObjectiveCard({ number, title, description, icon: Icon }: ObjectiveCardProps) {
  return (
    <Card className="hover:shadow-md transition-shadow">
      <CardContent className="p-6">
        <div className="flex gap-6">
          <div className="flex-shrink-0">
            <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
              <span className="text-xl font-serif font-bold text-primary-foreground">{number}</span>
            </div>
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-2">
              <Icon className="h-5 w-5 text-accent" />
              <h3 className="font-serif text-lg font-semibold text-foreground">{title}</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed">{description}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

interface SpecializationCardProps {
  title: string;
  items: string[];
}

function SpecializationCard({ title, items }: SpecializationCardProps) {
  return (
    <Card className="bg-card hover:shadow-md transition-shadow">
      <CardContent className="p-6">
        <h4 className="font-serif text-lg font-semibold text-primary mb-4">{title}</h4>
        <ul className="space-y-2">
          {items.map((item, index) => (
            <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
              <CheckCircle2 className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}

export default Objetivos;
