import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { werkstatt } from "@/lib/werkstatt.config";

export function Faq() {
  return (
    <section className="bg-background py-20 md:py-28">
      <div className="container grid gap-12 lg:grid-cols-12">
        <Reveal className="lg:col-span-5">
          <SectionHeading
            eyebrow="FAQ"
            title="Häufige Fragen."
            description="Du hast eine Frage zu Reparaturen, Terminen oder unserem Service? Hier findest Du die schnellen Antworten."
          />
          <div className="mt-6">
            <Button asChild>
              <Link href="/kontakt">Jetzt kontaktieren</Link>
            </Button>
          </div>
        </Reveal>

        <Reveal className="lg:col-span-7" delay={0.1}>
          <Accordion
            type="single"
            collapsible
            defaultValue={werkstatt.faq[0]?.frage}
            className="w-full"
          >
            {werkstatt.faq.map((f) => (
              <AccordionItem key={f.frage} value={f.frage}>
                <AccordionTrigger>{f.frage}</AccordionTrigger>
                <AccordionContent>{f.antwort}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
}
