import TogglButton from "@/components/UI/ToggleButton";
import Header from "@/components/dashboard/dashboard-ui/Header";
import UserProfile from "@/components/dashboard/dashboard-ui/UserProfile";
import DashBoardLayout from "@/components/dashboard/dashboard-layout/DashBoardLayout";
import AppointmentsEarnings from "@/components/dashboard/doctor/home/AppointmentsEarnings";
import YourActivities from "@/components/dashboard/doctor/home/YourActivities";

export default function DashBoard() {
   
  return (
    <DashBoardLayout type="Doctor">
      <div className="flex-1 2xl:pr-16">
        <Header title={"Welcome Dr. Grace"} />
        <TogglButton />
       <AppointmentsEarnings/>
       <YourActivities />
         {/*  <YourActivities /> */}
      </div>
      <UserProfile name="Dr Grace Wills" profilePicture="/images/dr-grace-wills.svg" online={false}/>
    </DashBoardLayout>
  );
}
