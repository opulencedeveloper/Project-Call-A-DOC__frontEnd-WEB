import Header from "@/components/dashboard/dashboard-ui/Header";
import DashBoardLayout from "@/components/dashboard/dashboard-layout/DashBoardLayout";
import MyProfile from "@/components/dashboard/patient/settings/MyProfile";

let isOnline = false;

const Settings = () => {
  return (
    <DashBoardLayout type="Patient">
      <div className="h-full w-full bg-custom-8">
        <Header title="Account settings" type="Patient" />
        <MyProfile />
      </div>
    </DashBoardLayout>
  );
};

export default Settings;
