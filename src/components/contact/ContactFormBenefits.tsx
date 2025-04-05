
import { CheckCircle as CheckCircleIcon } from "lucide-react";

const ContactFormBenefits = () => {
  return (
    <div className="mt-8 pt-6 border-t">
      <h4 className="font-medium mb-4">Pourquoi nous contacter ?</h4>
      <ul className="space-y-2">
        {[
          "Pour demander un devis gratuit et sans engagement",
          "Pour discuter de votre projet et recevoir des conseils",
          "Pour toute question sur nos services et tarifs"
        ].map((item, index) => (
          <li key={index} className="flex">
            <CheckCircleIcon className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
            <span className="text-foreground/80">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactFormBenefits;
