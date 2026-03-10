
import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const navItems = [
    { name: "Solutions", href: "/services" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "À propos", href: "/about" },
    { name: "FAQ", href: "/#faq" },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const handleContactClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsOpen(false);
    if (location.pathname !== "/contact") {
      sessionStorage.setItem('scrollToContactForm', 'true');
      navigate('/contact');
    } else {
      document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleProjectClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsOpen(false);
    if (location.pathname !== "/contact") {
      sessionStorage.setItem('scrollToContactForm', 'true');
      navigate('/contact');
    } else {
      document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled || isOpen
        ? "py-3 bg-background/95 backdrop-blur-md shadow-sm border-b border-border"
        : "py-4 bg-background"
    }`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <Link to="/" className="relative z-50">
            <img src="https://i.imgur.com/A6fX34u.png" alt="eLimyt" className="h-8" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <div className="flex items-center gap-6">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`text-sm font-medium transition-colors ${
                    location.pathname === item.href
                      ? "text-primary"
                      : "text-foreground/70 hover:text-foreground"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={handleProjectClick}
                className="btn-outline text-sm py-2 px-5"
              >
                Démarrer mon projet
              </button>
              <Button className="btn-primary text-sm py-2 px-5" onClick={handleContactClick}>
                Contact
              </Button>
            </div>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden relative z-50"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden fixed inset-0 top-[57px] bg-black/20 z-40">
            <div className="flex flex-col gap-2 py-6 px-4 bg-background border-b border-border shadow-lg">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`text-base font-medium p-3 rounded-xl transition-colors ${
                    location.pathname === item.href
                      ? "text-primary bg-primary/5"
                      : "text-foreground/70 hover:text-foreground hover:bg-muted"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <div className="flex flex-col gap-2 mt-4">
                <button onClick={handleProjectClick} className="btn-outline text-sm">
                  Démarrer mon projet
                </button>
                <Button className="btn-primary text-sm" onClick={handleContactClick}>
                  Contact
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
