import BackDrop from "@/components/UI/BackDrop";
import Image from "next/image";

const DoctorEndAppointmentPatientApproval = (props) => {
    const {doctorEndAppointmentPatientApprovalHandler} = props;
  return (
    <BackDrop>
      <div className="animateSlideUp flex flex-col justify-evenly h-[550px] w-[90%] z-50 px-5 shadow-custom-shadow2 rounded-xl bg-white md:h-[616px] md:px-11 md:w-[475px]">
        <p className="text-custom9 text-[17px] mb-7 mt-3 font-semibold text-center md:text-[25px]">
        Your appointment is over
        </p> 
        <div className="mx-auto w-[220px] h-[150px] md:w-[286px] md:h-[213.5px]"> 
        <Image
          src="/images/doctor-request-to-patient-to-accept-end-of-appointment-image.svg"
          priority
          loading="eager"
          alt="doctor-request-to-patient-to-accept-end-of-appointment-image"
          className="h-full w-full"
          width={286}
          height={213}
        />
      </div>
      <p className="text-center text-base md:text-[20px]">The doctor requests to close appointment</p>
      <div className="flex w-full justify-between h-[45px] text-sm md:h-[52px] md:text-[16px]">
        <button
          type="button"
          onClick={doctorEndAppointmentPatientApprovalHandler}
          className="rounded-full text-ash5 border border-ash5 w-[40%]"
        >
         Back
        </button>
        <button
         // onClick={appointmentJourneyStepsHandler}
          type="button"
          className="rounded-full text-white bg-custom w-[52%]"
        >
          Proceed
        </button>
      </div>
      </div>
    </BackDrop>
  );
};

export default DoctorEndAppointmentPatientApproval;
