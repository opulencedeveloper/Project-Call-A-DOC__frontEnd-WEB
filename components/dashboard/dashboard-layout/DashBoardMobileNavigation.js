import { useEffect, useState } from "react";
import { useRouter } from "next/router";

import BackDrop from "@/components/UI/BackDrop";
import Image from "next/image";
import Link from "next/link";
import AppointmentJourney from "../dashboard-ui/AppointmentJourney";

const DashBoardMobileNavigation = (props) => {
  const [startAppointment, setStartAppointment] = useState(false);
  const router = useRouter();
  const activeLink = router.pathname;
  const { type, toggleDrawer, toggleChatFolderMobileView } = props;

  useEffect(() => {
    const handleBeforeUnload = (e) => {
      e.preventDefault();
      const remeberMe = localStorage.getItem("remeberMe");
      if (remeberMe === "false") {
        console.log("To return null");
        localStorage.setItem("token", "");
      }
      console.log("User is leaving the pageeeeeeeeeeeeeeeeeeeeeeeeee...");
      return;
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  const startAppointmentHandler = () => {
    toggleDrawer();
    setStartAppointment((prevVal) => !prevVal);
  };

  const toggleChatFolderMobileViewHandler = () => {
    toggleDrawer();
    toggleChatFolderMobileView();
  }

  const link = type === "doctor" ? "/doctor-dashboard" : "/patient-dashboard";

  const navLinks = [
    {
      icon1: "home-icon1",
      icon2: "home-icon2",
      link: link,
      title: "Home",
    },
    {
      icon1: "appointment-icon1",
      icon2: "appointment-icon2",
      link: `${link}/appointments`,
      title: "Appointments",
    },
    {
      icon1: "folder-icon-white",
      icon2: "folder-icon-gray",
      link: `${link}/myfolder`,
      title: "My Folder",
    },
    {
      icon1: "settings-icon-white",
      icon2: "settings-icon-gray",
      link: `${link}/settings`,
      title: "Settings",
    },
    {
      icon1: "help",
      icon2: "help",
      link: "/dashboard/help",
      title: "Help",
    },
  ];

//   if(type === "doctor") {
// navLinks.splice(2, 1);
//   }

  return (
    <div className="flex flex-col justify-between overflow-y-auto pt-14 pb-2 h-screen">
      {" "}
      {startAppointment && (
        <BackDrop>
          <AppointmentJourney endAppointmentHandler={startAppointmentHandler} />
        </BackDrop>
      )}
      <div className="space-y-14 w-full">
        <div className="flex justify-center">
          <Image
            src="/images/logo/logo.svg"
            alt="call a doctor logo"
            className="h-auto w-auto"
            loading="eager"
            priority
            width={576}
            height={320}
          />
        </div>
        <div className="space-y-5">
          {navLinks.map((content, index) => {
            const bgColor =
              activeLink === content.link ? "bg-custom" : "bg-custom2";
            const textColor =
              activeLink === content.link ? "text-custom1" : "text-ash2";
            return (
              <Link
                href={content.link}
                key={index}
                onClick={toggleDrawer}
                className={`${bgColor} cursor-pointer flex space-x-3 rounded-tl-md rounded-bl-md py-3 pl-6`}
              >
                <Image
                  src={
                    activeLink === content.link
                      ? `/images/icon/${content.icon1}.svg`
                      : `/images/icon/${content.icon2}.svg`
                  }
                  alt={content.title}
                  className="h-auto w-auto"
                  loading="eager"
                  priority
                  width={13.5}
                  height={13.87}
                />{" "}
                <p className={textColor}>{content.title}</p>
              </Link>
            );
          })}
        </div>
      </div>
      {activeLink.startsWith("/chat") && type === "doctor" && <button
        onClick={toggleChatFolderMobileViewHandler}
        className="cursor-pointer w-full text-custom1 rounded-md flex items-center justify-center space-x-7 bg-custom13 py-5 px-2 lg:hidden"
      >
        <p>
          View Folder
        </p>
        <Image
          src="/images/icon/plus-circle.svg"
          alt="plus-circle-icon"
          className="h-auto w-auto"
          loading="eager"
          priority
          width={32}
          height={32}
        />
      </button>}
     
     {type === "patient" && <button
        onClick={startAppointmentHandler}
        className="cursor-pointer w-full text-custom1 rounded-md flex items-center justify-center space-x-7 bg-custom13 py-5 px-2"
      >
        <p>
          Make an
          <br />
          Appointment
        </p>
        <Image
          src="/images/icon/plus-circle.svg"
          alt="plus-circle-icon"
          className="h-auto w-auto"
          loading="eager"
          priority
          width={32}
          height={32}
        />
      </button>}{" "}
    </div>
  );
};

export default DashBoardMobileNavigation;
