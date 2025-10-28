'use client';
import { ArrowUpRight } from 'lucide-react';

export default function VacanciesSection() {
  const vacancies = [
    {
      title: 'Комірник, комплектувальник на склад',
      link: 'https://www.work.ua/', // замени на реальную ссылку
    },
    {
      title: 'Менеджер з продажу продукції',
      link: 'https://www.work.ua/', // замени на реальную ссылку
    },
  ];

  return (
    <section className="container mx-auto py-6 sm:py-8 md:py-14 lg:py-16 px-6 sm:px-8 lg:px-10 text-white font-abel font-normal">
      <div className="max-w-4xl">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-10">Актуальні вакансії</h2>

        <div className="flex flex-col gap-10">
          {vacancies.map((job, i) => (
            <div key={i} className="flex flex-col gap-4">
              <p className="text-lg sm:text-xl font-normal">{job.title}</p>
              <a
                href={job.link}
                target="_blank"
                rel="noopener noreferrer"
                className="max-w-sm inline-flex justify-center items-center gap-2 bg-white text-black hover:bg-black hover:text-white text-sm sm:text-base font-medium px-8 py-4 transition-all duration-300"
              >
                Детальніше
                <ArrowUpRight size={18} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
