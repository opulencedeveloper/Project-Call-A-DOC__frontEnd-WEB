import { useContext, useRef, useState } from "react";

import Image from "next/image";

import { useDispatch, useSelector } from "react-redux";

import BackDrop from "./BackDrop";
import useHttp from "@/hooks/useHttp";
import { signupActions } from "../../store/redux-store/signup-slice";
import { useRouter } from "next/router";
import AuthContext from "@/store/context-store/auth-context";
import { userDataActions } from "@/store/redux-store/userData-slice";
const { addUserData } = userDataActions;

function removeHtmlTags(data) {
  const val = data || "";
  return val.replace(/<[^>]+>/g, "");
}

const OtpInput = (props) => {
  const { isLoading, error, sendRequest: validation } = useHttp();
  const dispatch = useDispatch();
  const router = useRouter();
  const emailObject = useSelector((state) => state.signUp);
  const authCtx = useContext(AuthContext);
  const { isChecked } = props;
  const inputRefs = [
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
  ];
  const [inputValues, setInputValues] = useState([""]);
  const {closeOTPInputHandler} = props;
  const inputStyle =
    "w-10 h-9 bg-ash rounded-md text-center font-bold outline-none focus:border focus:border-custom md:w-[64px] md:h-[60px]";

  const handlePaste = (e) => {
    const pastedText = e.clipboardData.getData("text");
    const separatedStrings = pastedText.split("");
    setInputValues([]);
    setInputValues(separatedStrings);
  };

  const errorMessage = removeHtmlTags(error);

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
    }
  };

  const myResponse = (res) => {
    const { status, message, role, token } = res;

    if (status === "success" && message === "Otp Verification Successful.") {
      const targetRoute =
        role === "1" ? "/patient-dashboard" : "/doctor-dashboard";
      authCtx.login(token, isChecked);
      if (role === "1") {
        localStorage.setItem("userType", "patient");
      } else {
        localStorage.setItem("userType", "doctor");
      }
      dispatch(signupActions.resetState());
      router.replace(targetRoute);
    }
  };

  const validateOTPHandler = () => {
    const convertedToArrayofInt = inputValues.map((num) => +num);
    const otp = parseInt(convertedToArrayofInt.join(""));
    console.log(otp)
    validation(
      {
        url: "auth/verifyotp",
        method: "POST",
        body: { email: emailObject.email, otp: otp },
      },
      myResponse
    );
  };

  return (
    <BackDrop>
      <div className="relative flex flex-col animateSlideUp h-[350px] w-[93%] overflow-x-auto items-center justify-center bg-custom1 space-y-4 p-5 py-7 rounded-2xl shadow-custom-shadow md:h-[535px] md:w-[680px] md:p-14 md:py-auto  md:space-y-8">
       <div className="absolute right-7 top-7 h-[18px] w-[18px]"><Image
          src="/images/icon/close.svg"
          alt="close-icon"
          className="w-full h-full"
          priority
          loading="eager"
          width={18.88}
          height={18.88}
         onClick={closeOTPInputHandler}
        /></div>
        <p className="text-lg md:text-[31px] font-medium">
          An OTP was sent to your email
        </p>
        <p className="text-xs text-ash2 md:text-[20px]">
          Input the six digits number
        </p>
        <form className="flex space-x-2 md:space-x-3 ">
          <input
            ref={inputRefs[0]}
            onPaste={handlePaste}
            type="number"
            maxLength={1}
            onInput={(e) => {
              e.target.value = e.target.value.slice(0, 1); // Truncate input to first digit
            }}
            value={inputValues[0]}
            onChange={(e) => handleInputChange(e, 0)}
            className={inputStyle}
          />
          <input
            ref={inputRefs[1]}
            onPaste={handlePaste}
            type="number"
            maxLength={1}
            value={inputValues[1]}
            onInput={(e) => {
              e.target.value = e.target.value.slice(0, 1); // Truncate input to first digit
            }}
            onChange={(e) => handleInputChange(e, 1)}
            className={inputStyle}
          />
          <input
            ref={inputRefs[2]}
            onPaste={handlePaste}
            type="number"
            maxLength={1}
            value={inputValues[2]}
            onInput={(e) => {
              e.target.value = e.target.value.slice(0, 1); // Truncate input to first digit
            }}
            onChange={(e) => handleInputChange(e, 2)}
            className={inputStyle}
          />
          <input
            ref={inputRefs[3]}
            onPaste={handlePaste}
            type="number"
            maxLength={1}
            value={inputValues[3]}
            onInput={(e) => {
              e.target.value = e.target.value.slice(0, 1); // Truncate input to first digit
            }}
            onChange={(e) => handleInputChange(e, 3)}
            className={inputStyle}
          />
          <input
            ref={inputRefs[4]}
            onPaste={handlePaste}
            type="number"
            maxLength={1}
            value={inputValues[4]}
            onInput={(e) => {
              e.target.value = e.target.value.slice(0, 1); // Truncate input to first digit
            }}
            onChange={(e) => handleInputChange(e, 4)}
            className={inputStyle}
          />
          <input
            ref={inputRefs[5]}
            onPaste={handlePaste}
            type="number"
            maxLength={1}
            value={inputValues[5]}
            onInput={(e) => {
              e.target.value = e.target.value.slice(0, 1); // Truncate input to first digit
            }}
            onChange={(e) => handleInputChange(e, 5)}
            className={inputStyle}
          />
        </form>
        {errorMessage && (
          <div className="bg-custom11 rounded-md text-custom1 font-semibold text-sm py-3 px-5 md:px-10">
            <p>{errorMessage.trim()}</p>
          </div>
        )}
        <div className="flex space-x-2 text-[10px] md:text-[13px]">
          <p>If you did't receive a code </p>
          <button
            onClick={validateOTPHandler}
            className="flex items-center space-x-2 text-custom"
          >
            <p>Resend code</p>{" "}
            <Image
              src="/images/icon/refresh.svg"
              alt="refresh-icon"
              className="w-3 h-3"
              width={12}
              height={12}
            />
          </button>
        </div>
        <button
          type="button"
          disabled={isLoading}
          onClick={validateOTPHandler}
          className="py-2 px-8 text-custom1 bg-custom10 rounded-full text-base md:text-[20px] md:py-4 md:px-12"
        >
          {isLoading ? "Please wait..." : "Submit"}
        </button>
      </div>
    </BackDrop>
  );
};

export default OtpInput;
