import { Mail, Clock, MapPin } from "lucide-react";
import { contact } from "@/lib/services";

export default function TopBar() {
  return (
    <div className="hidden md:block bg-card border-b border-border">
      <div className="container mx-auto px-6 py-2 flex items-center justify-between text-xs text-muted">
        <a
          href={`mailto:${contact.email}`}
          className="flex items-center gap-2 hover:text-accent transition-colors"
        >
          <Mail className="w-3.5 h-3.5 text-accent" aria-hidden />
          <span>{contact.email}</span>
        </a>
        <div className="flex items-center gap-2">
          <Clock className="w-3.5 h-3.5 text-accent" aria-hidden />
          <span>{contact.hoursShort}</span>
        </div>
        <div className="flex items-center gap-2">
          <MapPin className="w-3.5 h-3.5 text-accent" aria-hidden />
          <span>{contact.address}</span>
        </div>
      </div>
    </div>
  );
}
