// components/Stages.js

export default function StagesBusiness() {
  const stagesData = [
    {
      number: '01',
      title: 'Аудит енергоспоживання',
      description:
        'За допомогою спеціального обладнання ми проводимо повний аудит внутрішнього споживання електроенергії.',
    },
    {
      number: '02',
      title: 'Проєктування сонячної електростанції',
      description:
        'На основі аудиту енергоспоживання та бюджету ми переходимо до створення прототипу. На цьому етапі ми проектуємо вашу станцію, прораховуємо окупність обладнання.',
    },
    {
      number: '03',
      title: 'Підписання договору',
      description:
        'Узгоджуємо терміни реалізації проєкту, здійснюється оплата та умови ведення сервісного обслуговування сонячної електростанції.',
    },
    {
      number: '04',
      title: 'Інсталяція',
      description:
        'Після затвердження проекту та його оплати, монтажна бригада встановлює СЕС. Інженери SOLAR FAMILY налаштовують систему та підключають до моніторингу.',
    },
    {
      number: '05',
      title: 'Інсталяція',
      description:
        'Після затвердження проекту та його оплати, монтажна бригада встановлює СЕС. Інженери SOLAR FAMILY налаштовують систему та підключають до моніторингу.',
    },
  ];

  return (
    <div className="container mx-auto py-6 sm:py-8 lg:py-10 px-6 sm:px-8 lg:px-10 text-white">
      <div>
        <h2 className="text-xl md:text-5xl font-light text-left mb-12">ЕТАПИ СПІВПРАЦІ</h2>
        <div className="space-y-12">
          {stagesData.map((stage, index) => (
            <div
              key={index}
              className="sm:grid sm:grid-cols-6 gap-4 border-b border-gray-700 text-white pb-8"
            >
              <div className="col-span-1 flex justify-left items-start pb-4 sm:pb-0">
                <div className="text-base font-light border px-7 py-1 rounded-full">
                  {stage.number}
                </div>
              </div>
              <div className="col-span-2 text-base font-normal items-center pb-4 sm:pb-0">
                <h3>{stage.title}</h3>
              </div>
              <div className="col-span-3  text-base font-normal items-center pb-4 sm:pb-0">
                <p>{stage.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
