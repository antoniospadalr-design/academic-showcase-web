import { ExternalLink, Play, MapPin, Image as ImageIcon } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface VideoEmbedProps {
  url: string;
  title: string;
  source?: string;
}

export function VideoEmbed({ url, title, source = "YouTube" }: VideoEmbedProps) {
  // Convert YouTube URL to embed URL
  const getEmbedUrl = (url: string) => {
    if (url.includes("youtube.com/watch")) {
      const videoId = url.split("v=")[1]?.split("&")[0];
      return `https://www.youtube.com/embed/${videoId}`;
    }
    if (url.includes("youtu.be/")) {
      const videoId = url.split("youtu.be/")[1]?.split("?")[0];
      return `https://www.youtube.com/embed/${videoId}`;
    }
    return url;
  };

  return (
    <Card className="overflow-hidden">
      <CardHeader className="pb-2">
        <CardTitle className="text-base font-medium flex items-center gap-2">
          <Play className="h-4 w-4 text-accent" />
          {title}
          <span className="text-xs text-muted-foreground ml-auto">{source}</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <div className="media-embed">
          <iframe
            src={getEmbedUrl(url)}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full aspect-video"
          />
        </div>
      </CardContent>
    </Card>
  );
}

interface MapEmbedProps {
  query: string;
  title: string;
}

export function MapEmbed({ query, title }: MapEmbedProps) {
  const embedUrl = `https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=${encodeURIComponent(query)}`;
  
  return (
    <Card className="overflow-hidden">
      <CardHeader className="pb-2">
        <CardTitle className="text-base font-medium flex items-center gap-2">
          <MapPin className="h-4 w-4 text-accent" />
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <div className="media-embed">
          <iframe
            src={embedUrl}
            title={title}
            className="w-full aspect-video"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </CardContent>
    </Card>
  );
}

interface ImageCardProps {
  src: string;
  alt: string;
  title: string;
  caption?: string;
}

export function ImageCard({ src, alt, title, caption }: ImageCardProps) {
  return (
    <Card className="overflow-hidden">
      <CardHeader className="pb-2">
        <CardTitle className="text-base font-medium flex items-center gap-2">
          <ImageIcon className="h-4 w-4 text-accent" />
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <figure>
          <img 
            src={src} 
            alt={alt} 
            className="w-full h-auto object-cover"
          />
          {caption && (
            <figcaption className="p-4 text-sm text-muted-foreground italic text-center bg-secondary/30">
              {caption}
            </figcaption>
          )}
        </figure>
      </CardContent>
    </Card>
  );
}

interface ExternalLinkCardProps {
  url: string;
  title: string;
  description: string;
  platform: string;
}

export function ExternalLinkCard({ url, title, description, platform }: ExternalLinkCardProps) {
  return (
    <Card className="hover:shadow-md transition-shadow">
      <CardContent className="p-4">
        <a 
          href={url} 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-start gap-4 group"
        >
          <div className="p-2 bg-secondary rounded-lg group-hover:bg-accent/20 transition-colors">
            <ExternalLink className="h-5 w-5 text-accent" />
          </div>
          <div className="flex-1">
            <h4 className="font-medium text-foreground group-hover:text-primary transition-colors">
              {title}
            </h4>
            <p className="text-sm text-muted-foreground mt-1">{description}</p>
            <span className="text-xs text-accent font-medium mt-2 inline-block">
              {platform}
            </span>
          </div>
        </a>
      </CardContent>
    </Card>
  );
}
