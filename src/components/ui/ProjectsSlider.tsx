'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import Link from 'next/link';

const projects = [
  {
    id: 1,
    title: 'Нова Пошта',
    image: '/images/nova-poshta.jpg',
    contact: '+38 (044) 344 44 44',
  },
  {
    id: 2,
    title: 'Фора',
    image: '/images/fora.jpg',
    contact: '(044) 939-99-99, 044 344',
  },
  {
    id: 3,
    title: 'Нова Пошта',
    image: '/images/nova-poshta.jpg',
    contact: '+38 (044) 344 44 44',
  },
  {
    id: 4,
    title: 'Фора',
    image: '/images/fora.jpg',
    contact: '(044) 939-99-99, 044 344',
  },
  {
    id: 5,
    title: 'Нова Пошта',
    image: '/images/nova-poshta.jpg',
    contact: '+38 (044) 344 44 44',
  },
  {
    id: 6,
    title: 'Фора',
    image: '/images/fora.jpg',
    contact: '(044) 939-99-99, 044 344',
  },
];

export default function ProjectsSlider() {
  return (
    <section className="container mx-auto py-6 sm:py-8 lg:py-10 px-6 sm:px-8 lg:px-10 text-white">
      <div>
        {/* Текст */}
        <div className="flex items-center justify-end">
          <p className="text-right text-white text-xl md:text-4xl max-w-6xl pb-16">
            SOLAR FAMILY – компанія, яка генерує екологічне сонячне майбутнє для українських сімей
            та бізнесів.
          </p>
        </div>
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl sm:text-3xl font-semibold">Проєкти</h2>
          <Link
            href="/projects"
            className="text-sm bg-white text-black rounded-full px-4 py-1 hover:bg-gray-200 transition"
          >
            Дивитись усі
          </Link>
        </div>

        <div className="relative">
          <Swiper
            modules={[Navigation]}
            spaceBetween={20}
            slidesPerView={1.2}
            breakpoints={{
              640: {
                slidesPerView: 1.5,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 2.5,
              },
            }}
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            }}
            className="group"
          >
            {projects.map((project) => (
              <SwiperSlide key={project.id}>
                <div className="relative rounded overflow-hidden h-72 md:h-[400px]">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-between p-4">
                    <h3 className="text-xl sm:text-2xl font-semibold">{project.title}</h3>
                    <div className="text-sm sm:text-base">
                      <p className="opacity-70">Відділ продажу</p>
                      <p>{project.contact}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}

            {/* Навигация для десктопа */}
            <div className="hidden lg:flex absolute top-1/2 left-0 z-10 -translate-y-1/2  text-white text-3xl cursor-pointer px-4">
              ‹
            </div>
            <div className="hidden lg:flex absolute top-1/2 right-0 z-10 -translate-y-1/2  text-white text-3xl cursor-pointer px-4">
              ›
            </div>
          </Swiper>
        </div>
      </div>
    </section>
  );
}
