interface CitationProps {
  author: string;
  year: string;
  text: string;
  page?: string;
}

export function Citation({ author, year, text, page }: CitationProps) {
  return (
    <blockquote className="my-6">
      <p className="italic text-muted-foreground leading-relaxed">
        "{text}"
      </p>
      <footer className="mt-2 text-sm font-medium text-foreground/80">
        — {author} ({year}){page && `, p. ${page}`}
      </footer>
    </blockquote>
  );
}

interface InlineCitationProps {
  author: string;
  year: string;
}

export function InlineCitation({ author, year }: InlineCitationProps) {
  return (
    <span className="text-primary font-medium">
      ({author}, {year})
    </span>
  );
}
