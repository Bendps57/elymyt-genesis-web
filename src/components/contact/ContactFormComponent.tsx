
import { useContactForm } from "@/hooks/use-contact-form";
import ContactFormSuccess from "./ContactFormSuccess";
import ContactFormFields from "./ContactFormFields";
import ContactFormBenefits from "./ContactFormBenefits";
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";

const ContactFormComponent = () => {
  const { isSubmitting, formSubmitted, emailFormRef, handleSubmit, sendTestEmail } = useContactForm();
  
  return (
    <div className="bg-white dark:bg-elimyt-dark/40 p-8 rounded-2xl shadow-lg">
      <h3 className="text-2xl font-bold mb-6">
        Envoyez-nous un message
      </h3>
      
      {formSubmitted ? (
        <ContactFormSuccess />
      ) : (
        <>
          <ContactFormFields 
            emailFormRef={emailFormRef} 
            handleSubmit={handleSubmit} 
            isSubmitting={isSubmitting} 
          />
          
          <div className="mt-4 pt-4 border-t">
            <p className="text-sm text-muted-foreground mb-2">
              Vous ne recevez pas nos emails? Cliquez ci-dessous pour envoyer un email de test:
            </p>
            <Button 
              onClick={sendTestEmail} 
              variant="outline" 
              className="w-full"
              disabled={isSubmitting}
            >
              <Mail className="mr-2 h-4 w-4" />
              Envoyer un email de test
            </Button>
          </div>
        </>
      )}
      
      <ContactFormBenefits />
    </div>
  );
};

export default ContactFormComponent;
