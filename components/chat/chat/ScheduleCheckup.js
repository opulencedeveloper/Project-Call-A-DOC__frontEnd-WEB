import BackDrop from "@/components/UI/BackDrop";

const ScheduleCheckup = (props) => {
  const { scheduleCheckupHandler } = props;

  const hours = Array.from({ length: 13 }, (_, i) =>
    i.toString().padStart(2, "0")
  );

  const minutes = Array.from({ length: 60 }, (_, i) =>
    i.toString().padStart(2, "0")
  );

  return (
    <BackDrop>
      <form className="animateSlideUp h-[550px] w-[90%] z-50 pt-5 px-5 shadow-custom-shadow2 rounded-xl bg-white md:pt-8 md:h-[664px] md:px-11 md:w-[475px]">
        <p className="text-medium text-center text-lg mb-4 md:mb-8 md:text-[20px]">
          Schedule Checkup
        </p>
        <div className="space-y-2 mb-3">
          {" "}
          <label htmlFor="date" className="text-sm md:text-[16px]">
            Date
          </label>
          <input
            type="date"
            name="date"
            className="border border-ash6 outline-none h-[50px] w-full rounded-xl outline-none appearance-none bg-transparent pr-[20px] pl-[45px] bg-no-repeat date-picker-icon md:h-[62px]"
          />{" "}
        </div>
        <div className="space-y-2 mb-3">
          {" "}
          <p className="text-sm md:text-[16px]">Time</p>
          <div className="flex items-center space-x-2 border border-ash6  h-[50px] w-full rounded-xl outline-none appearance-none bg-transparent pr-[20px] pl-[45px] bg-no-repeat clock-picker-icon md:h-[62px]">
            <select className="outline-none h-full w-11 rounded-xl appearance-none bg-transparent bg-no-repeat bg-right select-button-icon">
              {hours.map((hour, index) => (
                <option key={index}>{hour}</option>
              ))}
            </select>
            <select className="outline-none h-full w-11 rounded-xl appearance-none bg-transparent bg-no-repeat bg-right select-button-icon">
              {minutes.map((minute, index) => (
                <option key={index}>{minute}</option>
              ))}
            </select>
            <select className="outline-none h-full w-12 rounded-xl appearance-none bg-transparent bg-no-repeat bg-right select-button-icon">
              <option>AM</option>
              <option>PM</option>
            </select>
          </div>{" "}
        </div>
        <div className="space-y-2 mb-3">
          {" "}
          <p className="text-sm md:text-[16px]">Description</p>
          <textarea
            type="text"
            className="border border-ash6 rounded-xl w-full h-[120px] p-3 resize-none outline-none"
          />{" "}
        </div>
        <div className="flex items-center border-b border-ash4 pb-6 mb-4 space-x-1 md:mb-8">
          <input
            name="set-reminder"
            type="checkbox"
            className="h-[18px] w-[18px]"
          />
          <label htmlFor="set-reminder" className="text-sm md:text-[16px]">
            Set Reminder
          </label>
        </div>
        <div className="flex justify-between h-[45px] text-sm md:h-[52px] md:text-[16px]">
          <button
            type="button"
             onClick={scheduleCheckupHandler}
            className="rounded-full text-ash5 border border-ash5 w-[40%]"
          >
            Cancel
          </button>
          <button
            //type="submit"
            className="rounded-full text-white bg-custom w-[52%]"
          >
            Schedule
          </button>
        </div>
      </form>
    </BackDrop>
  );
};

export default ScheduleCheckup;
