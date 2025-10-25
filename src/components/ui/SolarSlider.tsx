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
  pdf: string;
}

const data: SolarCard[] = [
  {
    id: 1,
    title: 'Мережева СЕС 10 кВт',
    subtitle: 'Solis | Китай',
    description: 'Заощаджуйте на комунальних послугах та використовуйте власну електроенергію',
    image: '/solar1.jpg',
    pdf: '/offers/solis-10kw.pdf',
  },
  {
    id: 2,
    title: 'Мережева СЕС 10 кВт',
    subtitle: 'Fronius | Австрія',
    description: 'Покривайте своє щомісячне електроспоживання, використовуючи енергію сонця',
    image: '/solar2.jpg',
    pdf: '/offers/fronius-10kw.pdf',
  },
  {
    id: 3,
    title: 'Мережева СЕС 10 кВт',
    subtitle: 'Solis | Китай',
    description: 'Заощаджуйте на комунальних послугах та використовуйте власну електроенергію',
    image: '/solar1.jpg',
    pdf: '/offers/solis-10kw.pdf',
  },
  {
    id: 4,
    title: 'Мережева СЕС 10 кВт',
    subtitle: 'Fronius | Австрія',
    description: 'Покривайте своє щомісячне електроспоживання, використовуючи енергію сонця',
    image: '/solar2.jpg',
    pdf: '/offers/fronius-10kw.pdf',
  },
];

export default function SolarSlider() {
  return (
    <div className="container mx-auto py-6 sm:py-8 md:py-14 lg:py-16 px-6 sm:px-8 lg:px-10 relative">
      <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-actor font-normal mb-6 text-white">
        Принцип роботи мережевої СЕС
      </h2>
      <p className="max-w-3xl mb-10 text-sm sm:text-base md:text-lg lg:text-xl font-actor font-normal">
        У світлий час доби фотомодулі генерують сонячну енергію, яку інвертор перетворює на змінний
        струм, придатний для використання в побуті. Спершу ця електроенергія забезпечує потреби
        домогосподарства, а все, що не споживається – автоматично надходить у зовнішню мережу.
        Надлишкова енергія продається державі або енергокомпанії за "зеленим" тарифом.
      </p>

      <div className="relative">
        <Swiper
          modules={[Navigation]}
          spaceBetween={40}
          slidesPerView={1.3}
          navigation={{
            nextEl: '.swiper-button-next-custom',
            prevEl: '.swiper-button-prev-custom',
          }}
          breakpoints={{
            768: { slidesPerView: 2 },
          }}
        >
          {data.map((item) => (
            <SwiperSlide key={item.id}>
              <div
                className="relative h-[460px] sm:h-[600px] overflow-hidden shadow-lg rounded-xl"
                style={{
                  backgroundImage: `url(${item.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              >
                <div className="absolute inset-0 bg-black/50 p-6 flex flex-col justify-between font-montserrat">
                  <div>
                    <h3 className="text-xl md:text-4xl font-normal text-white">{item.title}</h3>
                    <p className="text-sm md:text-lg">{item.subtitle}</p>
                    <p className="text-sm md:text-lg mt-6">{item.description}</p>
                  </div>
                  <div className="text-center">
                    <Link href={item.pdf} download>
                      <button className="font-montserrat text-sm mb-4 py-4 px-6 rounded-[40px] bg-white text-black hover:bg-gray-200">
                        Завантажити пропозицію
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
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
