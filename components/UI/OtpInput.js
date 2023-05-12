import Image from "next/image";
import { useRef, useState } from "react";

const OtpInput = () => {
  const inputRefs = [
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
  ];
  const [inputValues, setInputValues] = useState(["", "", "", "", "", ""]);
  const inputStyle =
    "w-10 h-9 bg-ash3 rounded-md text-center font-bold border-2 border-ash3 md:w-14 md:h-12 focus:border-custom outline-none ";

  //e is the input value
  //index in the input postion
  const handleInputChange = (e, index) => {
    const { value } = e.target;
    const newValues = [...inputValues];

    if (value.length === 1 && index < inputRefs.length - 1) {
      // If a character is entered and we're not on the last input field
      newValues[index] = value;
      setInputValues(newValues);
      inputRefs[index + 1].current.focus(); // Move focus to the next input field
    } else if (value.length === 0 && index > 0) {
      // If the input is cleared and we're not on the first input field
      newValues[index] = value;
      setInputValues(newValues);
      inputRefs[index - 1].current.focus(); // Move focus to the previous input field
    } else {
      // Otherwise, just update the input values
      newValues[index] = value;
      setInputValues(newValues);
      console.log("inputValues");
    }
  };

  const submitHandler = () => {
    if (
      inputValues[0] !== "" &&
      inputValues[1] !== "" &&
      inputValues[2] !== "" &&
      inputValues[3] !== "" &&
      inputValues[4] !== "" &&
      inputValues[5] !== ""
    ) {
      console.log(inputValues);
    }
  };

  return (
    <div className="absolute inset-0 flex items-center justify-center backdrop-filter backdrop-blur-sm" >
    <div className="flex flex-col items-center justify-center bg-custom1 space-y-4 p-3 rounded-2xl shadow-2xl md:p-14  md:space-y-8">
      <p className="text-xl md:text-3xl font-medium">An OTP was sent to your email</p>
      <p className="text-xs text-ash2 md:text-base">Input the six digits number</p>
      <form className="flex space-x-2 md:space-x-3 ">
        <input
          ref={inputRefs[0]}
          type="number"
          maxLength={1}
          value={inputValues[0]}
          onChange={(e) => handleInputChange(e, 0)}
          className={inputStyle}
        />
        <input
          ref={inputRefs[1]}
          type="number"
          maxLength={1}
          value={inputValues[1]}
          onChange={(e) => handleInputChange(e, 1)}
          className={inputStyle}
        />
        <input
          ref={inputRefs[2]}
          type="number"
          maxLength={1}
          value={inputValues[2]}
          onChange={(e) => handleInputChange(e, 2)}
          className={inputStyle}
        />
        <input
          ref={inputRefs[3]}
          type="number"
          maxLength={1}
          value={inputValues[3]}
          onChange={(e) => handleInputChange(e, 3)}
          className={inputStyle}
        />
        <input
          ref={inputRefs[4]}
          type="number"
          maxLength={1}
          value={inputValues[4]}
          onChange={(e) => handleInputChange(e, 4)}
          className={inputStyle}
        />
        <input
          ref={inputRefs[5]}
          type="number"
          maxLength={1}
          value={inputValues[5]}
          onChange={(e) => handleInputChange(e, 5)}
          className={inputStyle}
        />
      </form>
      <div className="bg-custom11 rounded-md text-custom1 font-semibold text-sm py-3 px-10">
        <p>The code you entered is wrong, try again</p>
        </div>
      <div className="flex space-x-2 text-sm md:text-base">
        <p>If you did't receive a code </p>
        <button className="flex items-center space-x-2 text-custom"><p>Receive code</p> <Image
          src="/images/icon/refresh.svg"
          className="w-3 h-3"
          width={12}
          height={12}
        /></button>
        
      </div>
      <button className="py-2 px-8 text-custom1 bg-custom10 rounded-full md:py-4 md:px-12">
        Submit
      </button>
    </div></div>
  );
};

export default OtpInput;
