export default function BusinessSection() {
  return (
    <section className="container mx-auto py-6 sm:py-8 lg:py-10 px-6 sm:px-8 lg:px-10 text-white">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* Левый блок */}
        <div className="space-y-8">
          <h2 className="text-2xl md:text-3xl font-semibold max-w-xl">
            Сонячна електростанція для Вашого бізнесу
          </h2>
          <div className="flex flex-col sm:flex-row">
            <div className="flex flex-col gap-4 items-center">
              <div className="flex-shrink-0 w-[130px] h-[130px] flex items-center justify-center">
                {/* Иконка 1 */}
                <img
                  src="/icons/business-1.svg"
                  alt="icon"
                  className="w-[130px] h-[130px] object-contain"
                />
              </div>
              <p className="opacity-80 text-sm md:text-base">
                Зниження залежності від комунальних енергопостачальних компаній, економія на
                рахунках за електроенергію та зменшення впливу на довкілля шляхом використання
                відновлюваного джерела енергії.
              </p>
            </div>
            <div className="flex flex-col gap-4 items-center">
              <div className="flex-shrink-0 w-[130px] h-[130px] flex items-center justify-center">
                {/* Иконка 2 */}
                <img
                  src="/icons/business-2.svg"
                  alt="icon"
                  className="w-[130px] h-[130px] object-contain"
                />
              </div>
              <p className="opacity-80 text-sm md:text-base">
                Всі підприємства різні. Їх потреби теж різні. Тому універсального рішення не існує.
                Для кожного проєкту ми готуємо індивідуальне рішення, що зможе покрити від 10 до 30%
                потреб електроенергії.
              </p>
            </div>
          </div>
        </div>

        {/* Правый блок с фото */}
        <div className="relative w-full h-72 md:h-[400px] rounded-xl overflow-hidden">
          <img
            src="/images/business-photo.jpg"
            alt="Business Solar"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
      </div>
    </section>
  );
}
