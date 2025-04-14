
import React, { useState, useRef, useEffect } from "react";
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
import { AspectRatio } from "@/components/ui/aspect-ratio";

type VideoTestimonial = {
  id: string;
  clientName: string;
  businessName: string;
  thumbnailUrl: string;
  videoUrl: string;
  title: string;
};

// Mise à jour des données de témoignage avec le nouveau nom et la nouvelle entreprise
const testimonials: VideoTestimonial[] = [
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

const TrustSection = () => {
  const [activeVideo, setActiveVideo] = useState<VideoTestimonial>(testimonials[0]);
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef<HTMLIFrameElement>(null);

  // Reset playing state when active video changes
  useEffect(() => {
    setPlaying(false);
  }, [activeVideo.id]);

  const handleThumbnailClick = (testimonial: VideoTestimonial) => {
    setActiveVideo(testimonial);
    setPlaying(false);
  };

  const handlePlayClick = () => {
    setPlaying(true);
    if (videoRef.current) {
      // Ensure we're using the correct parameters for YouTube shorts
      videoRef.current.src = `${activeVideo.videoUrl}?autoplay=1&rel=0&controls=1&showinfo=0&shorts=0`;
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
            <div className="relative">
              <AspectRatio ratio={16/9} className="bg-muted">
                {playing ? (
                  <iframe
                    ref={videoRef}
                    src={`${activeVideo.videoUrl}?rel=0&controls=1&showinfo=0&shorts=0`}
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
              </AspectRatio>
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
            <div className="relative">
              <AspectRatio ratio={16/9} className="bg-muted">
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
              </AspectRatio>
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
      </div>
    </section>
  );
};

export default TrustSection;
