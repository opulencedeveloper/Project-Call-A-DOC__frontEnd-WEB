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
  const {type} = props;

  const startAppointmentHandler = () => {
    setStartAppointment(prevVal => !prevVal);
  }


  const pageContent = [
    {
      icon1: "home-icon1",
      icon2: "home-icon2",
      link: "/chat",
      title: "Home",
    },
    {
      icon1: "appointment-icon1",
      icon2: "appointment-icon2",
      link: `/appointments`,
      title: "Appointments",
    },
    {
      icon1: "folder-icon1",
      icon2: "folder-icon2",
      link: `/my-folder`,
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
          {pageContent.map((content, index) => {
            const bgColor = activeLink === content.link ? "bg-custom" : "bg-custom2";
            const textColor = activeLink === content.link ? "text-custom1" : "text-ash2";
            // console.log("active",act )
            // console.log(content.link);
            return  <Link
              href={content.link}
              key={index}
              className={`${bgColor} px-5 py-2.5 rounded-lg`}
            >
              <Image
                src={activeLink === content.link ? `/images/icon/${content.icon1}.svg` : `/images/icon/${content.icon2}.svg`}
                alt={content.title}
                className="h-auto w-auto"
                width={13.5}
                height={13.87}
              />{" "}
            </Link>
})}
        </div>
      </div>
      <div 
      onClick={startAppointmentHandler}
      className="cursor-pointer w-max px-4 py-3 text-custom1 rounded-md flex items-center justify-center space-x-7 bg-custom13">
        
        <Image
          src="/images/icon/add.svg"
          alt="add-icon"
          className="h-auto w-auto"
          width={32}
          height={32}
        />
      </div>
    </div>
  );
};

export default ChatNavigation;
