import { Montserrat } from "next/font/google";

import { Provider } from "react-redux";

import store from "@/store/redux-store";

import { AuthContextProvider } from "@/store/context-store/auth-context";

import "@/styles/globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export default function App({ Component, pageProps }) {
  return (
    <AuthContextProvider>
      <Provider store={store}>
        <main className={`${montserrat.variable} font-montserrat`}>
          <Component {...pageProps} />
        </main>
      </Provider>
   </AuthContextProvider>
  );
}
