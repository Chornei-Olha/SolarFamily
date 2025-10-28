'use client';
import Image from 'next/image';
import Header from './Header';

export default function HeroHyring() {
  const slide = '/images/hyring.webp';

  return (
    <section className="relative min-h-[800px] h-screen w-full overflow-hidden">
      {/* Один слайд */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${slide})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      {/* Затемнения */}
      <div className="absolute inset-0 bg-black/55" />
      <div className="absolute inset-y-0 left-0 w-1/4 bg-black/65" />

      {/* Хедер */}
      <div className="absolute top-0 left-0 w-full z-20">
        <Header />
      </div>

      {/* Контент */}
      <div className="container mx-auto relative z-10 flex flex-col h-full text-white py-6 sm:py-8 lg:py-10 px-6 sm:px-8 lg:px-10">
        <div className="flex-1 flex items-center justify-center text-center">
          <div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-10 w-[90vw] font-actor font-normal">
              Вакансії{' '}
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
}
