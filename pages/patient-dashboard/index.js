import { useEffect, useContext } from "react";

import { useRouter } from "next/router";

import { useDispatch, useSelector } from "react-redux";

import Header from "@/components/dashboard/dashboard-ui/Header";
import UserProfile from "@/components/dashboard/dashboard-ui/UserProfile";
import CheckUpandDosageLayout from "@/components/dashboard/patient/home/CheckUpandDosageLayout";
import YourActivities from "@/components/dashboard/patient/home/YourActivities";
import DashBoardLayout from "@/components/dashboard/dashboard-layout/DashBoardLayout";
import AuthContext from "@/store/context-store/auth-context";
import LoadingSpinner from "@/components/UI/LoadingSpinner";
import useHttp from "@/hooks/useHttp";
import { userDataActions } from "../../store/redux-store/userData-slice";
const { addUserData } = userDataActions;

let isOnline = false;

const Dashboard = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const userInfo = useSelector((state) => state.userData);
  const {
    firstname: patientFirstName,
    lastname: patientLastName,
    patientid: patientId,
    profilepicture,
  } = userInfo;
  const { isLoading, error, sendRequest: fetchUserData } = useHttp();
  const authCtx = useContext(AuthContext);
  const { token } = authCtx;

  useEffect(() => {
    const myResponse = (res) => {
      const { status, customer } = res;
      if (status === "success") {
        dispatch(addUserData(customer));
        isOnline = true;
      }
    };

    fetchUserData(
      {
        url: "customer",
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
    <DashBoardLayout type="patient">
      <div className="flex-1 2xl:pr-16">
        <Header patientId={patientId} title={`Welcome ${patientFirstName}`} />
        <CheckUpandDosageLayout patientId={patientId} token={token} />
        <YourActivities token={token}/>
      </div>
      <UserProfile
        userType="patient"
        name={`${patientFirstName} ${patientLastName}`}
        profilePicture={profilepicture}
        online={isOnline}
      />
    </DashBoardLayout>
  );
};

export default Dashboard;
