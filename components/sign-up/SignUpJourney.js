import { use, useCallback, useState } from "react";

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

  const containerClassName = "md:px-0 lg:px-20 2xl:px-40";
  
  return (
    <div className={containerClassName}>
  <div className="mb-12 w-48">
    <Image
      src={`/images/icon/step-${step}.svg`}
      alt="step-1"
      className="w-auto h-auto"
      width={64}
      height={61}
    />
  </div>
  {(() => {
    switch (step) {
      case "1":
        return <SignUpType signUpNextStep={setStepHandler} />;
      case "2":
        return (
          <PersonalDetails
            personalNextStep={setStepHandler}
            personalPrevStep={setStepHandler}
          />
        );
      case "3":
        return (
          <MedicalDetails
            medicalNextStep={setStepHandler}
            medicalPrevStep={setStepHandler}
          />
        );
      case "4":
        return (
          <ProfessionalDetails
            profNextStep={setStepHandler}
            profPrevStep={setStepHandler}
          />
        );
      case "5":
        return <SecuritySetup secPrevStep={setStepHandler} />;
      default:
        return null;
    }
  })()}
</div>
  );
};

export default SignUpJourney;
