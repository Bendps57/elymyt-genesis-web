
import { useState, useRef, FormEvent } from "react";
import { toast } from "sonner";
import emailjs from 'emailjs-com';

export const useContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const emailFormRef = useRef<HTMLFormElement>(null);
  
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      if (emailFormRef.current) {
        // Configuration pour EmailJS
        const result = await emailjs.sendForm(
          'service_h51bybp', // Remplacez par votre service ID EmailJS
          'template_c3z7t1r', // Remplacez par votre template ID EmailJS
          emailFormRef.current,
          'VvCpXLUQSlLemycp0' // Remplacez par votre clé utilisateur EmailJS
        );
        
        if (result.text === 'OK') {
          // Succès
          setFormSubmitted(true);
          toast.success("Votre message a été envoyé avec succès! Nous vous contacterons bientôt.", {
            description: "Merci de nous avoir contacté",
            action: {
              label: "Fermer",
              onClick: () => console.log("Toast closed")
            }
          });
          
          // Reset form
          emailFormRef.current.reset();
        } else {
          throw new Error("Erreur lors de l'envoi");
        }
      }
    } catch (error) {
      console.error("Erreur lors de l'envoi du message:", error);
      toast.error("Une erreur est survenue lors de l'envoi de votre message", {
        description: "Veuillez réessayer plus tard ou nous contacter directement par WhatsApp",
        action: {
          label: "Fermer",
          onClick: () => console.log("Toast closed")
        }
      });
    } finally {
      setIsSubmitting(false);
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
