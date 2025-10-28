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
  { id: 1, photo: '/images/projects/ATBLogisticUnion-1.webp' },
  { id: 2, photo: '/images/projects/ATBLogisticUnion-2.webp' },
  { id: 3, photo: '/images/projects/ATBLogisticUnion-3.webp' },
];

export default function ATBLogisticUnionSection() {
  const swiperRef = useRef<SwiperType | null>(null);
  const [selectedMember, setSelectedMember] = useState<null | (typeof boardMembers)[0]>(null);

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
          <h2 className="text-3xl md:text-4xl font-bold">«АТБ Логістик-Юніон»</h2>
          <p className="leading-relaxed">
            Проєкт реалізовано у форматі – проєктування, постачання частини обладнання, монтажу і
            запуску.
          </p>

          <h3 className="text-2xl font-semibold">Про компанію «АТБ Логістик-Юніон»</h3>
          <p>
            АТБ Логістик-Юніон — структурний підрозділ мережі АТБ-Маркет, який відповідає за
            централізовану логістику та безперервне постачання продукції у сотні супермаркетів по
            всій Україні. Компанія володіє сучасними логістичними центрами, що забезпечують
            швидкість, точність і якість обслуговування торгової мережі.
          </p>
          <p>
            Серед стратегічних завдань «АТБ Логістик-Юніон» — впровадження інноваційних технологій,
            оптимізація витрат та використання енергоефективних рішень.
          </p>

          <h3 className="text-2xl font-semibold">Енергетичне рішення для логістики</h3>
          <p>
            Логістичні комплекси споживають великі обсяги електроенергії через холодильне
            обладнання, системи освітлення, вентиляції та автоматизовані складські лінії. Саме тому
            впровадження сонячної електростанції стало важливим кроком у підвищенні ефективності та
            забезпеченні енергонезалежності «АТБ Логістик-Юніон».
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="bg-white text-black p-6 space-y-3">
              <h4 className="text-lg font-semibold">Основні характеристики станції:</h4>
              <ul className="list-disc list-inside">
                <li>Потужність: 1850,24 кВт</li>
                <li>Тип системи: мережева (on-grid)</li>
                <li>Обладнання: фотомодулі TW Solar та інвертори Huawei</li>
                <li>Локація: логістичний центр «АТБ Логістик-Юніон»</li>
                <li>Формат реалізації: повний цикл «під ключ»</li>
              </ul>
            </div>

            <div className="bg-white text-black p-6 space-y-3">
              <h4 className="text-lg font-semibold">Переваги для «АТБ Логістик-Юніон»:</h4>
              <ul className="list-disc list-inside">
                <li>Суттєве зниження витрат на електроенергію</li>
                <li>Стабільність енергопостачання холодильних камер і складських систем</li>
                <li>Підвищення енергонезалежності стратегічного об’єкта</li>
                <li>Підтримка принципів екологічності та сталого розвитку</li>
                <li>Посилення іміджу АТБ як інноваційної та сучасної компанії</li>
              </ul>
            </div>
          </div>

          <div className="bg-white text-black p-6 space-y-3">
            <h4 className="text-lg font-semibold">Додатковий фінансовий ефект:</h4>
            <p>
              У найближчий час, на цьому обʼєкті, планується отримання статусу активного споживача
              та підключення до «Гарантованого покупця». Це дасть можливість підприємству не лише
              економити на власному енергоспоживанні, а й реалізовувати надлишкову електроенергію на
              ринку, створюючи додаткове джерело доходу для бізнесу.
            </p>
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
