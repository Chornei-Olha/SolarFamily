'use client';
import Image from 'next/image';

type Project = {
  id: number;
  title: string;
  image?: string;
};

const projects: Project[] = [
  {
    id: 1,
    title: 'ЖК Сучасний',
    image: '/projects/project1.jpg',
  },
  {
    id: 2,
    title: 'Бізнес центр',
    image: '/projects/project2.jpg',
  },
  {
    id: 3,
    title: 'Модульні будинки',
    image: '/projects/project3.jpg',
  },
  {
    id: 4,
    title: 'Офісний простір',
    image: '/projects/project4.jpg',
  },
  {
    id: 5,
    title: 'Котеджне містечко',
    image: '/projects/project5.jpg',
  },
  {
    id: 6,
    title: 'Складський комплекс',
    image: '/projects/project6.jpg',
  },
  {
    id: 7,
    title: 'Еко-селище',
    image: '/projects/project7.jpg',
  },
  {
    id: 8,
    title: 'Готельний комплекс',
    image: '/projects/project8.jpg',
  },
  {
    id: 9,
    title: 'Школа нового типу',
    image: '/projects/project9.jpg',
  },
];

export default function Gallery() {
  return (
    <section className="container mx-auto py-6 sm:py-8 lg:py-10 px-6 sm:px-8 lg:px-10">
      <h2 className="text-center text-2xl font-semibold mb-6">ПРОЄКТИ</h2>

      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
        {projects.map((project) => (
          <div
            key={project.id}
            className="relative bg-gradient-to-b from-black/20 to-black rounded-lg overflow-hidden shadow"
          >
            <Image
              src={project.image}
              alt={project.title}
              width={600}
              height={400}
              className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute bottom-2 left-2 text-white text-sm">
              {' '}
              <span className="text-white text-sm">{project.title}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
