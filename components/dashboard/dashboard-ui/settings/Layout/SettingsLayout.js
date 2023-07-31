import { useState } from "react";

import SettingsNavigation from "./SettingsNavigation";
import NotificationsTab from "../SettingsTabs/NotificationsTab";
import ProfileTab from "../SettingsTabs/ProfileTab";
import SecurityTab from "../SettingsTabs/SecurityTab";
import SubscriptionTab from "../SettingsTabs/SubscriptionTab";
import ProfileUpdateSuccess from "../ProfileUpdateSuccess";
import PaymentsTab from "@/components/dashboard/doctor/settings/Payments";
import AddBankDetails from "@/components/dashboard/doctor/settings/AddBankDetails";

const commonTabs = { "My Profile": ProfileTab, Security: SecurityTab };

const tabComponentsPatient = {
  ...commonTabs,
  Notifications: NotificationsTab,
  Subscriptions: SubscriptionTab,
};

const tabComponentsDoctor = {
  ...commonTabs,
  Payments: PaymentsTab,
  Notifications: NotificationsTab,
};

const SettingsLayout = (props) => {
  const [selectedTab, setSelectedTab] = useState("My Profile");
  const [profileUpdateSuccess, setProfileUpdateSuccess] = useState(false);
  const { type } = props;

  const selectTabHandler = (tab) => {
    console.lo
    setSelectedTab(tab);
  };

  const SelectedTabComponent =
    type === "Doctor"
      ? tabComponentsDoctor[selectedTab]
      : tabComponentsPatient[selectedTab];
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
      <AddBankDetails />
      <SettingsNavigation type={type} selectTabHandler={selectTabHandler} />
      {SelectedTabComponent && (
        <SelectedTabComponent
          type={type}
          setProfileUpdateHandler={setProfileUpdateHandler}
        />
      )}
    </div>
  );
};

export default SettingsLayout;
