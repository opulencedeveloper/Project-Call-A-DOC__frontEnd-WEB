import { useState } from "react";
let buttonColor = "bg-ash6";

const TogglButton = () => {
  const [buttonState, setButtonState] = useState(true);

  const toggleButton = () => {
    setButtonState((prevState) => !prevState);
    buttonColor = buttonState ? "bg-custom-g3" : "bg-ash6";
  };
  return (
    <div className="border flex justify-end items-center">
      <div>Go Live</div>
      <label
        onClick={null}
        htmlFor="toggle-button"
        className="flex justify-end items-center cursor-pointer w-min"
      >
        <div className="relative border">
          <input
            type="checkbox"
            id="toggle-button"
            className="hidden"
            checked={buttonState}
            onChange={toggleButton}
          />
          <div className={`block ${buttonColor} w-14 h-8 rounded-full`}></div>
          <div
            className={`absolute left-1 top-1 dark:bg-white bg-custom1 w-6 h-6 rounded-full transition ${
              !buttonState ? "translate-x-full" : "translate-x-0"
            }`}
          ></div>
        </div>
      </label>
    </div>
  );
};

export default TogglButton;
