import Image from "next/image";
import { useEffect, useState } from "react";
import DoctorSearch from "../apointment-steps/DoctorSearch";
import AvailableDoctors from "../apointment-steps/AvailableDoctors";
import StartingAppointment from "../apointment-steps/StartingAppointment";

const AppointmentJourney = (props) => {
  const [step, setStep] = useState("1");
  const { endAppointmentHandler } = props;

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      console.log("Timeout completed!");
      setStep("2");
    }, 2000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  const setStepHandler = (step) => {
    setStep(step);
  };

  return (
    <div className="flex flex-col relative items-center justify-center bg-custom1 space-y-4 p-8 rounded-2xl shadow-2xl md:p-20 ">
      <div className="flex justify-between absolute top-9 right-9 left-9">
        <div className="text-ash2 text-lg font-medium">
          {step == "2" ? "3 doctors found based on your location" : ""}
        </div>
        <Image
          src="/images/icon/close.svg"
          alt="close-icon"
          className=" w-auto h-auto"
          width={18.88}
          height={18.88}
          onClick={endAppointmentHandler}
        />
      </div>
      {step === "1" ? <DoctorSearch /> : null}
      {step == "2" ? (
        <AvailableDoctors setStepHandler={setStepHandler} />
      ) : null}

      {step == "3" ? <StartingAppointment /> : null}
    </div>
  );
};

export default AppointmentJourney;
