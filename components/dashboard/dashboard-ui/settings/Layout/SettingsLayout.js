import { useContext, useState } from "react";

import AuthContext from "@/store/context-store/auth-context"

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
};

const tabComponentsDoctor = {
  ...commonTabs,
  Payments: PaymentsTab,
  Notifications: NotificationsTab,
};

let profileUpdateMessage
let deactiveOrDeleteAccount = false;
const SettingsLayout = (props) => {
  const [selectedTab, setSelectedTab] = useState("My Profile");
  const [profileUpdateSuccess, setProfileUpdateSuccess] = useState(false);
  const [isAddBankDetails, setIsAddBankDetails] = useState(false);
  const authCtx = useContext(AuthContext); 
  const { token } = authCtx;
  const { type } = props;

  const selectTabHandler = (tab) => {
    setSelectedTab(tab);
  };

  const startAddingBankDetailsHandler = (val) => {
    setIsAddBankDetails(val);
    
  };

  const setProfileUpdateHandler = (val, message, deactiveOrDeleteAccountVal) => {
    profileUpdateMessage = message;
    deactiveOrDeleteAccount =  deactiveOrDeleteAccountVal
    setProfileUpdateSuccess(val);
  };

  const SelectedTabComponent =
    type === "Doctor"
      ? tabComponentsDoctor[selectedTab]
      : tabComponentsPatient[selectedTab];


  return (
    <div className="flex flex-col h-[80%] w-full bg-white md:flex-row ">
      {profileUpdateSuccess && (
        <ProfileUpdateSuccess
        profileUpdateMessage={profileUpdateMessage}
        deactiveOrDeleteAccount={deactiveOrDeleteAccount}
          setProfileUpdateHandler={setProfileUpdateHandler}
        />
      )}
      {isAddBankDetails && (
        <AddBankDetails
        token={token}
          startAddingBankDetailsHandler={startAddingBankDetailsHandler}
        />
      )}
      <SettingsNavigation type={type} selectTabHandler={selectTabHandler} />
      {SelectedTabComponent && (
        <SelectedTabComponent
        token={token}
          type={type}
          startAddingBankDetailsHandler={startAddingBankDetailsHandler}
          setProfileUpdateHandler={setProfileUpdateHandler}
        />
      )}
    </div>
  );
};

export default SettingsLayout;
