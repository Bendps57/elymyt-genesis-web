
import { Link } from "react-router-dom";
import { Facebook, Instagram, ArrowUp, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const services = [
    { name: "Site Vitrine", href: "/services#vitrine" },
    { name: "E-commerce", href: "/services#ecommerce" },
    { name: "Refonte de Site", href: "/services#refonte" },
    { name: "SaaS Sur Mesure", href: "/services#saas" },
  ];

  const company = [
    { name: "À propos", href: "/about" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Contact", href: "/contact" },
  ];

  const legal = [
    { name: "Mentions légales", href: "/legal" },
    { name: "Politique de confidentialité", href: "/privacy" },
    { name: "CGV", href: "/terms" },
  ];

  return (
    <footer>
      {/* Accent bar */}
      <div className="h-1 bg-primary" />

      <div className="bg-navy text-white">
        <div className="container mx-auto px-4 md:px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
            {/* Brand */}
            <div>
              <Link to="/" className="font-heading text-2xl font-bold text-white mb-4 inline-block">
                eLimyt
              </Link>
              <p className="text-white/60 text-sm leading-relaxed mb-6">
                Votre partenaire numérique de proximité. Sites web, dépannage informatique et solutions IT pour artisans, commerçants et TPE.
              </p>
              <div className="flex gap-3">
                <a
                  href="https://www.facebook.com/profile.php?id=61575732503510"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-white/10 hover:bg-primary flex items-center justify-center transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook size={16} />
                </a>
                <a
                  href="https://www.instagram.com/elimyt.agency/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-white/10 hover:bg-primary flex items-center justify-center transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram size={16} />
                </a>
              </div>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-heading font-bold text-sm uppercase tracking-wider mb-4 text-white/90">
                Services
              </h4>
              <ul className="space-y-2.5">
                {services.map((item) => (
                  <li key={item.name}>
                    <Link
                      to={item.href}
                      className="text-white/60 hover:text-primary text-sm transition-colors"
                      onClick={() => window.scrollTo(0, 0)}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Entreprise */}
            <div>
              <h4 className="font-heading font-bold text-sm uppercase tracking-wider mb-4 text-white/90">
                Entreprise
              </h4>
              <ul className="space-y-2.5">
                {company.map((item) => (
                  <li key={item.name}>
                    <Link
                      to={item.href}
                      className="text-white/60 hover:text-primary text-sm transition-colors"
                      onClick={() => window.scrollTo(0, 0)}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-heading font-bold text-sm uppercase tracking-wider mb-4 text-white/90">
                Contact
              </h4>
              <ul className="space-y-3">
                <li className="flex items-center gap-2.5 text-white/60 text-sm">
                  <Mail size={14} className="text-primary flex-shrink-0" />
                  <a href="mailto:contact@elimyt.com" className="hover:text-primary transition-colors">
                    contact@elimyt.com
                  </a>
                </li>
                <li className="flex items-center gap-2.5 text-white/60 text-sm">
                  <Phone size={14} className="text-primary flex-shrink-0" />
                  <a href="tel:+33755531568" className="hover:text-primary transition-colors">
                    07 55 53 15 68
                  </a>
                </li>
                <li className="flex items-start gap-2.5 text-white/60 text-sm">
                  <MapPin size={14} className="text-primary flex-shrink-0 mt-0.5" />
                  <span>Hayange, Moselle (57)</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Separator */}
          <div className="border-t border-white/10 pt-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              {/* Legal links */}
              <div className="flex flex-wrap items-center gap-4 text-xs text-white/40">
                {legal.map((item, i) => (
                  <span key={item.name} className="flex items-center gap-4">
                    <Link
                      to={item.href}
                      className="hover:text-white/70 transition-colors"
                      onClick={() => window.scrollTo(0, 0)}
                    >
                      {item.name}
                    </Link>
                    {i < legal.length - 1 && <span className="text-white/20">·</span>}
                  </span>
                ))}
              </div>

              {/* Copyright + back to top */}
              <div className="flex items-center gap-4">
                <p className="text-xs text-white/40">
                  © {new Date().getFullYear()} eLimyt — Tous droits réservés
                </p>
                <button
                  onClick={scrollToTop}
                  className="w-8 h-8 rounded-full bg-white/10 hover:bg-primary flex items-center justify-center transition-colors"
                  aria-label="Retour en haut"
                >
                  <ArrowUp size={14} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
