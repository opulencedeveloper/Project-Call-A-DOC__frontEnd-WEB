import { useRef, useState } from "react";

import Link from "next/link";
import Image from "next/image";

import { useSelector } from "react-redux";

import userInputValidator from "@/hooks/user-input-validator";
import useHttp from "@/hooks/use-http";

const validateEmail = (email) => {
  var re = /\S+@\S+\.\S+/;
  return re.test(email);
};


const SignUpWithEmail = (props) => {
  const [isSubmit, setIsSubmit] = useState(false);
  const [emailSubmit, setEmailSubmit] = useState(false);
  const [otpError, setOtpError ] = useState();
  const otpInputRef = useRef()
  const phoneNoObj = useSelector((state) => state.signUp);
  let emailVerifybuttonText = "Continue with email";
  let createAccountbuttonText = "Create your Account";
  let buttonActive = false;

  const {
    emailValue,
    emailIsValid,
    emailHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
  } = userInputValidator(validateEmail);

  const { isLoading, error, sendRequest: validation } = useHttp();

  if (isLoading) {
    emailVerifybuttonText = "Please Wait...";
    createAccountbuttonText = "Please Wait...";
    buttonActive = true;
  }

  const myResponse = (res) => {
    console.log("email response", res);
    const { status, message } = res;
    if (status === "success") {
      if(message === "Email successfully Verified.") {
        props.startSignUpHandler();
        return;
      }
      setIsSubmit(true);
      return;
    }
console.log("email message", message);
    
  };

  const verifyEmailHandler = () => {
    if (!emailIsValid) {
      setEmailSubmit(!emailIsValid);
      return;
    }
    validation(
      {
        url: "register",
        method: "POST",
        body: { email: emailValue },
      },
      myResponse
    );
  };


  const createAccountHandler = (event) => {
    event.preventDefault();
    const otpValue = otpInputRef.current.value;
    if(otpValue === ""){
      setOtpError("Please Input OTP");
      return;
    }
    setOtpError("");
    validation(
      {
        url: "verifyemail",
        method: "POST",
        body: { email: emailValue,  otp: otpValue },
      },
      myResponse
    );

  };

  const emailClasses =
    emailHasError || (emailValue === "" && emailSubmit) ? "block" : "hidden";

  return (
    <div className="flex flex-col md:px-0 xl:px-20 justify-center 2xl:px-40">
      <p className="font-medium text-3xl pb-8">Sign up</p>
      {(error || otpError) && (
        <div className="bg-custom11 rounded-md text-custom1 font-semibold text-sm py-3 px-10">
          <p className="text-center">{error || otpError}</p>
        </div>
      )}
      <div className="flex flex-col pb-3">
        <label htmlFor="email">Email</label>
        <div className="border flex border-ash rounded-lg my-3">
          <div className="p-4">
            <Image
              src="/images/icon/email.svg"
              alt="email-icon"
              className="w-4 h-4"
              width={12}
              height={12}
            />
          </div>
          <input
            type="email"
            id="email"
            value={emailValue}
            onBlur={emailBlurHandler}
            onChange={emailChangeHandler}
            className="py-3 mr-1 w-full focus:outline-none"
            placeholder="Email"
          />{" "}
        </div>
        <p className={`${emailClasses} -mt-2 mb-2 text-sm text-custom11`}>
          Invalid Email
        </p>
        {!isSubmit && (
          <button
            type="button"
            onClick={verifyEmailHandler}
            disabled={buttonActive}
            className="border py-3.5 rounded-lg bg-custom text-custom1 flex justify-center items-center space-x-3"
          >
            <p className="font-medium">{emailVerifybuttonText}</p>
          </button>
        )}

        {isSubmit && (
          <form 
          onSubmit={createAccountHandler}
          className="px-2 border-b border-ash pb-9 pt-4 space-y-3 mb-9 text-xs md:text-sm">
            <p className="text-center text-ash2 pb-7">
              We just sent you a temporary sign up code. Please check your email
              inbox and paste it below
            </p>
            <label htmlFor="otp" className="font-semibold">
              OTP
            </label>

            <input
              type="text"
              ref={otpInputRef}
              name="otp"
              className="w-full border flex p-4 items-center border-ash rounded-lg my-3 text-center focus:outline-none"
              placeholder="xxx xxx"
            />

            <button
              type="submit"
              disabled={buttonActive}
              className="border border-custom py-4 rounded-lg w-full font-semibold text-custom text-base"
            >
              {createAccountbuttonText}
            </button>
          </form>
        )}

        {!isSubmit && (
          <div className="flex justify-center items-center space-x-3 px-2 border-b border-ash p-5 mb-5 text-xs md:text-sm">
            <p>Already have an account yet?</p>
            <Link href="#" className="text-custom font-semibold">
              Sign In
            </Link>
          </div>
        )}

        <button
          type="submit"
          className="border py-2.5 bg-custom12 mb-4 rounded-lg flex justify-center items-center space-x-3"
        >
          <Image
            src="./images/icon/apple.svg"
            alt="apple-icon"
            className="w-6 h-6"
            height={48}
            width={48}
          />
          <p className="font-semibold text-custom1 pt-1">Sign In with Apple</p>
        </button>
        <button
          type="submit"
          className="border py-2.5 rounded-lg flex justify-center items-center space-x-3"
        >
          <Image
            src="./images/icon/google-logo.svg"
            alt="google-logo"
            className="w-6 h-6"
            height={48}
            width={48}
          />
          <p className="font-semibold pt-1">Sign In with Google</p>
        </button>
      </div>
      <div className="flex text-xs space-x-0.5 flex-wrap justify-center md:text-sm">
        <p>By signing in you agree to our </p>
        <Link href="#" className="text-custom ">
          Terms
        </Link>
        <p>and</p>
        <Link href="#" className="text-custom ">
          Conditions
        </Link>
      </div>
    </div>
  );
};

export default SignUpWithEmail;
