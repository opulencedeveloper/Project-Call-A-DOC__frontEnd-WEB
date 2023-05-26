import { useEffect, useState } from "react";
import ReactDOM from "react-dom";

const BackDrop = (props) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted || typeof document === 'undefined') {
    return null;
  } 

  return ReactDOM.createPortal(
    <div className="fixed inset-0 flex items-center justify-center backdrop-filter backdrop-blur-sm">
      {props.children}
    </div>,
    document.getElementById("navigation")
  );
};

export default BackDrop;
