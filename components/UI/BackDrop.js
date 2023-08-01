import { useEffect } from "react";
import Portal from "./Portal";

const BackDrop = (props) => {
  useEffect(() => {
    document.body.classList.add("overflow-hidden");
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, []);

  return (
    <Portal>
      <div className="fixed inset-0 flex items-center justify-center backdrop-filter backdrop-blur-sm">
        {props.children}
      </div>{" "}
    </Portal>
  );
};

export default BackDrop;
