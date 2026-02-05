import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FaqSection = () => {
  const faqs = [
    {
      question: "Combien de temps faut-il pour créer mon site ?",
      answer: "Votre site web est livré en 7 jours maximum après validation de votre projet. Nous respectons toujours ce délai, sinon une semaine d'hébergement supplémentaire vous est offerte."
    },
    {
      question: "Que comprend l'offre à 249,90€ ?",
      answer: "L'offre inclut un site vitrine professionnel complet : design personnalisé, jusqu'à 5 pages, optimisation SEO, responsive (mobile/tablette), formulaire de contact, hébergement premium 1 an, nom de domaine 1 an, certificat SSL et support technique."
    },
    {
      question: "Comment fonctionne la garantie satisfait ou remboursé ?",
      answer: "Vous avez 14 jours après la livraison pour tester votre site. Si vous n'êtes pas entièrement satisfait, nous vous remboursons intégralement sans condition."
    },
    {
      question: "Puis-je modifier mon site après la livraison ?",
      answer: "Oui, vous avez droit à des révisions illimitées pendant la phase de conception. Après la mise en ligne, nous proposons des forfaits de maintenance pour les modifications futures."
    },
    {
      question: "Dois-je fournir du contenu (textes, images) ?",
      answer: "Idéalement oui, mais nous pouvons vous accompagner dans la rédaction de vos textes et la sélection d'images professionnelles si nécessaire."
    },
    {
      question: "Mon site sera-t-il bien référencé sur Google ?",
      answer: "Oui, tous nos sites sont optimisés pour le référencement naturel (SEO) : structure technique optimale, balises méta, vitesse de chargement rapide, et compatibilité mobile."
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Questions <span className="text-primary">Fréquentes</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Tout ce que vous devez savoir avant de vous lancer.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-card border border-border rounded-lg px-6"
              >
                <AccordionTrigger className="text-left font-medium text-foreground hover:no-underline py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
