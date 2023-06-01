import { useDispatch, useSelector } from "react-redux";

import Header from "@/components/dashboard/dashboard-ui/Header";
import UserProfile from "@/components/dashboard/dashboard-ui/UserProfile";
import CheckUp from "@/components/dashboard/patient/home/CheckUp";
import YourActivities from "@/components/dashboard/patient/home/YourActivities";
import DashBoardLayout from "@/components/dashboard/dashboard-layout/DashBoardLayout";
//import useHttp from "@/hooks/useHttp";
import { useEffect, useContext } from "react";

import AuthContext from "@/store/context-store/auth-context";
import useHttp from "@/hooks/useHttp";
import LoadingSpinner from "@/components/UI/LoadingSpinner";

export default function DashBoard() {
  // const userInfo = useSelector((state) => state.userData);
  // const patientFirstName = userInfo.firstname

  //<LoadingSpinner />
  const { isLoading, error, sendRequest: fetchUserData } = useHttp();

  const authCtx = useContext(AuthContext);
  const { token } = authCtx; 
console.log("In the patient dashBoard Component, error is", error)
  

  const myResponse = (res) => {
    console.log("Data response for the patient dashboard", res);
    const { status, message, role, token, doctor, patient } = res;

    if (status === "success" && message === "Otp Verification Successful.") {
      const targetRoute =
        role === "1" ? "/patient-dashboard" : "/doctor-dashboard";
      const userData = role === "1" ? patient : doctor;
      console.log("doneeeeeeeee", doctor);
      dispatch(userDataActions.addUserData(userData));
      authCtx.login(token);
      dispatch(signupActions.resetState());
      router.replace(targetRoute);
    }
  };
  useEffect(()=>{
    console.log("token in the patient effect", token)
    console.log("In the patient dashboard effect");
      fetchUserData(
        { 
          url: "customer",
          token: token
        },
        myResponse
      );
    

   }, [])


  return (
    <DashBoardLayout type="Patient">
      <div className="flex-1 2xl:pr-16">
        <Header title={`Welcome Victor`} type={"Patient"}/>
        <CheckUp />
        <YourActivities />
      </div>
      <UserProfile name="Kelvin Wills" profilePicture="/images/profile.svg"  online={true}/>
    </DashBoardLayout>
  );
}
