'use client';

import { motion } from 'framer-motion';
import { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperType } from 'swiper';
import { Autoplay } from 'swiper/modules';
import Image from 'next/image';

import 'swiper/css';

const boardMembers = [
  {
    id: 1,
    photo: '/images/agrovet1.jpg',
  },
  {
    id: 2,
    photo: '/images/agrovet02.jpg',
  },
  {
    id: 3,
    photo: '/images/agrovet1.jpg',
  },
  {
    id: 4,
    photo: '/images/agrovet04.jpeg',
  },
];

export default function AgrovetAtlanticSection() {
  const swiperRef = useRef<SwiperType | null>(null);
  const [selectedMember, setSelectedMember] = useState<null | (typeof boardMembers)[0]>(null);

  return (
    <section className="container mx-auto py-6 sm:py-8 md:py-14 lg:py-16 px-6 sm:px-8 lg:px-10">
      <div className="flex flex-col gap-12 items-center text-white">
        {/* Текстовая часть */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <h2 className="text-3xl md:text-4xl font-bold ">«Агровет Атлантік Груп»</h2>
          <p className="leading-relaxed">
            Проєкт реалізовано у форматі «під ключ» – від проєктування та постачання обладнання до
            монтажу і запуску.
          </p>

          <h3 className="text-2xl font-semibold">Про компанію</h3>
          <p className="">
            Агровет Атлантік Груп — один із провідних українських виробників і постачальників
            кормів, преміксів та ветеринарних препаратів для тваринництва. Компанія працює з 1991
            року, має власні науково-дослідні потужності та сучасні виробничі комплекси.
          </p>
          <p className="">
            «Агровет Атлантік Груп» активно співпрацює з аграрними підприємствами України та за
            кордоном, впроваджуючи інноваційні рішення для підвищення ефективності й
            конкурентоспроможності тваринництва.
          </p>

          <h3 className="text-2xl font-semibold">Енергетичне рішення для виробництва</h3>
          <p className="">
            Встановлення сонячної електростанції дозволило зменшити енергетичні витрати, підвищити
            стабільність роботи підприємства та зробити внесок у розвиток «зеленої» економіки.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {' '}
            <div className="bg-white text-black p-6 space-y-3">
              <h4 className="text-lg font-semibold">Основні характеристики станції:</h4>
              <ul className="list-disc list-inside">
                <li>Потужність: 513,3 кВт</li>
                <li>Тип системи: мережева (on-grid)</li>
                <li>Обладнання: Longi Solar та Huawei</li>
                <li>Формат: повний цикл «під ключ»</li>
              </ul>
            </div>
            <div className="bg-white text-black p-6 space-y-3">
              <h4 className="text-lg font-semibold">Переваги:</h4>
              <ul className="list-disc list-inside">
                <li>Зниження витрат на електроенергію</li>
                <li>Стабільність енергопостачання</li>
                <li>Підвищення енергонезалежності</li>
                <li>Підтримка екологічності та сталого розвитку</li>
                <li>Зміцнення іміджу інноваційного виробника</li>
              </ul>
            </div>
          </div>
        </motion.div>

        <div className="container mx-auto px-4 md:px-8 pb-10 md:pb-16 text-center relative">
          <div className="relative">
            {/* Стрелки (десктоп) */}
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
                        className="w-auto h-[20vh] object-cover"
                        priority
                      />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            {/* Стрелки (мобилка) */}
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
    </section>
  );
}
