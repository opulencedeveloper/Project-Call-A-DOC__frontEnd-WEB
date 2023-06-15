import { useState } from "react";

import Image from "next/image";
import Link from "next/link";

import userInputvalidator from "@/hooks/userInputvalidator";
import useHttp from "@/hooks/useHttp";

import OtpInput from "../UI/OtpInput";

const validateEmail = (email) => {
  var re = /\S+@\S+\.\S+/;
  return re.test(email);
};

const SignInAuth = () => {
  const [isChecked, setIsChecked] = useState(true);
  const [emailSubmit, setEmailSubmit] = useState(false);
  const [showOTPInput, setShowOTPInput] = useState(false);

  const {
    emailValue,
    emailIsValid,
    emailHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
  } = userInputvalidator(validateEmail);

  const { isLoading, error, sendRequest: OTPrequest } = useHttp();

  const checkHandler = (event) => {
    setIsChecked(event.target.checked);
  };

  const myResponse = (res) => {
    const { status, message } = res;
    if (status === "success" && message === "OTP is successfully sent to you") {
      setShowOTPInput(true);
    }
  };

  const verifyEmailHandler = () => {
    if (!emailIsValid) {
      setEmailSubmit(!emailIsValid);
      return;
    }
    OTPrequest(
      {
        url: "auth/emailotp",
        method: "POST",
        body: { email: emailValue },
      },
      myResponse
    );
  };

  const emailClasses =
    emailHasError || (emailValue === "" && emailSubmit) ? "block" : "hidden";
  return (
    <section className="flex h-screen">
      {showOTPInput && <OtpInput isChecked={isChecked} />}
      {/* SECTION-1 */}
      <div className="w-full h-full px-5 pt-10 space-y-20 md:w-1/2 md:px-10 md:overflow-y-auto">
        <div>
          <Image
            src="/images/logo/logo2.svg"
            alt="call-a-doc-logo-two"
            className="w-auto h-auto"
            width={64}
            height={61}
          />
        </div>
        <div className="flex flex-col md:px-0 xl:px-20 justify-center 2xl:px-40">
          <p className="pb-2 text-lg">Pick up from where you left off</p>
          <p className="font-medium text-4xl mb-14">Welcome back</p>
          {error && (
            <div className="bg-custom11 rounded-md text-custom1 font-semibold text-sm py-3 px-10">
              <p className="text-center">{error}</p>
            </div>
          )}
          <form className="flex flex-col pb-3">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Email"
              className="border border-ash rounded-lg p-3 my-2 "
              value={emailValue}
              onBlur={emailBlurHandler}
              onChange={emailChangeHandler}
            />
            <p className={`${emailClasses} -mt-2 mb-2 text-sm text-custom11`}>
              Invalid Email
            </p>
            <div className=" flex justify-between px-2 border-b border-ash pb-10 mb-10 text-xs md:text-sm">
              <div className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  checked={isChecked}
                  onChange={checkHandler}
                />
                <p className="mt-0.5">Remember me?</p>
              </div>
              <button className="text-custom">Forgot password?</button>
            </div>
            <button
              type="button"
              disabled={isLoading}
              onClick={verifyEmailHandler}
              className="bg-custom font-medium text-custom1 py-3.5 rounded-lg mb-5 "
            >
              {isLoading ? "Please Wait..." : "Sign In"}
            </button>
            <button
              type="submit"
              className="border py-3.5 rounded-lg flex justify-center items-center space-x-3"
            >
              <Image
                src="/images/icon/google-icon.svg"
                alt="google-icon"
                className="w-6 h-6"
                height={48}
                width={48}
              />
              <p className="font-semibold">Sign In with Google</p>
            </button>
          </form>
          <div className="flex text-xs space-x-3 justify-center pb-5 md:pb-0 md:text-sm">
            <p>Don't have an account yet?</p>
            <Link href="/signup" className="text-custom font-semibold">
              Register
            </Link>
          </div>
        </div>
      </div>

      <div className="w-1/2 overflow-y-hidden h-full bg-custom hidden md:flex justify-center items-center">
        <Image
          src="/images/login-image.svg"
          alt="drugs"
          className="w-auto h-auto"
          width={960}
          height={1080}
        />
      </div>
    </section>
  );
};

export default SignInAuth;
