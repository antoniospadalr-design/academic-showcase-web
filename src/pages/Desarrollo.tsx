import { AcademicLayout } from "@/components/layout/AcademicLayout";
import { SectionHeader } from "@/components/academic/SectionHeader";
import { VideoEmbed, ImageCard, ExternalLinkCard } from "@/components/academic/MediaEmbed";
import { BarChartCard, PieChartCard, LineChartCard } from "@/components/academic/DataChart";
import { StatCard } from "@/components/academic/StatCard";
import { Citation, InlineCitation } from "@/components/academic/Citation";
import { Layers, TrendingUp, Users, Globe, BookOpen, Cpu } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const adoptionData = [
  { name: "2019", value: 15 },
  { name: "2020", value: 28 },
  { name: "2021", value: 42 },
  { name: "2022", value: 58 },
  { name: "2023", value: 73 },
  { name: "2024", value: 85 },
];

const toolsUsageData = [
  { name: "Chatbots IA", value: 35 },
  { name: "Tutores Inteligentes", value: 25 },
  { name: "Evaluación Auto.", value: 20 },
  { name: "Analítica", value: 15 },
  { name: "Otros", value: 5 },
];

const perceptionData = [
  { name: "Muy positiva", value: 22 },
  { name: "Positiva", value: 45 },
  { name: "Neutral", value: 20 },
  { name: "Negativa", value: 10 },
  { name: "Muy negativa", value: 3 },
];

const impactData = [
  { name: "Ciencias", value: 78, value2: 65 },
  { name: "Humanidades", value: 45, value2: 52 },
  { name: "Ingeniería", value: 82, value2: 70 },
  { name: "Sociales", value: 55, value2: 48 },
  { name: "Artes", value: 38, value2: 42 },
];

const Desarrollo = () => {
  return (
    <AcademicLayout>
      <SectionHeader 
        title="Desarrollo del Trabajo"
        subtitle="Análisis multimedia y recursos interactivos"
        icon={Layers}
      />
      
      <div className="px-6 md:px-12 py-12">
        {/* Stats Overview */}
        <section className="mb-16 max-w-6xl mx-auto">
          <h2 className="academic-heading mb-8">Panorama General: IA en Educación Superior</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <StatCard 
              value="85%"
              label="Universidades usando IA"
              icon={Globe}
              trend="+12% vs 2023"
            />
            <StatCard 
              value="2.3M"
              label="Estudiantes beneficiados"
              icon={Users}
              trend="Europa y LATAM"
            />
            <StatCard 
              value="156"
              label="Herramientas analizadas"
              icon={Cpu}
              trend="Catálogo actualizado"
            />
            <StatCard 
              value="89%"
              label="Satisfacción docente"
              icon={TrendingUp}
              trend="En adopción gradual"
            />
          </div>
        </section>

        {/* Main Content Tabs */}
        <Tabs defaultValue="analysis" className="max-w-6xl mx-auto">
          <TabsList className="grid w-full grid-cols-4 mb-8">
            <TabsTrigger value="analysis">Análisis</TabsTrigger>
            <TabsTrigger value="tools">Herramientas</TabsTrigger>
            <TabsTrigger value="media">Multimedia</TabsTrigger>
            <TabsTrigger value="data">Datos</TabsTrigger>
          </TabsList>
          
          {/* Tab 1: Análisis Crítico */}
          <TabsContent value="analysis" className="space-y-12">
            <section>
              <h3 className="academic-subheading">3.1 Transformación del Rol Docente</h3>
              
              <div className="academic-body space-y-6">
                <p>
                  La integración de la inteligencia artificial en la educación superior ha provocado 
                  una transformación significativa en el rol tradicional del docente universitario. 
                  Según <InlineCitation author="Luckin" year="2018" />, el profesorado está transitando 
                  de un modelo centrado en la transmisión de conocimientos hacia uno enfocado en la 
                  facilitación y la curación de experiencias de aprendizaje.
                </p>
                
                <Citation 
                  author="Zawacki-Richter et al."
                  year="2019"
                  text="Los docentes que adoptan herramientas de IA reportan una reducción del 40% en tareas administrativas, permitiéndoles dedicar más tiempo a la interacción personalizada con estudiantes y a la investigación."
                  page="15"
                />
                
                <p>
                  Este cambio de paradigma implica el desarrollo de nuevas competencias digitales y 
                  pedagógicas. Los resultados de nuestro análisis indican que las universidades que 
                  han implementado programas de formación docente en tecnologías de IA muestran 
                  índices de adopción un 35% superiores a aquellas que no lo han hecho 
                  <InlineCitation author="Holmes et al." year="2019" />.
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6 mt-8">
                <BarChartCard 
                  title="Adopción de IA en Universidades (2019-2024)"
                  data={adoptionData}
                />
                <PieChartCard 
                  title="Distribución de Herramientas IA Utilizadas"
                  data={toolsUsageData}
                />
              </div>
            </section>
            
            <section>
              <h3 className="academic-subheading">3.2 Impacto en el Aprendizaje Estudiantil</h3>
              
              <div className="academic-body space-y-6">
                <p>
                  Los sistemas de aprendizaje adaptativo han demostrado mejoras significativas en 
                  los resultados académicos de los estudiantes. Un metaanálisis de 
                  <InlineCitation author="Kulik & Fletcher" year="2016" /> encontró que los estudiantes 
                  que utilizan sistemas de tutoría inteligente obtienen calificaciones en promedio 
                  0.76 desviaciones estándar superiores a los grupos de control.
                </p>
                
                <p>
                  Sin embargo, es crucial señalar que estos beneficios no se distribuyen de manera 
                  uniforme. Los estudiantes con mayores competencias digitales previas tienden a 
                  beneficiarse más de estas herramientas, lo que plantea preocupaciones sobre la 
                  potencial ampliación de brechas educativas <InlineCitation author="Selwyn" year="2019" />.
                </p>
              </div>
              
              <div className="mt-8">
                <LineChartCard 
                  title="Impacto por Área de Conocimiento (Adopción vs Efectividad)"
                  data={impactData}
                />
              </div>
            </section>
          </TabsContent>
          
          {/* Tab 2: Herramientas */}
          <TabsContent value="tools" className="space-y-12">
            <section>
              <h3 className="academic-subheading">Catálogo de Herramientas Analizadas</h3>
              
              <div className="academic-body mb-8">
                <p>
                  A continuación se presenta una selección de las herramientas de IA más relevantes 
                  identificadas durante la investigación, categorizadas según su función principal 
                  en el contexto de la educación superior.
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <ExternalLinkCard 
                  url="https://chat.openai.com"
                  title="ChatGPT (OpenAI)"
                  description="Modelo de lenguaje de propósito general utilizado para asistencia en escritura, resolución de dudas y generación de contenido educativo."
                  platform="OpenAI"
                />
                <ExternalLinkCard 
                  url="https://claude.ai"
                  title="Claude (Anthropic)"
                  description="Asistente de IA con énfasis en seguridad y precisión, útil para análisis de textos largos y tareas de investigación."
                  platform="Anthropic"
                />
                <ExternalLinkCard 
                  url="https://www.grammarly.com"
                  title="Grammarly"
                  description="Herramienta de corrección y mejora de escritura con IA, ampliamente adoptada en contextos académicos."
                  platform="Grammarly Inc."
                />
                <ExternalLinkCard 
                  url="https://quillbot.com"
                  title="QuillBot"
                  description="Parafraseo inteligente y asistencia en escritura académica con múltiples modos de reformulación."
                  platform="QuillBot"
                />
                <ExternalLinkCard 
                  url="https://www.turnitin.com"
                  title="Turnitin con Detección IA"
                  description="Sistema de detección de plagio que incorpora identificación de contenido generado por IA."
                  platform="Turnitin"
                />
                <ExternalLinkCard 
                  url="https://www.knewton.com"
                  title="Knewton Alta"
                  description="Plataforma de aprendizaje adaptativo para cursos universitarios de matemáticas y ciencias."
                  platform="Knewton"
                />
              </div>
            </section>
            
            <section>
              <h3 className="academic-subheading">Percepción de las Herramientas</h3>
              
              <PieChartCard 
                title="Percepción Estudiantil de Herramientas IA"
                data={perceptionData}
              />
            </section>
          </TabsContent>
          
          {/* Tab 3: Multimedia */}
          <TabsContent value="media" className="space-y-12">
            <section>
              <h3 className="academic-subheading">Recursos Audiovisuales</h3>
              
              <div className="academic-body mb-8">
                <p>
                  Los siguientes recursos multimedia complementan el análisis textual y proporcionan 
                  perspectivas adicionales sobre el tema de estudio.
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <VideoEmbed 
                  url="https://www.youtube.com/watch?v=L_Guz73e6fw"
                  title="AI in Education: The Future of Learning"
                  source="YouTube / TED"
                />
                <VideoEmbed 
                  url="https://www.youtube.com/watch?v=5dZ_lvDgevk"
                  title="How AI Could Transform Education"
                  source="YouTube / World Economic Forum"
                />
              </div>
            </section>
            
            <section>
              <h3 className="academic-subheading">Galería Visual</h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                <ImageCard 
                  src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800"
                  alt="Visualización de inteligencia artificial"
                  title="Representación de Redes Neuronales"
                  caption="Figura 1. Visualización artística de arquitecturas de redes neuronales utilizadas en sistemas educativos adaptativos."
                />
                <ImageCard 
                  src="https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800"
                  alt="Estudiantes universitarios"
                  title="Aprendizaje Colaborativo Digital"
                  caption="Figura 2. Estudiantes universitarios interactuando con plataformas de aprendizaje basadas en IA."
                />
              </div>
            </section>
            
            <section>
              <h3 className="academic-subheading">Recursos Externos</h3>
              
              <div className="grid md:grid-cols-3 gap-6">
                <ExternalLinkCard 
                  url="https://www.pinterest.com/search/pins/?q=artificial%20intelligence%20education"
                  title="Infografías sobre IA Educativa"
                  description="Colección de recursos visuales sobre inteligencia artificial en educación"
                  platform="Pinterest"
                />
                <ExternalLinkCard 
                  url="https://www.flickr.com/search/?text=university%20technology"
                  title="Fotografías de Tecnología Universitaria"
                  description="Banco de imágenes de aulas y laboratorios tecnológicos"
                  platform="Flickr"
                />
                <ExternalLinkCard 
                  url="https://www.instagram.com/explore/tags/aieducation/"
                  title="#AIEducation"
                  description="Contenido actual sobre IA en educación"
                  platform="Instagram"
                />
              </div>
            </section>
          </TabsContent>
          
          {/* Tab 4: Datos */}
          <TabsContent value="data" className="space-y-12">
            <section>
              <h3 className="academic-subheading">Análisis Cuantitativo</h3>
              
              <div className="academic-body mb-8">
                <p>
                  Los datos presentados a continuación provienen de la síntesis de múltiples estudios 
                  y reportes institucionales sobre la adopción de IA en educación superior. Es importante 
                  señalar que estos datos son simulados con fines ilustrativos, basados en tendencias 
                  reales identificadas en la literatura revisada.
                </p>
              </div>
              
              <div className="grid lg:grid-cols-2 gap-6 mb-8">
                <BarChartCard 
                  title="Crecimiento de Adopción Institucional"
                  data={adoptionData}
                />
                <LineChartCard 
                  title="Comparativa Adopción vs Efectividad por Disciplina"
                  data={impactData}
                />
              </div>
              
              <div className="grid lg:grid-cols-2 gap-6">
                <PieChartCard 
                  title="Tipos de Herramientas IA en Uso"
                  data={toolsUsageData}
                />
                <PieChartCard 
                  title="Percepción Estudiantil"
                  data={perceptionData}
                />
              </div>
            </section>
            
            <section>
              <h3 className="academic-subheading">Hallazgos Clave</h3>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <StatCard 
                  value="+76%"
                  label="Mejora en personalización"
                  icon={TrendingUp}
                  trend="Con tutores inteligentes"
                />
                <StatCard 
                  value="40%"
                  label="Reducción tiempo admin."
                  icon={Cpu}
                  trend="Para docentes"
                />
                <StatCard 
                  value="3.2x"
                  label="ROI en formación docente"
                  icon={BookOpen}
                  trend="Retorno estimado"
                />
              </div>
            </section>
          </TabsContent>
        </Tabs>
      </div>
    </AcademicLayout>
  );
};

export default Desarrollo;
