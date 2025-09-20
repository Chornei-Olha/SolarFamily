'use client';
import React, { useState, useEffect } from 'react';

import HeroCase from '../../components/ui/HeroCase';
import Retail from '../../components/ui/Retail';
import Footer from '../../components/ui/Footer';

const CaseStudiesPage: React.FC = () => {
  return (
    <div className="min-h-screen text-white bg-gradient-to-b from-[#292929] to-[#8F8F8F] font-inter overflow-x-hidden">
      <HeroCase />
      <Retail />
      <Footer />
    </div>
  );
};
export default CaseStudiesPage;
