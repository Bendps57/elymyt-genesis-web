
import { useState, useRef, FormEvent } from "react";
import { toast } from "sonner";

export const useContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const emailFormRef = useRef<HTMLFormElement>(null);
  
  // Fonction pour simuler un envoi de formulaire de test
  const sendTestEmail = async () => {
    setIsSubmitting(true);
    
    try {
      // Envoi d'un formulaire de test directement sans captcha
      const formData = new FormData();
      formData.append('name', 'Test Automatique');
      formData.append('email', 'test@example.com');
      formData.append('subject', 'Email de test du formulaire');
      formData.append('message', 'Ceci est un email de test envoyé depuis votre formulaire de contact pour vérifier la bonne réception des emails.');
      formData.append('_captcha', 'false');
      formData.append('_template', 'table');
      
      const response = await fetch("https://formsubmit.co/ben.wemmert@gmail.com", {
        method: "POST",
        body: formData
      });
      
      if (response.ok) {
        toast.success("Email de test envoyé! Vérifiez votre boîte de réception et vos spams.", {
          description: "Un email de test a été envoyé à ben.wemmert@gmail.com",
          action: {
            label: "Fermer",
            onClick: () => console.log("Toast fermé")
          }
        });
      } else {
        throw new Error("Erreur lors de l'envoi du test");
      }
    } catch (error) {
      console.error("Erreur lors de l'envoi du message de test:", error);
      toast.error("Échec de l'envoi du test", {
        description: "Erreur technique lors de l'envoi. Vérifiez la configuration de formsubmit.co",
        action: {
          label: "Fermer",
          onClick: () => console.log("Toast fermé")
        }
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    if (emailFormRef.current) {
      try {
        // Soumettre le formulaire de manière traditionnelle pour contourner les limitations AJAX
        const formData = new FormData(emailFormRef.current);
        
        // Ajouter _captcha=false pour éviter la page de vérification
        formData.append('_captcha', 'false');
        
        const response = await fetch("https://formsubmit.co/ben.wemmert@gmail.com", {
          method: "POST",
          body: formData
        });
        
        if (response.ok) {
          // Succès
          setFormSubmitted(true);
          toast.success("Votre message a été envoyé avec succès! Nous vous contacterons bientôt.", {
            description: "Merci de nous avoir contacté",
            action: {
              label: "Fermer",
              onClick: () => console.log("Toast fermé")
            }
          });
          
          // Reset form
          emailFormRef.current.reset();
        } else {
          throw new Error("Erreur lors de l'envoi");
        }
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
    setFormSubmitted,
    sendTestEmail
  };
};
