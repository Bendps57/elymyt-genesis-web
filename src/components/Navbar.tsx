
import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isMobile = useIsMobile();
  const navigate = useNavigate();

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
    e.preventDefault();
    setIsOpen(false);
    
    // Determine if we need to navigate to the contact page first
    if (location.pathname !== "/contact") {
      // Store the scroll intention and navigate
      sessionStorage.setItem('scrollToContactForm', 'true');
      navigate('/contact');
    } else {
      // Already on contact page, just scroll
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
        {/* Header bar - always visible with solid background */}
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
              <a href="#" onClick={handleContactClick}>Démarrer un projet</a>
            </Button>
          </div>

          {/* Mobile menu button - always visible with z-50 */}
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

        {/* Mobile Navigation - Semi-transparent overlay that shows part of the content */}
        {isOpen && (
          <div className="md:hidden fixed inset-0 top-[61px] bg-black/30 z-40">
            <div className="flex flex-col space-y-4 py-6 px-4 max-h-[80vh] overflow-y-auto bg-white dark:bg-elimyt-dark rounded-b-xl shadow-lg">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={(e) => {
                    if (item.href === "/contact") handleContactClick(e);
                    else setIsOpen(false);
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
              >
                <a href="#" onClick={handleContactClick}>Démarrer un projet</a>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
