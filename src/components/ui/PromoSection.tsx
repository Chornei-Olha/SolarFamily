import Image from 'next/image';

export default function PromoSection() {
  return (
    <section className="container mx-auto py-6 sm:py-8 lg:py-10 px-6 sm:px-8 lg:px-10">
      {/* Текст */}
      <div className="flex items-center justify-end">
        <p className="text-right text-white text-xl md:text-4xl max-w-6xl pb-16">
          SOLAR FAMILY – компанія, яка генерує екологічне сонячне майбутнє для українських сімей та
          бізнесів.
        </p>
      </div>

      <div className="relative">
        {/* Фото на фоне */}
        <Image
          src="/images/solar-field.png"
          alt="Solar Field"
          width={2600}
          height={1400}
          className="w-full h-full object-cover"
        />

        <div className="absolute bottom-0 right-0">
          {/* Контейнер с фоном-картинкой */}
          <div className="relative w-[300px] md:w-[430px]">
            {/* Картинка под кнопкой */}
            <Image
              src="/images/button-img.png"
              alt="Декоративное изображение"
              width={600}
              height={400}
              className="w-full h-auto"
            />

            {/* Кнопка-картинка поверх, по центру */}
            <a
              href="#"
              className="absolute inset-0 flex items-end justify-end pr-16 pb-6 cursor-pointer"
            >
              <img
                src="/images/button-green.png"
                alt="Замовити дзвінок"
                className="w-[100px] md:w-[152px] h-auto"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
