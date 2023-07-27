import { useState } from "react";
let buttonColor = "bg-ash6";

const ToggleButton = () => {
  const [buttonState, setButtonState] = useState(true);

  const toggleButton = () => {
    setButtonState((prevState) => !prevState);
    buttonColor = buttonState ? "bg-custom" : "bg-ash6";
  };
  return (
    <div className="flex justify-end items-center mt-5">
      <label
        onClick={null}
        htmlFor="toggle-button"
        className="flex justify-end items-center cursor-pointer w-min"
      >
        <div className="relative">
          <input
            type="checkbox"
            id="toggle-button"
            className="hidden"
            checked={buttonState}
            onChange={toggleButton}
          />
          <div className={`${buttonColor} w-10 h-6 rounded-full`}></div>
          <div
            className={`absolute left-1 top-1 bg-custom1 w-4 h-4 rounded-full transition ${
              !buttonState ? "translate-x-full" : "translate-x-0"
            }`}
          ></div>
        </div>
      </label>
    </div>
  );
};

export default ToggleButton