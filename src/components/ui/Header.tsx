'use client';
import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
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

        {/* Бургер / крестик */}
        <button
          className="p-2 text-white z-40 relative"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          {menuOpen ? <X size={32} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Меню */}
      <div
        className={clsx(
          'fixed inset-y-0 right-0 w-3/4 sm:w-1/2 bg-black/90 text-white transform transition-transform duration-500 ease-in-out z-30 flex flex-col',
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        {/* Ссылки */}
        <nav className="flex-1 flex flex-col justify-center items-center gap-8 text-2xl">
          <Link href="/" onClick={() => setMenuOpen(false)}>
            Головна
          </Link>
          <Link href="/network" onClick={() => setMenuOpen(false)}>
            Мережева сонячна електростанція
          </Link>
          <Link href="/business" onClick={() => setMenuOpen(false)}>
            Сонячна електростанція для Вашого бізнесу{' '}
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
