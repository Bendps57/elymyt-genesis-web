
import React from "react";
import ContactFormComponent from "./ContactFormComponent";
import ContactInfoColumn from "./ContactInfoColumn";
import SectionTitle from "../common/SectionTitle";
import AnimatedContainer from "../common/AnimatedContainer";

const ContactSection = () => {
  return (
    <section id="contact" className="section-padding bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <SectionTitle 
          title="Contactez"
          highlightedText="Nous"
          subtitle="Discutons de votre projet et voyons comment nous pouvons vous aider à atteindre vos objectifs"
          className="mb-12"
        />
        
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
          <AnimatedContainer>
            <ContactFormComponent />
          </AnimatedContainer>
          
          <ContactInfoColumn />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
