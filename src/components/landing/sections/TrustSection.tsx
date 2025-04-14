
import React, { useState, useRef } from "react";
import { ExternalLink, Play } from "lucide-react";
import SectionTitle from "@/components/common/SectionTitle";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";

type VideoTestimonial = {
  id: string;
  clientName: string;
  businessName: string;
  thumbnailUrl: string;
  videoUrl: string;
  title: string;
};

// Mise à jour des données de témoignage avec la vraie vidéo pour Jean Dupont
const testimonials: VideoTestimonial[] = [
  {
    id: "test1",
    clientName: "Jean Dupont",
    businessName: "Atelier Dupont",
    thumbnailUrl: "https://placehold.co/600x400/3563E9/FFFFFF/png?text=Témoignage+Jean+Dupont",
    videoUrl: "https://www.youtube.com/embed/owIgLNAfIbw", // Nouvelle URL pour le short YouTube
    title: "Comment j'ai multiplié ma clientèle par 3 grâce à mon nouveau site web",
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

const TrustSection = () => {
  const [activeVideo, setActiveVideo] = useState<VideoTestimonial>(testimonials[0]);
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef<HTMLIFrameElement>(null);

  const handleThumbnailClick = (testimonial: VideoTestimonial) => {
    setActiveVideo(testimonial);
    setPlaying(false);
  };

  const handlePlayClick = () => {
    setPlaying(true);
    if (videoRef.current) {
      // Ajouter les paramètres nécessaires pour les shorts YouTube
      videoRef.current.src = `${activeVideo.videoUrl}?autoplay=1&shorts=0`;
    }
  };

  return (
    <section id="trust" className="section-padding bg-muted/50">
      <div className="container mx-auto px-4 md:px-6">
        <SectionTitle
          title="Ils nous font"
          highlightedText="confiance"
          subtitle="Découvrez les retours d'expérience de nos clients satisfaits"
          className="mb-12"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Main featured video */}
          <div className="bg-white dark:bg-card rounded-2xl shadow-lg overflow-hidden card-hover">
            <div className="relative aspect-video bg-muted">
              {playing ? (
                <iframe
                  ref={videoRef}
                  src={activeVideo.videoUrl}
                  title={`Témoignage de ${activeVideo.clientName}`}
                  className="absolute inset-0 w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              ) : (
                <>
                  <img
                    src={activeVideo.thumbnailUrl}
                    alt={`Témoignage de ${activeVideo.clientName}`}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                    <button
                      onClick={handlePlayClick}
                      className="bg-white/90 hover:bg-white text-elimyt-blue rounded-full p-6 transition-transform hover:scale-110"
                      aria-label="Lire la vidéo"
                    >
                      <Play className="h-10 w-10 fill-elimyt-blue" />
                    </button>
                  </div>
                </>
              )}
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">{activeVideo.title}</h3>
              <p className="text-foreground/70 mb-4">
                {activeVideo.clientName}, {activeVideo.businessName}
              </p>
              <Button asChild variant="default" className="w-full">
                <Link to="/contact" className="flex items-center justify-center">
                  Contactez-nous pour transformer votre projet
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Second featured video */}
          <div className="bg-white dark:bg-card rounded-2xl shadow-lg overflow-hidden card-hover">
            <div className="relative aspect-video bg-muted">
              <img
                src={testimonials[1].thumbnailUrl}
                alt={`Témoignage de ${testimonials[1].clientName}`}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                <button
                  onClick={() => {
                    setActiveVideo(testimonials[1]);
                    handlePlayClick();
                  }}
                  className="bg-white/90 hover:bg-white text-elimyt-blue rounded-full p-6 transition-transform hover:scale-110"
                  aria-label="Lire la vidéo"
                >
                  <Play className="h-10 w-10 fill-elimyt-blue" />
                </button>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">{testimonials[1].title}</h3>
              <p className="text-foreground/70 mb-4">
                {testimonials[1].clientName}, {testimonials[1].businessName}
              </p>
              <Button asChild variant="default" className="w-full">
                <Link to="/contact" className="flex items-center justify-center">
                  Demandez un devis personnalisé
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Thumbnails carousel */}
        <div className="mt-12">
          <h3 className="text-xl font-bold mb-6 text-center">Plus de témoignages</h3>
          <Carousel className="max-w-5xl mx-auto">
            <CarouselContent>
              {testimonials.map((testimonial) => (
                <CarouselItem key={testimonial.id} className="basis-1/2 md:basis-1/3 lg:basis-1/4">
                  <div 
                    className={`relative aspect-video rounded-lg overflow-hidden cursor-pointer transition-all border-2 hover:shadow-md ${
                      activeVideo.id === testimonial.id 
                        ? "border-primary" 
                        : "border-transparent"
                    }`}
                    onClick={() => handleThumbnailClick(testimonial)}
                  >
                    <img
                      src={testimonial.thumbnailUrl}
                      alt={`Témoignage de ${testimonial.clientName}`}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                      <Play className="h-8 w-8 text-white" />
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-2">
                      <p className="text-white text-xs font-medium truncate">
                        {testimonial.clientName}
                      </p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-1" />
            <CarouselNext className="right-1" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
