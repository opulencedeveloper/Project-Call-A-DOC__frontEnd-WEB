import { useState } from "react";
import MyProfileNavigation from "./MyProfileNavigation";
import NotificationsTab from "./SettingsTabs/NotificationsTab";
import ProfileTab from "./SettingsTabs/ProfileTab";
import SecurityTab from "./SettingsTabs/SecurityTab";
import SubscriptionTab from "./SettingsTabs/SubscriptionTab";

const tabComponents = {
  "My Profile": ProfileTab,
  "Security": SecurityTab,
  "Notifications": NotificationsTab,
  "Subscriptions": SubscriptionTab,
};

const MyProfile = () => {
  const [selectedTab, setSelectedTab] = useState("My Profile");

  const selectTabHandler = (tab) => {
    setSelectedTab(tab);
  };

  const SelectedTabComponent = tabComponents[selectedTab];

  return (
    <div className="flex flex-col h-[80%] w-full bg-white md:flex-row ">
      <MyProfileNavigation selectTabHandler={selectTabHandler} />
      {SelectedTabComponent && <SelectedTabComponent />}
    </div>
  );
};

export default MyProfile;
