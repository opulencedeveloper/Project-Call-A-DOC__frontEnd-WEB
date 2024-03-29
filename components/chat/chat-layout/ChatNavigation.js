import BackDrop from "@/components/UI/BackDrop";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
//import AppointmentJourney from "../dashboard-ui/AppointmentJourney";
import { useState } from "react";


const ChatNavigation = (props) => {
  const [startAppointment, setStartAppointment] = useState(false);
  const router = useRouter();
  const activeLink = router.pathname;
  const {type, toggleChatFolderMobileView,} = props;


  const link = type === "doctor" ? "/doctor-dashboard" : "/patient-dashboard";

  const navLinks = [
    {
      icon1: "home-icon1",
      icon2: "home-icon2",
      link: link,
    },
    {
      icon1: "appointment-icon1",
      icon2: "appointment-icon2",
      link: `${link}/appointments`,
    },
    {
      icon1: "folder-icon-white",
      icon2: "folder-icon-gray",
      link: `${link}/myfolder`,
    },
    {
      icon1: "settings-icon-white",
      icon2: "settings-icon-gray",
      link: `${link}/settings`,
    },
    {
      icon1: "help",
      icon2: "help",
      link: "/dashboard/help",
    },
  ];

  if (type === "doctor") {
    navLinks.splice(2, 1);
  }

  // const startAppointmentHandler = () => {
  //   setStartAppointment(prevVal => !prevVal);
  // }

  return (
    <div className="flex flex-col h-full items-center pb-5 justify-between w-28 items-start hidden 2xl:flex">
      {/* {startAppointment && <BackDrop><AppointmentJourney endAppointmentHandler={startAppointmentHandler} /></BackDrop>} */}
      <div className="space-y-14 w-full">
        <div className="flex justify-center">
          <Image
            src="/images/logo/logo2.svg"
            alt="call a doctor logo"
            className="h-auto w-auto"
            
            width={576}
            height={320}
          />
        </div>
        <div className="flex flex-col items-center space-y-5">
          {navLinks.map((content, index) => {
            const bgColor = activeLink === content.link ? "bg-custom" : "bg-custom2";
            return  <Link
              href={content.link}
              key={index}
              className={`${bgColor} px-5 py-2.5 rounded-lg`}
            >
              <Image
                src={activeLink === content.link ? `/images/icon/${content.icon1}.svg` : `/images/icon/${content.icon2}.svg`}
                alt={content.icon1}
                className="h-auto w-auto"
                width={13.5}
                height={13.87}
              />{" "}
            </Link>
})}
        </div>
      </div>
      {/* <div 
      onClick={startAppointmentHandler}
      className="cursor-pointer w-max px-4 py-3 text-custom1 rounded-md flex items-center justify-center space-x-7 bg-custom13">
        
        <Image
          src="/images/icon/add.svg"
          alt="add-icon"
          className="h-auto w-auto"
          width={32}
          height={32}
        />
      </div> */}
    </div>
  );
};

export default ChatNavigation;
