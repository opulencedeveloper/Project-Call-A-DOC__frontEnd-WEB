import Header from "@/components/dashboard/dashboard-ui/Header";
import UserProfile from "@/components/dashboard/dashboard-ui/UserProfile";
import CheckUp from "@/components/dashboard/patient/home/CheckUp";
import YourActivities from "@/components/dashboard/patient/home/YourActivities";
import DashBoardLayout from "@/components/layout/DashBoardLayout";

export default function DashBoard() {
  return (
    <DashBoardLayout>
       <div className="flex-1 2xl:pr-16"> 
          <Header title={"Welcome Kelvin"} />
          <CheckUp />
          <YourActivities />
        </div>
       <UserProfile />
    </DashBoardLayout>
  );
}
