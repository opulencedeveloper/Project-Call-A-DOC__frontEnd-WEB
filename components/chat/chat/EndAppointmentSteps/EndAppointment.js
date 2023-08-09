import Image from "next/image";

const EndAppointment = (props) => {
  const { endAppointmentHandler, appointmentJourneyStepsHandler } = props;

  return (
    <div className="animateSlideUp flex flex-col items-center h-[499px] w-[90%] z-50 pt-5 px-5 shadow-custom-shadow2 rounded-xl bg-white md:pt-8 md:px-11 md:w-[475px]">
      <p className="text-medium text-center text-lg mb-4 md:mb-7 md:text-[20px]">
        End Appointment?
      </p>
      <div className="w-[200px] h-[181px]">
        <Image
          src="/images/end-appointment-image.svg"
          loading="eager"
          priority
          alt=" end-appointment-image"
          className="h-full w-full"
          width={200}
          height={181}
        />
      </div>

      <p className="text-[18px] text-custom9 text-center border-b border-ash4 mt-2 pb-5 mb-8">
        A notification would be sent to your patient for confirmation
      </p>
      <div className="flex w-full justify-between h-[45px] text-sm md:h-[52px] md:text-[16px]">
        <button
          type="button"
          onClick={endAppointmentHandler}
          className="rounded-full text-ash5 border border-ash5 w-[40%]"
        >
          Cancel
        </button>
        <button
          onClick={appointmentJourneyStepsHandler}
          type="button"
          className="rounded-full text-white bg-custom9 w-[52%]"
        >
          End
        </button>
      </div>
    </div>
  );
};

export default EndAppointment;
