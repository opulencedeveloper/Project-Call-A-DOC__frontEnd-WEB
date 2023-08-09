import BackDrop from "@/components/UI/BackDrop";
import Image from "next/image";
import ContactSupportDetails from "./ContactSupport/ContactSupportDetails";
import { useState } from "react";
import ContactSupportSuccess from "./ContactSupport/ContactSupportSuccess";

const ContactSupportJourney = (props) => {
  const [contactSupportJourneySteps, setContactSupportJourneySteps] =
    useState("1");
  const { contactSupportHandler } = props;

  const contactSupportJourneyStepsHandler = () => {
    setContactSupportJourneySteps("2");
  };
  return (
    <BackDrop>
      {contactSupportJourneySteps === "1" && (
        <ContactSupportDetails
          contactSupportHandler={contactSupportHandler}
          contactSupportJourneyStepsHandler={contactSupportJourneyStepsHandler}
        />
      )}
      {contactSupportJourneySteps === "2" && (
        <ContactSupportSuccess contactSupportHandler={contactSupportHandler} />
      )}
    </BackDrop>
  );
};

export default ContactSupportJourney;
