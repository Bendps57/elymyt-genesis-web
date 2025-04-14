
import React, { useState, useRef, useEffect } from "react";
import { Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ExternalLink } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { VideoTestimonial } from "../data/testimonialData";

interface TestimonialVideoCardProps {
  testimonial: VideoTestimonial;
  isPlaying: boolean;
  onPlayClick: () => void;
  callToActionText?: string;
  callToActionLink?: string;
}

const TestimonialVideoCard: React.FC<TestimonialVideoCardProps> = ({
  testimonial,
  isPlaying,
  onPlayClick,
  callToActionText = "Contactez-nous pour transformer votre projet",
  callToActionLink = "/contact"
}) => {
  const videoRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    if (isPlaying && videoRef.current) {
      videoRef.current.src = `${testimonial.videoUrl}?autoplay=1&rel=0&controls=1&showinfo=0&shorts=0`;
    }
  }, [isPlaying, testimonial.videoUrl]);

  return (
    <div className="bg-white dark:bg-card rounded-2xl shadow-lg overflow-hidden card-hover">
      <div className="relative">
        <AspectRatio ratio={16/9} className="bg-muted">
          {isPlaying ? (
            <iframe
              ref={videoRef}
              src={`${testimonial.videoUrl}?rel=0&controls=1&showinfo=0&shorts=0`}
              title={`Témoignage de ${testimonial.clientName}`}
              className="absolute inset-0 w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          ) : (
            <>
              <img
                src={testimonial.thumbnailUrl}
                alt={`Témoignage de ${testimonial.clientName}`}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                <button
                  onClick={onPlayClick}
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
        <h3 className="text-xl font-bold mb-2">{testimonial.title}</h3>
        <p className="text-foreground/70 mb-4">
          {testimonial.clientName}, {testimonial.businessName}
        </p>
        <Button asChild variant="default" className="w-full">
          <Link to={callToActionLink} className="flex items-center justify-center">
            {callToActionText}
            <ExternalLink className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default TestimonialVideoCard;
