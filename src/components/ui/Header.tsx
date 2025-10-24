'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import clsx from 'clsx';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : 'auto';
  }, [menuOpen]);

  return (
    <header className="absolute top-0 left-0 w-full z-30">
      <div className="container mx-auto flex justify-between items-center px-6 sm:px-8 lg:px-10 py-6">
        {/* Логотип */}
        <Link href="/" aria-label="На головну">
          <Image
            src="/images/logo.svg"
            alt="logo"
            width={215}
            height={80}
            className="w-[150px] sm:w-[215px] h-auto"
            priority
          />
        </Link>

        {/* Кнопка бургер + Меню */}
        <button
          className="flex items-center gap-2 text-white z-40 relative group"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          {/* Кастомный бургер */}
          <div className="relative w-8 h-6 flex flex-col justify-between items-end transition-transform duration-300 group-hover:scale-110">
            <span
              className={clsx(
                'block h-[3px] bg-white rounded-full transition-all duration-300 origin-center',
                'group-hover:w-[110%] group-hover:bg-yellow-400',
                menuOpen ? 'rotate-45 translate-y-[9px] w-full' : 'w-full'
              )}
            />
            <span
              className={clsx(
                'block h-[3px] bg-white rounded-full transition-all duration-300',
                'group-hover:w-[70%] group-hover:bg-yellow-400',
                menuOpen ? 'opacity-0 w-3/4' : 'w-3/5'
              )}
            />
            <span
              className={clsx(
                'block h-[3px] bg-white rounded-full transition-all duration-300 origin-center',
                'group-hover:w-[110%] group-hover:bg-yellow-400',
                menuOpen ? '-rotate-45 -translate-y-[9px] w-full' : 'w-full'
              )}
            />
          </div>

          {/* Текст справа */}
          <span className="text-sm tracking-wide select-none group-hover:text-yellow-400 transition-colors duration-300">
            Меню
          </span>
        </button>
      </div>

      {/* Меню */}
      <div
        className={clsx(
          'fixed inset-y-0 right-0 w-3/4 sm:w-1/2 bg-black/90 text-white transform transition-transform duration-500 ease-in-out z-30 flex flex-col',
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        <nav className="flex-1 flex flex-col justify-center items-left pl-16 gap-8 text-base sm:text-lg md:text-xl lg:text-2xl font-montserrat font-normal">
          <Link href="/" onClick={() => setMenuOpen(false)}>
            Головна
          </Link>
          <Link href="/network" onClick={() => setMenuOpen(false)}>
            Мережева сонячна електростанція
          </Link>
          <Link href="/business" onClick={() => setMenuOpen(false)}>
            Сонячна електростанція для Вашого бізнесу
          </Link>
          <Link href="/about" onClick={() => setMenuOpen(false)}>
            Про компанію
          </Link>
          <Link href="/case" onClick={() => setMenuOpen(false)}>
            Реалізовані проекти
          </Link>
          <Link href="/aboutProduct" onClick={() => setMenuOpen(false)}>
            Про сонячні електростанції
          </Link>
        </nav>
      </div>

      {/* Затемнение позади меню */}
      {menuOpen && (
        <div className="fixed inset-0 bg-black/50 z-20" onClick={() => setMenuOpen(false)} />
      )}
    </header>
  );
}
