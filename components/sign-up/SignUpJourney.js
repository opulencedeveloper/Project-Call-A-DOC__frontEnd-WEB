import { use, useCallback, useState } from "react";

import Image from "next/image";

import PersonalDetails from "./PersonalDetails";
import MedicalDetails from "./MedicalDetails.";
import SecuritySetup from "./SecuritySetup";
import ProfessionalDetails from "./ProfessionalDetails";
import SignUpType from "./SignUpType";

const SignUpJourney = () => {
  const [step, setStep] = useState("1");

  const setStepHandler = useCallback((currentStep) => {
    setStep(currentStep);
  }, []);; 

  return (
    <div className="md:px-0 lg:px-20 2xl:px-40">
      <div className="mb-12 w-48">
        <Image
          src={`/images/icon/step-${step}.svg`}
          alt="step-1"
          className="w-auto h-auto"
          width={64}
          height={61}
        />
      </div>
      {step === "1" ? <SignUpType signUpNextStep={setStepHandler} /> : null}
      {step === "2" ? (
        <PersonalDetails
          personalNextStep={setStepHandler}
          personalPrevStep={setStepHandler}
        />
      ) : null}
      {step === "3" ? (
        <MedicalDetails
          medicalNextStep={setStepHandler}
          medicalPrevStep={setStepHandler}
        />
      ) : null}
      {step === "4" ? (
        <ProfessionalDetails
          profNextStep={setStepHandler}
          profPrevStep={setStepHandler}
        />
      ) : null}
      {step === "5" ? <SecuritySetup secPrevStep={setStepHandler} /> : null}
    </div>
  );
};

export default SignUpJourney;
