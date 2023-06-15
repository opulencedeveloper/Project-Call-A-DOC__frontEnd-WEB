import Image from "next/image";
import { useState } from "react";
import SignUpJourney from "../signup/SignUpJourney";
import SignUpWithEmail from "../signup/SigupWithEmail";
import MedicalDetails from "../signup/MedicalDetails.";

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
    <section className="flex justify-center h-screen items-center">
      {/* SECTION-1 */}
      <div className="w-full h-full px-5 space-y-20 mb-5 md:w-1/2 md:p-10">
        <div>
          <Image
            src="/images/logo/logo2.svg"
            alt="call-a-doc-logo-two"
            className="w-auto h-auto"
            loading="eager"
            width={64}
            height={61}
          />
        </div>
        {!startSignUp && (
          <SignUpWithEmail startSignUpHandler={startSignUpHandler} />
        )}
        {startSignUp && <SignUpJourney />}
      </div>

      {/* SECTION-2 */}
      <div className="w-1/2 h-full px-10 hidden md:flex">
        <Image
          src="/images/sign-up-doctor.svg"
          alt="doctor image"
          className="w-auto h-auto"
          width={960}
          height={1080}
        />
      </div>
    </section>
  );
};

export default SignUpAuth;
