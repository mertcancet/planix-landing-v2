import BookACall from "@/components/BookACall";
import Checks from "@/components/cards/checks";
import FeaturesCards from "@/components/cards/FeaturesCards";
import Features from "@/components/features";
import Header from "@/components/header";
import Pricing from "@/components/pricing";
import React from "react";

const PricingPage = () => {
  return (
    <div className="w-full flex flex-col items-center">
      <div className="md:my-20">
        <Header
          badge="Fiyatlandırma"
          title="Basit ve anlaşılır fiyatlandırma"
          subtitle="İşletmenize özel paketlerle hemen başlayın, dakikalar içinde kurulumu tamamlayın."
          className="md:my-10"
        />
        <div className="my-20">
          <Pricing />
        </div>
      </div>

      <div className="w-full">
        <FeaturesCards />
      </div>
      <div className="my-72">
        <Features />
        <Checks />
      </div>
    </div>
  );
};

export default PricingPage;
