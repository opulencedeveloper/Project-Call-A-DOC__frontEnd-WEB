import { useEffect, useState } from "react";
import ReactDOM from "react-dom";

import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
}); 

const Portal = ({children}) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted || typeof document === "undefined") {
    return null;
  }

  return ReactDOM.createPortal(
    <div className={`${montserrat.variable} font-montserrat relative z-50`}>{children}</div>,
    document.getElementById("navigation")
  );
};

export default Portal;
