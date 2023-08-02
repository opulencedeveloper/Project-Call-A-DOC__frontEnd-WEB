import { useState } from "react";
import { useSelector } from "react-redux";

import Image from "next/image";

import PersonalDetails from "./PersonalDetails";
import MedicalDetails from "./MedicalDetails.";
import SecuritySetup from "./SecuritySetup";
import ProfessionalDetails from "./ProfessionalDetails";
import SignUpType from "./SignUpType";

const SignUpJourney = () => {
  const [step, setStep] = useState("1");
  const userSelection = useSelector((state) => state.signUp);
  const { userType } = userSelection;

  const setStepHandler = (currentStep) => {
    const stepValue =
    currentStep === "4" && userType !== "Doctor" ? "5" : currentStep;
    setStep(stepValue);
  };

  const containerClassName = "md:px-0 lg:px-20 2xl:px-40";

  return (
    <div className={containerClassName}>
      <div className="mb-12 w-48">
        <Image
          src={`/images/icon/step-${step}.svg`}
          alt="steps-image"
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
