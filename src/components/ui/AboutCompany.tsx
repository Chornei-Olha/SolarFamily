'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function AboutCompany() {
  const stats = [
    {
      number: 700,
      suffix: '+',
      text: 'Реалізувала більше 700 проєктів сонячних електростанцій',
    },
    {
      number: 13,
      suffix: '+',
      text: 'Років досвіду',
    },
    {
      number: 1500,
      suffix: '+',
      text: 'Впродовж 13 років нами реалізовано понад 1500 СЕС',
    },
    {
      number: 25000,
      suffix: '+',
      text: 'Стільки грошей на сьогодні заощадили наші клієнти на електроенергії',
    },
  ];

  return (
    <section
      id="about"
      className="container mx-auto py-6 sm:py-8 md:py-14 lg:py-16 px-6 sm:px-8 lg:px-10 text-white font-normal"
    >
      <h2 className="text-2xl md:text-3xl mb-8 md:mb-16 font-abel font-normal">Про компанію</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2">
        {stats.map((item, i) => (
          <StatItem
            key={i}
            value={item.number}
            suffix={item.suffix}
            text={item.text}
            borderB={i < 2}
            borderR={i % 2 === 0}
          />
        ))}
      </div>
    </section>
  );
}

function StatItem({
  value,
  suffix,
  text,
  borderB,
  borderR,
}: {
  value: number;
  suffix: string;
  text: string;
  borderB: boolean;
  borderR: boolean;
}) {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (inView) {
      controls.start({ count: value });
    }
  }, [inView, controls, value]);

  useEffect(() => {
    if (!inView) return;

    let start = 0;
    const duration = 2000; // 2 секунды
    const stepTime = 20;
    const steps = duration / stepTime;
    const increment = value / steps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        start = value;
        clearInterval(timer);
      }
      setCount(Math.floor(start));
    }, stepTime);

    return () => clearInterval(timer);
  }, [inView, value]);

  return (
    <div
      ref={ref}
      className={`flex flex-col p-6 border-gray-500 ${
        borderB ? 'border-b' : ''
      } ${borderR ? 'border-r' : ''}`}
    >
      <motion.span
        className="text-4xl sm:text-6xl md:text-7xl lg:text-9xl mb-4 leading-none font-abel font-normal"
        animate={controls}
      >
        {count}
        {suffix}
      </motion.span>
      <p className="text-sm sm:text-base md:text-lg lg:text-xl opacity-80 leading-snug font-abel font-normal">
        {text}
      </p>
    </div>
  );
}
