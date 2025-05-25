
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
    id: "iuheg-education",
    title: "Institut Universitaire Hautes Etudes de Guinée",
    category: "Site Institutionnel",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1200&h=800&q=80",
    description: "Site web institutionnel pour l'Institut Universitaire Hautes Etudes de Guinée.",
    challenge: "L'Institut Universitaire Hautes Etudes de Guinée avait besoin d'un site web moderne et professionnel pour présenter ses programmes d'études, attirer de nouveaux étudiants et faciliter les démarches administratives en ligne.",
    solution: "Création d'un site institutionnel complet avec présentation des formations, système d'inscription en ligne, espace étudiant et administration, ainsi qu'une section actualités pour communiquer avec la communauté universitaire.",
    results: [
      "Augmentation de 60% des demandes d'admission",
      "Digitalisation complète des processus d'inscription",
      "Amélioration de la visibilité internationale de l'institut",
      "Réduction de 40% du temps de traitement administratif"
    ],
    technologies: ["WordPress", "Elementor Pro", "WooCommerce", "PHP", "MySQL", "JavaScript"],
    url: "https://iuheg.education"
  },
  {
    id: "tresses-by-honey",
    title: "Tresses by Honey",
    category: "Site Vitrine",
    image: "https://www.santeplusmag.com/wp-content/uploads/Les-11-types-de-tresses-africaines-pour-les-femmes-1200x628.jpg",
    description: "Site vitrine pour une coiffeuse spécialisée en tresses africaines à Thionville.",
    challenge: "Tresses by Honey avait besoin d'un site élégant et professionnel pour présenter ses services de coiffure spécialisée en tresses africaines et attirer une clientèle locale à Thionville.",
    solution: "Création d'un site vitrine moderne avec une galerie de réalisations, un système de prise de rendez-vous en ligne et une présentation attractive des différentes prestations.",
    results: [
      "Augmentation de 45% des demandes de rendez-vous",
      "Meilleure visibilité locale sur Thionville",
      "Présentation professionnelle des services et des réalisations"
    ],
    technologies: ["WordPress", "Elementor", "WooCommerce", "JavaScript"],
    url: "https://www.tressesbyhoney.fr"
  },
  {
    id: "vitall-securite",
    title: "Vitall Sécurité",
    category: "Site Vitrine",
    image: "https://www.wewatchsecurity.be/wp-content/uploads/2023/11/agents-de-gardiennage-1041x625.jpg",
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
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1200&h=800&q=80",
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
    image: "https://t4.ftcdn.net/jpg/02/89/78/17/360_F_289781730_0OJWSY2pS9Q69KT4g2pr5liE8dmW9CL0.jpg",
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
