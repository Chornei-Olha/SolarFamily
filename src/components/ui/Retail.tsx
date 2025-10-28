'use client';
import Image from 'next/image';
import Link from 'next/link';

type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  href: string;
};

const projects: Project[] = [
  {
    id: 1,
    title: 'Агровет Атлантік Груп',
    description: 'Потужність: 513,3 кВт',
    image: '/images/projects/agrovetAtlantic-1.webp',
    href: '/agrovetAtlantic',
  },
  {
    id: 2,
    title: 'Дінбо',
    description: 'Потужність: 124,02 кВт',
    image: '/images/projects/dinbo-1.webp',
    href: '/dinbo',
  },
  {
    id: 3,
    title: '«Модус Форвард»',
    description: 'Потужність: 73,75 кВт',
    image: '/images/projects/modusForward-1.webp',
    href: '/modusForward',
  },
  {
    id: 4,
    title: '«Політара»',
    description: 'Потужність: 181,72 кВт',
    image: '/images/projects/politara-1.webp',
    href: '/politara',
  },
  {
    id: 5,
    title: '«Родинна м’ястерня»',
    description: 'Потужність: 81,32 кВт',
    image: '/images/projects/rodynnaMyasternya-1.webp',
    href: '/rodynnaMyasternya',
  },
  {
    id: 6,
    title: '«Сігнет-Мілк»',
    description: 'Потужність: 129,92 кВт',
    image: '/images/projects/signetMilk-1.webp',
    href: '/signetMilk',
  },
  {
    id: 7,
    title: '«Elopak»',
    description: 'Потужність: 495,6 кВт',
    image: '/images/projects/elopak-1.webp',
    href: '/elopak',
  },
  {
    id: 8,
    title: '«АТБ Логістик-Юніон»',
    description: 'Потужність: 1850,24 кВт',
    image: '/images/projects/ATBLogisticUnion-1.webp',
    href: '/ATBLogisticUnion',
  },
  {
    id: 9,
    title: 'Супермаркети «АТБ»',
    description: 'Потужність: 715,38 кВт (загальна)',
    image: '/images/projects/ATBSupermarkets-1.webp',
    href: '/ATBSupermarkets',
  },
  {
    id: 10,
    title: '«Кліксар»',
    description: 'Потужність: 84,24 кВт',
    image: '/images/projects/clicksar-1.webp',
    href: '/clicksar',
  },
  {
    id: 11,
    title: '«Кронос Агро»',
    description: 'Потужність: 102,4 кВт',
    image: '/images/projects/kronosAgro-1.webp',
    href: '/kronosAgro',
  },
  {
    id: 12,
    title: 'Інкубатор на Морозівській птахофабриці',
    description: 'Потужність: 129,92 кВт',
    image: '/images/projects/morozivIncubator.webp',
    href: '/morozivIncubator',
  },
  {
    id: 13,
    title: '«Натурпродукт-Вега»',
    description: 'Потужність системи зберігання енергії (акумулятори): 35 кВт/год',
    image: '/images/projects/naturproductVega-1.webp',
    href: '/naturproductVega',
  },
  {
    id: 14,
    title: '«Нова пошта». Логістичний термінал',
    description: 'Потужність: 1173,51 кВт',
    image: '/images/projects/novaPoshtaTerminal-1.webp',
    href: '/novaPoshtaTerminal',
  },
  {
    id: 15,
    title: 'ОСББ «Герцен Парк»',
    description: 'Потужність системи зберігання енергії (акумулятори): 24 кВ',
    image: '/images/projects/herzenPark-1.webp',
    href: '/herzenPark',
  },
  {
    id: 16,
    title: 'ПУМБ — головне відділення у Києві',
    description: 'Потужність: 39,53 кВт',
    image: '/images/projects/PUMB-1.webp',
    href: '/PUMB',
  },
  {
    id: 17,
    title: 'СПГ «Нива»',
    description: 'Потужність: 57,92 кВт',
    image: '/images/projects/SPGNiwa-1.webp',
    href: '/SPGNiwa',
  },
  {
    id: 18,
    title: '«Укравіт»',
    description: 'Потужність: 265,98 кВт',
    image: '/images/projects/ukravit-1.webp',
    href: '/ukravit',
  },
  {
    id: 19,
    title: '«Фора»',
    description: 'Потужність: 558,52 кВт (загальна)',
    image: '/images/projects/fora-1.webp',
    href: '/fora',
  },
];

export default function Retail() {
  return (
    <section className="container mx-auto py-6 sm:py-8 md:py-14 lg:py-16 px-6 sm:px-8 lg:px-10">
      <h2 className="text-center text-2xl font-semibold mb-6">ПРОЄКТИ</h2>

      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4">
        {projects.map((project) => (
          <Link
            key={project.id}
            href={`${project.href}#second-section`}
            className="relative overflow-hidden shadow group"
          >
            <Image
              src={project.image}
              alt={project.title}
              width={600}
              height={400}
              className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="flex flex-col text-black text-sm bg-white p-5 text-center">
              <span className="uppercase font-semibold text-sm">{project.title}</span>
              <span className="uppercase font-light text-xs">{project.description}</span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
