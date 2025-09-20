'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import Link from 'next/link';

const projects = [
  {
    id: 1,
    title: 'SolarFamily',
    image: '/images/nova-poshta.jpg',
  },
  {
    id: 2,
    title: 'SolarFamily',
    image: '/images/fora.jpg',
  },
  {
    id: 3,
    title: 'SolarFamily',
    image: '/images/nova-poshta.jpg',
  },
  {
    id: 4,
    title: 'SolarFamily',
    image: '/images/fora.jpg',
  },
  {
    id: 5,
    title: 'SolarFamily',
    image: '/images/nova-poshta.jpg',
  },
  {
    id: 6,
    title: 'SolarFamily',
    image: '/images/fora.jpg',
  },
];

export default function PhotoSlider() {
  return (
    <section className="container mx-auto py-6 sm:py-8 lg:py-10 px-6 sm:px-8 lg:px-10 text-white">
      <div>
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
