import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
})


import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <main className={`${montserrat.variable} font-montserrat`}>
      <Component {...pageProps} />
     </main>
  );
}
