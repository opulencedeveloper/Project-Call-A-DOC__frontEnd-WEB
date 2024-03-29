import useHttp from "@/hooks/useHttp";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";

import { userDataActions } from "../../../store/redux-store/userData-slice";
import LoadingSpinner from "@/components/UI/LoadingSpinner";
import { useContext, useEffect } from "react";
import AuthContext from "@/store/context-store/auth-context";
const { addUserData } = userDataActions;

import Header from "@/components/dashboard/dashboard-ui/Header";;
import UserProfile from "@/components/dashboard/dashboard-ui/UserProfile";
import DashBoardLayout from "@/components/dashboard/dashboard-layout/DashBoardLayout";
import HistoryTable from "@/components/dashboard/patient/myfolder/HistoryTable";

let isOnline = false;

const MyFolder = () => {
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
        <Header title={"My Folder"} patientId={patientId}/>
      <HistoryTable token={token} patientId={patientId} userType="patient"/>
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

export default MyFolder;