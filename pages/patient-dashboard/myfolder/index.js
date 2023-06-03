import useHttp from "@/hooks/useHttp";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";

import { userDataActions } from "../../../store/redux-store/userData-slice";
import LoadingSpinner from "@/components/UI/LoadingSpinner";
import { useContext, useEffect } from "react";
import AuthContext from "@/store/context-store/auth-context";
const { addUserData } = userDataActions;

import Header from "@/components/dashboard/dashboard-ui/Header";
import Table from "@/components/dashboard/dashboard-ui/Table";
import UserProfile from "@/components/dashboard/dashboard-ui/UserProfile";
import DashBoardLayout from "@/components/dashboard/dashboard-MyLayout/DashBoardLayout";

let isOnline = false;

const checkUps = [
  {
    tableData1: "Jenny Wilson",
    tableData2: "15/08/2017",
    tableData3: "7:30 am",
    tableData4: "Patient was having headache and mild one sided migraines",
    tableData5: "15/08/2017",
  },
  {
    tableData1: "Jenny Wilson",
    tableData2: "15/08/2017",
    tableData3: "7:30 am",
    tableData4: "Patient was having headache and mild one sided migraines",
    tableData5: "15/08/2017",
  },
  {
    tableData1: "Jenny Wilson",
    tableData2: "15/08/2017",
    tableData3: "7:30 am",
    tableData4: "Patient was having headache and mild one sided migraines",
    tableData5: "15/08/2017",
  },
  {
    tableData1: "Jenny Wilson",
    tableData2: "15/08/2017",
    tableData3: "7:30 am",
    tableData4: "Patient was having headache and mild one sided migraines",
    tableData5: "15/08/2017",
  },
];

const MyFolder = () => {
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
    <DashBoardLayout type="Patient">
      <div className="flex-1 2xl:pr-16">
        <Header title={"My Folder"} type={"Patient"} />
        <Table
          tableData={checkUps}
          tableHeaderData2="ID"
          tableHeaderData3="AppointmentDate"
          tableHeaderData4="Diagnosis"
          tableHeaderData5="Prescription"
          inputSearchHeader="Folder Entries"
          tableEmptyStateText="No data Yet"
        />
      </div>
      <UserProfile
        name={`${patientFirstName} ${patientLastName}`}
        profilePicture={profilepicture}
        online={isOnline}
      />
    </DashBoardLayout>
  );
};

export default MyFolder;
