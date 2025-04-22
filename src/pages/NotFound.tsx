
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";
import { Helmet } from "react-helmet-async";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Page non trouvée | eLimyt</title>
        <meta name="description" content="La page que vous recherchez n'existe pas ou a été déplacée." />
      </Helmet>
      
      <Navbar />
      
      <div className="flex-grow flex items-center justify-center bg-muted">
        <div className="text-center max-w-md mx-auto px-4 py-12">
          <div className="text-8xl font-bold text-gradient mb-4">404</div>
          <h1 className="text-2xl font-bold mb-4">Page non trouvée</h1>
          <p className="text-foreground/70 mb-8">
            La page que vous recherchez n'existe pas ou a été déplacée. 
            Revenez à la page d'accueil pour continuer votre navigation.
          </p>
          <Button asChild className="bg-gradient hover-scale">
            <Link to="/">
              <Home className="mr-2 h-4 w-4" />
              Retour à l'accueil
            </Link>
          </Button>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default NotFound;
