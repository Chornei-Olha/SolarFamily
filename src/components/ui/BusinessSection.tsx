export default function BusinessSection() {
  return (
    <section className="container mx-auto py-6 sm:py-8 md:py-14 lg:py-16 px-6 sm:px-8 lg:px-10 text-white">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Левый блок */}
        <div className="space-y-8">
          <h2 className="text-xl sm:tex-xl md:text-3xl lg:text-4xl max-w-lg font-actor font-normal">
            Сонячна електростанція для Вашого бізнесу
          </h2>
          <div className="flex flex-col sm:flex-row gap-10">
            <div className="flex flex-col gap-12 items-center">
              <div className="flex-shrink-0 flex items-center justify-center">
                {/* Иконка 1 */}
                <img
                  src="/icons/business-1.svg"
                  alt="icon"
                  className="w-[100px] sm:w-[110px] md:w-[120px] lg:w-[130px] h-[100px] sm:h-[110px] md:h-[120px] lg:h-[130px] object-contain"
                />
              </div>
              <p className="text-sm sm:text-base md:text-lg lg:font-xl font-actor font-normal">
                Зниження залежності від комунальних енергопостачальних компаній, економія на
                рахунках за електроенергію та зменшення впливу на довкілля шляхом використання
                відновлюваного джерела енергії.
              </p>
            </div>
            <div className="flex flex-col gap-12 items-center">
              <div className="flex-shrink-0 flex items-center justify-center">
                {/* Иконка 2 */}
                <img
                  src="/icons/business-2.svg"
                  alt="icon"
                  className="w-[100px] sm:w-[110px] md:w-[120px] lg:w-[130px] h-[100px] sm:h-[110px] md:h-[120px] lg:h-[130px] object-contain"
                />
              </div>
              <p className="text-sm sm:text-base md:text-lg lg:font-xl font-actor font-normal">
                Всі підприємства різні. Їх потреби теж різні. Тому універсального рішення не існує.
                Для кожного проєкту ми готуємо індивідуальне рішення, що зможе покрити від 10 до 30%
                потреб електроенергії.
              </p>
            </div>
          </div>
        </div>

        {/* Правый блок с фото */}
        <div className="relative w-full h-72 md:h-[400px] overflow-hidden">
          <img
            src="/images/solar.webp"
            alt="Business Solar"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
      </div>
    </section>
  );
}
