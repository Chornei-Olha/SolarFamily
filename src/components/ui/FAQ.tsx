'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

interface FaqItem {
  id: number;
  question: string;
  answer: string;
}

const faqs: FaqItem[] = [
  {
    id: 1,
    question: 'Як обрати сонячну електростанцію?',
    answer:
      'Майбутню сонячну станцію варто обирати згідно ваших цілей (економія, пасивний дохід чи енергонезалежність) та потрібних потужностей.',
  },
  {
    id: 2,
    question: 'Яка потужність станції Вам необхідна?',
    answer:
      'В залежності від Ваших потреб потужність сонячної станції може змінюватись від 5кВт до nкВт. Кожний проєкт індивідуальний.',
  },
  {
    id: 3,
    question: 'Мережева електростанція під «зелений тариф»',
    answer:
      'Зелений тариф – це стимулююча програма, запроваджена в Україні з метою підтримки розвитку відновлювальних джерел енергії.',
  },
  {
    id: 4,
    question: 'Гібридна сонячна електростанція',
    answer:
      'Гібридні станції дозволяють брати енергію одночасно з трьох джерел: сонце, електромережа та акумулятор.',
  },
];

export default function FAQ() {
  const [openId, setOpenId] = useState<number | null>(null);

  return (
    <section className="container mx-auto py-6 sm:py-8 md:py-14 lg:py-16 px-6 sm:px-8 lg:px-10">
      <h2 className="text-center text-3xl sm:text-5xl font-normal  text-white mb-10">
        Популярні запитання
      </h2>

      <div className="flex flex-col divide-y divide-gray-700">
        {faqs.map((item) => {
          const isOpen = openId === item.id;
          return (
            <div
              key={item.id}
              className="flex flex-col md:flex-row md:items-center justify-between py-4"
            >
              {/* Вопрос */}
              <button
                onClick={() => setOpenId(isOpen ? null : item.id)}
                className="flex justify-between items-center w-full md:w-auto text-left group"
              >
                <span className="text-white text-lg md:text-2xl font-medium">{item.question}</span>
                <ChevronRight
                  className={`ml-2 h-6 w-6 text-gray-300 transition-transform duration-300 ${
                    isOpen ? 'rotate-90' : 'rotate-0'
                  }`}
                />
              </button>

              {/* Ответ */}
              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ opacity: 0, x: 30, height: 0 }}
                    animate={{ opacity: 1, x: 0, height: 'auto' }}
                    exit={{ opacity: 0, x: 30, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden md:pl-10 mt-3 md:mt-0"
                  >
                    <p className="text-white text-sm md:text-lg font-normal max-w-3xl">
                      {item.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
  );
}
