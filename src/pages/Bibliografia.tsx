import { AcademicLayout } from "@/components/layout/AcademicLayout";
import { SectionHeader } from "@/components/academic/SectionHeader";
import { BibliographyEntry } from "@/components/academic/BibliographyEntry";
import { Library, Book, Globe, FileText } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Bibliografia = () => {
  return (
    <AcademicLayout>
      <SectionHeader 
        title="Bibliografía"
        subtitle="Fuentes consultadas en formato APA 7ª edición"
        icon={Library}
      />
      
      <div className="px-6 md:px-12 py-12 max-w-4xl">
        <div className="academic-body mb-8">
          <p>
            Las siguientes referencias bibliográficas han sido utilizadas para la elaboración 
            del presente trabajo sobre periodismo deportivo digital. Se presentan en formato 
            APA 7ª edición.
          </p>
        </div>

        <Tabs defaultValue="all" className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-8">
            <TabsTrigger value="books">Libros</TabsTrigger>
            <TabsTrigger value="articles">Artículos</TabsTrigger>
            <TabsTrigger value="web">Web</TabsTrigger>
            <TabsTrigger value="all">Todo</TabsTrigger>
          </TabsList>

          <TabsContent value="books">
            <h3 className="academic-subheading">Libros</h3>
            <div className="divide-y divide-border">
              {bookReferences.map((ref, index) => (
                <BibliographyEntry key={index} {...ref} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="articles">
            <h3 className="academic-subheading">Artículos</h3>
            <div className="divide-y divide-border">
              {articleReferences.map((ref, index) => (
                <BibliographyEntry key={index} {...ref} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="web">
            <h3 className="academic-subheading">Recursos Web</h3>
            <div className="divide-y divide-border">
              {webReferences.map((ref, index) => (
                <BibliographyEntry key={index} {...ref} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="all">
            <h3 className="academic-subheading">Todas las Referencias</h3>
            <div className="divide-y divide-border">
              {allReferences.map((ref, index) => (
                <BibliographyEntry key={index} {...ref} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </AcademicLayout>
  );
};

const bookReferences = [
  {
    type: "book" as const,
    citation: "Boyle, R. (2014). Sports journalism: Changing journalism practice and digital media. Routledge.",
  },
  {
    type: "book" as const,
    citation: "Boyle, R., & Haynes, R. (2009). Power play: Sport, the media and popular culture. Edinburgh University Press.",
  },
  {
    type: "book" as const,
    citation: "Hutchins, B., & Rowe, D. (2012). Sport beyond television: The internet, digital media and the rise of networked media sport. Routledge.",
  },
  {
    type: "book" as const,
    citation: "Scolari, C. A. (2013). Narrativas transmedia: Cuando todos los medios cuentan. Deusto.",
  },
];

const articleReferences = [
  {
    type: "article" as const,
    citation: "Boyle, R. (2017). Sports journalism: Changing journalism practice and digital media. Digital Journalism, 5(5), 493–495.",
  },
  {
    type: "article" as const,
    citation: "Domingo, D., Quandt, T., Heinonen, A., Paulussen, S., Singer, J. B., & Vujnovic, M. (2008). Participatory journalism practices in the media and beyond: An international comparative study of initiatives in online newspapers. Journalism Practice, 2(3), 326–342.",
  },
  {
    type: "article" as const,
    citation: "García, J., & Meier, K. (2021). El intrusismo y la transformación del periodismo deportivo en la era digital. Revista Internacional de Comunicación y Deporte, 14(2), 45–60.",
  },
  {
    type: "article" as const,
    citation: "García-Avilés, J. A., Kaltenbrunner, A., & Meier, K. (2018). Media convergence revisited: Lessons learned on newsroom integration in Austria, Spain and Germany. Journalism Studies, 19(2), 196–211.",
    doi: "10.1080/1461670X.2016.1186649"
  },
  {
    type: "article" as const,
    citation: "López-González, H., Guerrero-Solé, F., & Larrea, O. (2021). Sports journalists on Twitter: Revisiting gatekeeping. Communication & Sport, 9(5), 747–767.",
  },
  {
    type: "article" as const,
    citation: "Molina, O., & Martínez-Sanz, R. (2022). La transformación digital del periodismo deportivo: Nuevos formatos, audiencias y profesionalización. Revista Latina de Comunicación Social, 80, 1–20.",
    doi: "10.4185/RLCS-2022-1593"
  },
  {
    type: "article" as const,
    citation: "Molyneux, L. (2015). What journalists retweet: Opinion, humor, and brand development on Twitter. Journalism.",
  },
  {
    type: "article" as const,
    citation: "Singer, J. B. (2010). Quality control: Perceived effects of user-generated content on newsroom norms, values and routines. Journalism Practice.",
  },
];

const webReferences = [
  {
    type: "web" as const,
    citation: "Hermida, A. (2016). Social media and the news. In T. Witschge, C. W. Anderson, D. Domingo, & A. Hermida (Eds.), The SAGE handbook of digital journalism (pp. 81–94). SAGE.",
  },
  {
    type: "web" as const,
    citation: "Reuters Institute. (2023). Digital News Report 2023. University of Oxford.",
    url: "https://reutersinstitute.politics.ox.ac.uk"
  },
  {
    type: "web" as const,
    citation: "Asociación de la Prensa de Madrid. (2022). Informe Anual de la Profesión Periodística. APM.",
    url: "https://www.apmadrid.es"
  },
];

const allReferences = [...bookReferences, ...articleReferences, ...webReferences].sort((a, b) => {
  const authorA = a.citation.split('.')[0].toLowerCase();
  const authorB = b.citation.split('.')[0].toLowerCase();
  return authorA.localeCompare(authorB);
});

export default Bibliografia;
