import { Book, Globe, FileText, Video } from "lucide-react";

type SourceType = "book" | "article" | "web" | "video";

interface BibliographyEntryProps {
  type: SourceType;
  citation: string;
  doi?: string;
  url?: string;
}

const iconMap: Record<SourceType, typeof Book> = {
  book: Book,
  article: FileText,
  web: Globe,
  video: Video,
};

export function BibliographyEntry({ type, citation, doi, url }: BibliographyEntryProps) {
  const Icon = iconMap[type];
  
  return (
    <div className="flex gap-4 py-4 border-b border-border last:border-0">
      <div className="p-2 bg-secondary rounded-lg h-fit">
        <Icon className="h-4 w-4 text-primary" />
      </div>
      <div className="flex-1">
        <p className="text-sm text-foreground leading-relaxed" style={{ textIndent: '-2rem', paddingLeft: '2rem' }}>
          {citation}
        </p>
        {doi && (
          <a 
            href={`https://doi.org/${doi}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-accent hover:underline mt-2 inline-block"
          >
            https://doi.org/{doi}
          </a>
        )}
        {url && !doi && (
          <a 
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-accent hover:underline mt-2 inline-block"
          >
            {url}
          </a>
        )}
      </div>
    </div>
  );
}
