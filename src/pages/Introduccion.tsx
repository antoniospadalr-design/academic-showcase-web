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
          <h2 className="academic-heading">1.1 Contextualización</h2>
          
          <p>
            El periodismo deportivo se ha consolidado en las últimas décadas como una de las áreas 
            de comunicación con mayor impacto social, económico y mediático. La expansión del deporte 
            a escala internacional, es decir, la profesionalización de los medios y el auge de nuevas 
            plataformas digitales, ha provocado un cambio estructural en la forma en que los 
            "prosumidores" hacen uso de la información deportiva <InlineCitation author="Boyle" year="2017" />.
          </p>

          <p>
            En este contexto, las redes sociales y los sitios web de autopublicación de servicios 
            multimedia son herramientas que han servido para la construcción de narrativas tanto 
            buenas como malas, para la creación de comunidades pequeñas, medianas y grandes, y 
            además para la elaboración de contenidos cada vez más inmediatos y personalizados para 
            el público, lo que ha incrementado la cantidad de noticias falsas. Esto se debe a que 
            los medios buscan el clic fácil para monetizar los contenidos.
          </p>

          <h2 className="academic-heading">1.2 La Digitalización del Periodismo</h2>

          <p>
            La digitalización que ha vivido el periodismo desde principios de este siglo ha 
            transformado radicalmente las dinámicas tradicionales del periodismo. Hoy en día ha 
            bajado mucho el consumo de periódicos en papel y en la juventud es muy raro que lean 
            el periódico, todo esto gracias al éxito de las redes sociales. Hoy, periodistas, 
            clubes, deportistas, aficionados y creadores de contenido, entre otros, compiten por 
            la atención de la audiencia; los algoritmos controlan el sistema.
          </p>

          <Citation 
            author="Hutchins & Rowe"
            year="2012"
            text="El ecosistema mediático deportivo se adapta continuamente para satisfacer la demanda de inmediatez, rapidez informativa e interacción constante, lo que ha hecho que muchas veces la información sea engañosa o no veraz del todo, llegando a haber conflictos éticos entre los profesionales."
            page="78"
          />

          <h2 className="academic-heading">1.3 El Desafío del Intrusismo Profesional</h2>

          <p>
            Uno de los desafíos más relevantes en la actualidad es el intrusismo profesional. 
            La presencia creciente de influencers, creadores de contenido y usuarios sin formación 
            periodística que producen y difunden información deportiva cuestiona las fronteras 
            tradicionales de la profesión.
          </p>

          <p>
            Esta situación ha generado debates sobre la calidad informativa, la ética comunicativa 
            y la legitimidad del rol del periodista en un entorno donde el acceso a la tecnología 
            permite que cualquier persona pueda producir contenido sin intermediarios, lo cual 
            para muchos profesionales es un grave problema ya que al faltar esa formación que se 
            imparte en las universidades tienden a ocurrir errores y malformaciones 
            <InlineCitation author="García & Meier" year="2021" />.
          </p>

          <h2 className="academic-heading">1.4 Reinvención Profesional</h2>

          <p>
            Al mismo tiempo, los propios periodistas han tenido que reinventarse, desarrollar 
            marcas personales sólidas y adaptarse a algoritmos propios de plataformas como 
            Instagram, YouTube o TikTok, donde la visibilidad mediática depende tanto de la 
            calidad del contenido como de la habilidad para gestionar comunidades digitales. 
            Teniendo en cuenta que se meten al mundo de los algoritmos y que muchas veces, por 
            más que sea una súper investigación o un gran trabajo periodístico, el algoritmo es 
            el que decide si le gusta a la gente o si mostrárselo a cada tipo de perfil.
          </p>

          <p>
            Las redes sociales hoy en día muestran más ciertos tipos de contenidos también en 
            base a ideología y lo que la gente haga más búsquedas. Entonces es un nuevo reto que 
            tienen los trabajadores de esta profesión que no necesariamente fueron preparados para 
            esto en la universidad o mientras cursaban los estudios.
          </p>

          <h2 className="academic-heading">1.5 El Proyecto "Transcurso del Juego"</h2>

          <p>
            Este trabajo se desarrolla precisamente dentro de este contexto de transformación. 
            Por otro lado, también se investiga la forma de encontrar solución a todas las 
            problemáticas mencionadas anteriormente. A través de la creación de una página web 
            en WordPress y perfiles activos en Instagram y YouTube con el nombre de "Transcurso 
            del Juego" en las respectivas plataformas, el objetivo fue analizar el estado actual 
            del periodismo deportivo y experimentar de manera práctica con los formatos, lenguajes 
            y dinámicas propias del ecosistema digital.
          </p>

          <p>
            Además, para enriquecer el marco analítico, se realizaron entrevistas a periodistas 
            especializados en baloncesto, fútbol masculino, fútbol femenino y fútbol formativo, 
            cada uno contando con un bagaje y experiencia en cada uno de sus deportes. Esto 
            permitió obtener una visión general por parte de cada uno de los cuatro entrevistados, 
            por lo que en el trabajo queda reflejada la comparación de las opiniones y una visión 
            más general, además de retos que enfrentan los profesionales del deporte en la 
            actualidad en las que ellos también se ven afectados.
          </p>

          <h2 className="academic-heading">1.6 Problemáticas Identificadas</h2>

          <p>
            Los testimonios recogidos coinciden en señalar problemas como:
          </p>

          <ul className="space-y-3 ml-6">
            <li className="flex gap-3">
              <span className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
              <span>
                <strong>La precarización laboral y la dificultad para obtener un primer empleo estable:</strong> Todo 
                esto debido a la falta de experiencia y a la competitividad dentro del sector donde 
                pesan mucho los números.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
              <span>
                <strong>La presión por la inmediatez informativa:</strong> Hoy en día los medios exigen velocidad 
                a la hora de publicar las informaciones buscando monetizar además de obtener la primicia.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
              <span>
                <strong>La falta de reconocimiento a la formación universitaria frente al intrusismo:</strong> El 
                intrusismo laboral de personas que no poseen la carrera quitándole mérito a las 
                personas que estudian la carrera y se preparan para ella durante años.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
              <span>
                <strong>La evolución acelerada de los modelos de negocio:</strong> Las estadísticas no mienten, 
                los medios han desarrollado nuevas estrategias.
              </span>
            </li>
          </ul>
        </div>
      </article>
    </AcademicLayout>
  );
};

export default Introduccion;
