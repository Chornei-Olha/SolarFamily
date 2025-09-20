'use client';
import React, { useState, useEffect } from 'react';

import HeroNetwork from '../../components/ui/HeroNetwork';
import SolarSlider from '../../components/ui/SolarSlider';
import ContactForm from '../../components/ui/ContactForm';
import Footer from '../../components/ui/Footer';

const CaseStudiesPage: React.FC = () => {
  return (
    <div className="min-h-screen text-white bg-gradient-to-b from-[#292929] to-[#8F8F8F] font-inter overflow-x-hidden">
      <HeroNetwork />
      <SolarSlider />
      <ContactForm />
      <Footer />
    </div>
  );
};
export default CaseStudiesPage;
