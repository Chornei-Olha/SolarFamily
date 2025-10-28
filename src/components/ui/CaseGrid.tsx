'use client';

import Image from 'next/image';
import Link from 'next/link';

type CaseItem = {
  id: number;
  title: string;
  image: string;
  link: string;
};

const cases: CaseItem[] = [
  {
    id: 1,
    title: 'Сонячна електростанція - єдине надійне рішення при відключенні електроенергії',
    image: '/images/bg-4.webp',
    link: '/case/1',
  },
  {
    id: 2,
    title: 'Сонячна електростанція - єдине надійне рішення при відключенні електроенергії',
    image: '/images/bg-4.webp',
    link: '/case/2',
  },
  {
    id: 3,
    title: 'Сонячна електростанція - єдине надійне рішення при відключенні електроенергії',
    image: '/images/bg-4.webp',
    link: '/case/3',
  },
  {
    id: 4,
    title: 'Сонячна електростанція - єдине надійне рішення при відключенні електроенергії',
    image: '/images/bg-4.webp',
    link: '/case/4',
  },
  {
    id: 5,
    title: 'Сонячна електростанція - єдине надійне рішення при відключенні електроенергії',
    image: '/images/bg-4.webp',
    link: '/case/5',
  },
  {
    id: 6,
    title: 'Сонячна електростанція - єдине надійне рішення при відключенні електроенергії',
    image: '/images/bg-4.webp',
    link: '/case/6',
  },
];

export default function CaseGrid() {
  return (
    <section className="container mx-auto py-6 sm:py-8 md:py-14 lg:py-16 px-6 sm:px-8 lg:px-1">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {cases.map((item) => (
          <div key={item.id} className="relative group overflow-hidden bg-gray-900">
            {/* Картинка */}
            <Image
              src={item.image}
              alt={item.title}
              width={1600}
              height={900}
              className="w-full h-[300px] sm:h-[440px] lg:h-[640px] object-cover grayscale group-hover:grayscale-0 transition duration-500"
            />

            {/* Текстовый блок */}
            <div className="absolute inset-0 flex flex-col justify-end p-4 bg-gradient-to-t from-black/60 via-black/20 to-transparent">
              <p className="text-white text-base sm:text-lg md:text-xl lg:text-2xl font-montserrat font-normal mb-2">
                {item.title}
              </p>
              <Link
                href={item.link}
                className="flex items-center gap-2 text-white text-base hover:underline"
              >
                Далі <span className="text-lg">›</span>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
