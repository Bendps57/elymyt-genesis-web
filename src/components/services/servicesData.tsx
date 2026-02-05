
import { ReactNode } from "react";
import {
  Globe,
  ShoppingCart,
  Smartphone,
  Search,
  BarChart,
  Zap,
  Code,
  Database,
  Layers,
} from "lucide-react";

export interface ServiceProps {
  id: string;
  icon: ReactNode;
  title: string;
  description: string;
  benefits: string[];
  price: string;
  features: string[];
  popular?: boolean;
}

export interface AdditionalServiceProps {
  id: string;
  icon: ReactNode;
  title: string;
  description: string;
}

export const services: ServiceProps[] = [
  {
    id: "vitrine",
    icon: <Globe className="h-10 w-10" />,
    title: "Site Vitrine Professionnel",
    description: "Présentez votre entreprise avec élégance. Solution idéale pour les PME, artisans et indépendants qui souhaitent établir leur présence en ligne.",
    benefits: [
      "Design responsive sur mesure",
      "Optimisation pour les moteurs de recherche",
      "Intégration de formulaire de contact",
      "Optimisation des performances",
      "Hébergement premium (1 an)"
    ],
    price: "249,90€",
    features: [
      "Design élégant et professionnel",
      "100% responsive",
      "Livré en 7 jours",
      "SEO optimisé",
      "Performance maximale",
      "Nom de domaine et hébergement offerts 1 an"
    ],
    popular: true
  },
  {
    id: "ecommerce",
    icon: <ShoppingCart className="h-10 w-10" />,
    title: "E-commerce",
    description: "Lancez votre boutique en ligne et boostez vos ventes avec une expérience d'achat optimale. Solution complète de vente en ligne.",
    benefits: [
      "Plateforme de vente complète",
      "Paiement sécurisé",
      "Gestion des produits intuitive",
      "Design optimisé pour la conversion",
      "Suivi des commandes et des stocks"
    ],
    price: "Sur devis",
    features: [
      "Catalogue de produits",
      "Panier d'achat",
      "Paiement sécurisé",
      "Gestion des stocks",
      "Dashboard admin",
      "Devis personnalisé"
    ]
  },
  {
    id: "refonte",
    icon: <Zap className="h-10 w-10" />,
    title: "Refonte de Site",
    description: "Donnez une nouvelle vie à votre site existant. Améliorez son design, ses performances et sa visibilité.",
    benefits: [
      "Analyse de l'existant",
      "Design moderne et ergonomique",
      "Amélioration des performances",
      "Optimisation du référencement",
      "Migration de contenu"
    ],
    price: "Sur devis",
    features: [
      "Audit de l'existant",
      "Nouveau design",
      "Migration du contenu",
      "SEO avancé",
      "Formation à l'utilisation",
      "Devis personnalisé"
    ]
  },
  {
    id: "saas",
    icon: <Layers className="h-10 w-10" />,
    title: "SaaS Sur Mesure",
    description: "Transformez vos idées et processus métiers en plateformes web puissantes. Solutions personnalisées pour automatiser et optimiser votre activité.",
    benefits: [
      "Analyse approfondie de vos besoins métiers",
      "Développement d'une solution 100% sur mesure",
      "Architecture évolutive et scalable",
      "Formation de votre équipe",
      "Support et maintenance continues"
    ],
    price: "Sur devis",
    features: [
      "Solution entièrement personnalisée",
      "Technologies modernes et performantes",
      "Interface utilisateur intuitive",
      "Accompagnement de A à Z",
      "Évolutions selon vos besoins",
      "Projet étudié individuellement"
    ]
  }
];

export const additionalServices: AdditionalServiceProps[] = [
  {
    id: "seo",
    icon: <Search className="h-10 w-10" />,
    title: "Référencement SEO",
    description: "Améliorez votre visibilité sur les moteurs de recherche et attirez plus de visiteurs qualifiés."
  },
  {
    id: "mobile",
    icon: <Smartphone className="h-10 w-10" />,
    title: "Applications Mobiles",
    description: "Développez votre présence sur mobile avec une application native ou hybride adaptée à vos besoins."
  },
  {
    id: "analytics",
    icon: <BarChart className="h-10 w-10" />,
    title: "Analytique Web",
    description: "Mesurez et analysez le comportement de vos utilisateurs pour optimiser votre stratégie digitale."
  },
  {
    id: "maintenance",
    icon: <Code className="h-10 w-10" />,
    title: "Maintenance Web",
    description: "Gardez votre site web à jour, sécurisé et performant avec nos services de maintenance régulière."
  },
  {
    id: "hosting",
    icon: <Database className="h-10 w-10" />,
    title: "Hébergement & Domaine",
    description: "Solutions d'hébergement fiables et performantes, avec gestion de noms de domaine incluse."
  }
];
