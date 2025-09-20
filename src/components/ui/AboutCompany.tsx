export default function AboutCompany() {
  const stats = [
    {
      number: '700+',
      text: 'Реалізувала більше 700 проєктів сонячних електростанцій',
    },
    {
      number: '13+',
      text: 'Років досвіду',
    },
    {
      number: 'CO2+',
      text: 'Впродовж 13 років нами реалізовано понад 1500 СЕС',
    },
    {
      number: '25 000+',
      text: 'Стільки грошей на сьогодні заощадили наші клієнти на електроенергії',
    },
  ];

  return (
    <section className="container mx-auto py-6 sm:py-8 lg:py-10 px-6 sm:px-8 lg:px-10 text-white font-normal ">
      <h2 className="text-2xl md:text-3xl mb-8 md:mb-16">Про компанію</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2">
        {stats.map((item, i) => (
          <div
            key={i}
            className={`
        flex flex-col p-6
        border-gray-500
        ${i < 2 ? 'border-b' : ''}          /* горизонтальные линии */
        ${i % 2 === 0 ? 'border-r' : ''}   /* вертикальные линии */
      `}
          >
            <span className="text-4xl lg:text-[137px] mb-4 leading-none">{item.number}</span>
            <p className="text-sm lg:text-[20px] opacity-80 leading-snug">{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
