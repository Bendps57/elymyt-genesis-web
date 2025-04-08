
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CallToAction from "../components/CallToAction";
import ServicesHeader from "../components/services/ServicesHeader";
import MainServicesList from "../components/services/MainServicesList";
import AdditionalServicesHeader from "../components/services/AdditionalServicesHeader";
import AdditionalServicesList from "../components/services/AdditionalServicesList";

const ServicesPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <section className="pt-48 pb-20 bg-muted">
        <div className="container mx-auto px-4 md:px-6">
          <ServicesHeader />
          <MainServicesList />
          <AdditionalServicesHeader />
          <AdditionalServicesList />
        </div>
      </section>
      
      <CallToAction />
      <Footer />
    </div>
  );
};

export default ServicesPage;
