import { useState } from "react";

const navLinks = ["My Profile", "Security", "Notifications"];

const MyProfileNavigation = () => {
  const [selectedTab, setSelectedTab] = useState("My Profile");

  const changeTabHandler = (tab) => {
    selectedTab(tab);
  };
  return (
    <div className="flex flex-col h-full w-52 border-r space-y-5">
      {navLinks.map((content, links) => {
        const buttonBgColor =
          content === selectedTab ? "bg-custom-g5 text-custom" : "text-ash6";
        return (
          <button
            onClick={() => changeTabHandler(content)}
            className={`${buttonBgColor} font-medium h-[48px] w-[144px]  rounded-full`}
          >
            {content}
          </button>
        );
      })}
    </div>
  );
};

export default MyProfileNavigation;
