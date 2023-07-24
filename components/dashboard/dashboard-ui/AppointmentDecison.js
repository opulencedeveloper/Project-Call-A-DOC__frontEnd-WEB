import { useContext, useState } from "react";

import useHttp from "@/hooks/useHttp";
import AuthContext from "@/store/context-store/auth-context";
import { useRouter } from "next/router";

let myAppointmentId = "";

const AppointmentDecison = (props) => {
  const router = useRouter();
  const authCtx = useContext(AuthContext);
  AuthContext;
  const { token } = authCtx;
  const { error, sendRequest: appointmentRequest } = useHttp();

  const myResponse = (res) => {
    console.log("Id in the response is", myAppointmentId);
    const { status, message } = res;

    if (
      status === "success" &&
      message === "Appointment Accepted successfully"
    ) {
      router.push("/chat/" + myAppointmentId);
      return;
    }
  };

  const acceptAppointmentHandler = (appointmentId) => {
    myAppointmentId = appointmentId;
    appointmentRequest(
      {
        url: "doctor/appointment/acceptappointment",
        token: token,
        method: "POST",
        body: { appointmentid: appointmentId },
      },
      myResponse
    );
  };

  return (
    <div className="flex space-x-2">
      <button className=" bg-red-500 rounded-full px-4 py-2 text-custom1 text-sm md:px-8 md:text-xl">
        Reject
      </button>
      <button
        onClick={() => acceptAppointmentHandler(props.appointmentId)}
        className=" bg-green-500 rounded-full px-4 py-2 text-custom1 text-sm md:px-8 md:text-xl"
      >
        Accept
      </button>
    </div>
  );
};
export default AppointmentDecison;