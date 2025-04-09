
import HeroSection from "./sections/HeroSection";
import BenefitsSection from "./sections/BenefitsSection";
import BeforeAfterSection from "./sections/BeforeAfterSection";
import GuaranteesSection from "./sections/GuaranteesSection";
import BonusSection from "./sections/BonusSection";
import FaqSection from "./sections/FaqSection";
import CallToActionSection from "./sections/CallToActionSection";
import Services from "../Services";
import { Helmet } from "react-helmet-async";

const LandingPage = () => {
  return (
    <>
      <Helmet>
        <title>eLymit - Création de Sites Web Professionnels à Prix Mini | Agence Web Hayange</title>
        <meta name="description" content="Agence web à Hayange spécialisée en création de sites vitrines professionnels à partir de 249,90€. Sites web rapides et optimisés pour PME, artisans et commerçants." />
        <meta name="keywords" content="création site vitrine professionnel, site internet pas cher, site web pour PME, agence web Hayange" />
        <link rel="canonical" href="https://elymit.com" />
      </Helmet>
      <div>
        <HeroSection />
        <BenefitsSection />
        <BeforeAfterSection />
        <GuaranteesSection />
        <Services />
        <BonusSection />
        <FaqSection />
        <CallToActionSection />
      </div>
    </>
  );
};

export default LandingPage;
