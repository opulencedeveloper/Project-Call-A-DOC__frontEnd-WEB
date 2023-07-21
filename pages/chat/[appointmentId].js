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

export default function Chat() {
  const dispatch = useDispatch();
  const userInfo = useSelector((state) => state.userData);
  const [chats, setChats] = useState([]);
  const router = useRouter();
  const appointmentId = router.query.appointmentId;
  

  console.log("The appointmentId in the chat is", appointmentId);
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
      const { status, message, customer, chats } = res;
      if (status === "success") {
        dispatch(addUserData(customer));
        isOnline = true;
      }
      if (status === "success" && message === "Fetch Successfully") {
        setChats(chats)
      }
    };

    fetchUserData(
      {
        url: "customer",
        token: token,
      },
      myResponse
    );
    fetchUserData(
      {
        url: "appointment/fetchappointmentchats?appointmentid=AP1688230670",
        token: token,
      },
      myResponse
    );

    const section = document.getElementById("mychat");
  if (section) {

    console.log("In the scrollllllllllllllllllll")
    section.scrollIntoView({ behavior: 'smooth', block: 'end' });
  }
  }, [fetchUserData, token, dispatch]);

  if (isLoading || error) {
    return <LoadingSpinner errorMessage={error} />;
  }

  return (
    <ChatLayout>
      <div className="flex flex-col justify-between h-screen w-full 2xl:pr-16 lg:w-9/12">
        <div className="h-[15%] "><Header title={`Welcome ${patientFirstName}`} /> </div>
        <div className="h-[80%] mb-5"> <MyChat chats={chats}/></div>
      </div>
      <UserProfile
        name={`${patientFirstName} ${patientLastName}`}
        profilePicture={profilepicture}
        online={isOnline}
      />
    </ChatLayout>
  );
}
