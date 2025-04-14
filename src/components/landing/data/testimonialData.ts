
export type VideoTestimonial = {
  id: string;
  clientName: string;
  businessName: string;
  thumbnailUrl: string;
  videoUrl: string;
  title: string;
};

export const testimonials: VideoTestimonial[] = [
  {
    id: "test1",
    clientName: "Marie AUBRY",
    businessName: "Victoria Beauty",
    thumbnailUrl: "https://placehold.co/600x400/3563E9/FFFFFF/png?text=Témoignage+Marie+AUBRY",
    videoUrl: "https://www.youtube.com/embed/owIgLNAfIbw", // URL pour le short YouTube
    title: "Je partais de zéro, et aujourd'hui, je refuse des clients.",
  },
  {
    id: "test2",
    clientName: "Marie Lambert",
    businessName: "ML Consulting",
    thumbnailUrl: "https://placehold.co/600x400/8B5CF6/FFFFFF/png?text=Témoignage+Marie+Lambert",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Replace with actual video URL
    title: "Mon expérience avec eLimyt pour la refonte de mon site professionnel",
  },
  {
    id: "test3",
    clientName: "Thomas Martin",
    businessName: "Café de la Place",
    thumbnailUrl: "https://placehold.co/600x400/EC4899/FFFFFF/png?text=Témoignage+Thomas+Martin",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Replace with actual video URL
    title: "Comment mon site vitrine m'a permis d'attirer de nouveaux clients",
  },
  {
    id: "test4",
    clientName: "Sophie Renard",
    businessName: "Boutique Fleurie",
    thumbnailUrl: "https://placehold.co/600x400/3563E9/FFFFFF/png?text=Témoignage+Sophie+Renard",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Replace with actual video URL
    title: "Ma collaboration avec eLimyt pour créer ma présence en ligne",
  },
];
