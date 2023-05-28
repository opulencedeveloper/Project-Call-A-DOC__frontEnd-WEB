import Image from "next/image";
import { useState } from "react";
import SignUpJourney from "../sign-up/SignUpJourney";
import SignUpWithEmail from "../sign-up/SigupWithEmail";

const SignUpAuth = () => {
  const [isSubmit, setIsSubmit] = useState(false);
  const [startSignUp, setStartSignUp] = useState(false);

  const signUpHandler = () => {
    setIsSubmit(true);
  };

  const startSignUpHandler = () => {
    setStartSignUp(true);
  };

  return (
    <section className="flex justify-center h-screen">
      {/* SECTION-1 */}
      <div className="w-full p-10 space-y-20 md:w-1/2">
        <div>
          <Image
            src="/images/logo/logo2.svg"
            alt="call-a-doc-logo-two"
            className="w-auto h-auto"
            width={64}
            height={61}
          />
        </div>
        {!startSignUp && <SignUpWithEmail startSignUpHandler={startSignUpHandler} />}
        {startSignUp && <SignUpJourney />}
      </div>

      {/* SECTION-2 */}
      <div className="w-1/2 h-full px-10 hidden md:flex">
      <Image
            src="/images/sign-up-doctor.svg"
            alt="drugs"
            className="w-auto h-auto"
            width={960}
            height={1080}
          />
      </div>
    </section>
  );
};

export default SignUpAuth;
