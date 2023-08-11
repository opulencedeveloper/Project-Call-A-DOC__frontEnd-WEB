import LoadingSpinner from "@/components/UI/LoadingSpinner";
import useHttp from "@/hooks/useHttp";
import Image from "next/image";
import { useState } from "react";

const ContactSupportDetails = (props) => {
  const { isLoading, error, sendRequest: contactSupportRequest } = useHttp();
  const [message, setMesssage] = useState("");

  const { contactSupportJourneyStepsHandler, contactSupport, token, userType } =
    props;

  const messageHandler = (event) => {
    setMesssage(event.target.value);
  };

  const contactSupportRequestResponse = (res) => {
    const { status } = res;

    if (status === "success") {
      contactSupportJourneyStepsHandler();
    }
  };

  const contactSupportHandler = () => {
    if (message === "") return;
    const url = userType === "doctor" ? "doctor" : "customer";
    contactSupportRequest(
      {
        url: `${url}/complaint/makeacomplain`,
        method: "POST",
        body: {
          complaint: message,
        },
        token: token,
      },
      contactSupportRequestResponse
    );
  };

  return (
    <div className="animateSlideUp overflow-y-auto h-[572px] w-[90%] z-50 pt-5 px-5 shadow-custom-shadow2 rounded-2xl bg-white md:h-[572px] md:px-11 md:w-[475px]">
      {error && (
        <div className="bg-custom11 mx-10 rounded-md text-custom1 font-semibold text-sm py-3 px-5 md:px-10">
          <p className="text-center">{error}</p>
        </div>
      )}
      {isLoading ? (
        <div className="flex flex-col items-center justify-center h-full w-full">
          {" "}
          <LoadingSpinner />
        </div>
      ) : (
        <>
          <p className="text-custom9 text-base mt-3 font-medium text-center md:text-[20px]">
            Contact Support
          </p>
          <div className="w-[96px] h-[56px] mx-auto my-8">
            <Image
              src="/images/contact-support-group-image.svg"
              loading="eager"
              priority
              alt=" end-appointment-image"
              className="h-full w-full"
              width={200}
              height={181}
            />
          </div>
          <p className="text-base text-custom9 text-center mb-7 md:text-[18px]">
            Our team would respond in less than 24 hours
          </p>
          <div className="border-b border-ash4 pb-4 mb-8 space-y-2 mb-3">
            {" "}
            <p className="text-sm md:text-[16px]">Complaint</p>
            <textarea
              type="text"
              onChange={messageHandler}
              className="border border-ash6 rounded-xl w-full h-[120px] p-3 resize-none outline-none"
            />{" "}
          </div>
          <div className="flex justify-between mb-5 h-[45px] text-sm md:h-[52px] md:text-[16px]">
            <button
              type="button"
              onClick={contactSupport}
              className="rounded-full text-ash5 border border-ash5 w-[40%]"
            >
              Cancel
            </button>
            <button
              onClick={contactSupportHandler}
              className="rounded-full text-white bg-custom w-[52%]"
            >
              Send
            </button>
          </div>{" "}
        </>
      )}
    </div>
  );
};

export default ContactSupportDetails;
