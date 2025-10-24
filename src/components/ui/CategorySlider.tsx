'use client';

import { useRef } from 'react';

type Category = {
  id: number;
  title: string;
  href?: string;
};

const categories: Category[] = [
  { id: 1, title: 'ПРОЄКТУВАННЯ', href: '#' },
  { id: 2, title: 'СЕРВІС', href: '#' },
  { id: 3, title: 'КЛІНІНГ', href: '#' },
  { id: 4, title: 'ФІНАНСУВАННЯ', href: '#' },
  { id: 5, title: 'ІНВЕСТИЦІЇ', href: '#' },
  { id: 6, title: 'ПРОЄКТУВАННЯ-2', href: '#' },
  { id: 7, title: 'СЕРВІС-2', href: '#' },
  { id: 8, title: 'КЛІНІНГ-2', href: '#' },
  { id: 9, title: 'ФІНАНСУВАННЯ-2', href: '#' },
  { id: 10, title: 'ІНВЕСТИЦІЇ-2', href: '#' },
];

export default function CategorySlider() {
  const scrollerRef = useRef<HTMLDivElement | null>(null);

  const scroll = (dir: 'left' | 'right') => {
    const el = scrollerRef.current;
    if (!el) return;
    // скроллим примерно на ширину видимой области (80%)
    const amount = Math.round(el.clientWidth * 0.8);
    el.scrollBy({ left: dir === 'left' ? -amount : amount, behavior: 'smooth' });
  };

  return (
    <section className="container mx-auto py-6 sm:py-8 md:py-14 lg:py-16 px-6 sm:px-8 lg:px-10">
      <div className=" relative">
        {/* Prev кнопку показываем только на md+ */}
        <button
          onClick={() => scroll('left')}
          aria-label="Предыдущая группа"
          className="hidden md:flex items-center justify-center absolute left-[35vw] -bottom-1/2 -translate-y-1/2 z-20 w-8 h-8 bg-black rounded-full shadow-sm hover:scale-105 transition"
        >
          {/* простая стрелка влево */}
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden
          >
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>

        <div
          ref={scrollerRef}
          className="flex gap-4 overflow-x-auto py-2 px-2 snap-x snap-mandatory scrollbar-hide"
        >
          {categories.map((c) => (
            <a
              key={c.id}
              href={c.href}
              className="
                snap-center
                flex-shrink-0
                w-[160px] sm:w-[200px] md:w-[220px] lg:w-[260px]
                h-[96px] sm:h-[104px] md:h-[120px]
                bg-white rounded-md shadow-md
                relative
                p-3
                focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-indigo-500
                transition-transform hover:-translate-y-0.5
              "
            >
              {/* Правый верхний угол: квадрат с стрелкой и подписью 'ДЕТАЛЬНІШЕ' */}
              <div className=" absolute top-3 right-3 flex flex-col items-end">
                <div className="w-5 sm:w-10 h-5 sm:h-10 border border-none flex items-center justify-center rounded-sm">
                  {/* стрелка вверх-вправо (NE) */}
                  <svg
                    className="w-8 h-8"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="black"
                    strokeWidth="1"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden
                  >
                    {/* рисуем диагональную стрелку от нижнего левого к верхнему правому */}
                    <path d="M6 18L18 6" />
                    <path d="M8 6h10v10" />
                  </svg>
                </div>
                <div className="mt-1 text-[10px] uppercase tracking-wide text-gray-500">
                  ДЕТАЛЬНІШЕ
                </div>
              </div>

              {/* Нижний левый угол: название */}
              <div className="absolute bottom-3 left-3 text-sm md:text-base lg:text-lg text-neutral-900 font-light">
                {c.title}
              </div>
            </a>
          ))}
        </div>

        {/* Next кнопку показываем только на md+ */}
        <button
          onClick={() => scroll('right')}
          aria-label="Следующая группа"
          className="hidden md:flex items-center justify-center absolute right-[35vw] -bottom-1/2 -translate-y-1/2 z-20 w-8 h-8 bg-black rounded-full shadow-sm hover:scale-105 transition"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden
          >
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>
      </div>
    </section>
  );
}
