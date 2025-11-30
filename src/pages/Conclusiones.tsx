import { AcademicLayout } from "@/components/layout/AcademicLayout";
import { SectionHeader } from "@/components/academic/SectionHeader";
import { CheckCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Conclusiones = () => {
  return (
    <AcademicLayout>
      <SectionHeader 
        title="Conclusiones"
        subtitle="Síntesis de hallazgos y reflexiones finales"
        icon={CheckCircle}
      />
      
      <div className="px-6 md:px-12 py-12 max-w-4xl">
        <section className="mb-12">
          <div className="academic-body space-y-6">
            <p>
              El desarrollo de este proyecto permitió comprender de manera integral las 
              transformaciones que atraviesa el periodismo deportivo en la era digital. La creación 
              y gestión de una página web en WordPress, junto con perfiles activos en Instagram y 
              YouTube, facilitó la experimentación con nuevas formas de narrar y difundir información, 
              también permitió vivir de primera mano las dinámicas actuales de producción multimedia 
              que caracterizan a la profesión.
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="academic-heading">Principales Hallazgos</h2>
          
          <div className="space-y-6">
            <ConclusionCard 
              number={1}
              title="Transformación Digital Acelerada"
              content="Las entrevistas realizadas a periodistas especializados en baloncesto, fútbol masculino, fútbol femenino y fútbol formativo aportaron una perspectiva profesional clara. A través de sus testimonios se constató que la digitalización ha generado oportunidades inéditas para la difusión de contenidos, pero también ha intensificado la competencia, incrementado la presión por la inmediatez y transformado las rutinas laborales tradicionales."
            />
            
            <ConclusionCard 
              number={2}
              title="El Desafío del Intrusismo"
              content="Uno de los problemas más señalados a lo largo del proyecto fue el intrusismo profesional. La presencia de influencers, usuarios sin formación periodística y creadores de contenido que operan desde lógicas ajenas al rigor informativo representa un desafío para los periodistas. Este fenómeno contribuye a la deslegitimación del trabajo profesional y obliga a los comunicadores formados a diferenciarse mediante la calidad verificada de sus contenidos."
            />
            
            <ConclusionCard 
              number={3}
              title="Redes Sociales como Canales Estratégicos"
              content="El análisis del uso de redes sociales evidenció que estas plataformas actúan como canales de difusión estratégicos para construir identidad profesional y establecer relaciones directas con la audiencia. Instagram favorece narrativas visuales breves y dinámicas, mientras que YouTube permite profundizar en análisis y entrevistas, demostrando que cada plataforma requiere un estilo comunicativo diferenciado pero complementario."
            />
            
            <ConclusionCard 
              number={4}
              title="Versatilidad Profesional Requerida"
              content="Esta experiencia reforzó la idea de que la versatilidad y la adaptación son competencias esenciales para los periodistas deportivos actuales. El trabajo periodístico implica diseñar experiencias comunicativas completas: desde la estética visual hasta la estrategia de difusión y la interacción constante con la comunidad."
            />
            
            <ConclusionCard 
              number={5}
              title="Permanencia en Transición"
              content="El periodismo deportivo se encuentra en un proceso de transición permanente, donde la digitalización y las redes sociales redefinen sus límites y desafíos. La formación académica, combinada con la práctica activa en entornos digitales, se presenta como una vía para que los futuros periodistas puedan desenvolverse con éxito en esta nueva realidad profesional."
            />
          </div>
        </section>

        <section>
          <h2 className="academic-heading">Reflexión Final</h2>
          
          <Card className="bg-secondary/30 border-accent/30">
            <CardContent className="p-8">
              <div className="academic-body space-y-6">
                <p>
                  Este proyecto demostró que el periodismo deportivo continúa siendo una disciplina 
                  que maneja fenómenos sociales, económicos y culturales vinculados al deporte, y eso 
                  explica las estadísticas de por qué la mayoría de estudiantes de periodismo en 
                  primero de carrera quieren especializarse en el sector estudiado (periodismo 
                  deportivo). Sin embargo, su futuro depende de la capacidad de los profesionales para 
                  adaptarse a las nuevas tecnologías, defender la calidad informativa, innovar en 
                  formatos y comprender las dinámicas de las plataformas digitales que hoy articulan 
                  gran parte del consumo mediático.
                </p>
                
                <p>
                  La construcción del ecosistema multimedia del proyecto también permitió comprobar que 
                  el trabajo periodístico implica diseñar experiencias comunicativas completas: desde la 
                  estética visual hasta la estrategia de difusión y la interacción constante con la 
                  comunidad. Esta visión integrada refleja los cambios estructurales del sector, donde 
                  la figura del periodista se expande hacia funciones propias del creador de contenido, 
                  gestor de redes sociales y editor multimedia.
                </p>
                
                <p>
                  La experiencia desarrollada permitió concluir que el periodismo deportivo se encuentra 
                  en un proceso de transición permanente, donde la digitalización y las redes sociales 
                  redefinen sus límites y desafíos. La formación académica, combinada con la práctica 
                  activa en entornos digitales, se presenta como una vía para que los futuros periodistas 
                  puedan desenvolverse con éxito en esta nueva realidad profesional.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </AcademicLayout>
  );
};

interface ConclusionCardProps {
  number: number;
  title: string;
  content: string;
}

function ConclusionCard({ number, title, content }: ConclusionCardProps) {
  return (
    <Card className="hover:shadow-md transition-shadow">
      <CardContent className="p-6">
        <div className="flex gap-4">
          <div className="flex-shrink-0">
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
              <span className="text-lg font-serif font-bold text-primary-foreground">{number}</span>
            </div>
          </div>
          <div>
            <h3 className="font-serif text-lg font-semibold text-foreground mb-2">{title}</h3>
            <p className="text-muted-foreground leading-relaxed">{content}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default Conclusiones;
