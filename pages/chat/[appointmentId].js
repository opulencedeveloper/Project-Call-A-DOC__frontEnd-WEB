import Header from "@/components/dashboard/dashboard-ui/Header";
import UserProfile from "@/components/dashboard/dashboard-ui/UserProfile";
import ChatLayout from "@/components/chat/chat-layout/ChatLayout";
import MyChat from "@/components/chat/chat/MyChat";
import { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import useHttp from "@/hooks/useHttp";
import AuthContext from "@/store/context-store/auth-context";
import LoadingSpinner from "@/components/UI/LoadingSpinner";

import { userDataActions } from "../../store/redux-store/userData-slice";
import { useRouter } from "next/router";
const { addUserData } = userDataActions;

let isOnline = false;
let userType;

export default function Chat() {
  const dispatch = useDispatch();
  const userInfo = useSelector((state) => state.userData);

  const [mounted, setMounted] = useState(false);
  const router = useRouter();
  const appointmentId = router.query.appointmentId;

  

  const {
    firstname: firstName,
    lastname: lastName,
    profilepicture,
  } = userInfo;
  const { isLoading, error, sendRequest: fetchUserData } = useHttp();
  const authCtx = useContext(AuthContext);
  const { token } = authCtx;

  useEffect(() => {
    const userType = localStorage.getItem("userType")
    const myResponse = (res) => {
      const { status, message, doctor, chats, customer } = res;
      if (status === "success") {
        isOnline = true;
      const user = userType === "doctor" ? doctor : customer;
        dispatch(addUserData(user))
        
      }
      if (status === "success" && message === "Fetch Successfully") {
        setChats(chats);
      }
    }; 
    if (userType === "patient") {
      fetchUserData(
        {
          url: "customer",
          token: token,
        },
        myResponse
      );
    } else {
      fetchUserData(
        {
          url: "doctor",
          token: token,
        },
        myResponse
      );
    }

    setMounted(true);
  }, [fetchUserData, token, dispatch]);

  if (isLoading || error) {
    return <LoadingSpinner errorMessage={error} />;
  }

  if (typeof window !== "undefined") {
    userType = localStorage.getItem("userType")
 }

 if(appointmentId === undefined) {
  return
}

  return (
    <ChatLayout>
      <div className="flex flex-col justify-between h-screen w-full 2xl:pr-16 lg:w-9/12">
        <div className="px-5 lg:px-0">
          <Header title={`Welcome ${firstName}`} />{" "}
        </div>
          {" "}
          <MyChat appointmentId={appointmentId} userType={userType}/>
        
      </div>
     <UserProfile
        name={`${firstName} ${lastName}`}
        profilePicture={profilepicture}
        online={isOnline}
        styling="hidden md:flex h-full mb-5  flex-col items-center jusify-start lg:ml-5 2xl:ml-auto mt-5 xl:w-1/4 xl:mt-auto"
      /> 
    </ChatLayout>
  );
}
