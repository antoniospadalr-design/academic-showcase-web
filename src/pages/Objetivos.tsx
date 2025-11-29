import { AcademicLayout } from "@/components/layout/AcademicLayout";
import { SectionHeader } from "@/components/academic/SectionHeader";
import { Target, CheckCircle2, Lightbulb, Search, BarChart3 } from "lucide-react";
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
                Analizar de manera crítica y exhaustiva el impacto de la inteligencia artificial 
                en los procesos de enseñanza-aprendizaje de la educación superior, identificando 
                tanto las oportunidades de mejora pedagógica como los desafíos éticos y prácticos 
                que plantea su implementación en el contexto universitario contemporáneo.
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
              title="Revisión del Estado del Arte"
              description="Realizar una revisión sistemática de la literatura académica sobre inteligencia artificial aplicada a la educación superior, identificando las principales tendencias, enfoques teóricos y hallazgos empíricos de los últimos cinco años."
              icon={Search}
            />
            
            <ObjectiveCard 
              number={2}
              title="Análisis de Herramientas Tecnológicas"
              description="Examinar y categorizar las principales herramientas de IA utilizadas en contextos universitarios, evaluando sus funcionalidades, ventajas y limitaciones pedagógicas desde una perspectiva crítica."
              icon={BarChart3}
            />
            
            <ObjectiveCard 
              number={3}
              title="Evaluación del Impacto Pedagógico"
              description="Analizar cómo la implementación de sistemas de IA afecta a las metodologías de enseñanza, los roles docentes y las dinámicas de aprendizaje en diferentes disciplinas universitarias."
              icon={Lightbulb}
            />
            
            <ObjectiveCard 
              number={4}
              title="Identificación de Desafíos Éticos"
              description="Identificar y discutir los principales dilemas éticos asociados al uso de IA en educación superior, incluyendo cuestiones de privacidad, equidad, integridad académica y sesgo algorítmico."
              icon={Target}
            />
            
            <ObjectiveCard 
              number={5}
              title="Formulación de Recomendaciones"
              description="Proponer un conjunto de recomendaciones prácticas para la integración responsable y efectiva de herramientas de IA en instituciones de educación superior."
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
                title="IA Generativa"
                items={[
                  "Modelos de lenguaje (GPT, Claude, etc.)",
                  "Generación de contenido educativo",
                  "Asistentes virtuales de aprendizaje",
                  "Detección y prevención del plagio"
                ]}
              />
              
              <SpecializationCard 
                title="Aprendizaje Adaptativo"
                items={[
                  "Sistemas de tutoría inteligente",
                  "Personalización del aprendizaje",
                  "Analítica del aprendizaje (LA)",
                  "Evaluación automatizada"
                ]}
              />
              
              <SpecializationCard 
                title="Ética y Gobernanza"
                items={[
                  "Regulación de la IA educativa",
                  "Privacidad y protección de datos",
                  "Sesgo algorítmico",
                  "Equidad y accesibilidad"
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
