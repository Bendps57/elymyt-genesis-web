
import { useState, useRef, FormEvent } from "react";
import { toast } from "sonner";

export const useContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const emailFormRef = useRef<HTMLFormElement>(null);
  
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    if (emailFormRef.current) {
      try {
        const form = emailFormRef.current;
        form.submit(); // Use the native form submission
        
        // Show success message and reset form
        setFormSubmitted(true);
        toast.success("Votre message a été envoyé avec succès! Nous vous contacterons bientôt.", {
          description: "Merci de nous avoir contacté",
          action: {
            label: "Fermer",
            onClick: () => console.log("Toast fermé")
          }
        });
        
        // Reset form
        form.reset();
      } catch (error) {
        console.error("Erreur lors de l'envoi du message:", error);
        toast.error("Une erreur est survenue lors de l'envoi de votre message", {
          description: "Veuillez réessayer plus tard ou nous contacter directement par WhatsApp",
          action: {
            label: "Fermer",
            onClick: () => console.log("Toast fermé")
          }
        });
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return {
    isSubmitting,
    formSubmitted,
    emailFormRef,
    handleSubmit,
    setFormSubmitted
  };
};
