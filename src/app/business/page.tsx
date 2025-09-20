'use client';

import HeroBusiness from '../../components/ui/HeroBusiness';
import SolarSliderBusiness from '../../components/ui/SolarSliderBusiness';
import StagesBusiness from '../../components/ui/StagesBusiness';
import ContactForm from '../../components/ui/ContactForm';
import Clients from '../../components/ui/Clients';
import FAQ from '../../components/ui/FAQ';
import Footer from '../../components/ui/Footer';

const BusinessPage: React.FC = () => {
  return (
    <div className="min-h-screen text-white bg-gradient-to-b from-[#292929] to-[#8F8F8F] font-inter overflow-x-hidden">
      <HeroBusiness />
      <SolarSliderBusiness />
      <StagesBusiness />
      <ContactForm />
      <Clients />
      <FAQ />
      <Footer />
    </div>
  );
};
export default BusinessPage;
