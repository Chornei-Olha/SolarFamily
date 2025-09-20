'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import Link from 'next/link';

interface SolarCard {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  image: string;
}

const data: SolarCard[] = [
  {
    id: 1,
    title: 'Заводи, АЗС, ТРЦ',
    subtitle:
      'Сонячні електростанції для власного споживання інтегруються в існуючі електромережі підприємства.',
    description: 'Оформлення не потрібне. Запуск СЕС в роботу відбувається одразу після монтажу.',
    image: '/solar1.jpg',
  },
  {
    id: 2,
    title: 'Виробничі та складські приміщення',
    subtitle:
      'Чим більше споживання приходить на світловий день, тим більший відсоток з усіх електричних потреб компенсує сонячна станція.',
    description:
      'При необхідності безперебійного живлення, додатково встановлюются акумуляторні блоки.',
    image: '/solar2.jpg',
  },
  {
    id: 3,
    title: 'Мережева СЕС 10 кВт',
    subtitle:
      'Сонячні електростанції для власного споживання інтегруються в існуючі електромережі підприємства.',
    description: 'Оформлення не потрібне. Запуск СЕС в роботу відбувається одразу після монтажу.',
    image: '/solar1.jpg',
  },
  {
    id: 4,
    title: 'Мережева СЕС 10 кВт',
    subtitle:
      'Чим більше споживання приходить на світловий день, тим більший відсоток з усіх електричних потреб компенсує сонячна станція.',
    description:
      'При необхідності безперебійного живлення, додатково встановлюются акумуляторні блоки.',
    image: '/solar2.jpg',
  },
];

export default function SolarSliderBusiness() {
  return (
    <div className="container mx-auto py-6 sm:py-8 lg:py-10 px-6 sm:px-8 lg:px-10 relative">
      <h2 className="text-2xl md:text-3xl font-normal mb-6 text-white">
        Принцип роботи мережевої СЕС
      </h2>
      <p className="text-gray-300 max-w-3xl mb-10">
        У світлий час доби фотомодулі генерують сонячну енергію, яку інвертор перетворює на змінний
        струм, придатний для використання в побуті. Спершу ця електроенергія забезпечує потреби
        домогосподарства, а все, що не споживається – автоматично надходить у зовнішню мережу.
        Надлишкова енергія продається державі або енергокомпанії за "зеленим" тарифом.
      </p>

      <div className="relative">
        <p className="text-2xl md:text-3xl font-normal mb-6 text-white">Обирайте готові рішення</p>
        <Swiper
          modules={[Navigation]}
          spaceBetween={40}
          slidesPerView={2}
          navigation={{
            nextEl: '.swiper-button-next-custom',
            prevEl: '.swiper-button-prev-custom',
          }}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            768: { slidesPerView: 2 },
          }}
        >
          {data.map((item) => (
            <SwiperSlide key={item.id}>
              <div
                className="relative h-[600px] overflow-hidden shadow-lg rounded-xl"
                style={{
                  backgroundImage: `url(${item.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              >
                <div className="absolute inset-0 bg-black/50 p-6 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl md:text-4xl font-normal text-white">{item.title}</h3>
                  </div>
                </div>
              </div>{' '}
              <p className="my-[40px] sm:my-[60px] border [border-image:linear-gradient(to_right,#ffffff,#7F7F7F_20%,#7F7F7F_100%)_1] mx-auto w-[80%] px-4 py-3 text-sm md:text-lg text-white">
                {item.subtitle}
              </p>
              <p
                className="border [border-image:linear-gradient(to_right,#ffffff,#7F7F7F_20%,#7F7F7F_100%)_1] mx-auto w-[80%] px-4 py-3 text-sm md:text-lg mt-2 text-white
              "
              >
                {item.description}
              </p>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Стрелки — вынесены за пределы карточек */}
        <div className="hidden md:flex absolute inset-y-1/2 -translate-y-1/2 w-full">
          <button className="swiper-button-prev-custom absolute -left-16 bg-white/80 hover:bg-white text-black rounded-full w-12 h-12 flex items-center justify-center shadow-lg">
            ‹
          </button>
          <button className="swiper-button-next-custom absolute -right-16 bg-white/80 hover:bg-white text-black rounded-full w-12 h-12 flex items-center justify-center shadow-lg">
            ›
          </button>
        </div>
      </div>
    </div>
  );
}
