import BackDrop from "@/components/UI/BackDrop";
import { useState } from "react";
import EndAppointment from "./EndAppointmentSteps/EndAppointment";
import EndAppointmentConfirmation from "./EndAppointmentSteps/EndAppointmentConfirmation";

const EndAppointmentJourney = (props) => {
  const { endAppointmentHandler } = props;
  const [appointmentJourneySteps, setAppointmentJourneySteps] = useState("1");

  const appointmentJourneyStepsHandler = () => {
    setAppointmentJourneySteps("2");
  };

  return (
    <BackDrop>
      {appointmentJourneySteps === "1" && (
        <EndAppointment
          endAppointmentHandler={endAppointmentHandler}
          appointmentJourneyStepsHandler={appointmentJourneyStepsHandler}
        />
      )}
      {appointmentJourneySteps === "2" && (
        <EndAppointmentConfirmation
          endAppointmentHandler={endAppointmentHandler}
        />
      )}
    </BackDrop>
  );
};

export default EndAppointmentJourney;
