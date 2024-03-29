import Image from "next/image";
import { useState } from "react";

const AvailableDoctors = (props) => {
  const { setStepHandler, availableDoctors } = props;
  const [selectedDoctor, setSelectedDoctor] = useState(
    availableDoctors[0].doctorid
  );

  const availableDoctorsHandler = (event) => {
    const id = event.target.id;
    setSelectedDoctor(id);
  };

  const confirmAppointmentHandler = (doctorId) => {
    setStepHandler("3", doctorId);
  };

  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col overflow-y-auto h-96 w-full items-center pt-10 md:pt-auto md:h-[20rem] 2xl:h-[30rem]">
        {" "}
        {availableDoctors.map((content, index) => (
          <div
            key={index}
            className="cursor-pointer flex justify-between items-center px-5 w-full border-b border-ash py-8 md:space-x-52"
            id={content.doctorid}
            onClick={availableDoctorsHandler}
          >
            <div
              className="flex "
              style={{ pointerEvents: "none" }} //this lets the div onclick event of the parent container cover up its child
            >
             <div className="w-14 h-14 md:w-[91.56px] md:h-[91.56px] rounded-full overflow-hidden"> <Image
                src={content.profilepicture}
                alt="doctor-image"
                className="w-full h-full object-cover"
                priority
                loading="eager"
                width={91.56}
                height={91.56}
              /> </div>
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
                priority
                loading="eager"
                width={24}
                height={24}
              />
            </div>
          </div>
        ))}{" "}
      </div>{" "}
      <button
        onClick={() => confirmAppointmentHandler(selectedDoctor)}
        className="mt-5 bg-custom rounded-full px-12 py-4 text-custom1 font-thin text-base md:text-xl md:mt-10"
      >
        Confirm Appoinmenmt
      </button>{" "}
    </div>
  );
};

export default AvailableDoctors;
