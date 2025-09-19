import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="container mx-auto py-6 sm:py-8 lg:py-10 px-6 sm:px-8 lg:px-10 text-white">
      {/* Нижняя часть с картинкой справа */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mt-12">
        {/* Текст слева */}
        <div className="text-white text-2xl md:text-4xl font-bold">
          info@solarfamily.ua
          <p className="mt-4 text-lg md:text-xl font-normal">
            +38 (067) 726 57 14 <br />
            Офіс: м.Київ, вул. Волинська, 67
          </p>
        </div>

        {/* Картинка справа */}
        <div className="relative w-full h-[300px] md:h-[400px]">
          <Image
            src="/images/building-2.png"
            alt="Будівля"
            fill
            className="object-cover rounded-lg"
          />
          <div className="absolute inset-0 bg-black/40 rounded-lg" />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
        {/* Меню */}
        <div className="flex flex-col gap-2">
          <a href="#">Головна</a>
          <a href="#">Про компанію</a>
          <a href="#">Послуги</a>
          <a href="#">Проекти</a>
          <a href="#">Новини</a>
          <a href="#">Контакти</a>
          <a href="#">Для партнерів</a>
          <a href="#">Вакансії</a>
        </div>

        {/* Соцсети */}
        <div className="flex gap-4">
          <a
            href="#"
            className="bg-white text-black px-4 py-2 rounded-full font-semibold hover:bg-gray-200"
          >
            Instagram
          </a>
          <a
            href="#"
            className="bg-white text-black px-4 py-2 rounded-full font-semibold hover:bg-gray-200"
          >
            Facebook
          </a>
          <a
            href="#"
            className="bg-white text-black px-4 py-2 rounded-full font-semibold hover:bg-gray-200"
          >
            LinkedIn
          </a>
        </div>

        {/* Политика */}
        <div className="text-right text-sm opacity-70">
          <p>2025 © Всі права захищені. ТОВ «Solar Family»</p>
          <a href="#" className="underline">
            Політика конфіденційності
          </a>
        </div>
      </div>
    </footer>
  );
}
