'use client';
import React, { useState, useEffect } from 'react';

import HeroSection from '../components/ui/HeroSection';
import AboutCompany from '../components/ui/AboutCompany';
import Gallery from '../components/ui/Gallery';
import CategorySlider from '../components/ui/CategorySlider';
import BusinessSection from '../components/ui/BusinessSection';
import PromoSection from '../components/ui/PromoSection';
import EnergySection from '../components/ui/EnergySection';
import Footer from '../components/ui/Footer';

const TrustCallLandingPage: React.FC = () => {
  return (
    <div className="min-h-screen text-white bg-gradient-to-b from-[#292929] to-[#8F8F8F] font-inter overflow-x-hidden">
      <HeroSection />
      <AboutCompany />
      <Gallery />
      <CategorySlider />
      <BusinessSection />
      <PromoSection />
      <EnergySection />
      <Footer />
    </div>
  );
};
export default TrustCallLandingPage;
