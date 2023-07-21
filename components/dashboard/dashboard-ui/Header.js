import Image from "next/image";
import DashBoardNavigation from "../dashboard-layout/DashBoardNavigation";
import { useState } from "react";
import DashBoardMobileNavigation from "../dashboard-layout/DashBoardMobileNavigation";
import BackDrop from "../../UI/BackDrop";

const currentDate = new Date();

const options = {
  weekday: "long",
  day: "numeric",
  month: "long",
  year: "numeric",
};

const formattedDate = currentDate.toLocaleDateString("en-US", options);

let navAnimationClass = "";

const Header = (props) => {
  const { title, type } = props;
  const [open, setOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

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

  return (
    <div className={`flex flex-col relative z-0 justify-between items-start pb-8 pt-2 md:flex-row md:items-center`}>
      {/* className={`${value} block hamburger mt-7 lg:hidden focus:outline-none`} */}
      <div
        className={`fixed inset-y-0 right-0 z-50 w-64 bg-custom1 shadow-lg transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        <DashBoardMobileNavigation toggleDrawer={toggleDrawer} type={type}/>{" "}
      </div>
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

      <div className="bg-ash4 pl-2 w-full flex rounded-full mr-2 mt-2 h-10 z-20 md:h-12 md:mt-auto md:pl-0 md:w-max">
        <Image
          src="/images/icon/search.svg"
          alt="search-icon"
          className="w-auto h-auto p-2 md:p-4"
          
          width={16}
          height={16}
        />
        <input
          type="text"
          className="py-4 mr-1 w-full rounded-full bg-ash4 placeholder-ash2 text-sm font-light focus:outline-none md:text-base"
          placeholder="Search"
        />{" "}
      </div>
    </div>
  );
};

export default Header;
