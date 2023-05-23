import Image from "next/image";
import Link from "next/link";

const pageContent = [
  {
    icon: "home",
    icon2: "home",
    link: "/dashboard",
    title: "Home",
    color: "bg-custom",
    textColor: "text-custom1",
  },
  {
    icon: "appointment-gray",
    icon2: "appointment-gray",
    link: "/dashboard/appointments",
    title: "Appointments",
    color: "",
    textColor: "text-ash2",
  },
  {
    icon: "folder",
    icon2: "folder",
    link: "/dashboard/appointments",
    title: "My Folder",
    color: "",
    textColor: "text-ash2",
  },
  {
    icon: "settings",
    icon2: "settings",
    link: "/dashboard",
    title: "Settings",
    color: "",
    textColor: "text-ash2",
  },
  {
    icon: "help",
    icon2: "help",
    link: "/dashboard",
    title: "Help",
    color: "",
    textColor: "text-ash2",
  },
];

const DashBoardNavigation = () => {
  return (
    <div className="flex flex-col h-full justify-between items-start w-52 hidden 2xl:flex">
      <div className="space-y-14 w-full">
        <div className="flex justify-center">
          <Image
            src="/images/logo/logo.svg"
            alt="call a doctor logo"
            className="h-auto w-auto"
            width={576}
            height={320}
          />
        </div>
        <div className="space-y-5">
          {pageContent.map((content, index) => (
            <Link
              href={content.link}
              key={index}
              className={`${content.color} flex space-x-3 rounded-tr-md rounded-br-md py-3 pl-6`}
            >
              <Image
                src={`/images/icon/${content.icon}.svg`}
                alt={content.title}
                className="h-auto w-auto"
                width={13.5}
                height={13.87}
              />{" "}
              <p className={content.textColor}>{content.title}</p>
            </Link>
          ))}
        </div>
      </div>
      <div 
      className="w-full text-custom1 rounded-md flex items-center justify-center space-x-7 bg-custom13 py-5 px-2">
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
      </div>
    </div>
  );
};

export default DashBoardNavigation;
