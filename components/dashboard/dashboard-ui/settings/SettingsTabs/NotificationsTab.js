import { useRouter } from "next/router";
import { useCallback, useEffect, useState } from "react";
import ToggleButton from "../ToggleButton";
import useHttp from "@/hooks/useHttp";
import LoadingSpinner from "@/components/UI/LoadingSpinner";

const NotificationsTab = (props) => {
  const [scheduleCheckup, setScheduleCheckup] = useState(false);
  const [subscription, setSubscription] = useState(false);
  const [emailNotifications, setEmailNotifications] = useState(false);
  const [desktopNotications, setDesktopNotications] = useState(true);
  const { isLoading, error, sendRequest: sendHttpRequest } = useHttp();
  const [userData, setUserData] = useState([]);
  const router = useRouter();

  const { token, type, setProfileUpdateHandler } = props;

  const myResponse = useCallback(
    (res) => {
      const { status, doctor, customer, message } = res;
      const data = doctor || customer;
      if (status === "success" && !message) {
        console.log("data", data);
        setDesktopNotications(data.desktopnotify.trim() === "1" ? true : false);
        setScheduleCheckup(data.checkupscheduled.trim() === "1" ? true : false);
        setEmailNotifications(data.emailnotify.trim() === "1" ? true : false);
        setSubscription(data.subscriptiondue.trim() === "1" ? true : false);
        return;
      }

      if (status === "success") {
        setProfileUpdateHandler(true, message);
      }
    },
    [setProfileUpdateHandler]
  );

  useEffect(() => {
    const url = type === "Doctor" ? "doctor" : "customer";
    sendHttpRequest(
      {
        url: url,
        token: token,
      },
      myResponse
    );
  }, [sendHttpRequest, myResponse, token]);

  useEffect(() => {
    if (error === "Unauthenticated" || error === "Not Authorized") {
      router.replace("signin");
    }
  }, [error, router]);

  const inputChangeHandler = (event) => {
    const urlMap = {
      "check-up":
        type === "Doctor"
          ? "doctor/togglecheckupschedulednotification"
          : "customer/togglecheckupschedulednotification",
      subscription: "customer/togglesubscriptionduenotification",
      "email-notifications":
        type === "Doctor"
          ? "doctor/toggleemailnotification"
          : "customer/toggleemailnotification",
      "desktop-notifications":
        type === "Doctor"
          ? "doctor/toggledesktopnotification"
          : "customer/toggledesktopnotification",
    };

    const targetId = event.target.id;
    const url = urlMap[targetId];

    if (!url) {
      return null; // Handle the case where the targetId is not found in the urlMap
    }

    const body = { status: event.target.checked ? "1" : "0" };
    const httpRequestConfig = {
      url: url,
      token: token,
      method: "POST",
      body: body,
    };

    return sendHttpRequest(httpRequestConfig, myResponse);
  };

  // const inputChangeHandler = (event) => {
  //   const url = type === "Doctor" ? "doctor" : "customer";
  //   switch (event.target.id) {
  //     case "check-up":
  //       return sendHttpRequest(
  //         {
  //           url: `${url}/togglecheckupschedulednotification`,
  //           token: token,
  //           method: "POST",
  //           body: { status: event.target.checked ? "1" : "0" },
  //         },
  //         myResponse
  //       );
  //     case "subscription":
  //       return sendHttpRequest(
  //         {
  //           url: "customer/togglesubscriptionduenotification",
  //           token: token,
  //           method: "POST",
  //           body: { status: event.target.checked ? "1" : "0" },
  //         },
  //         myResponse
  //       );
  //     case "email-notifications":
  //       return sendHttpRequest(
  //         {
  //           url: `${url}/toggleemailnotification`,
  //           token: token,
  //           method: "POST",
  //           body: { status: event.target.checked ? "1" : "0" },
  //         },
  //         myResponse
  //       );
  //     case "desktop-notifications":
  //       return sendHttpRequest(
  //         {
  //           url: `${url}/toggledesktopnotification`,
  //           token: token,
  //           method: "POST",
  //           body: { status: event.target.checked ? "1" : "0" },
  //         },
  //         myResponse
  //       );
  //     default:
  //       return null;
  //   }
  // };

  if (isLoading || error) {
    return <LoadingSpinner errorMessage={error} pageHeight="h-full" />;
  }

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
        {type === "Patient" && (
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
        )}

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
            isToggle={emailNotifications}
          />
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
            isToggle={desktopNotications}
          />
        </div>
      </div>
    </div>
  );
};

export default NotificationsTab;
