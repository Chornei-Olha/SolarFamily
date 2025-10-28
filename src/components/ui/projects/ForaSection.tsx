'use client';

import { motion } from 'framer-motion';
import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperType } from 'swiper';
import { Autoplay } from 'swiper/modules';
import Image from 'next/image';
import Link from 'next/link';

import 'swiper/css';

const images = [
  { id: 1, photo: '/images/fora1.jpg' },
  { id: 2, photo: '/images/fora2.jpg' },
  { id: 3, photo: '/images/fora3.jpg' },
];

export default function ForaSection() {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <section
      id="fora"
      className="container mx-auto py-6 sm:py-8 md:py-14 lg:py-16 px-6 sm:px-8 lg:px-10"
    >
      <div className="flex flex-col gap-12 items-center text-white">
        {/* --- Текстовий блок --- */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <h2 className="text-3xl md:text-4xl font-bold">Фора</h2>
          <p>
            Проєкт реалізовано у форматі «під ключ» – від проєктування та постачання обладнання до
            монтажу і запуску.
          </p>

          <h3 className="text-2xl font-semibold">Про компанію «Фора»</h3>
          <p>
            Фора — одна з найбільших українських мереж супермаркетів, що входить до групи Fozzy
            Group. Перший магазин відкрився у 2002 році, і сьогодні мережа налічує понад 250
            торгових точок по всій Україні. «Фора» орієнтована на комфорт покупців, доступні ціни та
            високі стандарти обслуговування. Компанія активно впроваджує сучасні рішення у сфері
            енергоефективності та сталого розвитку, що підтверджує її відповідальність перед
            суспільством та довкіллям.
          </p>

          <h3 className="text-2xl font-semibold">Енергетичне рішення для рітейлу</h3>
          <p>
            Супермаркети споживають великі обсяги електроенергії через освітлення, холодильне та
            кліматичне обладнання. Зростання тарифів суттєво впливає на витрати мережі, тому «Фора»
            інвестує у сонячні електростанції під ключ як у сучасний інструмент економії та
            стабільності.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="bg-white text-black p-6 space-y-3">
              <h4 className="text-lg font-semibold">Основні характеристики станцій:</h4>
              <ul className="list-disc list-inside">
                <li>Кількість об’єктів: 5 супермаркетів «Фора»</li>
                <li>Потужність: 558,52 кВт (загальна)</li>
                <li>Тип системи: мережева (on-grid)</li>
                <li>Обладнання: фотомодулі Canadian Solar та інвертори Huawei</li>
                <li>Локація: дахові конструкції супермаркетів</li>
                <li>Формат реалізації: повний цикл «під ключ»</li>
              </ul>
            </div>

            <div className="bg-white text-black p-6 space-y-3">
              <h4 className="text-lg font-semibold">Переваги для «Фора»:</h4>
              <ul className="list-disc list-inside">
                <li>Суттєве зниження витрат на електроенергію</li>
                <li>Стабільна робота енергосистем у денні пікові години</li>
                <li>Підвищення енергонезалежності торгових об’єктів</li>
                <li>Екологічність та сталий розвиток, зменшення вуглецевого сліду</li>
                <li>Зміцнення іміджу сучасної мережі, що впроваджує інноваційні рішення</li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* --- Слайдер --- */}
        <div className="container mx-auto px-4 md:px-8 pb-10 md:pb-16 text-center relative">
          <div className="relative">
            {/* Стрілки (desktop) */}
            <button
              onClick={() => swiperRef.current?.slidePrev()}
              className="hidden sm:flex absolute -left-16 top-1/2 -translate-y-1/2 z-20 bg-white rounded-full shadow p-2 hover:bg-gray-100 transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 text-gray-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            <button
              onClick={() => swiperRef.current?.slideNext()}
              className="hidden sm:flex absolute -right-16 top-1/2 -translate-y-1/2 z-20 bg-white rounded-full shadow p-2 hover:bg-gray-100 transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 text-gray-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>

            <Swiper
              onSwiper={(swiper) => (swiperRef.current = swiper)}
              modules={[Autoplay]}
              autoplay={{ delay: 5000 }}
              spaceBetween={24}
              breakpoints={{
                320: { slidesPerView: 1 },
                640: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
            >
              {images.map((img) => (
                <SwiperSlide key={img.id}>
                  <div className="h-full flex flex-col justify-between border shadow-md bg-white">
                    <div className="relative">
                      <Image
                        src={img.photo}
                        alt="slider"
                        width={900}
                        height={500}
                        className="w-auto h-[20vh] object-cover"
                        priority
                      />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Стрілки (mobile) */}
            <div className="flex justify-center gap-4 sm:hidden mt-4">
              <button
                onClick={() => swiperRef.current?.slidePrev()}
                className="bg-white rounded-full shadow p-2 hover:bg-gray-100 transition"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 text-gray-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
              <button
                onClick={() => swiperRef.current?.slideNext()}
                className="bg-white rounded-full shadow p-2 hover:bg-gray-100 transition"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 text-gray-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* --- Кнопка "Назад" --- */}
      <div className="mt-10">
        <Link
          href="/case"
          className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-all text-sm"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          <span>Назад до проєктів</span>
        </Link>
      </div>
    </section>
  );
}
