'use client';
import React, { useState, useEffect } from 'react';

import HeroCase from '../../components/ui/HeroCase';
import Footer from '../../components/ui/Footer';
import NovaPoshtaTerminalSection from '../../components/ui/projects/NovaPoshtaTerminalSection';

const NovaPoshtaTerminalPage: React.FC = () => {
  return (
    <div className="min-h-screen text-white bg-gradient-to-b from-[#292929] to-[#8F8F8F] font-inter overflow-x-hidden">
      <HeroCase />
      <NovaPoshtaTerminalSection />
      <Footer />
    </div>
  );
};
export default NovaPoshtaTerminalPage;
