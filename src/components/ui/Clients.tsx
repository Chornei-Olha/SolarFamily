'use client';

import Image from 'next/image';

export default function Clients() {
  return (
    <section className="container mx-auto py-6 sm:py-8 md:py-14 lg:py-16 px-6 sm:px-8 lg:px-10 bg-cover bg-center bg-no-repeat">
      {/* Логотипы */}
      <div className="relative z-10 mx-auto px-4 sm:px-6 lg:px-8 py-5 mt-5 overflow-hidden">
        <div className="animate-marquee flex items-center gap-12 sm:gap-16 md:gap-20 whitespace-nowrap">
          {[
            '/images/partner.svg',
            '/images/partner2.svg',
            '/images/partner3.svg',
            '/images/partner4.svg',
          ].map((src, idx) => (
            <Image
              key={idx}
              src={src}
              alt={`partner-${idx}`}
              width={200}
              height={200}
              className="w-full max-w-[100px] sm:max-w-[166px] h-auto"
            />
          ))}

          {/* дублируем второй раз для бесконечного эффекта */}
          {[
            '/images/partner.svg',
            '/images/partner2.svg',
            '/images/partner3.svg',
            '/images/partner4.svg',
          ].map((src, idx) => (
            <Image
              key={`dup-${idx}`}
              src={src}
              alt={`partner-dup-${idx}`}
              width={200}
              height={200}
              className="w-full max-w-[100px] sm:max-w-[166px] h-auto"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
