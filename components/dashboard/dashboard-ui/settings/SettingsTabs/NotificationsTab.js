import { useState } from "react";
import ToggleButton from "../ToggleButton";

const NotificationsTab = () => {
  const [scheduleCheckup, setScheduleCheckup] = useState(false);
  const [subscription, setSubscription] = useState(false);
  const [emailNotifications, setEmailNotifications] = useState(false);
  const [desktopNotications, setDesktopNotications] = useState(true);

  const inputChangeHandler = (event) => {
    console.log("clocked")
    console.log(event.target.checked)
    console.log(event.target.id)
    switch (event.target.id) {
      case "check-up":
        return setScheduleCheckup(event.target.checked);
      case "subscription":
        return setSubscription(event.target.checked);
      case "email-notifications":
        return setEmailNotifications(event.target.checked);
      case "desktop-notifications":
        return setDesktopNotications(event.target.checked);
      default:
        return null;
    }
  };

  return (
    <div className="px-7 w-full h-full overflow-y-auto w-full bg-white">
      <p className="text-lg font-medium md:text-[25px] mb-8">Notifications</p>
      <div className="border-t space-y-7 border-ash-4 w-full pt-7">
        <p className="text-base font-semibold md:text-[18px]">
          Notify me when...
        </p>
        <div className="flex space-x-2">
          <input
            type="checkbox"
            id="check-up"
            name="check-up"
            checked={scheduleCheckup}
            className="h-[24px] w-[24px]"
            onChange={inputChangeHandler}
          />
          <label
            htmlFor="check-up"
            className="pt-0.5 text-ash5 text-base md:text-[16px]"
          >
            Checkup is scheduled
          </label>
        </div>
        <div className="flex space-x-2">
          <input
            type="checkbox"
            id="subscription"
            name="subscription"
            checked={subscription}
            className="h-[24px] w-[24px]"
            //  className={styles.checkbox}
            onChange={inputChangeHandler}
          />
          <label
            htmlFor="subscription"
            className="pt-0.5 text-ash5 text-base md:text-[16px]"
          >
            Subscription is due
          </label>
        </div>

        <div className={`flex justify-between w-full`}>
          {" "}
          <div className="space-y-1">
            {" "}
            <p className="text-base font-semibold md:text-[18px]">
              Email notifications
            </p>
            <p className="text-sm text-ash5 md:text-[13px]">
              Receive email whenever an activity occurs on your dashboard
            </p>{" "}
          </div>
          <ToggleButton
          id="email-notifications"
          toggleButton={inputChangeHandler}
          isToggle={emailNotifications}/> 
        </div>
        <div className={`flex justify-between w-full`}>
          {" "}
          <div className="space-y-1">
            {" "}
            <p className="text-base font-semibold md:text-[18px]">
            Desktop notifications
            </p>
            <p className="text-sm text-ash5 md:text-[13px]">
            Receive desktop notifications when you are online on your PC
            </p>{" "}
          </div>
          <ToggleButton
          id="desktop-notifications"
          toggleButton={inputChangeHandler}
          isToggle={desktopNotications} />
        </div>
      </div>
    </div>
  );
};

export default NotificationsTab;
