import TogglButton from "@/components/UI/ToggleButton";
import Header from "@/components/dashboard/dashboard-ui/Header";
import UserProfile from "@/components/dashboard/dashboard-ui/UserProfile";
import CheckUp from "@/components/dashboard/patient/home/CheckUp";
import YourActivities from "@/components/dashboard/patient/home/YourActivities";
import DashBoardLayout from "@/components/layout/DashBoardLayout";
import { useState } from "react";

export default function DashBoard() {
   
  return (
    <DashBoardLayout>
      <div className="flex-1 2xl:pr-16">
        <Header title={"Welcome Dr. Grace"} />
        <TogglButton />
        <div className="bg-custom">
        





        </div>

        {/* <CheckUp />
          <YourActivities /> */}
      </div>
      <UserProfile />
    </DashBoardLayout>
  );
}
