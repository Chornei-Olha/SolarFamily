'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import Link from 'next/link';

const projects = [
  {
    id: 1,
    title: 'Агровет Атлантік Груп',
    image: '/images/projects/agrovetAtlantic-1.webp',
    href: '/agrovetAtlantic',
  },
  {
    id: 2,
    title: 'Дінбо',
    image: '/images/projects/dinbo-1.webp',
    href: '/dinbo',
  },
  {
    id: 3,
    title: '«Модус Форвард»',
    image: '/images/projects/modusForward-1.webp',
    href: '/modusForward',
  },
  {
    id: 4,
    title: '«Політара»',
    image: '/images/projects/politara-1.webp',
    href: '/politara',
  },
  {
    id: 5,
    title: '«Родинна м’ястерня»',
    image: '/images/projects/rodynnaMyasternya-1.webp',
    href: '/rodynnaMyasternya',
  },
  {
    id: 6,
    title: '«Сігнет-Мілк»',
    image: '/images/projects/signetMilk-1.webp',
    href: '/signetMilk',
  },
  {
    id: 7,
    title: '«Elopak»',
    image: '/images/projects/elopak-1.webp',
    href: '/elopak',
  },
  {
    id: 8,
    title: '«АТБ Логістик-Юніон»',
    image: '/images/projects/ATBLogisticUnion-1.webp',
    href: '/ATBLogisticUnion',
  },
  {
    id: 9,
    title: 'Супермаркети «АТБ»',
    image: '/images/projects/ATBSupermarkets-1.webp',
    href: '/ATBSupermarkets',
  },
  {
    id: 10,
    title: '«Кліксар»',
    image: '/images/projects/clicksar-1.webp',
    href: '/clicksar',
  },
  {
    id: 11,
    title: '«Кронос Агро»',
    image: '/images/projects/kronosAgro-1.webp',
    href: '/kronosAgro',
  },
  {
    id: 12,
    title: 'Інкубатор на Морозівській птахофабриці',
    image: '/images/projects/morozivIncubator.webp',
    href: '/morozivIncubator',
  },
  {
    id: 13,
    title: '«Натурпродукт-Вега»',
    image: '/images/projects/naturproductVega-1.webp',
    href: '/naturproductVega',
  },
  {
    id: 14,
    title: '«Нова пошта». Логістичний термінал',
    image: '/images/projects/novaPoshtaTerminal-1.webp',
    href: '/novaPoshtaTerminal',
  },
  {
    id: 15,
    title: 'ОСББ «Герцен Парк»',
    image: '/images/projects/herzenPark-1.webp',
    href: '/herzenPark',
  },
  {
    id: 16,
    title: 'ПУМБ — головне відділення у Києві',
    image: '/images/projects/PUMB-1.webp',
    href: '/PUMB',
  },
  {
    id: 17,
    title: 'СПГ «Нива»',
    image: '/images/projects/SPGNiwa-1.webp',
    href: '/SPGNiwa',
  },
  {
    id: 18,
    title: '«Укравіт»',
    image: '/images/projects/ukravit-1.webp',
    href: '/ukravit',
  },
  {
    id: 19,
    title: '«Фора»',
    image: '/images/projects/fora-1.webp',
    href: '/fora',
  },
];

export default function ProjectsSlider() {
  return (
    <section className="container mx-auto py-6 sm:py-8 md:py-14 lg:py-16 px-6 sm:px-8 lg:px-10 text-white">
      <div>
        {/* Текст */}
        <div className="flex items-center justify-end">
          <p className="text-right text-white text-xl sm:tex-xl md:text-3xl lg:text-4xl max-w-6xl pb-12 sm:pb-16 md:pb-28 lg:pb-32 font-actor font-normal">
            SOLAR FAMILY – компанія, яка генерує екологічне сонячне майбутнє для українських сімей
            та бізнесів.
          </p>
        </div>
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl sm:text-3xl font-semibold">Проєкти</h2>
          <Link
            href="/case"
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
                    {/* <div className="text-sm sm:text-base">
                      <p className="opacity-70">Відділ продажу</p>
                      <p>{project.contact}</p>
                    </div> */}
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
