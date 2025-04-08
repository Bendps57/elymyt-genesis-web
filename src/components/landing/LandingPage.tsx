
import HeroSection from "./sections/HeroSection";
import BenefitsSection from "./sections/BenefitsSection";
import BeforeAfterSection from "./sections/BeforeAfterSection";
import GuaranteesSection from "./sections/GuaranteesSection";
import BonusSection from "./sections/BonusSection";
import FaqSection from "./sections/FaqSection";
import CallToActionSection from "./sections/CallToActionSection";

const LandingPage = () => {
  return (
    <div>
      <HeroSection />
      <BenefitsSection />
      <BeforeAfterSection />
      <GuaranteesSection />
      <BonusSection />
      <FaqSection />
      <CallToActionSection />
    </div>
  );
};

export default LandingPage;
