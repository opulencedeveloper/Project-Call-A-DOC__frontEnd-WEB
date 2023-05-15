import { use, useState } from "react";

import Image from "next/image";

import PersonalDetails from "./PersonalDetails";
import MedicalDetails from "./MedicalDetails.";
import SecuritySetup from "./SecuritySetup";
import ProfessionalDetails from "./ProfessionalDetails";
import SignUpType from "./SignUpType";

const SignUpJourney = () => {
  const [step, setStep] = useState("1");

  const setStepHandler = (currentStep) => {
    setStep(currentStep);
  };

  return (
    <div className="md:px-0 lg:px-20 2xl:px-40">
      <div className="mb-12 w-1/2">
        <Image
          src={`/images/icon/step-${step}.svg`}
          alt="step-1"
          className="w-full h-6"
          width={64}
          height={61}
        />
      </div>
      {step === "1" ? <SignUpType signUpNextStep={setStepHandler} /> : null}
      {step === "2" ? <PersonalDetails personalNextStep={setStepHandler} /> : null}
      {step === "3" ? <MedicalDetails medicalNextStep={setStepHandler} /> : null}
      {step === "4" ? <ProfessionalDetails profNextStep={setStepHandler} /> : null}
      {step === "5" ? <SecuritySetup /> : null}
    </div>
  );
};

export default SignUpJourney;
