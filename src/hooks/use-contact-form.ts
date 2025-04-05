
import { useState, useRef, FormEvent } from "react";
import { toast } from "sonner";

export const useContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const emailFormRef = useRef<HTMLFormElement>(null);
  
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      if (emailFormRef.current) {
        // Utilisation de FormData pour récupérer les valeurs du formulaire
        const formData = new FormData(emailFormRef.current);
        
        const templateParams = {
          name: formData.get('name'),
          email: formData.get('email'),
          subject: formData.get('subject'),
          message: formData.get('message'),
        };
        
        // Configuration pour formsubmit.co avec l'email direct
        const formResponse = await fetch("https://formsubmit.co/ben.wemmert@gmail.com", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            name: templateParams.name,
            email: templateParams.email,
            subject: templateParams.subject,
            message: templateParams.message,
          }),
        });
        
        if (formResponse.ok) {
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
