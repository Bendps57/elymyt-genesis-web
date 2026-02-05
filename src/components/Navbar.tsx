
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
          ? "py-3 bg-background shadow-sm border-b border-border"
          : "py-4 bg-background/95 backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <Link
            to="/"
            className="text-2xl font-bold flex items-center space-x-2 relative z-50"
          >
            <img src="https://i.imgur.com/A6fX34u.png" alt="eLimyt" className="h-8" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <div className="flex space-x-6">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={item.href === "/contact" ? handleContactClick : undefined}
                  className={`text-sm font-medium transition-colors ${
                    location.pathname === item.href
                      ? "text-primary"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
            <Button
              asChild
              className="btn-primary"
            >
              <a href="#" onClick={handleContactClick}>Démarrer un projet</a>
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

        {isOpen && (
          <div className="md:hidden fixed inset-0 top-[57px] bg-black/20 z-40">
            <div className="flex flex-col space-y-2 py-4 px-4 bg-background border-b border-border shadow-lg">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={(e) => {
                    if (item.href === "/contact") handleContactClick(e);
                    else setIsOpen(false);
                  }}
                  className={`text-base font-medium p-3 rounded-lg transition-colors ${
                    location.pathname === item.href
                      ? "text-primary bg-primary/5"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <Button
                asChild
                className="btn-primary mt-2"
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
