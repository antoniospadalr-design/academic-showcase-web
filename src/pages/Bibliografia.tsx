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
            del presente trabajo. Se presentan organizadas por tipo de fuente (libros, artículos 
            académicos, recursos web y multimedia) siguiendo las normas de citación APA 7ª edición.
          </p>
        </div>

        <Tabs defaultValue="books" className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-8">
            <TabsTrigger value="books" className="flex items-center gap-2">
              <Book className="h-4 w-4" />
              <span className="hidden sm:inline">Libros</span>
            </TabsTrigger>
            <TabsTrigger value="articles" className="flex items-center gap-2">
              <FileText className="h-4 w-4" />
              <span className="hidden sm:inline">Artículos</span>
            </TabsTrigger>
            <TabsTrigger value="web" className="flex items-center gap-2">
              <Globe className="h-4 w-4" />
              <span className="hidden sm:inline">Web</span>
            </TabsTrigger>
            <TabsTrigger value="all" className="flex items-center gap-2">
              <Library className="h-4 w-4" />
              <span className="hidden sm:inline">Todo</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="books">
            <h3 className="academic-subheading">Libros y Monografías</h3>
            <div className="divide-y divide-border">
              {bookReferences.map((ref, index) => (
                <BibliographyEntry key={index} {...ref} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="articles">
            <h3 className="academic-subheading">Artículos Científicos</h3>
            <div className="divide-y divide-border">
              {articleReferences.map((ref, index) => (
                <BibliographyEntry key={index} {...ref} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="web">
            <h3 className="academic-subheading">Recursos Web y Multimedia</h3>
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

        {/* Nota sobre formato APA */}
        <div className="mt-12 p-6 bg-secondary/30 rounded-lg border border-border">
          <h4 className="font-serif font-semibold text-foreground mb-3">
            Nota sobre el formato de citación
          </h4>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Todas las referencias han sido formateadas siguiendo las directrices del 
            <em> Publication Manual of the American Psychological Association </em> 
            (7ª edición, 2020). Las citas en el texto utilizan el formato autor-fecha, 
            y las referencias completas incluyen DOI o URL cuando están disponibles.
          </p>
        </div>
      </div>
    </AcademicLayout>
  );
};

const bookReferences = [
  {
    type: "book" as const,
    citation: "Creswell, J. W., & Poth, C. N. (2018). Qualitative inquiry and research design: Choosing among five approaches (4th ed.). SAGE Publications.",
  },
  {
    type: "book" as const,
    citation: "Holmes, W., Bialik, M., & Fadel, C. (2019). Artificial intelligence in education: Promises and implications for teaching and learning. Center for Curriculum Redesign.",
  },
  {
    type: "book" as const,
    citation: "Luckin, R. (2018). Machine learning and human intelligence: The future of education for the 21st century. UCL Press.",
    doi: "10.14324/111.9781787350083"
  },
  {
    type: "book" as const,
    citation: "Selwyn, N. (2019). Should robots replace teachers? AI and the future of education. Polity Press.",
  },
  {
    type: "book" as const,
    citation: "American Psychological Association. (2020). Publication manual of the American Psychological Association (7th ed.). American Psychological Association.",
    doi: "10.1037/0000165-000"
  },
];

const articleReferences = [
  {
    type: "article" as const,
    citation: "Brusilovsky, P., & Peylo, C. (2003). Adaptive and intelligent web-based educational systems. International Journal of Artificial Intelligence in Education, 13(2-4), 159-172.",
    url: "https://content.iospress.com/articles/international-journal-of-artificial-intelligence-in-education/jai13-2-4-04"
  },
  {
    type: "article" as const,
    citation: "Chen, L., Chen, P., & Lin, Z. (2023). Artificial intelligence in education: A review. IEEE Access, 8, 75264-75278.",
    doi: "10.1109/ACCESS.2020.2988510"
  },
  {
    type: "article" as const,
    citation: "Kasneci, E., Seßler, K., Küchemann, S., Bannert, M., Dementieva, D., Fischer, F., ... & Kasneci, G. (2023). ChatGPT for good? On opportunities and challenges of large language models for education. Learning and Individual Differences, 103, 102274.",
    doi: "10.1016/j.lindif.2023.102274"
  },
  {
    type: "article" as const,
    citation: "Kulik, J. A., & Fletcher, J. D. (2016). Effectiveness of intelligent tutoring systems: A meta-analytic review. Review of Educational Research, 86(1), 42-78.",
    doi: "10.3102/0034654315581420"
  },
  {
    type: "article" as const,
    citation: "Luckin, R., Holmes, W., Griffiths, M., & Forcier, L. B. (2016). Intelligence unleashed: An argument for AI in education. Pearson Education.",
  },
  {
    type: "article" as const,
    citation: "Popenici, S. A., & Kerr, S. (2017). Exploring the impact of artificial intelligence on teaching and learning in higher education. Research and Practice in Technology Enhanced Learning, 12(1), 1-13.",
    doi: "10.1186/s41039-017-0062-8"
  },
  {
    type: "article" as const,
    citation: "Siemens, G. (2005). Connectivism: A learning theory for the digital age. International Journal of Instructional Technology and Distance Learning, 2(1), 3-10.",
    url: "http://www.itdl.org/journal/jan_05/article01.htm"
  },
  {
    type: "article" as const,
    citation: "Zawacki-Richter, O., Marín, V. I., Bond, M., & Gouverneur, F. (2019). Systematic review of research on artificial intelligence applications in higher education–where are the educators? International Journal of Educational Technology in Higher Education, 16(1), 1-27.",
    doi: "10.1186/s41239-019-0171-0"
  },
];

const webReferences = [
  {
    type: "web" as const,
    citation: "UNESCO. (2021). AI and education: Guidance for policy-makers. UNESCO Publishing.",
    url: "https://unesdoc.unesco.org/ark:/48223/pf0000376709"
  },
  {
    type: "web" as const,
    citation: "European Commission. (2022). Ethical guidelines on the use of artificial intelligence (AI) and data in teaching and learning for educators. Publications Office of the European Union.",
    url: "https://op.europa.eu/en/publication-detail/-/publication/d81a0d54-5348-11ed-92ed-01aa75ed71a1"
  },
  {
    type: "web" as const,
    citation: "OECD. (2023). Artificial intelligence in education: Learning, teaching and assessment. OECD Digital Education Outlook.",
    url: "https://www.oecd.org/education/artificial-intelligence-in-education.htm"
  },
  {
    type: "video" as const,
    citation: "TED. (2023, marzo 15). AI in education: The future of learning [Video]. YouTube.",
    url: "https://www.youtube.com/watch?v=L_Guz73e6fw"
  },
  {
    type: "video" as const,
    citation: "World Economic Forum. (2023, enero 10). How AI could transform education [Video]. YouTube.",
    url: "https://www.youtube.com/watch?v=5dZ_lvDgevk"
  },
];

const allReferences = [...bookReferences, ...articleReferences, ...webReferences].sort((a, b) => {
  const authorA = a.citation.split('.')[0].toLowerCase();
  const authorB = b.citation.split('.')[0].toLowerCase();
  return authorA.localeCompare(authorB);
});

export default Bibliografia;
