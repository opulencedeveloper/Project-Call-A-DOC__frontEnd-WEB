import { useEffect, useContext, memo } from "react";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import Header from "@/components/dashboard/dashboard-ui/Header";
import UserProfile from "@/components/dashboard/dashboard-ui/UserProfile";
import CheckUp from "@/components/dashboard/patient/home/CheckUp";
import YourActivities from "@/components/dashboard/patient/home/YourActivities";
import DashBoardMyLayout from "@/components/dashboard/dashboard-MyLayout/DashBoardMyLayout";
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
      router.replace("signin");
    }
  }, [error, router]);

  if (isLoading || error) {
    return <LoadingSpinner errorMessage={error} />;
  }

  return (
    <DashBoardMyLayout type="Patient">
      <div className="flex-1 2xl:pr-16">
        <Header title={`Welcome ${patientFirstName}`} type="Patient" />
        <CheckUp />
        <YourActivities />
      </div>
      <UserProfile
        name={`${patientFirstName} ${patientLastName}`}
        profilePicture={profilepicture}
        online={isOnline}
      />
    </DashBoardMyLayout>
  );
};

export default Dashboard;
