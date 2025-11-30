import { AcademicLayout } from "@/components/layout/AcademicLayout";
import { SectionHeader } from "@/components/academic/SectionHeader";
import { ExternalLinkCard } from "@/components/academic/MediaEmbed";
import { Layers, Globe, Instagram, Youtube } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Desarrollo = () => {
  return (
    <AcademicLayout>
      <SectionHeader 
        title="Desarrollo del Trabajo"
        subtitle="Producción multimedia y análisis profesional"
        icon={Layers}
      />
      
      <div className="px-6 md:px-12 py-12 max-w-6xl mx-auto">
        <Tabs defaultValue="wordpress" className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-8">
            <TabsTrigger value="wordpress">WordPress</TabsTrigger>
            <TabsTrigger value="instagram">Instagram</TabsTrigger>
            <TabsTrigger value="youtube">YouTube</TabsTrigger>
            <TabsTrigger value="analisis">Análisis</TabsTrigger>
          </TabsList>
          
          {/* Tab 1: WordPress */}
          <TabsContent value="wordpress" className="space-y-8">
            <section>
              <h3 className="academic-subheading flex items-center gap-2">
                <Globe className="h-6 w-6 text-accent" />
                3.1 Página Web en WordPress
              </h3>
              
              <div className="academic-body space-y-6">
                <p>
                  La página web sirvió como soporte central del proyecto. Se diseñó con una plantilla 
                  modular que permitió organizar de forma clara la información del trabajo.
                </p>
                
                <Card className="bg-secondary/30">
                  <CardContent className="p-6">
                    <h4 className="font-serif font-semibold text-foreground mb-4">Acciones Principales Realizadas:</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <span className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                        <span>Selección de plantilla suministrada por el docente, orientada a proyectos periodísticos</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                        <span>Creación del menú principal con las secciones: Portada, Introducción, Objetivos, Metodología, Desarrollo, Conclusiones, Bibliografía y Autores</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                        <span>Integración de material multimedia, incluyendo vídeos de YouTube, imágenes y recursos gráficos como la parrilla multimedia</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                        <span>Optimización del diseño visual con paleta de colores propia, tipografía clara y estructura jerárquica</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </section>
          </TabsContent>
          
          {/* Tab 2: Instagram */}
          <TabsContent value="instagram" className="space-y-8">
            <section>
              <h3 className="academic-subheading flex items-center gap-2">
                <Instagram className="h-6 w-6 text-accent" />
                3.2 Gestión del Perfil de Instagram
              </h3>
              
              <div className="academic-body space-y-6">
                <p>
                  Se diseñaron carruseles y distintos tipos de publicaciones típicas de Instagram 
                  como notas, stories y publicaciones, en su mayoría imágenes hablando de distintas 
                  problemáticas del periodismo deportivo y su evolución, de la actualidad deportiva 
                  especialmente del fútbol entre otras.
                </p>
                
                <Card className="bg-secondary/30">
                  <CardContent className="p-6">
                    <h4 className="font-serif font-semibold text-foreground mb-4">Estrategia de Contenidos:</h4>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="p-4 bg-card rounded-lg border border-border">
                        <h5 className="font-medium text-foreground mb-2">Narrativas Visuales</h5>
                        <p className="text-sm text-muted-foreground">
                          Carruseles sobre problemáticas actuales del periodismo deportivo
                        </p>
                      </div>
                      <div className="p-4 bg-card rounded-lg border border-border">
                        <h5 className="font-medium text-foreground mb-2">Actualidad Deportiva</h5>
                        <p className="text-sm text-muted-foreground">
                          Cobertura de eventos deportivos con análisis crítico
                        </p>
                      </div>
                      <div className="p-4 bg-card rounded-lg border border-border">
                        <h5 className="font-medium text-foreground mb-2">Stories Interactivas</h5>
                        <p className="text-sm text-muted-foreground">
                          Encuestas y contenido efímero para engagement
                        </p>
                      </div>
                      <div className="p-4 bg-card rounded-lg border border-border">
                        <h5 className="font-medium text-foreground mb-2">Notas y Avisos</h5>
                        <p className="text-sm text-muted-foreground">
                          Actualizaciones rápidas sobre el proyecto
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </section>
          </TabsContent>
          
          {/* Tab 3: YouTube */}
          <TabsContent value="youtube" className="space-y-8">
            <section>
              <h3 className="academic-subheading flex items-center gap-2">
                <Youtube className="h-6 w-6 text-accent" />
                3.3 Producción y Gestión de Canal YouTube
              </h3>
              
              <div className="academic-body space-y-6">
                <p>
                  Se editaron las entrevistas mediante aplicaciones de edición de videos para 
                  posteriormente ser publicadas en YouTube de manera libre. Posteriormente se 
                  organiza y jerarquiza el canal, añadiendo descripciones, monetizando el contenido 
                  entre otras opciones que permite la plataforma de YouTube.
                </p>
                
                <Card className="bg-secondary/30">
                  <CardContent className="p-6">
                    <h4 className="font-serif font-semibold text-foreground mb-4">Proceso de Producción:</h4>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <span className="text-lg font-bold text-accent">1</span>
                        <div>
                          <strong className="text-foreground">Grabación de Entrevistas:</strong>
                          <p className="text-sm text-muted-foreground mt-1">
                            Entrevistas a periodistas de baloncesto, fútbol masculino, femenino y formativo
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-lg font-bold text-accent">2</span>
                        <div>
                          <strong className="text-foreground">Edición de Video:</strong>
                          <p className="text-sm text-muted-foreground mt-1">
                            Uso de aplicaciones profesionales de edición para optimizar el contenido
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-lg font-bold text-accent">3</span>
                        <div>
                          <strong className="text-foreground">Optimización SEO:</strong>
                          <p className="text-sm text-muted-foreground mt-1">
                            Descripciones, etiquetas y miniaturas diseñadas para máxima visibilidad
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-lg font-bold text-accent">4</span>
                        <div>
                          <strong className="text-foreground">Monetización:</strong>
                          <p className="text-sm text-muted-foreground mt-1">
                            Configuración del canal para potencial monetización futura
                          </p>
                        </div>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </section>
          </TabsContent>
          
          {/* Tab 4: Análisis */}
          <TabsContent value="analisis" className="space-y-8">
            <section>
              <h3 className="academic-subheading">3.4 Análisis de las Entrevistas</h3>
              
              <div className="academic-body space-y-6">
                <p>
                  Las entrevistas realizadas a cuatro periodistas deportivos especializados en 
                  diferentes disciplinas proporcionaron perspectivas valiosas sobre el estado actual 
                  del periodismo deportivo digital. Los testimonios coincidieron en señalar varios 
                  desafíos comunes que enfrentan los profesionales del sector.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6 mt-8">
                  <Card>
                    <CardContent className="p-6">
                      <h4 className="font-serif font-semibold text-primary mb-3">Desafíos Identificados</h4>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start gap-2">
                          <span className="text-accent">•</span>
                          <span>Precarización laboral y dificultad de acceso</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-accent">•</span>
                          <span>Presión por la inmediatez informativa</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-accent">•</span>
                          <span>Intrusismo profesional creciente</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-accent">•</span>
                          <span>Necesidad de adaptación a algoritmos</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardContent className="p-6">
                      <h4 className="font-serif font-semibold text-primary mb-3">Oportunidades Emergentes</h4>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start gap-2">
                          <span className="text-accent">•</span>
                          <span>Construcción de marca personal</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-accent">•</span>
                          <span>Acceso directo a audiencias globales</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-accent">•</span>
                          <span>Diversificación de formatos y plataformas</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-accent">•</span>
                          <span>Nuevos modelos de monetización</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </section>

            <section>
              <h3 className="academic-subheading">3.5 Cohesión Narrativa</h3>
              
              <div className="academic-body">
                <p>
                  Para asegurar coherencia entre plataformas, se definió una línea editorial común 
                  basada en rigor informativo (contenido contrastado), accesibilidad visual (diseños 
                  adaptados a móviles) y perspectiva crítica (enfoque reflexivo sobre problemas 
                  estructurales del periodismo deportivo).
                </p>
              </div>
            </section>
          </TabsContent>
        </Tabs>
      </div>
    </AcademicLayout>
  );
};

export default Desarrollo;
