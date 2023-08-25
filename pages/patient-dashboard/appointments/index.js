import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";

import { userDataActions } from "../../../store/redux-store/userData-slice";
import LoadingSpinner from "@/components/UI/LoadingSpinner";
import { useContext, useEffect } from "react";
import AuthContext from "@/store/context-store/auth-context";
const { addUserData } = userDataActions;


import Board from "@/components/dashboard/dashboard-ui/Board";
import Header from "@/components/dashboard/dashboard-ui/Header";
import Table from "@/components/dashboard/dashboard-ui/Table";
import UserProfile from "@/components/dashboard/dashboard-ui/UserProfile";
import DashBoardLayout from "@/components/dashboard/dashboard-layout/DashBoardLayout";
import ActivityLineGraph from "@/components/dashboard/dashboard-ui/ActivityChart";
import useHttp from "@/hooks/useHttp";
import ActivityChartData from "@/components/dashboard/patient/home/ActivityChartData";


let isOnline = false;

const boardLabels = [
  {
    title: "Total",
    subTitle: "Appointments",
    color: "bg-custom14",
  },
  {
    title: "Successful",
    subTitle: "Checkups",
    color: "bg-custom-g3",
  },
  {
    title: "Missed",
    subTitle: "Checkups",
    color: "bg-custom-r-shade1",
  },
];


const Appointments = () => {
  const router = useRouter();
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
    if (error === "Unauthenticated") {
      router.replace("/signin");
    }
  }, [error, router]);

  if (isLoading || error) {
    return <LoadingSpinner errorMessage={error} />;
  }

  return (
    <DashBoardLayout type="patient">
      <div className="flex-1 2xl:pr-16">
        <Header title="Appointments" />
        <Board boardLabels={boardLabels} token={token} type="patient"/>
        <div className="h-10"></div> 
       <ActivityChartData token={token}/> 
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

export default Appointments;
