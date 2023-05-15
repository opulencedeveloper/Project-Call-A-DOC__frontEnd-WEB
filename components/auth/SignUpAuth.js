import Image from "next/image";
import { useState } from "react";
import SignUpJourney from "../sign-up/SignUpJourney";
import SignUpWithEmail from "../sign-up/SigupWithEmail";

const SignUpAuth = () => {
  const [isSubmit, setIsSubmit] = useState(false);
  const [startSignUp, setStartSignUp] = useState(false);

  const signUpHandler = () => {
    setIsSubmit(true);
    console.log("clicked");
  };

  const startSignUpHandler = () => {
    setStartSignUp(true);
    console.log("reached");
  };

  return (
    <section className="flex justify-center m-auto w-screen h-screen">
      {/* SECTION-1 */}
      <div className="w-full md:w-1/2 p-10 space-y-20 overflow-auto">
        <div>
          <Image
            src="/images/logo/logo2.svg"
            alt="call-a-doc-logo-two"
            className="w-16 h-14"
            width={64}
            height={61}
          />
        </div>
        {!startSignUp && <SignUpWithEmail startSignUpHandler={startSignUpHandler} />}
        {startSignUp && <SignUpJourney />}
      </div>

      {/* SECTION-2 */}
      <div className="w-1/2 bg-custom hidden md:block">
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
