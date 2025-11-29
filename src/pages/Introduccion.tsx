import { AcademicLayout } from "@/components/layout/AcademicLayout";
import { SectionHeader } from "@/components/academic/SectionHeader";
import { Citation, InlineCitation } from "@/components/academic/Citation";
import { BookOpen } from "lucide-react";

const Introduccion = () => {
  return (
    <AcademicLayout>
      <SectionHeader 
        title="Introducción"
        subtitle="Contexto y fundamentación teórica del estudio"
        icon={BookOpen}
      />
      
      <article className="px-6 md:px-12 py-12 max-w-4xl">
        <div className="academic-body space-y-6">
          <h2 className="academic-heading">1.1 Contextualización del Problema</h2>
          
          <p>
            La educación superior se encuentra en un momento de transformación sin precedentes, 
            impulsada fundamentalmente por el avance acelerado de las tecnologías de inteligencia 
            artificial (IA). En las últimas dos décadas, hemos sido testigos de cómo estas 
            tecnologías han pasado de ser conceptos teóricos a herramientas aplicadas que 
            modifican sustancialmente los procesos de enseñanza-aprendizaje <InlineCitation author="Luckin et al." year="2016" />.
          </p>

          <p>
            El contexto actual, marcado por la pandemia de COVID-19 y sus consecuencias en la 
            digitalización educativa, ha acelerado la adopción de tecnologías emergentes en las 
            instituciones de educación superior. Según datos de la UNESCO <InlineCitation author="UNESCO" year="2021" />, 
            más del 90% de las universidades a nivel mundial implementaron alguna forma de 
            educación a distancia durante 2020, lo que supuso un cambio paradigmático en la 
            concepción tradicional de la enseñanza universitaria.
          </p>

          <Citation 
            author="Zawacki-Richter et al."
            year="2019"
            text="La inteligencia artificial en educación (AIEd) representa un campo emergente que promete revolucionar la forma en que conceptualizamos los procesos de aprendizaje, ofreciendo posibilidades de personalización, automatización y análisis de datos sin precedentes."
            page="3"
          />

          <h2 className="academic-heading">1.2 Marco Teórico</h2>

          <p>
            El presente trabajo se fundamenta en varias perspectivas teóricas complementarias. 
            En primer lugar, adoptamos el marco del conectivismo propuesto por <InlineCitation author="Siemens" year="2005" />, 
            quien argumenta que el aprendizaje en la era digital debe entenderse como un proceso 
            de conexión de nodos especializados o fuentes de información, donde la capacidad de 
            conocer más es más crítica que lo que actualmente se conoce.
          </p>

          <p>
            Asimismo, nos apoyamos en la teoría del aprendizaje adaptativo <InlineCitation author="Brusilovsky & Peylo" year="2003" />, 
            que sostiene que los sistemas educativos deben ser capaces de ajustarse a las 
            necesidades individuales de cada estudiante. Esta perspectiva resulta especialmente 
            relevante en el contexto de la IA, dado que los algoritmos de aprendizaje automático 
            permiten crear experiencias educativas verdaderamente personalizadas.
          </p>

          <Citation 
            author="Holmes et al."
            year="2019"
            text="Los sistemas de tutoría inteligente han demostrado ser efectivos en proporcionar retroalimentación inmediata y adaptada, mejorando significativamente los resultados de aprendizaje en comparación con métodos tradicionales."
            page="45"
          />

          <h2 className="academic-heading">1.3 Justificación del Estudio</h2>

          <p>
            La relevancia de este estudio radica en la necesidad de comprender críticamente 
            las implicaciones de la IA en el ámbito universitario. Si bien existe abundante 
            literatura sobre las posibilidades técnicas de estas tecnologías <InlineCitation author="Popenici & Kerr" year="2017" />, 
            son menos frecuentes los análisis que abordan las dimensiones pedagógicas, éticas 
            y sociales de su implementación.
          </p>

          <p>
            Desde una perspectiva institucional, las universidades enfrentan el desafío de 
            integrar estas tecnologías de manera que potencien la calidad educativa sin 
            comprometer valores fundamentales como la equidad, la privacidad y la integridad 
            académica <InlineCitation author="Selwyn" year="2019" />. Este trabajo pretende 
            contribuir a ese debate proporcionando un análisis fundamentado y actualizado.
          </p>

          <h2 className="academic-heading">1.4 Delimitación del Tema</h2>

          <p>
            El presente estudio se centra específicamente en el impacto de la IA generativa 
            y los sistemas de aprendizaje adaptativo en la educación superior, con especial 
            énfasis en el contexto europeo y latinoamericano. No se abordan otras aplicaciones 
            de la IA en contextos educativos no universitarios, ni tecnologías emergentes que 
            no estén directamente relacionadas con los procesos de enseñanza-aprendizaje.
          </p>

          <p>
            Temporalmente, el análisis abarca el período 2018-2024, coincidiendo con el 
            surgimiento y popularización de modelos de lenguaje de gran escala (LLMs) y su 
            aplicación en entornos educativos. Esta delimitación temporal permite capturar 
            los desarrollos más recientes y relevantes en el campo <InlineCitation author="Chen et al." year="2023" />.
          </p>

          <Citation 
            author="Kasneci et al."
            year="2023"
            text="ChatGPT y herramientas similares representan un punto de inflexión en la historia de la tecnología educativa, planteando tanto oportunidades sin precedentes como desafíos significativos para docentes, estudiantes e instituciones."
            page="1"
          />

          <h2 className="academic-heading">1.5 Estructura del Trabajo</h2>

          <p>
            El presente trabajo se organiza en las siguientes secciones: tras esta introducción, 
            se presentan los objetivos generales y específicos que guían la investigación. 
            Posteriormente, se detalla la metodología empleada, incluyendo las herramientas y 
            técnicas de análisis utilizadas. El núcleo del trabajo consiste en un desarrollo 
            extenso que incluye análisis multimedia, recursos interactivos y visualizaciones 
            de datos. Finalmente, se presentan las conclusiones derivadas del estudio y se 
            incluye la bibliografía completa en formato APA 7ª edición.
          </p>
        </div>
      </article>
    </AcademicLayout>
  );
};

export default Introduccion;
