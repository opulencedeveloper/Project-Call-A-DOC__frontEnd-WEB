import { useContext, useEffect, useState } from "react";

import Image from "next/image";

import DashBoardMobileNavigation from "../dashboard-layout/DashBoardMobileNavigation";
import Portal from "@/components/UI/Portal";
import useHttp from "@/hooks/useHttp";
import AuthContext from "@/store/context-store/auth-context";
import NotificationsLayout from "./NotificationsLayout";
import UnReadAppointmentNotification from "./UnReadAppointmentNotification";
import UnReadCheckupsNotification from "./UnReadCheckupsNotification";
import SuccessMessage from "./SuccessMessage";
import BackDrop from "@/components/UI/BackDrop";
import LoadingSpinner from "@/components/UI/LoadingSpinner";

const currentDate = new Date();

const options = {
  weekday: "long",
  day: "numeric",
  month: "long",
  year: "numeric",
};

const formattedDate = currentDate.toLocaleDateString("en-US", options);
let userType;
if (typeof window !== "undefined") {
  userType = localStorage.getItem("userType");
}

let navAnimationClass = "";

const Header = (props) => {
  const { title, type, toggleChatFolderMobileView, patientId } = props;
  const [open, setOpen] = useState(false);
  const [showNotification, setShowNotifications] = useState(false);
  const [notifications, setNotifications] = useState([]);
  const [notificationButtonActionState, setNotificationButtonActionState] =
    useState(false);
  const [notificationButtonHttpRequest, setNotificationButtonHttpRequest] =
    useState(false);
  const [reloadComponent, setReloadComponent] = useState(false);
  const [unReadCheckUpNotification, setUnReadCheckUpNotification] = useState(
    []
  );
  const [isOpen, setIsOpen] = useState(false);
  const authCtx = useContext(AuthContext);
  const { token } = authCtx;
  const { error, sendRequest: fetchNotifications } = useHttp();
  

  useEffect(() => {
    console.log("Header effect called");

    const myResponse = (res) => {
      const { status, message, data, totalrecords } = res;
      console.log("the data is", data);
      console.log("The appoitments from the header is", data);
      console.log("Total app rec", totalrecords);

      setNotifications(data);
      if (
        status === "success" &&
        message === "Appointment Booked Successfully"
      ) {
        return;
      }
    };

    const unreadCheckupResponse = (res) => {
      const { status, message, data, totalrecords } = res;
      console.log("unread checkupsss", data);
      console.log("unread checkupsss length", data.length);
      //  setNotificationsIndicator((prev) => prev + data.length);
      setUnReadCheckUpNotification(data);
    };

    const userType = localStorage.getItem("userType");

    const url =
      userType === "patient"
        ? "customer/fetchunreadappointments"
        : "doctor/fetchunreadappointments";
    console.log("In the if, url is", url);
    fetchNotifications(
      {
        url: url,
        token: token,
      },
      myResponse
    );

    if (userType === "patient") {
      fetchNotifications(
        {
          url: `customer/fetchunreadcheckups?patientid=${patientId}`,
          token: token,
        },
        unreadCheckupResponse
      );
    }

    //fetchNotifications();
  }, [fetchNotifications, token, reloadComponent]);

  const toggleNavHandler = () => {
    setOpen((prev) => !prev);
    console.log("Clicked");
  };

  const toggleDrawer = () => {
    if (isOpen) {
      navAnimationClass = "";
      setIsOpen((prevExpenses) => {
        return !prevExpenses;
      });
    } else {
      navAnimationClass = "open";
      setIsOpen((prevExpenses) => {
        return !prevExpenses;
      });
    }
    // setIsOpen(!isOpen);
  };

  const toggleNotifications = () => {
    setShowNotifications((prev) => !prev);
  };

  const notificationsSuccessMessageHandler = () => {
    setNotificationButtonActionState((prev) => !prev);
  };

  const setLoadingStateHandler = (value) => {
    console.log("Reload");
    setReloadComponent((prev) => !prev);
    setNotificationButtonHttpRequest(value);
  };

  return (
    <>
      {" "}
      <div className={"flex relative z-10 h-max justify-between items-center"}>
        <Portal>
          {" "}
          <div
            className={`fixed inset-y-0 right-0 z-50 w-64 bg-custom1 shadow-lg transform ${
              isOpen ? "translate-x-0" : "translate-x-full"
            } transition-transform duration-300 ease-in-out`}
          >
            <DashBoardMobileNavigation
              toggleChatFolderMobileView={toggleChatFolderMobileView}
              toggleDrawer={toggleDrawer}
              type={userType}
            />{" "}
          </div>
        </Portal>

        <div className="flex items-center space-x-3">
          <button
            className={`${navAnimationClass} block hamburger 2xl:hidden focus:outline-none`}
            type="button"
            onClick={toggleDrawer}
          >
            <span className="hamburger-top"></span>
            <span className="hamburger-middle"></span>
            <span className="hamburger-bottom"></span>
          </button>
          <div className="space-y-1 md:space-y-2.5">
            {" "}
            <p className="font-semibold text-base line-clamp-1 text-ellipsis lg:text-4xl">
              {title}
            </p>
            <p className="text-ash2 text-xs lg:text-lg">{formattedDate}</p>
          </div>
        </div>

        <button
          onClick={toggleNotifications}
          className="h-10 w-10 z-20 relative cursor-pointer md:w-14 md:h-14"
        >
          {" "}
          <div className="absolute top-2 right-1 w-4 h-4 bg-red-500 text-white text-center rounded-full flex items-center justify-center text-sm md:w-5 md:h-5 md:right-2 md:text-base">
            {unReadCheckUpNotification.length + notifications.length}
          </div>
          <Image
            src="/images/icon/notification-icon.svg"
            alt="doctor"
            className="h-full w-full"
            priority
            loading="eager"
            width={48.81}
            height={62.13}
          />{" "}
        </button>
      </div>
      {/* </div> */}
      {notificationButtonActionState && (
        <BackDrop>
          {" "}
          <SuccessMessage
            successMessageHandler={notificationsSuccessMessageHandler}
            successMessage="Sucess"
          />{" "}
        </BackDrop>
      )}
      {showNotification && (
        <NotificationsLayout toggleNotifications={toggleNotifications}>
          {notifications.length === 0 &&
          unReadCheckUpNotification.length === 0 ? (
            <p className="text-base text-center text-ash2 mt-10">
              You have no unread notification
            </p>
          ) : null}
          {notificationButtonHttpRequest ? (
            <LoadingSpinner pageHeight="h-full" />
          ) : (
            <>
              <UnReadAppointmentNotification
                token={token}
                notifications={notifications}
                userType={userType}
              />
              {userType === "patient" && (
                <UnReadCheckupsNotification
                  token={token}
                  setLoadingStateHandler={setLoadingStateHandler}
                  toggleNotifications={toggleNotifications}
                  notificationsSuccessMessageHandler={
                    notificationsSuccessMessageHandler
                  }
                  unReadCheckUpNotification={unReadCheckUpNotification}
                  userType={userType}
                />
              )}
            </>
          )}
        </NotificationsLayout>
      )}
    </>
  );
};

export default Header;
