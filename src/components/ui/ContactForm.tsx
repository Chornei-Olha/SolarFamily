'use client';

import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

export default function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    if (!formRef.current) return;

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!, // ID сервиса
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!, // ID шаблона
        formRef.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY! // публичный ключ
      )
      .then(
        () => {
          setLoading(false);
          setSuccess(true);
          formRef.current?.reset();
        },
        (error) => {
          console.error('EmailJS Error:', error.text);
          setLoading(false);
          setSuccess(false);
        }
      );
  };

  return (
    <div className="container mx-auto py-6 sm:py-8 md:py-14 lg:py-16 px-6 sm:px-8 lg:px-10 text-white">
      <div className=" grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Левая часть */}
        <div>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-actor font-normal mb-6">
            Потрібен унікальний проект?
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl font-actor font-normal">
            Сонячна електростанція на підприємстві дозволяє знизити або повністю мінімізувати
            споживання енергії із зовнішньої мережі
          </p>
        </div>

        {/* Правая часть (Форма) */}
        <form ref={formRef} onSubmit={sendEmail} className="flex flex-col gap-4">
          <div>
            <label htmlFor="user_name" className="block mb-2 text-base font-semibold">
              Ім’я*
            </label>
            <input
              type="text"
              id="user_name"
              name="user_name"
              required
              className="w-full p-3 rounded-md bg-black border border-gray-400 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              placeholder="Введіть Ваше Ім’я"
            />
          </div>

          <div>
            <label htmlFor="user_phone" className="block mb-2 text-base font-semibold">
              Номер телефону
            </label>
            <input
              type="tel"
              id="user_phone"
              name="user_phone"
              required
              pattern="^\+380[0-9]{9}$"
              className="w-full p-3 rounded-md bg-black border border-gray-400 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              placeholder="+380..."
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="mx-auto w-[85%] mt-9 py-3 px-6 bg-white text-black font-base font-bold hover:bg-gray-200 transition"
          >
            {loading ? 'Відправка...' : 'ЗАЛИШИТИ ЗАЯВКУ'}
          </button>

          {success && (
            <p className="text-green-400 text-sm mt-2">✅ Дякуємо! Ваша заявка відправлена.</p>
          )}
        </form>
      </div>
    </div>
  );
}
