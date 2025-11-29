import { Card, CardContent } from "@/components/ui/card";
import { Mail, Linkedin, GraduationCap } from "lucide-react";

interface AuthorCardProps {
  name: string;
  role: string;
  institution: string;
  email: string;
  bio: string;
  imageUrl?: string;
  specialization?: string;
}

export function AuthorCard({ 
  name, 
  role, 
  institution, 
  email, 
  bio, 
  imageUrl,
  specialization 
}: AuthorCardProps) {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-all duration-300">
      <CardContent className="p-0">
        <div className="flex flex-col md:flex-row">
          {/* Image or Avatar */}
          <div className="md:w-48 h-48 md:h-auto bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center">
            {imageUrl ? (
              <img 
                src={imageUrl} 
                alt={name}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-24 h-24 rounded-full bg-primary-foreground/20 flex items-center justify-center">
                <span className="text-3xl font-serif font-bold text-primary-foreground">
                  {name.split(' ').map(n => n[0]).join('')}
                </span>
              </div>
            )}
          </div>
          
          {/* Content */}
          <div className="flex-1 p-6">
            <div className="flex items-start justify-between mb-3">
              <div>
                <h3 className="font-serif text-xl font-semibold text-foreground">
                  {name}
                </h3>
                <p className="text-accent font-medium text-sm">{role}</p>
              </div>
              <GraduationCap className="h-5 w-5 text-muted-foreground" />
            </div>
            
            <p className="text-sm text-muted-foreground mb-2">{institution}</p>
            
            {specialization && (
              <p className="text-sm text-primary font-medium mb-3">
                Especialización: {specialization}
              </p>
            )}
            
            <p className="text-sm text-foreground/80 leading-relaxed mb-4">
              {bio}
            </p>
            
            <div className="flex items-center gap-4 pt-3 border-t border-border">
              <a 
                href={`mailto:${email}`}
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="h-4 w-4" />
                <span>{email}</span>
              </a>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
