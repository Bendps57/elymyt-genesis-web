
import { Link } from "react-router-dom";

const legal = [
  { name: "Mentions légales", href: "/legal" },
  { name: "Politique de confidentialité", href: "/privacy" },
  { name: "CGV", href: "/terms" }
];

const FooterLegalLinks = () => {
  return (
    <div>
      <h3 className="text-lg font-bold mb-4 relative inline-block">
        Informations
        <div className="absolute -bottom-2 left-0 h-0.5 w-12 bg-gradient-to-r from-elimyt-blue to-elimyt-pink"></div>
      </h3>
      <ul className="space-y-3">
        {legal.map((item) => (
          <li key={item.name}>
            <Link
              to={item.href}
              className="text-white/70 hover:text-white transition-colors duration-300 hover:pl-2 flex items-center before:w-0 before:h-0.5 hover:before:w-1 before:bg-elimyt-blue before:mr-0 hover:before:mr-1 before:transition-all"
              onClick={() => window.scrollTo(0, 0)}
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterLegalLinks;
