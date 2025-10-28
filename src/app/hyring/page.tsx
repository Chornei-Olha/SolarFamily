'use client';

import HeroHyring from '../../components/ui/HeroHyring';
import VacanciesSection from '../../components/ui/VacanciesSection';
import Footer from '../../components/ui/Footer';

const BusinessPage: React.FC = () => {
  return (
    <div className="min-h-screen text-white bg-gradient-to-b from-[#292929] to-[#8F8F8F] font-inter overflow-x-hidden">
      <HeroHyring />
      <VacanciesSection />
      <Footer />
    </div>
  );
};
export default BusinessPage;
