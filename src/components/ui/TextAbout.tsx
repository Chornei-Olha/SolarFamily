'use client';

interface Card {
  id: number;
  title: string;
  description: string;
}

export default function TextAbout() {
  const data: Card[] = [
    {
      id: 1,
      title: '13+ років досвіду',
      description:
        'Експертність перевірена часом! Впродовж 13 років нами інстальовано більше 1500 СЕС',
    },
    {
      id: 2,
      title: 'Партнери',
      description: 'Прямий постачальник провідного обладнання для СЕС.',
    },
    {
      id: 3,
      title: 'Монтажна бригада',
      description: 'Штатна монтажна бригада — вузькопрофільні спеціалісти з інсталяції СЕС',
    },
    {
      id: 4,
      title: 'Сервіс',
      description:
        'Наша компанія закриває всі Ваші питання: від підбору обладнання до обслуговування станції',
    },
    {
      id: 5,
      title: 'Моніторинг',
      description: 'Спеціалісти відстежують ефективність роботи станції впродовж її експлуатації',
    },
    {
      id: 6,
      title: 'Клінінг',
      description:
        'Професійний клінінг СЕС покращує генерацію енергії до 20% та продовжує термін експлуатації',
    },
  ];

  return (
    <div className="container mx-auto py-6 sm:py-8 md:py-14 lg:py-16 px-6 sm:px-8 lg:px-10 text-white">
      {/* Заголовок */}
      <h2 className="text-lg sm:text-xl lg:text-2xl font-normal max-w-4xl mb-10 mx-auto text-center">
        Ви все ще вагаєтесь, чи варто співпрацювати з нами? Перегляньте причини, чому варто обрати
        саме нас серед інших компаній!
      </h2>

      {/* Карточки */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {data.map((item, index) => {
          const isLeftColumn = index % 2 === 0; // четные — левая колонка, нечетные — правая
          const borderGradient = isLeftColumn
            ? 'linear-gradient(to right, #ffffff, #7F7F7F 20%, #000000 100%)'
            : 'linear-gradient(to left, #ffffff, #7F7F7F 20%, #000000 100%)';

          return (
            <div
              key={item.id}
              className="rounded-[12px] p-5 w-full mx-auto text-white text-sm md:text-base lg:text-lg border-[1px]"
              style={{
                borderImage: `${borderGradient} 1`,
                borderStyle: 'solid',
                borderWidth: '1px',
              }}
            >
              <h3 className="font-semibold mb-2">{item.title}</h3>
              <p>{item.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
