import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Navigation from "../UI/Portal";
import { useRouter } from "next/router";
import MobileNavigation from "./MobileNavigation";
import Portal from "../UI/Portal";
//import imageAsset from '/public/images/your-image-asset.webp'
let navAnimationClass = "";

const MainNavigation = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  console.log(router.pathname);

  const activeLink = router.pathname;

  // const toggleNavHandler = () => {
  //   console.log('navAnimationClass')
  //   if(toggleNav) {
  //     navAnimationClass = 'open';
  //     setToggleNav((prevExpenses) => {
  //       return !prevExpenses;
  //     });
  //   } else {
  //     navAnimationClass = '';
  //     setToggleNav((prevExpenses) => {
  //       return !prevExpenses;
  //     });
  //   }
  // };

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

  return (
    <nav className="mt-5 px-5 w-full md:px-12 ">
      <Portal>
        {" "}
        <div
          className={`fixed inset-y-0 -left-64 z-50 w-64 bg-custom1 shadow-lg transform ${
            isOpen ? "translate-x-full" : "translate-x-0"
          } transition-transform duration-300 ease-in-out`}
        >
          <MobileNavigation toggleDrawer={toggleDrawer} />
        </div>{" "}
      </Portal>
      <div className="flex justify-between md:items-start ">
        <div className="flex">
          <Image
            src="/images/logo/logo.svg"
            alt="call a doctor logo"
            className="h-auto w-auto"
            priority
            loading="eager"
            width={576}
            height={320}
          />
          <div className="pt-3 hidden md:flex space-x-8 font-medium  text-base md:text-lg md:ml-10 mr-10 xl:ml-56">
            <Link href="/" className={activeLink === "/" ? "text-custom" : ""}>
              Home
            </Link>
            <Link
              href="/about-us"
              className={activeLink === "/about-us" ? "text-custom" : ""}
            >
              About us
            </Link>
            <Link href="#">Services</Link>
            <Link href="#">Pricing</Link>
          </div>
        </div>

        <div className="hidden lg:flex space-x-3 pt-3 font-normal  text-sm ">
          <Link
            href="/signin"
            className="w-80 h-48 border flex items-center justify-center text-custom border-custom rounded-full"
          >
            Login
          </Link>
          <Link
            href="/signup"
            className="w-162 h-48 flex items-center justify-center text-custom1 bg-custom rounded-full"
          >
            Get Started
          </Link>
        </div>
        <button
          className={`${navAnimationClass} block hamburger mt-7 lg:hidden focus:outline-none`}
          type="button"
          onClick={toggleDrawer}
        >
          <span className="hamburger-top"></span>
          <span className="hamburger-middle"></span>
          <span className="hamburger-bottom"></span>
        </button>
        {/* <div className="lg:hidden flex flex-col mt-3">
          <div className="w-8 h-0.5 mx-4 mb-2 bg-ash" />
          <div className="w-8 h-0.5 mx-4 mb-2 bg-ash" />
          <div className="w-8 h-0.5 mx-4 mb-2 bg-ash" />
        </div> */}
      </div>
      {/* <!-- Mobile Menu --> */}
      {navAnimationClass && <Navigation />}
    </nav>
  );
};
export default MainNavigation;
