
import { useEffect, useRef } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";
import ChatWidget from "../components/chat/ChatWidget";
import { Helmet } from "react-helmet-async";

const ContactPage = () => {
  const contactFormRef = useRef<HTMLDivElement>(null);

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

      <div ref={contactFormRef} className="pt-32">
        <ContactForm />
      </div>
      <Footer />

      {/* Widget de chat WhatsApp */}
      <ChatWidget initialMessage="Bonjour, je souhaite discuter de mon projet de site web avec eLimyt..." />
    </div>
  );
};

export default ContactPage;

