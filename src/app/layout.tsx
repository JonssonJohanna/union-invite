import Header from './layouts/Header';
import Footer from './layouts/Footer';
import './globals.css';
import Head from 'next/head';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <head>
        <link rel='icon' href='/logo.png' type='image/png' />
        {/* Om du behöver fler favicon-varianter, lägg till dem här */}
      </head>
      <body
        style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
