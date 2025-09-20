'use client';
import HeroAboutProduct from '../../components/ui/HeroAboutProduct';
import CaseGrid from '../../components/ui/CaseGrid';
import Footer from '../../components/ui/Footer';

const AboutProductPage: React.FC = () => {
  return (
    <div className="min-h-screen text-white bg-gradient-to-b from-[#292929] to-[#8F8F8F] font-inter overflow-x-hidden">
      <HeroAboutProduct />
      <CaseGrid />
      <Footer />
    </div>
  );
};
export default AboutProductPage;
