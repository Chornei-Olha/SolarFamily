'use client';
import { useEffect, useState } from 'react';
import { Menu } from 'lucide-react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import Header from './Header';

const slides = ['/images/slide1.png', '/images/slide2.jpg', '/images/bgStarlink.png'];

export default function HeroCase() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000); // смена каждые 5 сек
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-[800px] sm:h-screen w-full overflow-hidden">
      {/* Слайды */}
      <div className="absolute inset-0">
        {' '}
        {slides.map((src, i) => (
          <div
            key={i}
            className={`absolute inset-0 transition-transform duration-1000 ease-in-out ${
              i === current ? 'translate-y-0' : 'translate-y-full'
            }`}
            style={{
              backgroundImage: `url(${src})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
        ))}
      </div>

      {/* Затемнения */}
      <div className="absolute inset-0 bg-black/55" />
      <div className="absolute inset-y-0 left-0 w-1/4 bg-black/65" />

      <div className="absolute top-0 left-0 w-full z-20">
        <Header />
      </div>

      {/* Контент */}
      <div className="container mx-auto relative z-10 flex flex-col h-full text-white py-6 sm:py-8 lg:py-10 px-6 sm:px-8 lg:px-10">
        {/* Центр: текст */}
        <div className="flex-1 flex items-center">
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-10 w-[90vw] font-actor font-normal sm:max-w-[70vw] md:max-w-[60vw] lg:max-w-[50vw]">
              Реалізовані проекти{' '}
            </h2>{' '}
            <p className="text-sm sm:text-base md:text-lg lg:text-xl tracking-widest w-[50vw] text-left font-actor font-normal">
              У кожному проєкті ми підбираємо оптимальне рішення відповідно до потреб замовника,
              забезпечуємо якісний монтаж та гарантійну підтримку. Дивіться наші кейси та
              переконайтеся, що «Solar Family» — це надійний партнер у сфері відновлюваної
              енергетики!
            </p>
          </div>
        </div>

        {/* Низ: соцсети */}
        <div className="flex flex-col gap-2 pb-10 text-white/60">
          <a href="#" className="hover:text-white">
            Fb.
          </a>
          <a href="#" className="hover:text-white">
            Tw.
          </a>
          <a href="#" className="hover:text-white">
            Ig.
          </a>
          <a href="#" className="hover:text-white">
            Pl.
          </a>
        </div>
      </div>
    </section>
  );
}
