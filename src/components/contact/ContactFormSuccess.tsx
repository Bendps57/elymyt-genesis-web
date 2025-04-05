
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import { contactInfoData } from "./ContactInfo";

const ContactFormSuccess = () => {
  return (
    <Alert className="mb-4 bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800">
      <AlertTitle className="text-green-800 dark:text-green-300">Message envoyé avec succès</AlertTitle>
      <AlertDescription className="text-green-700 dark:text-green-400">
        Nous avons bien reçu votre message et vous contacterons dans les plus brefs délais.
        Vous pouvez également nous joindre directement par WhatsApp au {contactInfoData[1].value}.
      </AlertDescription>
    </Alert>
  );
};

export default ContactFormSuccess;
