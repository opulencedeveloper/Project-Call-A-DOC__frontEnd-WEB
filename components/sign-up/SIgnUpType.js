import React, { useMemo, useState } from "react";

import Image from "next/image";

let style1 = "bg-custom text-custom1";
let style2 = "shadow-md text-black";
let radio1 = "/images/icon/radio-on.svg";
let radio2 = "/images/icon/radio-off.svg";

const SignUpType = (props) => {
  const [selection, setSelection] = useState("patient");
console.log("signuptype")
  const signUpTypeButtonHandler = () => {
    props.signUpNextStep("2");
  };

  const doctorHandler = () => {
    setSelection("doctor");
  };
  const patientHandler = () => {
    setSelection("patient");
  };

  if (selection === "patient") {
    style1 = "bg-custom text-custom1";
    style2 = "shadow-md text-black";
    radio1 = "/images/icon/radio-on.svg";
    radio2 = "/images/icon/radio-off.svg";
  }

  if (selection === "doctor") {
    style1 = "shadow-md text-black";
    style2 = "bg-custom text-custom1"; 
    radio1 = "/images/icon/radio-off.svg";
    radio2 = "/images/icon/radio-on.svg";
  }
  return (
    <>
      <p className="text-lg font-medium">Let's get to know you</p>

      <div
        onClick={patientHandler}
        className={`${style1} flex items-center space-x-5 p-8 rounded-lg mb-4 mt-6`}
      >
        <div>
          <Image
            src={radio1}
            alt="call-a-doc-logo-two"
            className="w-10 h-10"
            width={24}
            height={21}
          />
        </div>

        <div>
          <p className="font-semibold text-xl text-medium">I'm a Patient</p>
          <p className="text-base">
            Get access to over 1000+ specialist to ensure you have a sound
            health
          </p>
        </div>
      </div>

      <div
        onClick={doctorHandler}
        className={`${style2} flex items-center space-x-5 p-8 rounded-lg  mb-10`}
      >
        <div>
          <Image
            src={radio2}
            alt="call-a-doc-logo-two"
            className="w-10 h-10"
            width={24}
            height={21}
          />
        </div>

        <div>
          <p className="font-semibold text-xl text-medium">I'm a Doctor</p>
          <p className="text-base">
            Meet with patients and provide the required solution to their health
            problems
          </p>
        </div>
      </div>

      <div className="flex justify-between text-xs xl:text-base">
        <div className="flex items-center">
          <p className="pr-2">Already have an accout?</p>
          <button className="text-custom font-medium"> Sign in</button>
        </div>
        <div>
          <button
            onClick={signUpTypeButtonHandler}
            className="bg-custom flex space-x-3 items-center py-2 px-3 text-custom1 rounded-md"
          >
            <p className="text-sm">Next</p>
            <Image
              src="/images/icon/angle-right-white.svg"
              alt="doctor1"
              className="w-auto h-auto"
              width={7.71}
              height={14}
            />
          </button>
        </div>
      </div>
    </>
  );
};

export default React.memo(SignUpType);
