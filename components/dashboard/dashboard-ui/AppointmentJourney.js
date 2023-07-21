import Image from "next/image";
import { useContext, useEffect, useState } from "react";
import DoctorSearch from "../apointment-steps/DoctorSearch";
import AvailableDoctors from "../apointment-steps/AvailableDoctors";
import StartingAppointment from "../apointment-steps/StartingAppointment";
import AuthContext from "@/store/context-store/auth-context";
import useHttp from "@/hooks/useHttp";

const AppointmentJourney = ({ endAppointmentHandler }) => {
  const [step, setStep] = useState("1");
  const [doctorId, setDoctorId] = useState("");
  const [availableDoctors, setAvailableDoctors] = useState([]);
  const { error, sendRequest: fetchUserData } = useHttp();
  const authCtx = useContext(AuthContext);
  const { token } = authCtx;

  useEffect(() => {
    const myResponse = (res) => {
      const { status, message, doctors } = res;
      if (status === "success" && message === "Doctors Found Successfully") {
        setAvailableDoctors(doctors);
        setStep("2");
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

  const setStepHandler = (step, doctorId) => {
    setDoctorId(doctorId);
    setStep(step);
  };

  return (
    <div className="flex flex-col overflow-y-auto z-50 relative items-center justify-center bg-custom1 space-y-4 p-8 rounded-2xl shadow-2xl md:p-20 ">
      {error && (
        <div className="bg-custom11 mr-5 rounded-md text-custom1 font-semibold text-sm py-3 px-10">
          <p className="text-center">{error}</p>
        </div>
      )}
      <div className="flex bg-white justify-between absolute top-9 right-9 left-9">
        <div className="text-ash2 text-lg font-medium">
          {step === "2" &&
            `${availableDoctors.length} doctors found based on your location `}
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
      {step === "2" && (
        <AvailableDoctors
          availableDoctors={availableDoctors}
          setStepHandler={setStepHandler}
        />
      )}
      {step === "3" && <StartingAppointment doctorId={doctorId} />}
    </div>
  );
};

export default AppointmentJourney;
