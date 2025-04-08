
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isMobile = useIsMobile();

  const navItems = [
    { name: "Accueil", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Contact", href: "/contact" },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when changing route
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Handle smooth scroll to contact form
  const handleContactClick = (e) => {
    if (location.pathname === "/contact") {
      e.preventDefault();
      const formElement = document.getElementById('contact-form');
      if (formElement) {
        formElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled || isOpen
          ? "py-3 bg-white dark:bg-elimyt-dark shadow-md"
          : "py-6 bg-white/80 dark:bg-elimyt-dark/80 backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center bg-white dark:bg-elimyt-dark">
          <Link
            to="/"
            className="text-2xl font-bold flex items-center space-x-2 relative z-50"
          >
            <img src="https://i.imgur.com/A6fX34u.png" alt="eLimyt" className="h-8" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8 bg-white dark:bg-elimyt-dark">
            <div className="flex space-x-8 bg-white dark:bg-elimyt-dark">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={item.href === "/contact" ? handleContactClick : undefined}
                  className={`text-sm font-medium transition-colors relative before:absolute before:bottom-0 before:left-0 before:h-0.5 before:bg-gradient hover:before:w-full before:w-0 before:transition-all before:duration-300 ${
                    location.pathname === item.href
                      ? "text-gradient before:w-full"
                      : "text-foreground/80 hover:text-foreground"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
            <Button
              asChild
              className="bg-gradient hover-scale"
            >
              <Link to="/contact#contact-form" onClick={handleContactClick}>Démarrer un projet</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden flex items-center relative z-50"
            onClick={toggleMenu}
            aria-label="Toggle mobile menu"
          >
            {isOpen ? (
              <X className="h-6 w-6 text-foreground" />
            ) : (
              <Menu className="h-6 w-6 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Navigation - Now with fully solid white background for the entire menu */}
        {isOpen && (
          <div className="md:hidden fixed inset-0 top-0 bg-white dark:bg-elimyt-dark z-40 pt-[61px]">
            <div className="flex flex-col space-y-4 py-6 px-4 h-full bg-white dark:bg-elimyt-dark">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={(e) => {
                    if (item.href === "/contact") handleContactClick(e);
                    setIsOpen(false);
                  }}
                  className={`text-base font-medium p-3 rounded-md transition-colors bg-white dark:bg-elimyt-dark ${
                    location.pathname === item.href
                      ? "text-gradient bg-accent/10"
                      : "text-foreground/80 hover:text-foreground hover:bg-accent/5"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <Button
                asChild
                className="bg-gradient mt-4"
                onClick={() => setIsOpen(false)}
              >
                <Link to="/contact#contact-form" onClick={handleContactClick}>Démarrer un projet</Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
