import Image from 'next/image';
import { Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer
      id="footer"
      className="container mx-auto py-6 sm:py-8 md:py-14 lg:py-16 px-6 sm:px-8 lg:px-10 text-white"
    >
      {/* Нижняя часть с картинкой справа */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-16 font-normal items-stretch">
        {/* Текст слева */}
        <div className="md:col-span-2 flex flex-col justify-between h-full gap-8">
          <p className="text-2xl md:text-[50px] font-actor">info@solarfamily.ua</p>
          <a
            href="tel:+380677265714"
            className="flex items-center gap-3 text-lg md:text-[30px] text-white hover:text-[#A4AA9C] transition"
          >
            <Phone size={24} className="flex-shrink-0" />
            +38 (067) 726 57 14
          </a>{' '}
          <a
            href="https://www.google.com/maps/dir/?api=1&destination=м.Київ, вул. Волинська, 67"
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg md:text-[30px] text-white hover:text-[#A4AA9C]"
          >
            Офіс: м.Київ, вул. Волинська, 67
          </a>
          <div className="flex flex-col gap-8">
            {/* Меню */}
            <div className="gap-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              <a href="/">Головна</a>
              <a href="/case">Проєкти</a>
              <a href="/aboutProduct">Новини</a>
              <a href="/business">Для партнерів</a>
              <a href="/about">Про компанію</a>
              {/* <a href="#">Послуги</a> */}
              <a href="#footer">Контакти</a>
              <a href="/hyring">Вакансії</a>
            </div>

            {/* Соцсети */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://www.instagram.com/solarfamily/"
                className="bg-white text-black px-4 py-2 rounded-full font-semibold hover:bg-gray-200"
              >
                Instagram
              </a>
              <a
                href="https://www.youtube.com/channel/UC2yBgVzZSby7Wt0J4myxI5A"
                className="bg-white text-black px-4 py-2 rounded-full font-semibold hover:bg-gray-200"
              >
                YouTube
              </a>
              <a
                href="https://www.facebook.com/solarfamily.ukraine"
                className="bg-white text-black px-4 py-2 rounded-full font-semibold hover:bg-gray-200"
              >
                Facebook
              </a>
              <a
                href="https://www.tiktok.com/@solar_family"
                className="bg-white text-black px-4 py-2 rounded-full font-semibold hover:bg-gray-200"
              >
                TikTok
              </a>
            </div>
          </div>
        </div>

        {/* Картинка справа */}
        <div className="col-span-1 relative w-full h-[300px] md:h-[400px]">
          <Image src="/images/worker.webp" alt="Будівля" fill className="object-cover" />
          <div className="absolute inset-0 bg-black/40 rounded-lg" />
        </div>
      </div>{' '}
      {/* Политика */}
      <div className="flex flex-col sm:flex-row justify-between text-sm mt-10 sm:mt-16">
        <p>2025 © Всі права захищені. ТОВ «Solar Family»</p>
        <a href="#" className="underline">
          Політика конфіденційності
        </a>
      </div>
    </footer>
  );
}
