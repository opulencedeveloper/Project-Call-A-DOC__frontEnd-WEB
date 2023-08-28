import Header from "@/components/dashboard/dashboard-ui/Header";
import DashBoardLayout from "@/components/dashboard/dashboard-layout/DashBoardLayout";
import SettingsLayout from "@/components/dashboard/dashboard-ui/settings/Layout/SettingsLayout";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import useHttp from "@/hooks/useHttp";
import { useContext, useEffect } from "react";
import AuthContext from "@/store/context-store/auth-context";
import LoadingSpinner from "@/components/UI/LoadingSpinner";
import { userDataActions } from "@/store/redux-store/userData-slice";

const { addUserData } = userDataActions;

let isOnline = false;
let userType;

if (typeof window !== "undefined") {
  userType = localStorage.getItem("userType");
}

const Settings = () => { 
    const router = useRouter();
    const dispatch = useDispatch();
    const userInfo = useSelector((state) => state.userData);
    const { patientid: patientId } = userInfo;
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
      <div className="h-full w-full bg-custom-8">
        <Header title="Account settings" patientId={patientId} />
        <SettingsLayout type="Patient" />
      </div>
    </DashBoardLayout>
  );
};

export default Settings;
