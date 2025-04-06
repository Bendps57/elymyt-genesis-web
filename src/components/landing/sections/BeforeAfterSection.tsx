
import SectionTitle from "../../common/SectionTitle";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";

const BeforeAfterSection = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="Transformez Votre" 
          highlightedText="Présence En Ligne" 
          subtitle="Voyez la différence qu'un site web professionnel peut faire pour votre entreprise" 
          className="mb-12" 
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card className="border border-red-200 dark:border-red-800 shadow-md">
            <CardHeader>
              <CardTitle className="flex items-center">
                <span className="text-red-500 mr-2">✗</span> AVANT
              </CardTitle>
              <CardDescription>Sans site web professionnel</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <p className="flex items-center">
                <span className="text-red-500 mr-2">✗</span>
                <span>Crédibilité limitée auprès des prospects</span>
              </p>
              <p className="flex items-center">
                <span className="text-red-500 mr-2">✗</span>
                <span>Perte de clients potentiels au profit de concurrents</span>
              </p>
              <p className="flex items-center">
                <span className="text-red-500 mr-2">✗</span>
                <span>Image non professionnelle</span>
              </p>
              <p className="flex items-center">
                <span className="text-red-500 mr-2">✗</span>
                <span>Difficulté à être trouvé sur internet</span>
              </p>
              <p className="flex items-center">
                <span className="text-red-500 mr-2">✗</span>
                <span>Opportunités d'affaires manquées</span>
              </p>
            </CardContent>
          </Card>
          
          <Card className="border border-green-200 dark:border-green-800 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center">
                <span className="text-green-500 mr-2">✓</span> APRÈS
              </CardTitle>
              <CardDescription>Avec votre site eLimyt</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <p className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                <span>Image professionnelle qui inspire confiance</span>
              </p>
              <p className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                <span>Multiplication des prises de contact qualifiées</span>
              </p>
              <p className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                <span>Présence en ligne 24h/24 et 7j/7</span>
              </p>
              <p className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                <span>Visibilité accrue sur les moteurs de recherche</span>
              </p>
              <p className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                <span>Retour sur investissement rapide et mesurable</span>
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfterSection;
