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
  { id: 1, photo: '/images/atb-supermarket1.jpg' },
  { id: 2, photo: '/images/atb-supermarket2.jpg' },
  { id: 3, photo: '/images/atb-supermarket3.jpg' },
  { id: 4, photo: '/images/atb-supermarket4.jpg' },
];

export default function ATBSupermarketsSection() {
  const swiperRef = useRef<SwiperType | null>(null);
  const [selectedMember, setSelectedMember] = useState<null | (typeof boardMembers)[0]>(null);

  return (
    <section
      id="atb-supermarkets-section"
      className="container mx-auto py-6 sm:py-8 md:py-14 lg:py-16 px-6 sm:px-8 lg:px-10"
    >
      <div className="flex flex-col gap-12 items-center text-white">
        {/* --- Текстовый блок --- */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <h2 className="text-3xl md:text-4xl font-bold">Супермаркети «АТБ»</h2>
          <p className="leading-relaxed">
            Проєкт реалізовано у форматі – проєктування, постачання частини обладнання, монтажу і
            запуску.
          </p>

          <h3 className="text-2xl font-semibold">Про компанію «АТБ»</h3>
          <p>
            АТБ-Маркет — найбільша в Україні мережа продуктових супермаркетів. Компанія налічує
            понад 1 200 магазинів у більш ніж 300 населених пунктах і щодня обслуговує понад 4
            мільйони покупців. «АТБ» відома своєю стратегією доступних цін, широким асортиментом та
            активним впровадженням інновацій у торгівлю й логістику.
          </p>
          <p>
            Мережа активно працює над підвищенням енергоефективності, екологічності та сталого
            розвитку.
          </p>

          <h3 className="text-2xl font-semibold">Енергетичне рішення для рітейлу</h3>
          <p>
            Великі торгові мережі споживають значні обсяги електроенергії через освітлення,
            холодильні установки, кліматичні системи та касове обладнання. Для «АТБ» будівництво
            сонячних електростанцій стало стратегічним кроком у напрямку зниження витрат,
            стабільності роботи та зменшення впливу на довкілля.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="bg-white text-black p-6 space-y-3">
              <h4 className="text-lg font-semibold">Основні характеристики станцій:</h4>
              <ul className="list-disc list-inside">
                <li>Кількість об’єктів: 7 супермаркетів «АТБ»</li>
                <li>Потужність: 715,38 кВт (загальна)</li>
                <li>Тип системи: мережеві (on-grid)</li>
                <li>Обладнання: фотомодулі Tongwei Solar та інвертори Huawei</li>
                <li>Локація: дахи торгових об’єктів</li>
                <li>Формат реалізації: повний цикл «під ключ»</li>
              </ul>
            </div>

            <div className="bg-white text-black p-6 space-y-3">
              <h4 className="text-lg font-semibold">Переваги для «АТБ»:</h4>
              <ul className="list-disc list-inside">
                <li>Значне зниження витрат на електроенергію у денні години роботи</li>
                <li>Стабільність енергозабезпечення торгових об’єктів</li>
                <li>Підвищення енергонезалежності мережі</li>
                <li>Екологічність та зменшення вуглецевого сліду</li>
                <li>Зміцнення іміджу сучасної та інноваційної компанії</li>
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
