import { useState } from "react";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";

import { signupActions } from "../store/signup-slice";

const SignUpType = (props) => {
  const [selection, setSelection] = useState("patient");
  const dispatchSignUp = useDispatch();
  const phoneNoObj = useSelector((state) => state.signUp);

  const signUpTypeButtonHandler = () => {
    dispatchSignUp(
      signupActions.addDetails({
        value: selection,
        id: "user-type",
      })
    );
    props.signUpNextStep("2");
  };

  const doctorHandler = () => {
    console.log(phoneNoObj)
    setSelection("doctor");
  };

  const patientHandler = () => {
    setSelection("patient");
  };

  console.log(selection)

  const isPatientSelected = selection === "patient";

  return (
    <>
      <p className="text-lg font-medium">Let's get to know you</p>
      <div
        onClick={patientHandler}
        className={`${
          isPatientSelected ? "bg-custom text-custom1" : "shadow-md text-black"
        } flex items-center space-x-5 p-8 rounded-lg mb-4 mt-6`}
      >
        <div>
          <Image
            src={
              isPatientSelected
                ? "/images/icon/radio-on.svg"
                : "/images/icon/radio-off.svg"
            }
            alt="call-a-doc-logo-two"
            className="w-10 h-10"
            width={24}
            height={21}
          />
        </div>

        <div>
          <p className="font-semibold text-xl text-medium">I'm a Patient</p>
          <p className="text-base">
            Get access to over 1000+ specialists to ensure you have sound health
          </p>
        </div>
      </div>

      <div
        onClick={doctorHandler}
        className={`${
          isPatientSelected ? "shadow-md text-black" : "bg-custom text-custom1"
        } flex items-center space-x-5 p-8 rounded-lg mb-10`}
      >
        <div>
          <Image
            src={
              isPatientSelected
                ? "/images/icon/radio-off.svg"
                : "/images/icon/radio-on.svg"
            }
            alt="call-a-doc-logo-two"
            className="w-10 h-10"
            width={24}
            height={21}
          />
        </div>

        <div>
          <p className="font-semibold text-xl text-medium">I'm a Doctor</p>
          <p className="text-base">
            Meet with patients and provide the required solutions to their health
            problems
          </p>
        </div>
      </div>

      <div className="flex justify-between text-xs xl:text-base">
        <div className="flex items-center">
          <p className="pr-2">Already have an account?</p>
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

export default SignUpType;