import { useContext, useEffect } from "react";

import { useRouter } from "next/router";
import Image from "next/image";
import useHttp from "@/hooks/useHttp";
import AuthContext from "@/store/context-store/auth-context";
import { useSelector } from "react-redux";

const StartingAppointment = (props) => {
  const router = useRouter();
  const { error, sendRequest: makeAppointment } = useHttp();
  const authCtx = useContext(AuthContext);
  const { token } = authCtx;

  useEffect(() => {
    const myResponse = (res) => {
      const { status, message, appointment } = res;
      if (
        status === "success" &&
        message === "Appointment Booked Successfully"
      ) {
        props.setStepHandler("4");
        //  router.push("/chat/" + appointment.appointmentid);
        return;
      }
    };

    makeAppointment(
      {
        url: "customer/makeappointment",
        token: token,
        method: "POST",
        body: { doctor: props.doctorId },
      },
      myResponse
    );
  }, [makeAppointment, token]);

  // useEffect(() => {
  //   const timeoutId = setTimeout(() => {
  //     router.push('/chat');
  //   }, 2000);

  //   return () => {
  //     clearTimeout(timeoutId);
  //   };
  // }, []);
  return (
    <>
      {error && (
        <div className="bg-custom11 mr-5 rounded-md text-custom1 font-semibold text-sm py-3 px-10">
          <p className="text-center">{error}</p>
        </div>
      )}

      <Image
        src="/images/icon/options.svg"
        alt="options-icon"
        className=" w-auto h-auto z-20"
        priority
        loading="eager"
        width={48.81}
        height={62.13}
      />
      <div className="text-ash2 text-lg md:text-2xl">
        Starting up appointment
      </div>
      <div className="text-sm md:text-lg font-light">
        This may take a few seconds
      </div>
    </>
  );
};

export default StartingAppointment;
