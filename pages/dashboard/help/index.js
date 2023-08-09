import { useContext, useEffect } from "react";

import { useRouter } from "next/router";

import { useDispatch, useSelector } from "react-redux";

import useHttp from "@/hooks/useHttp";


import AuthContext from "@/store/context-store/auth-context";
import { userDataActions } from "../../../store/redux-store/userData-slice";
import DashBoardLayout from "@/components/dashboard/dashboard-layout/DashBoardLayout";
import Header from "@/components/dashboard/dashboard-ui/Header";
import UserProfile from "@/components/dashboard/dashboard-ui/UserProfile";
import LoadingSpinner from "@/components/UI/LoadingSpinner";
import HelpCenterInfo from "@/components/dashboard/help/HelpCenterInfo";

const { addUserData } = userDataActions;

let isOnline = false;

let userType;
if (typeof window !== "undefined") {
  userType = localStorage.getItem("userType");
}

const Help = () => {
  const router = useRouter();
  useEffect;
  const dispatch = useDispatch();
  const userInfo = useSelector((state) => state.userData);
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
    const url = userType === "doctor" ? "doctor" : "customer";
console.log(url)
    fetchUserData(
      {
        url: url,
        token: token,
      },
      myResponse
    );
  }, [fetchUserData, token, dispatch]);

  useEffect(() => {
    if (error === "Unauthenticated") {
      router.replace("/signin");
    }
  }, [error, router]);

  if (isLoading || error) {
    return <LoadingSpinner errorMessage={error} />;
  } 
  return (
    <DashBoardLayout type={userType}> 
      <div className="flex-1 2xl:pr-16">
        <Header title={"Help Center"} type={userType} />
        <HelpCenterInfo />
      </div>
      <UserProfile
        name={`${patientFirstName} ${patientLastName}`}
        profilePicture={profilepicture}
        online={isOnline}
      />
    </DashBoardLayout>
  );
};

export default Help;
