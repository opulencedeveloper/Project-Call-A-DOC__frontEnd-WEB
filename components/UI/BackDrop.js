import Portal from "./Portal";

const BackDrop = (props) => {
  return (
    <Portal>
      <div className="fixed inset-0 flex items-center justify-center backdrop-filter backdrop-blur-sm">
        {props.children}
      </div>{" "}
    </Portal>
  );
};

export default BackDrop;
