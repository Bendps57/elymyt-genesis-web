
export interface Project {
  id: string;
  title: string;
  category: string;
  image: string;
  description: string;
  challenge: string;
  solution: string;
  results: string[];
  technologies: string[];
  url: string;
}

export const projects: Project[] = [
  {
    id: "societe-dbk",
    title: "Société DBK",
    category: "SaaS Sur Mesure",
    image: new URL("@/assets/sdbk-transport.png", import.meta.url).href,
    description: "Plateforme SaaS complète pour la gestion de transport et logistique.",
    challenge: "Société DBK, entreprise de transport et de logistique, avait besoin d'un outil SaaS complet pour digitaliser la gestion de ses opérations : suivi des véhicules, planification des missions, gestion des chauffeurs et automatisation de la facturation. L'objectif : gagner en efficacité et centraliser toutes les données dans un seul système.",
    solution: "Conception d'une application web moderne et intuitive, pensée pour simplifier le quotidien des équipes. Le logiciel intègre : la gestion de la flotte (véhicules, entretiens, documents, alertes), la gestion des chauffeurs (informations, plannings, affectations), la planification des missions avec un calendrier dynamique, un module de facturation automatisée et un tableau de bord en temps réel.",
    results: [
      "Centralisation complète des opérations dans une seule plateforme",
      "Réduction significative du temps de gestion administrative",
      "Meilleure visibilité sur la flotte, les chauffeurs et les missions",
      "Outil évolutif, prêt à accueillir de nouvelles fonctionnalités"
    ],
    technologies: ["React", "TypeScript", "Node.js", "PostgreSQL", "Tailwind CSS"],
    url: "https://elimyt.com/contact"
  },
  {
    id: "usth-tennis-table",
    title: "USTH Tennis de Table",
    category: "Site Vitrine",
    image: new URL("@/assets/usth-tennis.png", import.meta.url).href,
    description: "Site vitrine moderne pour un club de tennis de table en Lorraine.",
    challenge: "Le club USTH Tennis de Table souhaitait un site moderne et dynamique pour renforcer sa présence en ligne, valoriser son image locale et faciliter l'accès aux informations pour ses adhérents et futurs membres.",
    solution: "Création d'un site vitrine sportif à l'image du club : convivial, accessible et performant. Le site met en avant : les équipes et résultats du club, les horaires d'entraînement et informations d'inscription, une galerie photo mettant en valeur la vie du club, une section actualités pour partager les événements et compétitions.",
    results: [
      "Meilleure visibilité locale et attractivité du club",
      "Simplification de la communication avec les adhérents",
      "Image modernisée, reflétant les valeurs sportives et familiales du club"
    ],
    technologies: ["WordPress", "CSS personnalisé", "JavaScript"],
    url: "https://elimyt.com/contact"
  },
  {
    id: "iuheg-education",
    title: "Institut Universitaire Hautes Etudes de Guinée",
    category: "Site Institutionnel",
    image: "https://i.imgur.com/gC3cD8S.png",
    description: "Site web institutionnel pour l'Institut Universitaire Hautes Etudes de Guinée.",
    challenge: "L'Institut Universitaire Hautes Etudes de Guinée avait besoin d'un site web moderne et professionnel pour présenter ses programmes d'études, attirer de nouveaux étudiants et faciliter les démarches administratives en ligne.",
    solution: "Création d'un site institutionnel complet avec présentation des formations, système d'inscription en ligne, espace étudiant et administration, ainsi qu'une section actualités pour communiquer avec la communauté universitaire.",
    results: [
      "Augmentation de 60% des demandes d'admission",
      "Digitalisation complète des processus d'inscription",
      "Amélioration de la visibilité internationale de l'institut",
      "Réduction de 40% du temps de traitement administratif"
    ],
    technologies: ["WordPress", "Elementor Pro", "PHP", "MySQL", "JavaScript"],
    url: "https://iuheg.education"
  },
  {
    id: "tresses-by-honey",
    title: "Tresses by Honey",
    category: "Site Vitrine",
    image: "https://i.imgur.com/h2P1zsj.png",
    description: "Site vitrine pour une coiffeuse spécialisée en tresses africaines à Thionville.",
    challenge: "Tresses by Honey avait besoin d'un site élégant et professionnel pour présenter ses services de coiffure spécialisée en tresses africaines et attirer une clientèle locale à Thionville.",
    solution: "Création d'un site vitrine moderne avec une galerie de réalisations, un système de prise de rendez-vous en ligne et une présentation attractive des différentes prestations.",
    results: [
      "Augmentation de 45% des demandes de rendez-vous",
      "Meilleure visibilité locale sur Thionville",
      "Présentation professionnelle des services et des réalisations"
    ],
    technologies: ["WordPress", "Elementor", "JavaScript"],
    url: "https://www.tressesbyhoney.fr"
  },
  {
    id: "vitall-securite",
    title: "Vitall Sécurité",
    category: "Site Vitrine",
    image: "https://i.imgur.com/NaqFha8.png",
    description: "Site vitrine pour une entreprise de sécurité et de vidéosurveillance.",
    challenge: "Vitall Sécurité avait besoin d'un site professionnel pour présenter ses services de sécurité et de vidéosurveillance, tout en générant de nouveaux prospects.",
    solution: "Création d'un site vitrine moderne avec une structure claire mettant en avant les différents services, ainsi qu'un formulaire de contact optimisé pour la conversion.",
    results: [
      "Amélioration de la visibilité en ligne",
      "Augmentation du nombre de demandes de devis",
      "Meilleur positionnement sur les moteurs de recherche"
    ],
    technologies: ["WordPress", "CSS personnalisé", "PHP", "JavaScript"],
    url: "https://www.vitallsecurite.fr"
  },
  {
    id: "centre-formation-lorraine",
    title: "Centre de Formation Lorraine",
    category: "Site Vitrine",
    image: "https://i.imgur.com/iSWm3qr.png",
    description: "Plateforme dédiée à la formation professionnelle en Lorraine.",
    challenge: "Le Centre de Formation Lorraine avait besoin d'un site permettant de présenter leur catalogue de formations et de faciliter les inscriptions en ligne.",
    solution: "Développement d'une plateforme intuitive avec présentation détaillée des formations proposées et intégration d'un système d'inscription en ligne.",
    results: [
      "Augmentation des inscriptions aux formations",
      "Réduction du temps consacré à la gestion administrative",
      "Meilleure visibilité de l'offre de formation"
    ],
    technologies: ["WordPress", "Elementor", "PHP", "Formulaires personnalisés"],
    url: "https://www.centredeformationlorraine.fr"
  },
  {
    id: "squad-esports",
    title: "Squad eSports",
    category: "Blog, Site Vitrine",
    image: "https://i.imgur.com/FFHIgge.png",
    description: "Plateforme d'actualités et de contenu sur l'univers du gaming et des compétitions eSport.",
    challenge: "Squad eSports cherchait à créer un média en ligne dédié aux actualités eSport avec un système de gestion de contenu efficace et une interface attrayante pour les lecteurs.",
    solution: "Développement d'une plateforme de blog optimisée pour le référencement avec catégorisation avancée, système de commentaires, et intégration de médias sociaux.",
    results: [
      "12,000 visiteurs mensuels atteints en 6 mois",
      "Position de référence dans l'actualité eSport francophone",
      "Monétisation efficace via des partenariats stratégiques"
    ],
    technologies: ["WordPress", "Gutenberg", "Advanced Custom Fields", "SEO Yoast", "Google Analytics"],
    url: "https://squadesports.com"
  }
];
