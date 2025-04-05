
import { useContactForm } from "@/hooks/use-contact-form";
import ContactFormSuccess from "./ContactFormSuccess";
import ContactFormFields from "./ContactFormFields";
import ContactFormBenefits from "./ContactFormBenefits";

const ContactFormComponent = () => {
  const { isSubmitting, formSubmitted, emailFormRef, handleSubmit } = useContactForm();
  
  return (
    <div className="bg-white dark:bg-elimyt-dark/40 p-8 rounded-2xl shadow-lg">
      <h3 className="text-2xl font-bold mb-6">
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
