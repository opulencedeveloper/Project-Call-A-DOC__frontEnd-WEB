import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import BackDrop from "@/components/UI/BackDrop";
import Image from "next/image";
import Link from "next/link";
import AppointmentJourney from "../dashboard-ui/AppointmentJourney";



const DashBoardMobileNavigation = (props) => {
  const [startAppointment, setStartAppointment] = useState(false);
  const router = useRouter(); 
  const activeLink = router.pathname;
  const { type, toggleDrawer } = props;

  useEffect(() => {
    const handleBeforeUnload = (e) => {
      e.preventDefault();
      const remeberMe = localStorage.getItem("remeberMe");
      if (remeberMe === "false") {
        console.log("To return null")
        localStorage.setItem("token", "");
      }
      console.log("User is leaving the pageeeeeeeeeeeeeeeeeeeeeeeeee...");
      return;
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);

  const startAppointmentHandler = () => {
    toggleDrawer();
    setStartAppointment((prevVal) => !prevVal);
  };

  const link = type === "Doctor" ? "/doctor-dashboard" : "/patient-dashboard";

  const pageContent = [
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
      icon1: "folder-icon1",
      icon2: "folder-icon2",
      link: `${link}/my-folder`,
      title: "My Folder",
    },
    {
      icon1: "settings",
      icon2: "settings",
      link: "dashboard",
      title: "Settings",
    },
    {
      icon1: "help",
      icon2: "help",
      link: "dashboard",
      title: "Help",
    },
  ];
  return (
    <div className="flex flex-col justify-between py-14 h-full">
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
            // ""
            width={576}
            height={320}
          />
        </div>
        <div className="space-y-5">
          {pageContent.map((content, index) => {
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
                  
                  width={13.5}
                  height={13.87}
                />{" "}
                <p className={textColor}>{content.title}</p>
              </Link>
            );
          })}
        </div>
      </div>
      <div
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
          
          width={32}
          height={32}
        />
      </div>{" "}
    </div>
  );
};

export default DashBoardMobileNavigation;
