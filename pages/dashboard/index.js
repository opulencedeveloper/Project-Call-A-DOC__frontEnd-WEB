import Header from "@/components/dashboard/dashboard-ui/Header";
import UserProfile from "@/components/dashboard/dashboard-ui/UserProfile";
import CheckUp from "@/components/dashboard/home/CheckUp";
import YourActivities from "@/components/dashboard/home/YourActivities";
import DashBoardLayout from "@/components/layout/dashboard-layout";

export default function DashBoard() {
  return (
    <DashBoardLayout>
      <div className="flex flex-col pl-5 pr-3 lg:flex-row 2xl:pl-14 2xl:pr-auto">
        <div className="flex-1 2xl:pr-16">
          <Header title={"Welcome Kelvin"} />
          <CheckUp />
          <YourActivities />
        </div>
        <UserProfile />
      </div>
    </DashBoardLayout>
  );
}
