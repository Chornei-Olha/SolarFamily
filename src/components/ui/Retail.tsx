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
    image: '/projects/project1.jpg',
    href: '/agrovetAtlantic',
  },
  {
    id: 2,
    title: 'Дінбо',
    description: 'Потужність: 124,02 кВт',
    image: '/projects/project2.jpg',
    href: '/dinbo',
  },
  {
    id: 3,
    title: '«Модус Форвард»',
    description: 'Потужність по сонячних фотомодулях: 73,75 кВт',
    image: '/projects/project3.jpg',
    href: '/modusForward',
  },
  {
    id: 4,
    title: '«Політара»',
    description: 'Потужність: 181,72 кВт',
    image: '/projects/project4.jpg',
    href: '/politara',
  },
  {
    id: 5,
    title: '«Родинна м’ястерня»',
    description: 'Потужність: 81,32 кВт',
    image: '/projects/project5.jpg',
    href: '/rodynnaMyasternya',
  },
  {
    id: 6,
    title: '«Сігнет-Мілк»',
    description: 'Потужність: 129,92 кВт',
    image: '/projects/project6.jpg',
    href: '/signetMilk',
  },
  {
    id: 7,
    title: '«Elopak»',
    description: 'Потужність: 495,6 кВт',
    image: '/projects/project7.jpg',
    href: '/elopak',
  },
  {
    id: 8,
    title: '«АТБ Логістик-Юніон»',
    description: 'Потужність: 1850,24 кВт',
    image: '/projects/project8.jpg',
    href: '/ATBLogisticUnion',
  },
  {
    id: 9,
    title: 'Супермаркети «АТБ»',
    description: 'Потужність: 715,38 кВт (загальна)',
    image: '/projects/project9.jpg',
    href: '/ATBSupermarkets',
  },
  {
    id: 10,
    title: '«Кліксар»',
    description: 'Потужність: 84,24 кВт',
    image: '/projects/project9.jpg',
    href: '/clicksar',
  },
  {
    id: 11,
    title: '«Кронос Агро»',
    description: 'Потужність системи зберігання енергії (акумулятори): 102,4 кВт',
    image: '/projects/project9.jpg',
    href: '/kronosAgro',
  },
  {
    id: 12,
    title: 'Інкубатор на Морозівській птахофабриці',
    description: 'Потужність: 129,92 кВт',
    image: '/projects/project9.jpg',
    href: '/morozivIncubator',
  },
  {
    id: 13,
    title: '«Натурпродукт-Вега»',
    description: 'Потужність системи зберігання енергії (акумулятори): 35 кВт/год',
    image: '/projects/project9.jpg',
    href: '/naturproductVega',
  },
  {
    id: 14,
    title: '«Нова пошта». Логістичний термінал',
    description: 'Генерація за рік: 35 480 кВт*год',
    image: '/projects/project9.jpg',
    href: '/agrovetAtlantic',
  },
  {
    id: 15,
    title: 'Фора',
    description: 'Генерація за рік: 35 480 кВт*год',
    image: '/projects/project9.jpg',
    href: '/agrovetAtlantic',
  },
  {
    id: 16,
    title: 'Фора',
    description: 'Генерація за рік: 35 480 кВт*год',
    image: '/projects/project9.jpg',
    href: '/agrovetAtlantic',
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
