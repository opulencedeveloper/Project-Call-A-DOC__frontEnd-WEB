import { useState } from "react";

import Image from "next/image";
import Link from "next/link";

import OtpInput from "../UI/OtpInput";

const SignInAuth = () => {
  const [isChecked, setIsChecked] = useState();

  const checkHandler = (event) => {
    setIsChecked(event.target.checked);
    console.log(isChecked);
  };

  return (
    <section className="flex justify-center m-auto w-screen h-screen">
        <OtpInput />
      <div className="w-full md:w-1/2 p-10 space-y-36 overflow-auto">
        <div>
          <Image
            src="/images/logo/logo2.svg"
            alt="call-a-doc-logo-two"
            className="w-16 h-14"
            width={64}
            height={61}
          />
        </div>
        <div className="flex flex-col md:px-0 lg:px-20 justify-center 2xl:px-40">
          <p className="pb-2">Pick up from where you left</p>
          <p className="font-medium text-3xl pb-10">Welcome back</p>
          <form className="flex flex-col pb-3">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              placeholder="Email"
              className="border border-ash rounded-lg p-3 my-2 "
            />
            <div className=" flex justify-between px-2 border-b border-ash pb-10 mb-10 text-xs md:text-sm">
              <div className="flex items-center space-x-3">
                <input
                  className="form-checkbox text-gray-600 h-4"
                  type="checkbox"
                  checked={isChecked}
                  onChange={checkHandler}
                />
                <p className="">Remember me?</p>
              </div>
              <button className="text-custom">Forgot password?</button>
            </div>
            <button
              type="submit"
              className="bg-custom font-medium text-custom1 py-3.5 rounded-lg mb-5 "
            >
              Sign In
            </button>
            <button
              type="submit"
              className="border py-3.5 rounded-lg flex justify-center items-center space-x-3"
            >
              <Image
                src="./images/icon/google-logo.svg"
                alt="google-logo"
                className="w-6 h-6"
                height={48}
                width={48}
              />
              <p className="font-semibold">Sign In with Google</p>
            </button>
          </form>
          <div className="flex text-xs space-x-3 justify-center md:text-sm">
            <p>Don't have an account yet?</p>
            <Link href="#" className="text-custom font-semibold">
              Register
            </Link>
          </div>
        </div>






      </div>

      <div className="w-1/2 bg-custom hidden md:block">
       pp
      
        {/* <Image
            src="./images/drugs.svg"
            alt="drugs"
            fill
    className="object-cover"
    style={{ objectFit: 'cover' }}
            // width={960}
            // height={1080}
          /> */}
      </div>
    </section>
  );
};

export default SignInAuth;
