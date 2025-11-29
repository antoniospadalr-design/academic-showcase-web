import { AcademicLayout } from "@/components/layout/AcademicLayout";
import { SectionHeader } from "@/components/academic/SectionHeader";
import { Citation, InlineCitation } from "@/components/academic/Citation";
import { CheckCircle, AlertTriangle, Lightbulb, ArrowRight } from "lucide-react";
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
        {/* Introducción a las conclusiones */}
        <section className="mb-12">
          <div className="academic-body space-y-6">
            <p>
              El presente trabajo ha permitido realizar un análisis exhaustivo del impacto de la 
              inteligencia artificial en la educación superior, abordando tanto las oportunidades 
              que estas tecnologías ofrecen como los desafíos que plantean para instituciones, 
              docentes y estudiantes. A continuación, se presentan las principales conclusiones 
              derivadas de la investigación, estructuradas en respuesta a los objetivos planteados.
            </p>
          </div>
        </section>

        {/* Conclusiones Principales */}
        <section className="mb-12">
          <h2 className="academic-heading">Principales Hallazgos</h2>
          
          <div className="space-y-6">
            <ConclusionCard 
              number={1}
              title="Transformación del paradigma educativo"
              content="La inteligencia artificial está provocando un cambio paradigmático en la educación superior, transitando de modelos centrados en la transmisión de conocimientos hacia enfoques adaptativos y personalizados. Este cambio requiere una reconceptualización de los roles de docentes y estudiantes, así como de las estructuras institucionales."
            />
            
            <ConclusionCard 
              number={2}
              title="Beneficios pedagógicos documentados"
              content="Los sistemas de tutoría inteligente y las plataformas de aprendizaje adaptativo han demostrado mejoras significativas en los resultados de aprendizaje, con incrementos promedio de 0.76 desviaciones estándar en comparación con métodos tradicionales. La personalización del aprendizaje emerge como el principal beneficio percibido tanto por docentes como por estudiantes."
            />
            
            <ConclusionCard 
              number={3}
              title="Desafíos éticos persistentes"
              content="Las cuestiones relacionadas con la privacidad de datos, el sesgo algorítmico y la integridad académica constituyen desafíos significativos que aún no han sido resueltos de manera satisfactoria. La aparición de herramientas de IA generativa como ChatGPT ha intensificado el debate sobre la originalidad y la autenticidad en el trabajo académico."
            />
            
            <ConclusionCard 
              number={4}
              title="Brecha digital y equidad"
              content="Existe un riesgo real de que la implementación de tecnologías de IA amplíe las brechas educativas existentes. Los estudiantes con mayores competencias digitales previas y acceso a recursos tecnológicos tienden a beneficiarse más de estas herramientas, lo que plantea serias cuestiones de equidad."
            />
            
            <ConclusionCard 
              number={5}
              title="Necesidad de formación docente"
              content="La formación del profesorado emerge como un factor crítico para el éxito de la integración de IA en educación superior. Las instituciones que han invertido en programas de desarrollo profesional docente en tecnologías de IA muestran tasas de adopción significativamente superiores."
            />
          </div>
        </section>

        {/* Respuesta a Objetivos */}
        <section className="mb-12">
          <h2 className="academic-heading">Respuesta a los Objetivos de Investigación</h2>
          
          <div className="academic-body space-y-6">
            <p>
              En relación con el <strong>objetivo general</strong> de analizar críticamente el 
              impacto de la IA en la educación superior, este trabajo ha permitido construir una 
              visión comprehensiva del fenómeno, identificando tanto las oportunidades de mejora 
              pedagógica como los desafíos éticos y prácticos que plantea su implementación.
            </p>
            
            <p>
              Respecto a los <strong>objetivos específicos</strong>:
            </p>
            
            <ul className="space-y-4 ml-4">
              <li className="flex gap-3">
                <CheckCircle className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                <span>Se realizó una revisión sistemática de más de 150 fuentes académicas, identificando las principales tendencias y hallazgos empíricos del período 2018-2024.</span>
              </li>
              <li className="flex gap-3">
                <CheckCircle className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                <span>Se categorizaron y evaluaron 156 herramientas de IA aplicadas a contextos universitarios, estableciendo criterios de evaluación pedagógica.</span>
              </li>
              <li className="flex gap-3">
                <CheckCircle className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                <span>Se analizó el impacto en metodologías de enseñanza y dinámicas de aprendizaje en diferentes disciplinas.</span>
              </li>
              <li className="flex gap-3">
                <CheckCircle className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                <span>Se identificaron y discutieron los principales dilemas éticos asociados al uso de IA en educación.</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Limitaciones */}
        <section className="mb-12">
          <h2 className="academic-heading flex items-center gap-3">
            <AlertTriangle className="h-6 w-6 text-accent" />
            Limitaciones del Estudio
          </h2>
          
          <div className="academic-body space-y-6">
            <p>
              Es necesario reconocer las limitaciones inherentes a este trabajo. En primer lugar, 
              la rápida evolución del campo implica que algunos hallazgos pueden quedar desactualizados 
              en un corto período de tiempo. La aparición de nuevas herramientas y modelos de IA, 
              como GPT-4 y sus sucesores, continúa transformando el panorama a un ritmo acelerado.
            </p>
            
            <p>
              En segundo lugar, el enfoque predominantemente bibliográfico del estudio limita la 
              capacidad de capturar las experiencias vividas de los actores educativos. Futuras 
              investigaciones podrían beneficiarse de la inclusión de metodologías empíricas como 
              entrevistas en profundidad o estudios de caso <InlineCitation author="Creswell & Poth" year="2018" />.
            </p>
            
            <p>
              Finalmente, el sesgo de publicación en la literatura revisada puede haber 
              sobrerepresentado los resultados positivos de la implementación de IA en educación, 
              ya que los estudios con resultados negativos o nulos tienden a publicarse con menor 
              frecuencia.
            </p>
          </div>
        </section>

        {/* Recomendaciones */}
        <section className="mb-12">
          <h2 className="academic-heading flex items-center gap-3">
            <Lightbulb className="h-6 w-6 text-accent" />
            Recomendaciones
          </h2>
          
          <div className="grid gap-4">
            <RecommendationCard 
              title="Para instituciones de educación superior"
              recommendations={[
                "Desarrollar políticas institucionales claras sobre el uso de IA en contextos académicos",
                "Invertir en programas de formación docente continuos y actualizados",
                "Establecer comités de ética para supervisar la implementación de tecnologías de IA",
                "Garantizar la accesibilidad y equidad en el acceso a herramientas tecnológicas"
              ]}
            />
            
            <RecommendationCard 
              title="Para docentes"
              recommendations={[
                "Adoptar una actitud crítica pero abierta hacia las nuevas tecnologías",
                "Participar activamente en programas de formación y actualización",
                "Diseñar evaluaciones que fomenten el pensamiento crítico y sean resistentes al uso indebido de IA",
                "Modelar el uso ético y responsable de herramientas de IA"
              ]}
            />
            
            <RecommendationCard 
              title="Para estudiantes"
              recommendations={[
                "Desarrollar competencias de alfabetización en IA y pensamiento crítico",
                "Utilizar herramientas de IA como apoyo al aprendizaje, no como sustituto",
                "Mantener la integridad académica y la originalidad en el trabajo",
                "Participar activamente en debates sobre el uso ético de la tecnología"
              ]}
            />
          </div>
        </section>

        {/* Reflexión Final */}
        <section>
          <h2 className="academic-heading">Reflexión Final</h2>
          
          <Card className="bg-secondary/30 border-accent/30">
            <CardContent className="p-8">
              <div className="academic-body space-y-6">
                <p>
                  La integración de la inteligencia artificial en la educación superior no es 
                  simplemente una cuestión técnica, sino fundamentalmente pedagógica y ética. 
                  Como señala <InlineCitation author="Selwyn" year="2019" />, debemos evitar 
                  tanto el determinismo tecnológico como el rechazo categórico, adoptando en 
                  cambio una postura crítica que nos permita aprovechar las oportunidades 
                  mientras mitigamos los riesgos.
                </p>
                
                <Citation 
                  author="Holmes et al."
                  year="2019"
                  text="El futuro de la IA en educación dependerá no solo de los avances tecnológicos, sino de las decisiones que tomemos como sociedad sobre cómo queremos que estas tecnologías se integren en nuestros sistemas educativos."
                  page="167"
                />
                
                <p>
                  Este trabajo pretende contribuir a ese diálogo necesario, proporcionando 
                  evidencias y reflexiones que permitan a los diferentes actores educativos 
                  tomar decisiones informadas sobre el uso de la IA en sus contextos específicos. 
                  El desafío que tenemos por delante es considerable, pero también lo es la 
                  oportunidad de construir una educación superior más personalizada, accesible 
                  y efectiva para todos.
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

interface RecommendationCardProps {
  title: string;
  recommendations: string[];
}

function RecommendationCard({ title, recommendations }: RecommendationCardProps) {
  return (
    <Card>
      <CardContent className="p-6">
        <h4 className="font-serif font-semibold text-primary mb-4">{title}</h4>
        <ul className="space-y-2">
          {recommendations.map((rec, index) => (
            <li key={index} className="flex items-start gap-3 text-sm text-muted-foreground">
              <ArrowRight className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
              <span>{rec}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}

export default Conclusiones;
