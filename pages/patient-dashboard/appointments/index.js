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
import DashBoardMyLayout from "@/components/dashboard/dashboard-MyLayout/DashBoardMyLayout";
import ActivityLineGraph from "@/components/dashboard/dashboard-ui/ActivityChart";
import useHttp from "@/hooks/useHttp";


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
    color: "bg-ash6",
  },
  {
    appointmentNumber: "0",
    title: "Missed",
    subTitle: "Checkups",
    //Data state color => bg-custom-r-shade1
    color: "bg-ash6",
  },
];

const chartData = [
  {
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
    <DashBoardMyLayout type="Patient">
      <div className="flex-1 2xl:pr-16">
        <Header title="Appointments" type="Patient" />
        <Board pageContent={boardContent} />
        <div className="mt-10 mb-3">Appoinments</div>
        <ActivityLineGraph productData={chartData} />
        <Table tableData={checkUps} />
      </div>
      <UserProfile
        name={`${patientFirstName} ${patientLastName}`}
        profilePicture={profilepicture}
        online={isOnline}
      />
    </DashBoardMyLayout>
  );
};

export default Appointments;
