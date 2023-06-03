import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

const pageContent = [
  {
    icon1: "home-icon1",
    icon2: "home-icon2",
    link: "/",
    title: "Home",
  },
  {
    icon1: "appointment-icon1",
    icon2: "appointment-icon2",
    link: "/about-us",
    title: "About Us",
  },
  // {
  //   icon1: "folder-icon1",
  //   icon2: "folder-icon2",
  //   link: "/fol",
  //   title: "Services",
  // },
  // {
  //   icon1: "settings",
  //   icon2: "settings",
  //   link: "/okk",
  //   title: "Pricing",
  // },
  {
    icon1: "settings",
    icon2: "settings",
    link: "login",
    title: "Login",
  },
  {
    icon1: "settings",
    icon2: "settings",
    link: "signup",
    title: "Signup",
  },
];

const MobileNavigation = (props) => {
  const router = useRouter();
  const activeLink = router.pathname;
  const { toggleDrawer } = props;

  return (
    <div className="flex flex-col h-full">
      <div className="flex justify-center py-5">
        <Image
          src="/images/logo/logo.svg"
          alt="call a doctor logo"
          className="h-auto w-auto"
         // ""
          width={576}
          height={320}
        />
      </div>
      <div className="space-y-5 bg-custom pt-5 flex-1">
        {pageContent.map((content, index) => {
          const bgColor =
            activeLink === content.link ? "bg-custom" : "bg-custom2";
          const textColor =
            activeLink === content.link ? "text-custom1" : "text-ash";
          return (
            <Link
              href={content.link}
              key={index}
              onClick={toggleDrawer}
              className={`${bgColor} mx-5 border-ash border-b cursor-pointer flex space-x-3 rounded-tr-md rounded-br-md py-3 pl-6`}
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
              <p className={`font-semibold ${textColor}`}>{content.title}</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default MobileNavigation;
