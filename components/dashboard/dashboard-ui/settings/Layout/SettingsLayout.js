import { useContext, useEffect, useState } from "react";

import AuthContext from "@/store/context-store/auth-context";

import SettingsNavigation from "./SettingsNavigation";
import NotificationsTab from "../SettingsTabs/NotificationsTab";
import ProfileTab from "../SettingsTabs/ProfileTab";
import SecurityTab from "../SettingsTabs/SecurityTab";
import SubscriptionTab from "../SettingsTabs/SubscriptionTab";
import ProfileUpdateSuccess from "../ProfileUpdateSuccess";
import PaymentsTab from "@/components/dashboard/doctor/settings/PaymentsTab";
import AddBankDetails from "@/components/dashboard/doctor/settings/AddBankDetails";
import LoadingSpinner from "@/components/UI/LoadingSpinner";
import useHttp from "@/hooks/useHttp";

const commonTabs = { "My Profile": ProfileTab, Security: SecurityTab };

const tabComponentsPatient = {
  ...commonTabs,
  Subscriptions: SubscriptionTab,
  Notifications: NotificationsTab,
};

const tabComponentsDoctor = {
  ...commonTabs,
  Payments: PaymentsTab,
  Notifications: NotificationsTab,
};

let profileUpdateMessage;
let deactiveOrDeleteAccount = false;
let doctorId;

const SettingsLayout = (props) => {
  const [selectedTab, setSelectedTab] = useState("My Profile");
  const [profileUpdateSuccess, setProfileUpdateSuccess] = useState(false);
  const [isAddBankDetails, setIsAddBankDetails] = useState(false);
  const { isLoading, error, sendRequest: fetchDoctorId } = useHttp();
  const authCtx = useContext(AuthContext);

  const { token } = authCtx;
  const { type } = props;

  const selectTabHandler = (tab) => {
    setSelectedTab(tab);
  };

  const startAddingBankDetailsHandler = (val) => {
    setIsAddBankDetails(val);
  };

  const setProfileUpdateHandler = (
    val,
    message,
    deactiveOrDeleteAccountVal,
    updatingAccount
  ) => {
    if (updatingAccount !== null || updatingAccount !== undefined) {
      setIsAddBankDetails(updatingAccount);
    }
    profileUpdateMessage = message;
    deactiveOrDeleteAccount = deactiveOrDeleteAccountVal;
    setProfileUpdateSuccess(val);
  };

  useEffect(() => {
    const myUserDataResponse = (res) => {
      const { doctor } = res;
      doctorId = doctor.doctorid;
    };

    if (type === "Doctor" && selectedTab === "My Profile") {
      fetchDoctorId(
        {
          url: "doctor",
          token: token,
        },
        myUserDataResponse
      );
    }
  }, [fetchDoctorId, token]);

  const SelectedTabComponent =
    type === "Doctor"
      ? tabComponentsDoctor[selectedTab]
      : tabComponentsPatient[selectedTab];

  if (isLoading || error) {
    return <LoadingSpinner errorMessage={error} pageHeight="h-full" />;
  }

  return (
    <div className="flex flex-col mt-10 h-[80%] w-full bg-white md:flex-row ">
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
          doctorId={doctorId}
          setProfileUpdateHandler={setProfileUpdateHandler}
          startAddingBankDetailsHandler={startAddingBankDetailsHandler}
        />
      )}
      <SettingsNavigation type={type} selectTabHandler={selectTabHandler} />

      {SelectedTabComponent && (
        <SelectedTabComponent
          doctorId={doctorId}
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
