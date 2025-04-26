
import { Link } from "react-router-dom";

const services = [
  { name: "Site Vitrine", href: "/services" },
  { name: "E-commerce", href: "/services" },
  { name: "Refonte de Site", href: "/services" },
  { name: "Référencement SEO", href: "/services" },
  { name: "Maintenance Web", href: "/services" }
];

const FooterServiceLinks = () => {
  return (
    <div>
      <h3 className="text-lg font-bold mb-4 relative inline-block">
        Nos Services
        <div className="absolute -bottom-2 left-0 h-0.5 w-12 bg-gradient-to-r from-elimyt-blue to-elimyt-purple"></div>
      </h3>
      <ul className="space-y-3">
        {services.map((service) => (
          <li key={service.name}>
            <Link
              to={service.href}
              className="text-white/70 hover:text-white transition-colors duration-300 hover:pl-2 flex items-center before:w-0 before:h-0.5 hover:before:w-1 before:bg-elimyt-pink before:mr-0 hover:before:mr-1 before:transition-all"
              onClick={() => window.scrollTo(0, 0)}
            >
              {service.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterServiceLinks;
