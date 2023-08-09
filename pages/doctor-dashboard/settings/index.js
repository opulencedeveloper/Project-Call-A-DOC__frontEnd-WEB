import Header from "@/components/dashboard/dashboard-ui/Header";
import DashBoardLayout from "@/components/dashboard/dashboard-layout/DashBoardLayout";
import SettingsLayout from "@/components/dashboard/dashboard-ui/settings/Layout/SettingsLayout";

let isOnline = false;

const Settings = () => {
  return (
    <DashBoardLayout type="doctor">
      <div className="h-full w-full bg-custom-8">
        <Header title="Account settings" type="Doctor" />
        <SettingsLayout type="Doctor"/>
      </div>
    </DashBoardLayout>
  );
};

export default Settings;
