import useHttp from "@/hooks/useHttp";

import NotificationDecisonButton from "./NotificationDecisonButton";
import { useState } from "react";

const UnReadCheckupsNotification = (props) => {
  const [showSuccessMessage, setShowSuccessMessage] = useState();
  const { error, sendRequest: fectCheckupRequest } = useHttp();

  const {
    unReadCheckUpNotification,
    userType,
    notificationsSuccessMessageHandler,
    toggleNotifications,
    token,
    setLoadingStateHandler,
  } = props;

  const fectCheckupRequestResponse = (res) => {
    const { status, message } = res;

    if (status === "success") {
      toggleNotifications();
      setLoadingStateHandler(false);
      notificationsSuccessMessageHandler();
    }
  };

  const acceptCheckupHandler = (checkupId) => {
    setLoadingStateHandler(true);
    
    fectCheckupRequest(
      {
        url: "customer/checkups/acceptcheckup",
        token: token,
        method: "POST",
        body: { checkupid: checkupId },
      },
      fectCheckupRequestResponse
    );
    toggleNotifications;
  };

  if (error) {
    console.log("The error");
    setLoadingStateHandler(false);
  }

  return (
    <>
      {" "}
      {unReadCheckUpNotification.map(
        (notification, index) => (
          <div
            key={index}
            className="flex flex-col py-5 justify-between items-center border-b md:flex-row"
          >
            <p className="text-base my-2 w-full md:w-[70%] md:text-lg">
              {`Doctor ${notification.doctor.firstname} ${notification.doctor.lastname} requested a checkup with you`}{" "}
            </p>
            <NotificationDecisonButton
              acceptButtonLabel="Accept"
              rejectButtonLabel="Reject"
              accept={() => acceptCheckupHandler(notification.checkupid)}
              // accept={() => acceptCheckupHandler(notification.checkupid)}
            />
          </div>
        )
        // <div
        //   key={index}
        //   className="flex flex-col py-5 justify-between items-center border-b md:flex-row"
        // >
        //   <p className="text-base my-2 w-full md:w-[70%] md:text-lg">
        //     {` A patient with appointment( ${notification.checkupid}) has accepted your appointment`}{" "}
        //   </p>
        //   <NotificationDecisonButton
        //     acceptButtonLabel="Confirm"
        //     accept={() => acceptCheckupHandler(notification.checkupid)}
        //   />
        // </div>
      )}
    </>
  );
};

export default UnReadCheckupsNotification;
