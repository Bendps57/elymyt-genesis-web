
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Send } from "lucide-react";
import { contactInfoData } from "./ContactInfo";
import { RefObject } from "react";

interface ContactFormFieldsProps {
  emailFormRef: RefObject<HTMLFormElement>;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => Promise<void>;
  isSubmitting: boolean;
}

const ContactFormFields = ({ emailFormRef, handleSubmit, isSubmitting }: ContactFormFieldsProps) => {
  return (
    <form 
      ref={emailFormRef} 
      onSubmit={handleSubmit} 
      className="space-y-5"
    >
      {/* Configuration FormSubmit.co */}
      <input type="hidden" name="_subject" value="Nouveau message depuis votre site web" />
      <input type="hidden" name="_captcha" value="false" />
      <input type="hidden" name="_template" value="table" />
      <input type="hidden" name="_next" value={window.location.href} />
      
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
