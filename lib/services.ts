import type { LucideIcon } from "lucide-react";
import {
  Wind,
  Disc3,
  Gauge,
  Zap,
  Droplets,
  Wrench,
  Settings,
  Compass,
  CircleDot,
  Snowflake,
  Cpu,
  ShieldCheck,
} from "lucide-react";

export type Service = {
  slug: string;
  title: string;
  description: string;
  icon: LucideIcon;
};

export const services: Service[] = [
  {
    slug: "abgasanlagenservice",
    title: "Abgasanlagenservice",
    description:
      "Reparatur und Wartung deiner Abgasanlage – umweltfreundlich und effizient.",
    icon: Wind,
  },
  {
    slug: "bremsenservice",
    title: "Bremsenservice",
    description:
      "Von der gründlichen Bremsenprüfung bis zum professionellen Wechsel.",
    icon: Disc3,
  },
  {
    slug: "bts-turbolader",
    title: "BTS Turbolader",
    description:
      "Mehr Leistung: Verbesserte Effizienz und langlebige Turbolader-Komponenten.",
    icon: Gauge,
  },
  {
    slug: "leistungssteigerung",
    title: "Leistungssteigerung",
    description:
      "Optimierte Schaltzeiten, präzisere Getriebeparameter, dynamisches Fahrverhalten.",
    icon: Zap,
  },
  {
    slug: "automatikgetriebeoelservice",
    title: "Automatikgetriebeölservice",
    description: "Sanfte Schaltvorgänge und geringerer Kraftstoffverbrauch.",
    icon: Droplets,
  },
  {
    slug: "unfallinstandsetzung",
    title: "Unfallinstandsetzung",
    description: "Präzise Reparaturen und Lackierarbeiten.",
    icon: Wrench,
  },
  {
    slug: "wartung-inspektion",
    title: "Wartung & Inspektion",
    description: "Nach Herstellervorgabe, um die Garantie zu erhalten.",
    icon: Settings,
  },
  {
    slug: "fahrwerk-achsvermessung",
    title: "Fahrwerk & Achsvermessung",
    description: "Präzise Achsvermessung für optimale Fahrstabilität.",
    icon: Compass,
  },
  {
    slug: "reifenwechsel",
    title: "Reifenwechsel",
    description:
      "Reifenwechsel, Lagerung und Beratung – Rundum-Service.",
    icon: CircleDot,
  },
  {
    slug: "klimaanlagenservice",
    title: "Klimaanlagenservice",
    description: "Wartung und Reparatur für angenehme Temperaturen.",
    icon: Snowflake,
  },
  {
    slug: "elektronikdiagnose",
    title: "Elektronikdiagnose",
    description: "Moderne Computerdiagnose zur Fehlererkennung.",
    icon: Cpu,
  },
  {
    slug: "tuev-abgasuntersuchung",
    title: "TÜV & Abgasuntersuchung",
    description: "Vorbereitung und Durchführung der TÜV-Abnahme.",
    icon: ShieldCheck,
  },
];

export const contact = {
  phone: "+49 8321 89052",
  phoneHref: "tel:+498321890520",
  email: "info@rw-kfz-service.de",
  address: "Hindelanger Str. 27, 87527 Sonthofen",
  hoursShort: "Mo–Do 7:00–12:00 / 13:00–17:00",
};
