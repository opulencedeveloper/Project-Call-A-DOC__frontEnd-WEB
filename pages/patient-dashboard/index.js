import Header from "@/components/UI/Header";
import UserProfile from "@/components/dashboard/dashboard-ui/UserProfile";
import CheckUp from "@/components/dashboard/patient/home/CheckUp";
import YourActivities from "@/components/dashboard/patient/home/YourActivities";
import DashBoardLayout from "@/components/dashboard/dashboard-layout/DashBoardLayout";

export default function DashBoard() {
  return (
    <DashBoardLayout type="Patient">
      <div className="flex-1 2xl:pr-16">
        <Header title={"Welcome Kelvin"} />
        <CheckUp />
        <YourActivities />
      </div>
      <UserProfile name="Kelvin Wills" profilePicture="/images/profile.svg"  online={true}/>
    </DashBoardLayout>
  );
}
