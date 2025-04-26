
import { Link } from "react-router-dom";

const company = [
  { name: "À propos", href: "/about" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Contact", href: "/contact" }
];

const FooterCompanyLinks = () => {
  return (
    <div className="mb-8">
      <h3 className="text-lg font-bold mb-4 relative inline-block">
        eLimyt
        <div className="absolute -bottom-2 left-0 h-0.5 w-12 bg-gradient-to-r from-elimyt-purple to-elimyt-pink"></div>
      </h3>
      <ul className="space-y-3">
        {company.map((item) => (
          <li key={item.name}>
            <Link
              to={item.href}
              className="text-white/70 hover:text-white transition-colors duration-300 hover:pl-2 flex items-center before:w-0 before:h-0.5 hover:before:w-1 before:bg-elimyt-purple before:mr-0 hover:before:mr-1 before:transition-all"
              onClick={() => {
                if (item.name === "Contact") {
                  setTimeout(() => {
                    const contactForm = document.getElementById('contact-form');
                    if (contactForm) {
                      contactForm.scrollIntoView({ behavior: 'smooth' });
                    } else {
                      window.scrollTo(0, 0);
                    }
                  }, 100);
                } else {
                  window.scrollTo(0, 0);
                }
              }}
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterCompanyLinks;
