'use client';
import React, { useState, useEffect } from 'react';

import HeroCase from '../../components/ui/HeroCase';
import Footer from '../../components/ui/Footer';
import PolitaraSection from '../../components/ui/projects/PolitarаSection';

const PolitaraPage: React.FC = () => {
  return (
    <div className="min-h-screen text-white bg-gradient-to-b from-[#292929] to-[#8F8F8F] font-inter overflow-x-hidden">
      <HeroCase />
      <PolitaraSection />
      <Footer />
    </div>
  );
};
export default PolitaraPage;
