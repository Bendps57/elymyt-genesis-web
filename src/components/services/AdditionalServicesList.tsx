
import React from "react";
import AdditionalServiceCard from "./AdditionalServiceCard";
import { additionalServices } from "./servicesData";

const AdditionalServicesList = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {additionalServices.map((service) => (
        <AdditionalServiceCard key={service.id} {...service} />
      ))}
    </div>
  );
};

export default AdditionalServicesList;
