'use client';
import Image from 'next/image';

type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
};

const projects: Project[] = [
  {
    id: 1,
    title: 'Фора',
    description: 'Генерація за рік: 141 080 кВт*год',
    image: '/projects/project1.jpg',
  },
  {
    id: 2,
    title: 'Кронос Агро',
    description: 'Генерація за рік: 61 642 кВт*год',
    image: '/projects/project2.jpg',
  },
  {
    id: 3,
    title: 'Мікрозелень',
    description: 'Генерація за рік: 20 815 кВт*год',
    image: '/projects/project3.jpg',
  },
  {
    id: 4,
    title: 'Укравіт',
    description: 'Архітектурний проект',
    image: '/projects/project4.jpg',
  },
  {
    id: 5,
    title: 'Натурпродукт-Вега',
    description: 'Генерація за рік: 43 570 кВт*год',
    image: '/projects/project5.jpg',
  },
  {
    id: 6,
    title: 'Морозівська птахофірма',
    description: 'Генерація за рік: 203 412 кВт*год',
    image: '/projects/project6.jpg',
  },
  {
    id: 7,
    title: 'Родинна мястерня',
    description: 'Генерація за рік: 91 065 кВт*год',
    image: '/projects/project7.jpg',
  },
  {
    id: 8,
    title: 'АТБ',
    description: 'Генерація за рік: 57 069 кВт*год',
    image: '/projects/project8.jpg',
  },
  {
    id: 9,
    title: 'Сігнет-Мілк',
    description: 'Генерація за рік: 146 211 кВт*год',
    image: '/projects/project9.jpg',
  },
  {
    id: 10,
    title: 'Кліксар',
    description: 'Генерація за рік: 35 480 кВт*год',
    image: '/projects/project9.jpg',
  },
  {
    id: 11,
    title: 'Нива',
    description: 'Генерація за рік: 60 920 кВт*год',
    image: '/projects/project9.jpg',
  },
  {
    id: 12,
    title: 'Пумб',
    description: 'Генерація за рік: 99 144 кВт*год',
    image: '/projects/project9.jpg',
  },
  {
    id: 13,
    title: 'Фора',
    description: 'Генерація за рік: 35 480 кВт*год',
    image: '/projects/project9.jpg',
  },
  {
    id: 14,
    title: 'Фора',
    description: 'Генерація за рік: 35 480 кВт*год',
    image: '/projects/project9.jpg',
  },
  {
    id: 15,
    title: 'Фора',
    description: 'Генерація за рік: 35 480 кВт*год',
    image: '/projects/project9.jpg',
  },
  {
    id: 16,
    title: 'Фора',
    description: 'Генерація за рік: 35 480 кВт*год',
    image: '/projects/project9.jpg',
  },
];

export default function Retail() {
  return (
    <section className="container mx-auto py-6 sm:py-8 lg:py-10 px-6 sm:px-8 lg:px-10">
      <h2 className="text-center text-2xl font-semibold mb-6">ПРОЄКТИ</h2>

      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4">
        {projects.map((project) => (
          <div key={project.id} className="relative overflow-hidden shadow">
            <Image
              src={project.image}
              alt={project.title}
              width={600}
              height={400}
              className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="flex flex-col  text-black text-sm bg-white p-5 text-center">
              {' '}
              <span className="uppercase font-semibold text-sm">{project.title}</span>
              <span className="uppercase font-light text-xs">{project.description}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
