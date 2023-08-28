import useHttp from "@/hooks/useHttp";

import NotificationDecisonButton from "./NotificationDecisonButton";

let myAppointmentId = "";

const UnReadAppointmentNotification = (props) => {
  const { error, sendRequest: appointmentRequest } = useHttp();

  const {notifications, userType, toggleNotifications, token} = props;

  const myResponse = (res) => {
    console.log("Id in the response is", myAppointmentId);
    const { status, message } = res;

    if (
      status === "success"
    ) {
      window.open("/chat/" + myAppointmentId, '_blank');
      return;
    }
  };

  const acceptAppointmentHandler = (appointmentId) => {
    
    myAppointmentId = appointmentId;
    const url = props.userType === "doctor" ? "doctor/appointment/acceptappointment" : "customer/appointment/joinappointment";
    appointmentRequest(
      {
        url: url,
        token: token,
        method: "POST",
        body: { appointmentid: appointmentId },
      },
      myResponse
    );
  };

    
  return (
    <>
      {" "}
      {notifications.map((notification, index) =>
        userType === "doctor" ? (
          <div
            key={index}
            className="flex flex-col py-5 justify-between items-center border-b md:flex-row"
          >
            <p className="text-base my-2 w-full md:w-[70%] md:text-lg">
              {` A patient with appointment Id (${notification.appointmentid}) has requested an appointment with you`}{" "}
            </p>
            <NotificationDecisonButton
              acceptButtonLabel="Accept"
              rejectButtonLabel="Reject"
              accept={() => acceptAppointmentHandler(notification.appointmentid)}
            />
          </div>
        ) : (
          <div
            key={index}
            className="flex flex-col py-5 justify-between items-center border-b md:flex-row"
          >
            <p className="text-base my-2 w-full md:w-[70%] md:text-lg">
              {` A doctor with appointment( ${notification.appointmentid}) has has accepted your appointment`}{" "}
            </p> 
            <NotificationDecisonButton
              acceptButtonLabel="Join Chat"
              accept={() => acceptAppointmentHandler(notification.appointmentid)}
            />
          </div>
        )
      )}
    </>
  );
};

export default UnReadAppointmentNotification;
