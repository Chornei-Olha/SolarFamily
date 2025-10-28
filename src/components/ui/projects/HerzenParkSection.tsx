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
  { id: 1, photo: '/images/projects/herzenPark-1.webp' },
  { id: 3, photo: '/images/projects/herzenPark-3.webp' },
  { id: 2, photo: '/images/projects/herzenPark-2.webp' },
  { id: 4, photo: '/images/projects/herzenPark-4.webp' },
  // { id: 5, photo: '/images/projects/herzenPark-5.webp' },
  { id: 6, photo: '/images/projects/herzenPark-6.webp' },
];

export default function HerzenParkSection() {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <section
      id="second-section"
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
          <h2 className="text-3xl md:text-4xl font-bold">ОСББ «Герцен Парк»</h2>
          <p>
            Проєкт реалізовано у форматі «під ключ» – від проєктування та постачання обладнання до
            монтажу і запуску.
          </p>

          <h3 className="text-2xl font-semibold">Про ОСББ «Герцен Парк»</h3>
          <p>
            ОСББ «Герцен Парк» — сучасне об’єднання співвласників багатоквартирного будинку у Києві,
            яке об’єднало мешканців задля якісного управління спільною інфраструктурою та підвищення
            рівня комфорту проживання. ОСББ активно впроваджує сучасні рішення для
            енергоефективності та оптимізації витрат мешканців.
          </p>

          <h3 className="text-2xl font-semibold">Енергетичне рішення для житлового комплексу</h3>
          <p>
            Багатоповерхові будинки мають стабільне енергоспоживання: освітлення місць загального
            користування, робота ліфтів, системи відеонагляду, вентиляції та насосного обладнання.
            Встановлення сонячної електростанції дозволяє ОСББ «Герцен Парк» суттєво зменшити
            витрати на електроенергію для спільних потреб та зробити будинок більш енергонезалежним.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="bg-white text-black p-6 space-y-3">
              <h4 className="text-lg font-semibold">Основні характеристики станції:</h4>
              <ul className="list-disc list-inside">
                <li>Потужність по фотомодулях: 24,92 кВт</li>
                <li>Потужність системи зберігання енергії (акумулятори): 24 кВт</li>
                <li>Інверторне обладнання: Victron Energy + Solar Edge</li>
                <li>Тип системи: гібридна (on-grid + накопичення енергії)</li>
                <li>Локація: дах будинку ОСББ «Герцен Парк»</li>
                <li>Формат реалізації: повний цикл «під ключ»</li>
              </ul>
            </div>

            <div className="bg-white text-black p-6 space-y-3">
              <h4 className="text-lg font-semibold">Переваги для ОСББ «Герцен Парк»:</h4>
              <ul className="list-disc list-inside">
                <li>Зменшення витрат мешканців на утримання будинку</li>
                <li>Резервне живлення у випадку перебоїв у мережі</li>
                <li>Стабільність роботи інфраструктури (ліфти, освітлення, насосні станції)</li>
                <li>Підвищення енергонезалежності житлового комплексу</li>
                <li>Підтримка принципів екологічності та сталого розвитку</li>
              </ul>
              <p className="mt-2 text-sm text-gray-200">
                Фінансування проєкту: реалізація стала можливою завдяки поєднанню власних коштів
                мешканців та державних грантів і програм підтримки, що забезпечили часткову
                компенсацію вартості проєкту.
              </p>
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
                        className="w-[auto] h-[auto] object-cover"
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
    </section>
  );
}
