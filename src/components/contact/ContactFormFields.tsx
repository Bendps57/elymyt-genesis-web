
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Send, Phone } from "lucide-react";
import { contactInfoData } from "./ContactInfo";
import { RefObject } from "react";

interface ContactFormFieldsProps {
  emailFormRef: RefObject<HTMLFormElement>;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => Promise<void>;
  isSubmitting: boolean;
}

const ContactFormFields = ({ emailFormRef, handleSubmit, isSubmitting }: ContactFormFieldsProps) => {
  const currentDomain = window.location.origin;
  
  return (
    <form 
      ref={emailFormRef} 
      onSubmit={handleSubmit} 
      action="https://formsubmit.co/contact@elimyt.com"
      method="POST"
      className="space-y-5"
    >
      {/* Configuration FormSubmit.co */}
      <input type="hidden" name="_subject" value="Nouveau message depuis votre site web" />
      <input type="hidden" name="_captcha" value="false" />
      <input type="hidden" name="_template" value="table" />
      <input type="hidden" name="_next" value={`${currentDomain}/`} />
      <input type="hidden" name="_autoresponse" value="Merci pour votre message. Nous vous contacterons dans les plus brefs délais." />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-1">
            Nom
          </label>
          <Input
            id="name"
            name="name"
            placeholder="Votre nom"
            required
            className="w-full"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-1">
            Email
          </label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="votre@email.com"
            required
            className="w-full"
          />
        </div>
      </div>
      <div>
        <label htmlFor="phone" className="block text-sm font-medium mb-1">
          Téléphone
        </label>
        <div className="relative">
          <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            id="phone"
            name="phone"
            type="tel"
            placeholder="Votre numéro de téléphone"
            className="w-full pl-10"
            pattern="[0-9]{10}"
            title="Veuillez entrer un numéro de téléphone valide (10 chiffres)"
          />
        </div>
      </div>
      <div>
        <label htmlFor="subject" className="block text-sm font-medium mb-1">
          Sujet
        </label>
        <Input
          id="subject"
          name="subject"
          placeholder="Sujet de votre message"
          required
          className="w-full"
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-1">
          Message
        </label>
        <Textarea
          id="message"
          name="message"
          placeholder="Décrivez votre projet ou posez-nous vos questions..."
          rows={5}
          required
          className="w-full resize-none"
        />
      </div>
      
      <Button 
        type="submit" 
        className="w-full bg-gradient hover-scale"
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <>Envoi en cours...</>
        ) : (
          <>
            Envoyer le message
            <Send className="ml-2 h-4 w-4" />
          </>
        )}
      </Button>
      <p className="text-sm text-muted-foreground text-center">
        Ou contactez-nous directement par WhatsApp au {contactInfoData[1].value}
      </p>
    </form>
  );
};

export default ContactFormFields;
