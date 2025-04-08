
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const location = useLocation();

  const navItems = [
    { name: "Accueil", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Contact", href: "/contact" },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Détermine si l'utilisateur scrolle vers le haut ou vers le bas
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scroll vers le bas - cacher la navbar
        setVisible(false);
      } else {
        // Scroll vers le haut - montrer la navbar
        setVisible(true);
      }
      
      // Détermine si la navbar doit changer d'apparence (fond, shadow, etc)
      if (currentScrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Close mobile menu when changing route
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "py-0 bg-white/90 dark:bg-elimyt-dark/90 shadow-md backdrop-blur-md"
          : "py-0 bg-transparent"
      } ${visible ? "translate-y-0" : "-translate-y-full"}`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <Link
            to="/"
            className="font-bold flex items-center"
          >
            <img 
              src="https://i.imgur.com/Dre52Cp.png" 
              alt="Logo eLimyt" 
              className="h-64 object-contain"
              style={{ maxWidth: '500px' }}
              loading="eager"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
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
              className="bg-gradient hover-scale py-1"
              size="sm"
            >
              <Link to="/contact#contact-form">Démarrer un projet</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden flex items-center"
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

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-2 animate-fade-in">
            <div className="flex flex-col space-y-2 py-2">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`text-base font-medium p-1 rounded-md transition-colors ${
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
                className="bg-gradient py-1"
                size="sm"
              >
                <Link to="/contact#contact-form">Démarrer un projet</Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
