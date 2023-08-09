import Image from "next/image";

import { useRef, useState } from "react";
import CSSTransition from "react-transition-group/CSSTransition";
import ContactSupportJourney from "./ContactSupportJourney";

const animationTiming = {
  enter: 400,
  exit: 0,
};

const fags = [
  {
    title: "How do I get started",
    description:
      "Lörem ipsum demotyp förväntis: inklusive ditt ad cringe. Onde dedölig irev hänyr. Treliga muräl i blingbling. Ogooglebar vagt vivis, radiotyp. Spes borade om häkronde dos fastän astrose. Didin diligt. Pseudoling uhuvis monotyp, plus varen tills pren. ",
  },
  {
    title: "Can I access the platform for free?",
    description:
      "Lörem ipsum demotyp förväntis: inklusive ditt ad cringe. Onde dedölig irev hänyr. Treliga muräl i blingbling. Ogooglebar vagt vivis, radiotyp. Spes borade om häkronde dos fastän astrose. Didin diligt. Pseudoling uhuvis monotyp, plus varen tills pren. ",
  },
  {
    title: "How can I upgrade my plan?",
    description:
      "Lörem ipsum demotyp förväntis: inklusive ditt ad cringe. Onde dedölig irev hänyr. Treliga muräl i blingbling. Ogooglebar vagt vivis, radiotyp. Spes borade om häkronde dos fastän astrose. Didin diligt. Pseudoling uhuvis monotyp, plus varen tills pren. ",
  },
  {
    title: "Can I have access to specialist doctors?",
    description:
      "Lörem ipsum demotyp förväntis: inklusive ditt ad cringe. Onde dedölig irev hänyr. Treliga muräl i blingbling. Ogooglebar vagt vivis, radiotyp. Spes borade om häkronde dos fastän astrose. Didin diligt. Pseudoling uhuvis monotyp, plus varen tills pren. ",
  },
];

const HelpCenterInfo = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [contactSupport, setContactSupport] = useState(false);
  const nodeRef = useRef(null);

  const handleToggle = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  const contactSupportHandler = () => {
    setContactSupport(prev => !prev);
  }

  return (
    <div className="pt-8 md:pt-14">
        {contactSupport && <ContactSupportJourney  contactSupportHandler={ contactSupportHandler} />}
      <p className="text-center font-montserrat font-medium text-[20px] text-custom9 mb-4 md:text-[31px]">
        We are here to help
      </p>
      <p className="text-ash2 text-[18px] font-medium text-center mb-4 md:text-[25px]">
        Got any complaint? Please reach out to out support team
      </p>
      <button 
      onClick={contactSupportHandler}
      className="flex justify-center space-x-1 mx-auto items-center text-white rounded-full bg-custom w-[200px] h-[48px] md:h-[54px] md:w-[242px]">
        <p className="text-[14px] md:text-[18px]">Contact Support</p>
        <div className="w-[15px] h-[12px]">
          <Image
            src="/images/icon/arrow-right-white-icon.svg"
            priority
            loading="eager"
            alt="prescribe-drugs-icon"
            className="h-full w-full"
            width={15}
            height={12}
          />
        </div>
      </button>
      <p className="text-[20px] font-medium text-custom9 pt-16 mt-16 mb-6 text-center border-t border-ash4 w-full md:text-[25px]">
        Frequently Asked Questions
      </p>

      <div className="w-full">
        {fags.map((fag, index) => (
          <div key={index} className="border border-ash rounded-xl px-5 py-3 mb-5 md:px-8">
            <button
              className="flex items-center justify-between w-full py-3 transition duration-300 ease-in-out"
              onClick={() => handleToggle(index)}
            >
              <span className="text-[18px] text-start font-medium text-gray-1 md:text-[24px]">
                {fag.title}
              </span>
              <div className="relative h-[28px] w-[28px] md:h-[32px] md:w-[32px] flex-shrink-0 border-[3px] border-ash5  rounded-full">
                <div
                  className={`absolute w-[70%] rounded-full h-[3px] bg-ash5 inset-1/2 transform -translate-x-1/2 -translate-y-1/2 transform ${
                    activeIndex === index ? "rotate-90" : ""
                  } transition duration-300 ease-in-out`}
                ></div>
                <div
                  className={`absolute w-[70%] rounded-full h-[3px] bg-ash5 inset-1/2 transform -translate-x-1/2 -translate-y-1/2 transform ${
                    activeIndex === index ? "rotate-180" : ""
                  } transition duration-300 ease-in-out`}
                ></div>
              </div>
            </button>

            <CSSTransition
              nodeRef={nodeRef}
              mountOnEnter
              unmountOnExit
              in={activeIndex === index}
              timeout={animationTiming}
              classNames={{
                enter: "",
                enterActive: "OpenBookingAppointment",
                exit: "",
                exitActive: "",
              }}
            >
              <div ref={nodeRef} className="py-2 text-custom4 text-base md:text-[20px]">
                {fag.description}
              </div>
            </CSSTransition>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HelpCenterInfo;
