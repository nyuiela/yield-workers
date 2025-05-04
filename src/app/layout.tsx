import './globals.css';
import localFont from 'next/font/local';
import { metadata, viewport } from './metadata';

const clash = localFont({
  src: [
    {
      path: '../../public/fonts/ClashDisplay-Variable.ttf',
      weight: '400',
    }
  ],
  variable: '--font-clash'
});

export { metadata, viewport };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${clash.variable}`}>
      <body className="font-clash antialiased bg-transparent">
        {children}
      </body>
    </html>
  );
}
