
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
    clientName: "Elisa WEITEL",
    businessName: "",
    thumbnailUrl: "https://placehold.co/600x400/3563E9/FFFFFF/png?text=Témoignage+Elisa+WEITEL",
    videoUrl: "https://www.youtube.com/embed/rG1ho7f8fhc",
    title: "J'avais peur de me lancer..",
  },
  {
    id: "test2",
    clientName: "Marie AUBRY",
    businessName: "Victoria Beauty",
    thumbnailUrl: "https://placehold.co/600x400/8B5CF6/FFFFFF/png?text=Témoignage+Marie+AUBRY",
    videoUrl: "https://www.youtube.com/embed/owIgLNAfIbw",
    title: "Je partais de zéro, et aujourd'hui, je refuse des clients.",
  }
];
