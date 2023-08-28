import BackDrop from "@/components/UI/BackDrop";
import LoadingSpinner from "@/components/UI/LoadingSpinner";
import SuccessMessage from "@/components/dashboard/dashboard-ui/SuccessMessage";
import useHttp from "@/hooks/useHttp";
import { useState } from "react";

let successHttpResponseMessage;

const ScheduleCheckup = (props) => {
  const [isSuccess, setIsSuccess] = useState(false);
  const [checkupDate, setCheckupDate] = useState("");
  const [checkupHour, setCheckupHour] = useState("00");
  const [checkupMinute, setCheckupMinute] = useState("00");
  const [checkupMeridiem, setCheckupMeridiem] = useState("AM");
  const [checkupDescription, setCheckupDescription] = useState("");
  const [checkupReminder, setCheckupReminder] = useState(true);
  const { isLoading, error, sendRequest: scheduleCheckUp } = useHttp();
  const { scheduleCheckupHandler, appointmentId, token } = props;

  const hours = Array.from({ length: 13 }, (_, i) =>
    i.toString().padStart(2, "0")
  );

  const minutes = Array.from({ length: 60 }, (_, i) =>
    i.toString().padStart(2, "0")
  );

  const inputChangeHandler = (event) => {
    console.log(event.target.checked)
    switch (event.target.id) {
      case "checkupDate":
        return setCheckupDate(event.target.value);
      case "checkupHour":
        return setCheckupHour(event.target.value);
      case "checkupMinute":
        return setCheckupMinute(event.target.value);
      case "checkupMeridiem":
        return setCheckupMeridiem(event.target.value);
      case "checkupDescription":
        return setCheckupDescription(event.target.value);
      case "checkupReminder":
        return setCheckupReminder(prev => !prev);
      default:
        return null;
    }
  };

  const scheduleCheckupSwitcherHandler = () => {
    setIsSuccess((prev) => !prev);
  };

  const scheduleCheckUpResponse = (res) => {
    const { status, message } = res;
    if (status === "success") {
      successHttpResponseMessage = message;
      scheduleCheckupSwitcherHandler();
    }
  };

  const submitScheduleCheckupHandler = (event) => {
    event.preventDefault();
    const checkupTime = `${checkupHour} : ${checkupMinute} ${checkupMeridiem}`;
    

    if (
      !appointmentId || !checkupDate || !checkupDescription
    )
      return;

    scheduleCheckUp(
      {
        url: "doctor/checkups/createcheckup",
        method: "POST",
        body: {
          appointmentid: appointmentId,
          "checkupdate": checkupDate,
          "checkuptime": checkupTime,
          "description": checkupDescription,
          "setreminder": checkupReminder ? "1" : "0"
        },
        token: token,
      },
      scheduleCheckUpResponse
    );
  };

  return (
    <BackDrop>
      {isSuccess ? ( 
        <SuccessMessage
          successMessageHandler={scheduleCheckupHandler}
          successMessage={successHttpResponseMessage}
        />
      ) : (
        <form
          onSubmit={submitScheduleCheckupHandler}
          className="animateSlideUp h-[550px] w-[90%] overflow-y-auto z-50 pt-5 px-5 shadow-custom-shadow2 rounded-xl bg-white md:pt-8 md:h-[664px] md:px-11 md:w-[475px]"
        >
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
              <p className="text-medium text-center text-lg mb-4 md:mb-8 md:text-[20px]">
                Schedule Checkup
              </p>
              <div className="space-y-2 mb-3">
                {" "}
                <label htmlFor="date" className="text-sm md:text-[16px]">
                  Date
                </label>
                <input
                  onChange={inputChangeHandler}
                  id="checkupDate"
                  type="date"
                  name="date"
                  className="border border-ash6 outline-none h-[50px] w-full rounded-xl outline-none appearance-none bg-transparent pr-[20px] pl-[45px] bg-no-repeat date-picker-icon md:h-[62px]"
                />{" "}
              </div>
              <div className="space-y-2 mb-3">
                {" "}
                <p className="text-sm md:text-[16px]">Time</p>
                <div className="flex items-center space-x-2 border border-ash6  h-[50px] w-full rounded-xl outline-none appearance-none bg-transparent pr-[20px] pl-[45px] bg-no-repeat clock-picker-icon md:h-[62px]">
                  <select
                    onChange={inputChangeHandler}
                    id="checkupHour"
                    value={checkupHour}
                    className="outline-none h-full w-11 rounded-xl appearance-none bg-transparent bg-no-repeat bg-right select-button-icon"
                  >
                    {hours.map((hour, index) => (
                      <option value={hour} key={index}>
                        {hour}
                      </option>
                    ))}
                  </select>
                  <select
                    onChange={inputChangeHandler}
                    id="checkupMinute"
                    value={checkupMinute}
                    className="outline-none h-full w-11 rounded-xl appearance-none bg-transparent bg-no-repeat bg-right select-button-icon"
                  >
                    {minutes.map((minute, index) => (
                      <option value={minute} key={index}>
                        {minute}
                      </option>
                    ))}
                  </select>
                  <select
                    id="checkupMeridiem"
                    onChange={inputChangeHandler}
                    value={checkupMeridiem}
                    className="outline-none h-full w-12 rounded-xl appearance-none bg-transparent bg-no-repeat bg-right select-button-icon"
                  >
                    <option value="AM">AM</option>
                    <option value="PM">PM</option>
                  </select>
                </div>{" "}
              </div>
              <div className="space-y-2 mb-3">
                {" "}
                <p className="text-sm md:text-[16px]">Description</p>
                <textarea
                id="checkupDescription"
                  onChange={inputChangeHandler}
                  value={checkupDescription}
                  type="text"
                  className="border border-ash6 rounded-xl w-full h-[120px] p-3 resize-none outline-none"
                />{" "}
              </div>
              <div className="flex items-center border-b border-ash4 pb-6 mb-4 space-x-1 md:mb-8">
                <input
                id="checkupReminder"
                  onChange={inputChangeHandler}
                  checked={checkupReminder}
                  name="set-reminder"
                  type="checkbox"
                  className="h-[18px] w-[18px]"
                />
                <label
                  htmlFor="set-reminder"
                  className="text-sm md:text-[16px]"
                >
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
            </>
          )}
        </form>
      )}
    </BackDrop>
  );
};

export default ScheduleCheckup;
