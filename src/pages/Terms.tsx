import { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import { Check, FileText, ShieldCheck } from "lucide-react";

const Terms = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sections = [
    {
      title: "1. Objet",
      content: "Les présentes Conditions Générales de Vente (ci-après les \"CGV\") régissent les relations contractuelles entre eLimyt (ci-après le \"Prestataire\") et ses clients (ci-après le \"Client\") dans le cadre de la fourniture de services de création et de développement de sites web et d'applications."
    },
    {
      title: "2. Services proposés",
      content: "Le Prestataire propose les services suivants :",
      list: [
        "Création de sites vitrine",
        "Développement de sites e-commerce",
        "Refonte de sites web existants",
        "Optimisation SEO",
        "Maintenance web"
      ]
    },
    {
      title: "3. Tarifs et modalités de paiement",
      content: "Les tarifs des services sont indiqués en euros et hors taxes. Le Prestataire se réserve le droit de modifier ses tarifs à tout moment, mais les services seront facturés sur la base des tarifs en vigueur au moment de la validation de la commande.\n\nSauf mention contraire, les modalités de paiement sont les suivantes :",
      list: [
        "Un acompte de 30% à la signature du devis",
        "Le solde à la livraison du projet"
      ],
      additionalContent: "Tout retard de paiement donnera lieu à l'application de pénalités de retard au taux d'intérêt légal en vigueur, majoré de 3 points."
    },
    {
      title: "4. Processus de commande et délais",
      content: "La commande est validée après acceptation du devis par le Client et réception de l'acompte par le Prestataire. Les délais de livraison indiqués sur le site sont donnés à titre indicatif et peuvent varier en fonction de la complexité du projet.\n\nPour les sites vitrine, la livraison est prévue sous 5 jours ouvrables à compter de la validation de la commande et de la réception de tous les éléments nécessaires à la réalisation du projet.\n\nPour les sites e-commerce, la livraison est prévue sous 2 semaines ouvrables à compter de la validation de la commande et de la réception de tous les éléments nécessaires à la réalisation du projet."
    },
    {
      title: "5. Obligations du Client",
      content: "Le Client s'engage à :",
      list: [
        "Fournir tous les éléments nécessaires à la réalisation du projet (textes, images, logo, etc.) dans les délais convenus",
        "Disposer des droits nécessaires sur les éléments fournis (droits d'auteur, droits à l'image, etc.)",
        "Collaborer activement avec le Prestataire pour la bonne réalisation du projet",
        "Valider les différentes étapes du projet dans les délais convenus"
      ]
    },
    {
      title: "6. Obligations du Prestataire",
      content: "Le Prestataire s'engage à :",
      list: [
        "Réaliser les services conformément au devis accepté par le Client",
        "Respecter les délais de livraison convenus, sous réserve que le Client ait fourni tous les éléments nécessaires à la réalisation du projet dans les délais impartis",
        "Informer le Client de toute difficulté rencontrée durant la réalisation du projet"
      ]
    },
    {
      title: "7. Propriété intellectuelle",
      content: "Le Prestataire cède au Client l'ensemble des droits de propriété intellectuelle sur les créations réalisées dans le cadre du projet, après paiement intégral du prix convenu.\n\nLe Client autorise le Prestataire à mentionner son nom et à présenter le projet réalisé dans ses références commerciales, sauf mention contraire explicite."
    },
    {
      title: "8. Garantie et maintenance",
      content: "Le Prestataire garantit le bon fonctionnement des sites et applications livrés pendant une durée de 3 mois à compter de la livraison.\n\nDes services de maintenance peuvent être proposés au Client selon des conditions définies dans un contrat spécifique."
    },
    {
      title: "9. Limitation de responsabilité",
      content: "La responsabilité du Prestataire ne pourra être engagée qu'en cas de faute prouvée et est limitée au montant des sommes effectivement versées par le Client.\n\nLe Prestataire ne saurait être tenu responsable des conséquences d'une utilisation non conforme ou frauduleuse des sites et applications livrés."
    },
    {
      title: "10. Force majeure",
      content: "Le Prestataire ne pourra être tenu responsable d'un retard ou d'une inexécution de ses obligations en cas de force majeure, telle que définie par la jurisprudence française."
    },
    {
      title: "11. Droit applicable et juridiction compétente",
      content: "Les présentes CGV sont soumises au droit français. En cas de litige, les tribunaux du ressort du siège social du Prestataire seront seuls compétents, sauf disposition légale contraire."
    },
    {
      title: "12. Dispositions diverses",
      content: "Si l'une quelconque des stipulations des présentes CGV était annulée, cette nullité n'entraînerait pas la nullité des autres stipulations qui demeureront en vigueur entre les parties.\n\nToute tolérance ou renonciation du Prestataire, dans l'application de tout ou partie des engagements prévus dans les présentes CGV, quelles qu'en aient pu être la fréquence et la durée, ne saurait valoir modification des présentes CGV ni générer un droit quelconque."
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <section className="pt-32 pb-20 bg-gradient-to-b from-background to-muted/30">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            className="max-w-4xl mx-auto"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
            <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">
              <span className="text-gradient">Conditions Générales de Vente</span>
            </h1>
            
            <div className="bg-white dark:bg-elimyt-dark/40 rounded-2xl shadow-lg p-8 md:p-10 prose prose-lg dark:prose-invert max-w-none">
              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-8 italic">
                <FileText className="h-4 w-4" />
                <span>Dernière mise à jour : {new Date().toLocaleDateString()}</span>
              </div>
              
              <div className="mb-10 p-4 border border-primary/20 bg-primary/5 dark:bg-primary/10 rounded-lg flex items-center gap-4">
                <ShieldCheck className="h-10 w-10 text-primary shrink-0" />
                <p className="text-sm md:text-base m-0">
                  Ces conditions générales de vente constituent la base de notre relation commerciale.
                  Elles définissent les droits et obligations de chaque partie dans le cadre de nos prestations.
                  Nous vous invitons à les lire attentivement avant toute commande.
                </p>
              </div>
              
              {sections.map((section, index) => (
                <div key={index} className="mb-8">
                  <h2 className="text-xl md:text-2xl font-semibold mb-4 text-primary dark:text-primary">
                    {section.title}
                  </h2>
                  <p className="mb-4">{section.content}</p>
                  
                  {section.list && (
                    <ul className="list-none pl-0 mb-4 space-y-2">
                      {section.list.map((item, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <span className="mt-1"><Check className="h-5 w-5 text-primary" /></span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                  
                  {section.additionalContent && (
                    <p className="mt-4">{section.additionalContent}</p>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Terms;
