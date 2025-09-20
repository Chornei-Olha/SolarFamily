// components/Stages.js

export default function StagesAbout() {
  const stagesData = [
    {
      number: '01',
      title: 'Виявлення потреб',
      description: 'Знайомство з клієнтом, виявлення його потреб та запитів',
    },
    {
      number: '02',
      title: 'Затвердження',
      description:
        'Підготовка проєкта під ключ,згідно з Вашими потребами та затвердження його на презентації',
    },
    {
      number: '03',
      title: 'Монтаж',
      description: 'Професійний монтаж проекту та підключення його до мережі',
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
              <div className="col-span-2 text-base md:text-4xl font-normal items-center pb-4 sm:pb-0">
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
