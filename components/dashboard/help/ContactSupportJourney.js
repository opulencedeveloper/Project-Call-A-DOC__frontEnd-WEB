import BackDrop from "@/components/UI/BackDrop";
import Image from "next/image";
import ContactSupportDetails from "./ContactSupport/ContactSupportDetails";
import { useState } from "react";
import SuccessMessage from "../dashboard-ui/SuccessMessage";

const ContactSupportJourney = (props) => {
  const [contactSupportJourneySteps, setContactSupportJourneySteps] =
    useState("1");
  const { contactSupportHandler, userType, token } = props;

  const contactSupportJourneyStepsHandler = () => {
    setContactSupportJourneySteps("2");
  };
  return (
    <BackDrop>
      {contactSupportJourneySteps === "1" && (
        <ContactSupportDetails
        userType={userType}
        token={token}
          contactSupport={contactSupportHandler}
          contactSupportJourneyStepsHandler={contactSupportJourneyStepsHandler}
        />
      )}
      {contactSupportJourneySteps === "2" && (
        <SuccessMessage successMessageHandler={contactSupportHandler} />
      )}
    </BackDrop>
  );
};

export default ContactSupportJourney;
