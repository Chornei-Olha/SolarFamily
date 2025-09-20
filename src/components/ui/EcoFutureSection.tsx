'use client';

import Image from 'next/image';

const EcoFutureSection = () => {
  return (
    <section className="container mx-auto mt-[100px] sm:mt-[100px] py-6 sm:py-8 lg:py-10 px-6 sm:px-8 lg:px-10 text-white">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-stretch gap-10">
        {/* Ліва частина (текст) */}
        <div className="w-full lg:w-1/2 flex flex-col justify-between sm:pr-[100px] gap-8">
          <h2 className="text-xl lg:text-3xl font-normal">
            Створюємо екологічне майбутнє вже сьогодні!
          </h2>
          <p className="text-base lg:text-xl font-normal">
            “Сутність сонячної енергетики – екологічне та раціональне споживання природних ресурсів.
            Ера викопного палива завершується, на заміну їй приходять альтернативні джерела енергії.
            Ми крокуємо поруч з майбутнім, а Ви?”
          </p>
          <p className="text-base lg:text-xl font-normal">
            Всі підприємства різні. Їх потреби теж різні. Тому універсального рішення не існує. Для
            кожного проекту ми готуємо індивідуальне рішення, що зможе покрити від 30% потреб
            електроенергії
          </p>
          <p className="text-base lg:text-xl font-normal">
            Компанія-інсталятор SOLAR FAMILY впродовж 10 років професійного досвіду реалізувала
            більше 700 проектів сонячних електростанцій, з яких понад 300 СЕС підключеного до
            «зеленого» тарифу.
          </p>
        </div>

        {/* Права частина (фото + підпис) */}
        <div className="w-full lg:w-[500px] flex flex-col items-center lg:items-end">
          <div className="relative w-full max-w-[500px]">
            <Image
              src="/images/ceo.png"
              alt="Solar Family Team"
              width={1000}
              height={2000}
              className="w-full object-contain"
              priority
            />
          </div>
          <div className="text-white text-sm sm:text-lg mt-4 py-2 w-full text-left">
            <p>
              <span className="font-semibold">CEO | Олександр Касторнов</span>
            </p>
            <p>Співзасновник | Яна Касторнова</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EcoFutureSection;
