'use client';

import Header from '../../components/ui/Header';
import EcoFutureSection from '../../components/ui/EcoFutureSection';
import AboutCompany from '../../components/ui/AboutCompany';
import PhotoSlider from '../../components/ui/PhotoSlider';
import ProjectsSlider from '../../components/ui/ProjectsSlider';
import TextAbout from '../../components/ui/TextAbout';
import StagesAbout from '../../components/ui/StagesAbout';
import FAQ from '../../components/ui/FAQ';
import Footer from '../../components/ui/Footer';

const BusinessPage: React.FC = () => {
  return (
    <div className="min-h-screen text-white bg-gradient-to-b from-[#292929] to-[#8F8F8F] font-inter overflow-x-hidden">
      <Header />
      <EcoFutureSection />
      <AboutCompany />
      <PhotoSlider />
      <ProjectsSlider />
      <TextAbout />
      <StagesAbout />
      <FAQ />
      <Footer />
    </div>
  );
};
export default BusinessPage;
