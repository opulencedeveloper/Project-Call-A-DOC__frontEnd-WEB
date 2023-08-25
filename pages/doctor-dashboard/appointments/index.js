import { useContext, useEffect } from "react";

import { useRouter } from "next/router";

import { useDispatch, useSelector } from "react-redux";

import useHttp from "@/hooks/useHttp";

import Board from "@/components/dashboard/dashboard-ui/Board";
import Header from "@/components/dashboard/dashboard-ui/Header";
import UserProfile from "@/components/dashboard/dashboard-ui/UserProfile";
import DashBoardLayout from "@/components/dashboard/dashboard-layout/DashBoardLayout";
import LoadingSpinner from "@/components/UI/LoadingSpinner";
import AuthContext from "@/store/context-store/auth-context";
import { userDataActions } from "../../../store/redux-store/userData-slice";
import AppointmentsChart from "@/components/dashboard/doctor/home/AppointmentsChart";
import CheckUpTable from "@/components/dashboard/doctor/appointments/CheckUpTable";

const { addUserData } = userDataActions;

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
        <Header title={"Appointments"} type={"Doctor"} />
        <Board boardLabels={boardLabels} token={token} type="doctor" />
        <AppointmentsChart token={token} appointmentStyle="w-full mt-14" />
        <CheckUpTable token={token} />
      </div>
      <UserProfile
        userType="doctor"
        name={`${patientFirstName} ${patientLastName}`}
        profilePicture={profilepicture}
        online={isOnline}
      />
    </DashBoardLayout>
  );
};

export default Appointments;
