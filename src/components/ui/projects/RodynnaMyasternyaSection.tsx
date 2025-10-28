'use client';

import { motion } from 'framer-motion';
import { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperType } from 'swiper';
import { Autoplay } from 'swiper/modules';
import Image from 'next/image';
import Link from 'next/link';

import 'swiper/css';

const boardMembers = [
  // {
  //   id: 1,
  //   photo: '/images/projects/rodynnaMyasternya-1.webp',
  // },
  {
    id: 2,
    photo: '/images/projects/rodynnaMyasternya-2.webp',
  },
];

export default function RodynnaMyasternyaSection() {
  const swiperRef = useRef<SwiperType | null>(null);
  const [selectedMember, setSelectedMember] = useState<null | (typeof boardMembers)[0]>(null);

  return (
    <section
      id="second-section"
      className="container mx-auto py-6 sm:py-8 md:py-14 lg:py-16 px-6 sm:px-8 lg:px-10"
    >
      <div className="flex flex-col gap-12 items-center text-white">
        {/* Текстова частина */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <h2 className="text-3xl md:text-4xl font-bold ">«Родинна м’ястерня»</h2>
          <p className="leading-relaxed">
            Проєкт реалізовано у форматі «під ключ» – від проєктування та постачання обладнання до
            монтажу і запуску.
          </p>

          <h3 className="text-2xl font-semibold">Про компанію «Родинна м’ястерня»</h3>
          <p>
            «Родинна м’ястерня» — українська мережа магазинів та виробничих цехів, що
            спеціалізується на виготовленні й реалізації м’ясної продукції. Компанія відома високими
            стандартами якості, прозорим виробництвом та широким асортиментом свіжої продукції для
            щоденного споживання.
          </p>
          <p>
            Підприємство поєднує традиційні рецепти й сучасні технології, щоб забезпечувати
            споживачів безпечною та якісною продукцією.
          </p>

          <h3 className="text-2xl font-semibold">Енергетичне рішення для виробництва</h3>
          <p>
            Виробничі процеси у м’ясопереробній сфері потребують значних обсягів електроенергії — це
            і холодильне обладнання, і виробничі лінії, і системи вентиляції. Встановлення сонячної
            електростанції дозволяє «Родинній м’ястерні» зменшити операційні витрати, стабілізувати
            енергопостачання та посилити екологічну відповідальність.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="bg-white text-black p-6 space-y-3">
              <h4 className="text-lg font-semibold">Основні характеристики станції:</h4>
              <ul className="list-disc list-inside">
                <li>Потужність: 81,32 кВт</li>
                <li>Тип системи: мережева (on-grid)</li>
                <li>Обладнання: фотомодулі Longi Solar</li>
                <li>Локація: виробничі потужності компанії</li>
                <li>Формат реалізації: повний цикл «під ключ»</li>
              </ul>
            </div>
            <div className="bg-white text-black p-6 space-y-3">
              <h4 className="text-lg font-semibold">Переваги для «Родинної м’ястерні»:</h4>
              <ul className="list-disc list-inside">
                <li>Значне зниження витрат на електроенергію</li>
                <li>Стабільність енергопостачання виробництва та холодильних систем</li>
                <li>Підвищення енергонезалежності компанії</li>
                <li>Екологічність і скорочення викидів СО₂</li>
                <li>
                  Посилення іміджу сучасного бренду, що поєднує якість продукції з інноваційними
                  рішеннями
                </li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* --- Слайдер --- */}
        <div className="container mx-auto px-4 md:px-8 pb-10 md:pb-16 text-center relative">
          <div className="relative">
            {/* Стрілки (десктоп) */}
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
              {boardMembers.map((member) => (
                <SwiperSlide key={member.id}>
                  <div className="h-full flex flex-col justify-between border shadow-md bg-white">
                    <div className="relative">
                      <Image
                        src={member.photo}
                        alt="slider"
                        width={900}
                        height={500}
                        className="w-[auto] h-[auto] object-cover"
                        priority
                      />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Стрілки (мобільна версія) */}
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

          {/* Модалка */}
          {selectedMember && (
            <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center px-4">
              <div className="bg-white max-w-lg w-full shadow-lg p-6 relative">
                <button
                  onClick={() => setSelectedMember(null)}
                  className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 text-2xl"
                >
                  ✕
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* --- Кнопка "Назад" --- */}
      <div className="mt-10">
        <Link
          href={`/case#second-section`}
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

      {/* --- Навігація між проєктами --- */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true }}
        className="relative mt-16 flex flex-col items-center justify-center"
      >
        <div className="absolute top-1/2 left-1/2 w-[280px] sm:w-[420px] h-[2px] bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-1/2" />
        <div className="flex items-center justify-center gap-8 sm:gap-14 relative z-10"></div>
      </motion.div>
    </section>
  );
}
