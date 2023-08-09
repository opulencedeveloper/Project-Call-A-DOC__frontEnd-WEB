import Image from "next/image";

const EndAppointmentConfirmation = (props) => {
  const { endAppointmentHandler } = props;
  return (
    <div className="animateSlideUp flex flex-col items-center h-[499px] w-[90%] z-50 pt-5 px-5 shadow-custom-shadow2 rounded-xl bg-white md:pt-8 md:px-11 md:w-[475px]">
      <p className="text-medium text-center text-lg mb-4 md:mb-7 md:text-[20px]">
        Please Wait
      </p>
      <div className="w-[240px] h-[192px]">
        <Image
          src="/images/patient-confirmation.gif"
          loading="eager"
          priority
          alt="patient-confirmation.gif"
          className="h-full w-full"
          width={200}
          height={181}
        />
      </div>

      <p className="text-[18px] w-full text-custom9 text-center border-b border-ash4 mt-2 pb-5 mb-8">
        Waiting for patient confirmation
      </p>
      <button
        type="button"
        onClick={endAppointmentHandler}
        className="rounded-full text-ash5 text-center border border-ash5 w-full h-[45px] text-sm md:h-[52px] md:text-[16px]"
      >
        Close
      </button>
    </div>
  );
};

export default EndAppointmentConfirmation;
