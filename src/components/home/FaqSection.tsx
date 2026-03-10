
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FaqSection = () => {
  const faqs = [
    {
      question: "Combien coûte un site web avec eLimyt ?",
      answer: "Notre offre Site Web & Maintenance commence à 24,90€ HT/mois, sans engagement. Cela inclut la création du site, l'hébergement, le nom de domaine, la maintenance et les mises à jour. Aucun frais caché.",
    },
    {
      question: "Y a-t-il un engagement de durée ?",
      answer: "Non, aucun engagement. Vous pouvez résilier à tout moment. Nous sommes convaincus que la qualité de notre service vous fidélisera naturellement.",
    },
    {
      question: "Suis-je propriétaire de mon site ?",
      answer: "Oui, vous êtes propriétaire de l'intégralité de votre contenu (textes, images, logos). Si vous souhaitez partir, nous vous transférons tous vos fichiers.",
    },
    {
      question: "Combien de temps faut-il pour créer mon site ?",
      answer: "Votre site est livré en 7 jours maximum après validation du projet. Nous respectons toujours ce délai.",
    },
    {
      question: "Que comprend la maintenance incluse ?",
      answer: "La maintenance couvre les mises à jour de sécurité, les sauvegardes régulières, les corrections de bugs, les petites modifications de contenu et le support technique par email et téléphone.",
    },
    {
      question: "Proposez-vous d'autres services que le site web ?",
      answer: "Oui ! Nous proposons aussi le dépannage informatique, la sécurité réseau, la sauvegarde cloud et les solutions SaaS sur mesure. Un seul interlocuteur pour tous vos besoins numériques.",
    },
  ];

  return (
    <section id="faq" className="section-padding section-alt">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary mb-3">FAQ</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy">
            Vos questions, nos <span className="text-primary">réponses</span>
          </h2>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border border-border rounded-xl px-6 data-[state=open]:shadow-sm"
              >
                <AccordionTrigger className="text-left font-heading font-semibold text-navy hover:no-underline py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
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
