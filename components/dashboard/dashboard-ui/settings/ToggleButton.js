let buttonColor = "bg-ash6";

const ToggleButton = (props) => {
  const { isToggle, toggleButton, id } = props;
  buttonColor = isToggle ? "bg-custom" : "bg-ash6";

  const check = () => {
    console.log("clicked")
  }

  return (
    <div className="flex justify-end items-center mt-5">
      <label
        onClick={null}
        htmlFor={id}
        className="flex justify-end items-center cursor-pointer w-min"
      >
        <div className="relative">
          <input
            type="checkbox"
            name={id}
            id={id}
            className="hidden"
            checked={isToggle}
            onChange={toggleButton}
          />
          <div className={`${buttonColor} w-10 h-6 rounded-full`}></div>
          <div
            className={`absolute left-1 top-1 bg-custom1 w-4 h-4 rounded-full transition ${
              !isToggle ? "translate-x-full" : "translate-x-0"
            }`}
          ></div>
        </div>
      </label>
    </div>
  );
};

export default ToggleButton;
