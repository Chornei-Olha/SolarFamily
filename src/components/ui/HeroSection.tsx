'use client';
import { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import Header from './Header';

const slides = ['/images/slide1.png', '/images/slide2.jpg', '/images/bgStarlink.png'];

export default function HeroSection() {
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
            <p className="uppercase text-sm tracking-widest mb-2 font-poppins font-normal">
              Interior Design
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-12 sm:max-w-[70vw] md:max-w-[60vw] lg:max-w-[50vw] font-poppins font-normal">
              Створюємо екологічне майбутнє вже сьогодні
            </h2>
            <button className="flex gap-4 items-center bg-[#A4AA9C] text-black px-5 py-3 rounded-[50px] font-poppins font-normal shadow-lg hover:bg-gray-200 transition">
              <span className="w-8 h-8 flex items-center justify-center bg-white rounded-full">
                <ArrowRight size={18} className="text-black" />
              </span>
              <span className="font-poppins font-normal">Детальніше</span>
            </button>
          </div>
        </div>

        {/* Низ: соцсети */}
        <div className="flex flex-col gap-2 pb-10 text-white/60 font-poppins font-normal">
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
      {/* Низ: текст */}
      <div className="absolute bottom-0 right-0 w-1/2 flex flex-col sm:flex-row gap-5 bg-[#D2D6D5] p-3 sm:p-10 font-poppins font-normal justify-between">
        <div className="flex flex-col">
          <p>01.</p>
          <p>Lorem ipsum dolor</p>
        </div>
        <div className="flex flex-col">
          <p>02.</p>
          <p>Lorem ipsum dolor</p>
        </div>
        <div className="flex flex-col">
          <p>03.</p>
          <p>Lorem ipsum dolor</p>
        </div>
      </div>
    </section>
  );
}
