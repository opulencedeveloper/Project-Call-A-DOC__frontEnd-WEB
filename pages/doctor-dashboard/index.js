import { useContext, useEffect } from "react";

import { useRouter } from "next/router";

import { useDispatch, useSelector } from "react-redux";

import useHttp from "@/hooks/useHttp"

import TogglButton from "@/components/UI/ToggleButton";
import Header from "@/components/dashboard/dashboard-ui/Header";
import UserProfile from "@/components/dashboard/dashboard-ui/UserProfile";
import DashBoardLayout from "@/components/dashboard/dashboard-layout/DashBoardLayout";
import AppointmentsEarnings from "@/components/dashboard/doctor/home/AppointmentsEarnings";
import YourActivities from "@/components/dashboard/doctor/home/YourActivities";
import LoadingSpinner from "@/components/UI/LoadingSpinner";

import AuthContext from "@/store/context-store/auth-context";
import { userDataActions } from "../../store/redux-store/userData-slice";

const { addUserData } = userDataActions;

let isOnline = false;

export default function DashBoard() {
  const router = useRouter(); 
  const userInfo = useSelector((state) => state.userData);
  const doctorFirstName = userInfo.firstname
  const dispatch = useDispatch();
  const {
    firstname: patientFirstName,
    lastname: patientLastName,
    profilepicture,
  } = userInfo;
  const { isLoading, error, sendRequest: fetchUserData } = useHttp();
  const authCtx = useContext(AuthContext);
  const { token } = authCtx;

  useEffect(() => {
    const myResponse = (res) => {
      const { status, doctor } = res;
      if (status === "success") {
        dispatch(addUserData(doctor));
        isOnline = true;
      }
    };

    fetchUserData(
      {
        url: "doctor",
        token: token,
      },
      myResponse
    );
  }, [fetchUserData, token, dispatch]);

  useEffect(() => {
    if (error === "Unauthenticated" || error === "Not Authorized") {
      router.replace("signin");
    }
  }, [error, router]);

  if (isLoading || error) {
    return <LoadingSpinner errorMessage={error} />; 
  }

  return (
    <DashBoardLayout type="Doctor">
      <div className="flex-1 2xl:pr-16">
        <Header title={`Welcome Dr. ${doctorFirstName}`} type={"Doctor"}/>
        <TogglButton />
       <AppointmentsEarnings/>
       <YourActivities />
         {/*  <YourActivities /> */}
      </div>
     <UserProfile
        name={`${patientFirstName} ${patientLastName}`}
        profilePicture={profilepicture}
        online={isOnline}
      />
    </DashBoardLayout>
  );
}
