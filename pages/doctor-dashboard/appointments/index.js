import { useContext, useEffect } from "react";

import { useRouter } from "next/router";

import { useDispatch, useSelector } from "react-redux";

import useHttp from "@/hooks/useHttp";

import Board from "@/components/dashboard/dashboard-ui/Board";
import Header from "@/components/dashboard/dashboard-ui/Header";
import Table from "@/components/dashboard/dashboard-ui/Table";
import UserProfile from "@/components/dashboard/dashboard-ui/UserProfile";
import DashBoardLayout from "@/components/dashboard/dashboard-layout/DashBoardLayout";
import ActivityLineGraph from "@/components/dashboard/dashboard-ui/ActivityChart";
import LoadingSpinner from "@/components/UI/LoadingSpinner";

import AuthContext from "@/store/context-store/auth-context";
import { userDataActions } from "../../../store/redux-store/userData-slice";

const { addUserData } = userDataActions;

let isOnline = false;

const checkUps = [
  {
    tableData1: "Jenny Wilson",
    tableData2: "15/08/2017",
    tableData3: "7:30 am",
    tableData4: "Ongoing",
    tableData5: "15/08/2017",
  },
  {
    tableData1: "Jenny Wilson",
    tableData2: "15/08/2017",
    tableData3: "7:30 am",
    tableData4: "Completed",
    tableData5: "15/08/2017",
  },
  {
    tableData1: "Jenny Wilson",
    tableData2: "15/08/2017",
    tableData3: "7:30 am",
    tableData4: "Ongoing",
    tableData5: "15/08/2017",
  },
  {
    tableData1: "Jenny Wilson",
    tableData2: "15/08/2017",
    tableData3: "7:30 am",
    tableData4: "Completed",
    tableData5: "15/08/2017",
  },
];

const boardContent = [
    {
      appointmentNumber: "0",
      title: "Total",
      subTitle: "Appointments",
     // Data state color => bg-custom14
      color: "bg-ash6",
    },
    {
      appointmentNumber: "0",
      title: "Successful",
      subTitle: "Checkups",
      //Data state color => bg-custom-g3
      color: "bg-ash6"
    },
    {
      appointmentNumber: "0",
      title: "Missed",
      subTitle: "Checkups",
      //Data state color => bg-custom-r-shade1
      color: "bg-ash6"
    },
  ];


  const chartData = [{
    name: "Data 1",
    data: [5, 15, 10, 17, 12, 8, 25, 14, 24, 20, 21, 18],
    color: "#65D6AD", 
  },
  {
    name: "Data 2",
    data: [12, 15, 17, 17, 15, 16, 7, 13, 14, 19, 17, 12],
    color: "#1992D4", 
  },
  {
    name: "Data 2",
    data: [12, 14, 17, 19, 14, 16, 18, 21, 15, 16, 16, 12],
    color: "#F86A6A",
  },]

 const Appointments = () => {
  const router = useRouter(); useEffect
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

    fetchUserData(
      {
        url: "doctor",
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
    <DashBoardLayout type="doctor">
        <div className="flex-1 2xl:pr-16">
          <Header title={"Appointments"} type ={"Doctor"}/>
          <Board pageContent={boardContent}/>
          <ActivityLineGraph productData={chartData}/>
          <Table tableData={checkUps}
          />
       </div>
       <UserProfile
        name={`${patientFirstName} ${patientLastName}`}
        profilePicture={profilepicture}
        online={isOnline}
      />
    </DashBoardLayout>
  );
}

export default Appointments;
