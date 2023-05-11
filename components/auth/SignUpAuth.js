import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import OtpInput from "../UI/OtpInput";

const SignUpAuth = () => {
  const [isChecked, setIsChecked] = useState();

  const checkHandler = (event) => {
    setIsChecked(event.target.checked);
    console.log(isChecked);
  };

  return (
    <section className="relative flex items-center justify-center">
        {/* <OtpInput /> */}
      <div className="w-full h-screen p-10 space-y-36 md:w-1/2">
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
          <p className="font-medium text-3xl pb-8">Sign up</p>
          <div className="flex flex-col pb-3">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              placeholder="Email"
              className="border border-ash rounded-lg p-3 my-3 "
            /> 
             <button
              type="submit"
              className="border py-3.5 rounded-lg bg-custom text-custom1 flex justify-center items-center space-x-3"
            >
              <p className="font-medium">Continue with email</p>
            </button>
           
            <div className="flex justify-center items-center space-x-3 px-2 border-b border-ash p-4 mb-10 text-xs md:text-sm">
            <p>Already have an account yet?</p>
            <Link href="#" className="text-custom font-semibold">
              Sign In
            </Link>
            </div>
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
          <div className="flex text-xs space-x-1 justify-center md:text-sm">
            <p>By signing in you agree to our </p>
            <Link href="#" className="text-custom font-semibold">
              Terms
            </Link>
            <p>add</p>
            <Link href="#" className="text-custom font-semibold">
              Conditions
            </Link>
          </div>
        </div>
      </div>

      <div className="w-1/2 h-screen bg-custom hidden md:block">
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

export default SignUpAuth;
