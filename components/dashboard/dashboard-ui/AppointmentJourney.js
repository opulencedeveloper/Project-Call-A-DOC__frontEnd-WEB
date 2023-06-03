import Image from "next/image";
import { useContext, useEffect, useState } from "react";
import DoctorSearch from "../apointment-steps/DoctorSearch";
import AvailableDoctors from "../apointment-steps/AvailableDoctors";
import StartingAppointment from "../apointment-steps/StartingAppointment";
import AuthContext from "@/store/context-store/auth-context";
import useHttp from "@/hooks/useHttp";

const AppointmentJourney = ({ endAppointmentHandler }) => {
  const [step, setStep] = useState("1");
  const { error, sendRequest: fetchUserData } = useHttp();
  const authCtx = useContext(AuthContext); 
  const { token } = authCtx;

  useEffect(() => {
    console.log("In the appointent effect")
    const myResponse = (res) => {
      const { status, message } = res;
      if (status === "success" && message === "Doctors Found Successfully") {
        setStep("2")
        return;
      }
    };

    fetchUserData(
      {
        url: "customer/fetchdoctorsforappointment",
        token: token,
      },
      myResponse
    );
  }, [fetchUserData, token]);

  const setStepHandler = (step) => {
    setStep(step);
  };

  return (
    <div className="flex flex-col relative items-center justify-center bg-custom1 space-y-4 p-8 rounded-2xl shadow-2xl md:p-20 ">
      <div className="flex justify-between absolute top-9 right-9 left-9">
      {error && (
            <div className="bg-custom11 mr-5 rounded-md text-custom1 font-semibold text-sm py-3 px-10">
              <p className="text-center">{error}</p>
            </div>
          )}
          <div className="text-ash2 text-lg font-medium">
          {step === "2" && "3 doctors found based on your location "}
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
      {step === "1" && <DoctorSearch />}
      {step === "2" && <AvailableDoctors setStepHandler={setStepHandler} />}
      {step === "3" && <StartingAppointment />}
    </div>
  );
};

export default AppointmentJourney;
