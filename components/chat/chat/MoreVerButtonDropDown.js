import Image from "next/image";

const MoreVertButtonDropDown = (props) => {
  const {scheduleCheckupHandler, endAppointmentHandler} = props;

    return <div className="animateSlideDown z-50 absolute top-10 -right-1 h-[180px] w-[230px] flex flex-col items-center justify-center rounded-xl bg-white shadow-custom-shadow2 md:w-[306px] md:h-[220px]">
    <button
    onClick={scheduleCheckupHandler}
    className="flex items-center border-b border-ash6 mb-5 pb-5 space-x-3">
      <div className="w-[24px] h-[26.5px] md:w-[30px] md:h-[32.5px]">
        <Image
          src="/images/icon/add-checkup-calender-icon.svg"
          priority
          loading="eager"
          alt="prescribe-drugs-icon"
          className="h-full w-full"
          width={24}
          height={24}
        />
      </div>
      <p className="font-semibold text-sm text-custom9 md:text-[20px]">
        Schedule Checkup
      </p>
    </button>
    <button
    onClick={endAppointmentHandler}
    className="flex items-center space-x-3">
      <div className="w-[24px] h-[26.5px] md:w-[30px] md:h-[32.5px]">
        <Image
          src="/images/icon/end-appointment-icon.svg"
          priority
          loading="eager"
          alt="prescribe-drugs-icon"
          className="h-full w-full"
          width={24}
          height={24}
        />
      </div>
      <p className="font-semibold text-sm text-red-500 md:text-[20px]">
        End Appointment
      </p>
    </button>
  </div>
}

export default MoreVertButtonDropDown;