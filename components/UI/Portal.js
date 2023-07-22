import { useEffect, useState } from "react";
import ReactDOM from "react-dom";

const Portal = ({children}) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted || typeof document === "undefined") {
    return null;
  }

  return ReactDOM.createPortal(
    <div className="relative z-50">{children}</div>,
    document.getElementById("navigation")
  );
};

export default Portal;
