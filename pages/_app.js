import { Montserrat } from "next/font/google";

import { Provider } from "react-redux";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

import store from "@/components/store";

import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <main className={`${montserrat.variable} font-montserrat`}>
        <Component {...pageProps} />
      </main>{" "}
    </Provider>
  );
}
