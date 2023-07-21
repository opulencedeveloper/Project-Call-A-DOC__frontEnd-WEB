import Image from "next/image";
import { useState } from "react";


const AvailableDoctors = (props) => {
  const { setStepHandler, availableDoctors } = props;
  const [selectedDoctor, setSelectedDoctor] = useState(availableDoctors[0].doctorid);

  const availableDoctorsHandler = (event) => {
    const id = event.target.id;
    setSelectedDoctor(id);
  };

  const confirmAppointmentHandler = (doctorId) => {
    setStepHandler("3", doctorId)
  } 

  return (
    <div><div className="flex flex-col overflow-y-auto h-60 md:h-max items-center pt-10 md:pt-auto">
      {" "}
      {availableDoctors.map((content, index) => (
        <div
          key={index}
          className="cursor-pointer flex items-center px-5 space-x-14 border-b border-ash py-8 md:space-x-52"
          id={content.doctorid}
          onClick={availableDoctorsHandler}
        >
          <div
            className="flex "
            style={{ pointerEvents: "none" }} //this lets the div onclick event of the parent container cover up its child
          >
            <Image
              src="/images/doctor-joseph.svg"
              alt="doctor-image"
              className="w-14 h-14 md:w-[91.56px] md:h-[91.56px]"
              width={91.56}
              height={91.56}
            />
            <div className="flex flex-col justify-center ml-5 max-w-2xl">
              <div className="text-lg md:text-2xl">{`${content.firstname} ${content.lastname}`}</div>
              <div className="text-sm md:text-base">{content.aos}</div>
            </div>{" "}
          </div>
          <div
            style={{ pointerEvents: "none" }} //this lets the div onclick event of the parent container cover up its child
          >
            {" "}
            <Image
              src={
                content.doctorid == selectedDoctor
                  ? "/images/icon/radio-on-blue.svg"
                  : "/images/icon/radio-off.svg"
              }
              alt="radion-icon"
              className=" w-auto h-auto z-0"
              width={24}
              height={24}
            />
          </div>
        </div>
      ))}
     {" "}
    </div> <button
        onClick={() => confirmAppointmentHandler(selectedDoctor)}
        className="mt-20 bg-custom rounded-full px-12 py-4 text-custom1 font-thin text-xl"
      >
        Confirm Appoinmenmt
      </button> </div>
  );
};

export default AvailableDoctors;
