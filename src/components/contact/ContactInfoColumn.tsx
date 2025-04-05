
import React from "react";
import ContactInfo from "./ContactInfo";
import LocationMap from "./LocationMap";
import AnimatedContainer from "../common/AnimatedContainer";

const ContactInfoColumn = () => {
  return (
    <AnimatedContainer className="lg:mt-12" delay={200}>
      <ContactInfo />
      <LocationMap />
    </AnimatedContainer>
  );
};

export default ContactInfoColumn;
