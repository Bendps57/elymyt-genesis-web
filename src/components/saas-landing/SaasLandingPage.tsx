
import SaasHeroSection from "./sections/SaasHeroSection";
import AboutMissionSection from "./sections/AboutMissionSection";
import ApproachSection from "./sections/ApproachSection";
import UseCasesSection from "./sections/UseCasesSection";
import SaasCallToActionSection from "./sections/SaasCallToActionSection";
import { Helmet } from "react-helmet-async";

const SaasLandingPage = () => {
  return (
    <>
      <Helmet>
        <title>eLimyt - Création de SaaS Sur Mesure | Transformez Vos Idées en Plateformes Web</title>
        <meta name="description" content="Spécialiste en création de SaaS sur mesure. Nous transformons vos idées et processus métiers en plateformes web puissantes. Solutions techniques, agiles et orientées résultats." />
        <meta name="keywords" content="création SaaS sur mesure, développement plateforme web, automatisation processus métier, solution logicielle personnalisée, développement web entreprise" />
        <link rel="canonical" href="https://elimyt.com" />
      </Helmet>
      <div>
        <SaasHeroSection />
        <AboutMissionSection />
        <ApproachSection />
        <UseCasesSection />
        <SaasCallToActionSection />
      </div>
    </>
  );
};

export default SaasLandingPage;
