import { useState } from "react";
import MyProfileNavigation from "./MyProfileNavigation";
import NotificationsTab from "./SettingsTabs/NotificationsTab";
import ProfileTab from "./SettingsTabs/ProfileTab";
import SecurityTab from "./SettingsTabs/SecurityTab";
import SubscriptionTab from "./SettingsTabs/SubscriptionTab";
import ProfileUpdateSuccess from "./ProfileUpdateSuccess";

const tabComponents = {
  "My Profile": ProfileTab,
  Security: SecurityTab,
  Notifications: NotificationsTab,
  Subscriptions: SubscriptionTab,
};

const MyProfile = () => {
  const [selectedTab, setSelectedTab] = useState("My Profile");
  const [profileUpdateSuccess, setProfileUpdateSuccess] = useState(false);

  const selectTabHandler = (tab) => {
    setSelectedTab(tab);
  };

  const SelectedTabComponent = tabComponents[selectedTab];
  const setProfileUpdateHandler = (val) => {
    setProfileUpdateSuccess(val);
  };
  return (
    <div className="flex flex-col h-[80%] w-full bg-white md:flex-row ">
      {profileUpdateSuccess && (
        <ProfileUpdateSuccess
          setProfileUpdateHandler={setProfileUpdateHandler}
        />
      )}
      <MyProfileNavigation selectTabHandler={selectTabHandler} />
      {SelectedTabComponent && (
        <SelectedTabComponent
          setProfileUpdateHandler={setProfileUpdateHandler}
        />
      )}
    </div>
  );
};

export default MyProfile;
