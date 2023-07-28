import { useState } from "react";

const navLinks = ["My Profile", "Security", "Notifications", "Subscriptions"];

const MyProfileNavigation = (props) => {
  const [selectedTab, setSelectedTab] = useState("My Profile");

  const changeTabHandler = (tab) => {
    setSelectedTab(tab);
    props.selectTabHandler(tab);
  };

  return (
    <div className="flex flex-row h-max w-full border-r mb-10 md:mb-0 md:space-y-5 md:w-52 md:flex-col md:h-full">
      {navLinks.map((content, index) => {
        const buttonBgColor =
          content === selectedTab ? "bg-custom-g5 text-custom" : "text-ash6";
        return (
          <button
            key={index}
            onClick={() => changeTabHandler(content)}
            className={`${buttonBgColor} flex items-center justify-center font-medium h-8 w-[144px] text-[10px] rounded-full md:h-[48px] md:text-base`}
          >
            {content}
          </button>
        );
      })}
    </div>
  );
};

export default MyProfileNavigation;
