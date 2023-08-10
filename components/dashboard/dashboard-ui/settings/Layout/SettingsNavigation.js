import { useState } from "react";

const commonNavLinks = ["My Profile", "Security"];
const navLinksPatient = [...commonNavLinks, "Subscriptions", "Notifications", ];
const navLinksDoctor = [...commonNavLinks, "Payments", "Notifications"];

const SettingsNavigation = (props) => {
  const [selectedTab, setSelectedTab] = useState("My Profile");
  const { selectTabHandler, type } = props;

  const changeTabHandler = (tab) => {
    setSelectedTab(tab);
    selectTabHandler(tab);
  };

  const navLinks = type === "Doctor" ? navLinksDoctor : navLinksPatient;

  return (
    <div className="flex flex-row h-max w-full justify-between border-r mb-10  md:mb-0 md:space-y-5 md:w-52 md:flex-col md:justify-start md:h-full">
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

export default SettingsNavigation;
