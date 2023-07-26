import Image from "next/image";
import DashBoardNavigation from "../dashboard-layout/DashBoardNavigation";
import { useContext, useEffect, useState } from "react";
import DashBoardMobileNavigation from "../dashboard-layout/DashBoardMobileNavigation";
import BackDrop from "../../UI/BackDrop";
import Portal from "@/components/UI/Portal";
import { useSelector } from "react-redux";
import useHttp from "@/hooks/useHttp";
import AuthContext from "@/store/context-store/auth-context";
import AppointmentDecison from "./AppointmentDecison";

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
  const { title, type } = props;
  const [open, setOpen] = useState(false);
  const [showNotification, setShowNotifications] = useState(false);
  const [notifications, setNotifications] = useState([]);
  const [notificationsIndicator, setNotificationsIndicator] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const authCtx = useContext(AuthContext);
  const { token } = authCtx;
  const { error, sendRequest: fetchNotifications } = useHttp();

  useEffect(() => {
    console.log("Header effect called");
    const myResponse = (res) => {
      const { status, message, data, totalrecords } = res;
      console.log("the data is", data);
      // const notifications = data.map((content) => content.patient);
      // console.log("The appoitments are", notifications);
      console.log("The appoitments from the header is", data);
      setNotificationsIndicator(totalrecords);
      setNotifications(data);
      if (
        status === "success" &&
        message === "Appointment Booked Successfully"
      ) {
        // props.setStepHandler("4");
        //  router.push("/chat/" + appointment.appointmentid);
        return;
      }
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

    //fetchNotifications();
  }, [fetchNotifications, token]);

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

  return (
    <>
      {" "}
      <div
        className={`flex  flex-col relative z-10 justify-between items-start pb-8 pt-2 md:flex-row md:items-center`}
      >
        {/* className={`${value} block hamburger mt-7 lg:hidden focus:outline-none`} */}
        <Portal>
          {" "}
          <div
            className={`fixed inset-y-0 right-0 z-50 w-64 bg-custom1 shadow-lg transform ${
              isOpen ? "translate-x-0" : "translate-x-full"
            } transition-transform duration-300 ease-in-out`}
          >
            <DashBoardMobileNavigation
              toggleDrawer={toggleDrawer}
              type={type}
            />{" "}
          </div>
        </Portal>
        <div className="flex">
          <button
            className={`${navAnimationClass} block hamburger mt-7 mr-5 2xl:hidden focus:outline-none`}
            type="button"
            onClick={toggleDrawer}
          >
            <span className="hamburger-top"></span>
            <span className="hamburger-middle"></span>
            <span className="hamburger-bottom"></span>
          </button>
          <div className="space-y-1 md:space-y-2.5">
            {" "}
            <p className="font-semibold text-xl md:text-4xl">{title}</p>
            <p className="text-ash2 text-xs md:text-lg">{formattedDate}</p>
          </div>
        </div>

        <div className="flex w-full md:w-max">
          <div className="bg-ash4 pl-2 w-full flex-1 flex rounded-full mr-2 mt-2 h-10 z-20 md:h-12 md:mt-auto md:pl-0 md:w-max">
            <Image
              src="/images/icon/search.svg"
              alt="search-icon"
              className="w-auto h-auto p-2 md:p-4"
              priority
              loading="eager"
              width={16}
              height={16}
            />
            <input
              type="text"
              className="py-4 mr-1 w-full rounded-full bg-ash4 placeholder-ash2 text-sm font-light focus:outline-none md:text-base"
              placeholder="Search"
            />{" "}
          </div>
          <button
            onClick={toggleNotifications}
            className="h-12 w-12 z-20 relative cursor-pointer md:w-14 md:h-14"
          >
            {" "}
            <div className="absolute top-2 right-2 w-5 h-5 bg-red-500 text-white text-center rounded-full flex items-center justify-center">
              {notificationsIndicator}
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
      </div>
      {showNotification && (
        <div className="px-5 h-96 relative bg-white z-40">
          <div className="absolute left-0 right-0 top-0 flex justify-between bg-white py-3 px-5 mb-5">
            <div className="text-base font-semibold md:text-2xl">
              Notifications
            </div>

            <button onClick={toggleNotifications}>
              <Image
                src="/images/icon/close.svg"
                alt="close-icon"
                className=" w-auto h-auto"
                priority
                loading="eager"
                width={18.88}
                height={18.88}
              />
            </button>
          </div>
          <div className="h-full overflow-y-auto pt-12">
            {notifications.length === 0 && (
              <p className="text-base text-center text-ash2 mt-10">
                You have no unread notification
              </p>
            )}
            {notifications.map((notification, index) =>
              userType === "doctor" ? (
                <div
                  key={index}
                  className="flex flex-col py-5 justify-between items-center border-b md:flex-row"
                >
                  <p className="text-base my-2 md:text-lg">
                    {` A patient with appointment Id (${notification.appointmentid}) has requested an appointment with you`}{" "}
                  </p>
                  <AppointmentDecison
                    appointmentId={notification.appointmentid}
                    userType={userType}
                    toggleNotifications={toggleNotifications}
                  />
                </div>
              ) : (
                <div
                  key={index}
                  className="flex flex-col py-5 justify-between items-center border-b md:flex-row"
                >
                  <p className="text-base my-2 md:text-lg">
                    {` A doctor with appointment( ${notification.appointmentid}) has has accepted your appointment`}{" "}
                  </p>
                  <AppointmentDecison
                    appointmentId={notification.appointmentid}
                    userType={userType}
                    toggleNotifications={toggleNotifications}
                  />
                </div>
              )
            )}{" "}
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
