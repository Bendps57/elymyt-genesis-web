
import FooterGradientBar from "./footer/FooterGradientBar";
import FooterTop from "./footer/FooterTop";
import FooterLinks from "./footer/FooterLinks";
import FooterBottom from "./footer/FooterBottom";
import FooterWave from "./footer/FooterWave";

const Footer = () => {
  return (
    <footer className="relative">
      <FooterGradientBar />
      <FooterTop />
      <FooterGradientBar />
      <div className="bg-elimyt-dark text-white pt-16 pb-8">
        <div className="container mx-auto px-4 md:px-6">
          <FooterLinks />
          <FooterBottom />
        </div>
      </div>
      <FooterWave />
    </footer>
  );
};

export default Footer;
