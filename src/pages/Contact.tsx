
import { useState, useEffect, useRef } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";
import ChatWidget from "../components/chat/ChatWidget";
import { Helmet } from "react-helmet-async";

const ContactPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const headerRef = useRef<HTMLDivElement>(null);
  const contactFormRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    
    if (headerRef.current) {
      observer.observe(headerRef.current);
    }
    
    return () => observer.disconnect();
  }, []);
  
  // Scroll to the contact form section when the page loads
  useEffect(() => {
    // Function to scroll to contact form with a slight delay to ensure DOM is ready
    const scrollToContactForm = () => {
      setTimeout(() => {
        const formElement = document.getElementById('contact-form');
        if (formElement) {
          formElement.scrollIntoView({ behavior: 'smooth' });
        }
      }, 300);
    };
    
    // Check for sessionStorage redirect instruction
    const shouldScrollToForm = sessionStorage.getItem('scrollToContactForm');
    if (shouldScrollToForm === 'true') {
      scrollToContactForm();
      sessionStorage.removeItem('scrollToContactForm');
    }
  }, []);
  
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Contactez notre Agence Web à Hayange | Devis Site Internet | eLymit</title>
        <meta name="description" content="Contactez eLymit, votre agence web à Hayange. Demandez un devis gratuit pour la création de votre site internet professionnel à prix mini." />
        <meta name="keywords" content="contact agence web Hayange, devis site internet, création site web professionnel" />
        <link rel="canonical" href="https://elymit.com/contact" />
      </Helmet>
      
      <Navbar />
      
      <section className="pt-32 pb-12">
        <div className="container mx-auto px-4 md:px-6">
          <div 
            ref={headerRef}
            className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Contactez <span className="text-gradient">Nous</span>
            </h1>
            <p className="text-lg text-foreground/70">
              Discutons de votre projet de site web et voyons comment nous pouvons vous aider à atteindre vos objectifs. 
              Notre équipe est prête à répondre à toutes vos questions.
            </p>
          </div>
        </div>
      </section>
      
      <div ref={contactFormRef}>
        <ContactForm />
      </div>
      <Footer />
      
      {/* Widget de chat WhatsApp */}
      <ChatWidget initialMessage="Bonjour, je souhaite discuter de mon projet de site web avec eLimyt..." />
    </div>
  );
};

export default ContactPage;
