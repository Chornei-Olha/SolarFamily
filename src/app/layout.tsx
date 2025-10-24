import React from 'react';
import '../styles/index.css';
import { Actor, Abel, Poppins } from 'next/font/google';

// Імпорт шрифтів
const actor = Actor({ subsets: ['latin'], weight: '400' });
const abel = Abel({ subsets: ['latin'], weight: '400' });
const poppins = Poppins({ subsets: ['latin'], weight: ['400', '500', '600'] });

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export const metadata = {
  title: 'SolarFamily',
  description: 'Створюємо екологічне майбутнє вже сьогодні',
  icons: {
    icon: [{ url: '/favicon.png', type: 'image/x-icon' }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        <script
          type="module"
          src="https://static.rocket.new/rocket-web.js?_cfg=https%3A%2F%2Fbuddhasa1071back.builtwithrocket.new&_be=https%3A%2F%2Fapplication.rocket.new&_v=0.1.7"
        ></script>
      </body>
    </html>
  );
}
