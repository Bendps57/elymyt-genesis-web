
import SectionTitle from "../../common/SectionTitle";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Separator } from "@/components/ui/separator";

const FaqSection = () => {
  const faqItems = [
    {
      question: "Pourquoi votre site web est si abordable par rapport à d'autres agences ?",
      answer: "Grâce à notre processus optimisé et à nos modèles premium personnalisables, nous pouvons vous offrir un site web de qualité professionnelle à une fraction du prix du marché. Notre objectif est de rendre les sites web haut de gamme accessibles à tous les entrepreneurs."
    },
    {
      question: "Comment se déroule le processus de création ?",
      answer: "Après votre commande, nous vous envoyons un questionnaire pour comprendre vos besoins. Nous créons ensuite une maquette dans les 48h. Après vos retours, nous finalisons le site en 5 jours maximum et le mettons en ligne."
    },
    {
      question: "Est-ce que je peux modifier mon site ?",
      answer: "Notre équipe s'occupe de tout pour vous garantir un site toujours propre et professionnel. Vous n'avez rien à gérer : notre service après-vente est à votre disposition pour effectuer toutes les modificati"
    },
    {
      question: "Que se passe-t-il après la première année ?",
      answer: "L'hébergement et le nom de domaine sont offerts la première année. Ensuite, vous ne payez que 9,90€/mois pour l'hébergement premium, les mises à jour de sécurité et l'assistance. Vous restez propriétaire de votre nom de domaine."
    },
    {
      question: "Et si je ne suis pas satisfait du résultat ?",
      answer: "Nous offrons une garantie 'Satisfait ou Remboursé' de 14 jours après la livraison finale. Si vous n'êtes pas entièrement satisfait, nous vous remboursons intégralement. De plus, nous garantissons une livraison en 7 jours ou le service est offert."
    }
  ];

  return (
    <section className="py-16 bg-muted">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="Questions" 
          highlightedText="Fréquentes" 
          subtitle="Tout ce que vous devez savoir avant de commander" 
          className="mb-12" 
        />
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="bg-white dark:bg-elimyt-dark/60 rounded-xl shadow-lg p-4">
            {faqItems.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left px-2 py-4 text-lg font-medium hover:no-underline">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="px-2 pb-4 pt-2 text-foreground/80">
                  {item.answer}
                </AccordionContent>
                {index < faqItems.length - 1 && <Separator className="my-0" />}
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
