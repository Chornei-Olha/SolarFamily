import Image from 'next/image';

export default function EnergySection() {
  return (
    <section className="container mx-auto py-6 sm:py-8 lg:py-10 px-6 sm:px-8 lg:px-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        {/* Левая картинка */}
        <div className="relative w-full h-[300px] md:h-[400px]">
          <Image
            src="/images/building-1.png"
            alt="Будівля"
            fill
            className="object-cover rounded-lg"
          />
          <div className="absolute inset-0 bg-black/40 rounded-lg" />
        </div>

        {/* Текст справа */}
        <div>
          <h2 className="text-white text-xl md:text-5xl font-semibold mb-4">
            Безперебійна енергія — ваша стратегічна перевага.
          </h2>
          <p className="text-gray-200 text-base md:text-xl leading-relaxed">
            Накопичувачі енергії (energy storage) — це акумуляторні системи, що зберігають надлишок
            електроенергії, виробленої сонячними панелями, для подальшого використання в періоди
            пікового навантаження або при відсутності світла.
          </p>
        </div>
      </div>
    </section>
  );
}
