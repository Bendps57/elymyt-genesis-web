
import { useContactForm } from "@/hooks/use-contact-form";
import ContactFormSuccess from "./ContactFormSuccess";
import ContactFormFields from "./ContactFormFields";
import ContactFormBenefits from "./ContactFormBenefits";

const ContactFormComponent = () => {
  const { isSubmitting, formSubmitted, emailFormRef, handleSubmit } = useContactForm();
  
  return (
    <div id="contact-form" className="bg-card border border-border p-8 rounded-xl corporate-shadow">
      <h3 className="text-2xl font-bold mb-6 text-foreground">
        Envoyez-nous un message
      </h3>
      
      {formSubmitted ? (
        <ContactFormSuccess />
      ) : (
        <ContactFormFields 
          emailFormRef={emailFormRef} 
          handleSubmit={handleSubmit} 
          isSubmitting={isSubmitting} 
        />
      )}
      
      <ContactFormBenefits />
    </div>
  );
};

export default ContactFormComponent;
