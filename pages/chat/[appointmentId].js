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
import ChatFolder from "@/components/chat/chat/ChatFolder";
import AddDetailsToFolder from "@/components/chat/chat/AddDetailsToFolderForm";
import BackDrop from "@/components/UI/BackDrop";
import Image from "next/image";
const { addUserData } = userDataActions;

let isOnline = false;
let userType;

export default function Chat() {
  const dispatch = useDispatch();
  const userInfo = useSelector((state) => state.userData);
  const [chatFolderMobileView, setChatFolderMobileView] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [patientData, setPatientData] = useState();
  const router = useRouter();
  const appointmentId = router.query.appointmentId;

  const { firstname: firstName, lastname: lastName, profilepicture } = userInfo;
  const { isLoading, error, sendRequest: fetchUserData } = useHttp();
  const authCtx = useContext(AuthContext);
  const { token } = authCtx;

  useEffect(() => {
    const userType = localStorage.getItem("userType");
    const myResponse = (res) => {
      const { status, message, doctor, chats, customer } = res;
      if (status === "success") {
        isOnline = true;
        const user = userType === "doctor" ? doctor : customer;
        dispatch(addUserData(user));
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
    userType = localStorage.getItem("userType");
  }

  if (appointmentId === undefined) {
    return;
  }

  const toggleChatFolderMobileView = () => {
    setChatFolderMobileView((prev) => !prev);
  };

  const patientDataHandler = (patientData) => {
    setPatientData(patientData);
  };

  return (
    <ChatLayout type={userType}>
      {chatFolderMobileView && (
        <BackDrop>
          <ChatFolder
            token={token}
            patientData={patientData}
            appointmentId={appointmentId}
            toggleChatFolderMobileView={toggleChatFolderMobileView}
            style="animateSlideUp shadow-custom-shadow2 rounded-xl bg-white flex flex-col jusify-start w-[90%] h-[410px] pt-7 overflow-y-auto mb-5 px-5 "
          />
        </BackDrop>
      )}
      <div className="flex flex-col justify-between h-full w-full 2xl:pr-16 lg:w-9/12">
        <span className="px-5">
          <Header
            type={userType}
            toggleChatFolderMobileView={toggleChatFolderMobileView}
            title={`Welcome ${userType === "doctor" ? "Dr." : ""} ${firstName}`}
          />{" "}
        </span>
        <div className="flex items-center justify-between space-x-3 px-5 lg:hidden">
          <div className="flex items-center space-x-3">
            <div className="w-[33px] h-[25px] md:h-[30px] md:w-[37px]">
              <Image
                src="/images/icon/chat-folder-icon.svg"
                alt="chat-folder-icon"
                className="h-full w-full"
                loading="eager"
                priority
                height={30}
                width={37}
              />
            </div>
            {patientData && <p className="text-sm font-medium truncate">
              {`${patientData.firstname} ${patientData.lastname} Folder`}
            </p>}
          </div>

          <button
            onClick={toggleChatFolderMobileView}
            className="w-[12px] h-[12px]"
          >
            {" "}
            <Image
              src="/images/icon/drop-down.svg"
              alt="email-icon"
              className="w-full h-full"
              width={12}
              height={12}
            />{" "}
          </button>
        </div>
        <MyChat
          patientData={patientDataHandler}
          appointmentId={appointmentId}
          userType={userType}
        />
      </div>
      {userType === "doctor" ? (
        patientData && (
          <ChatFolder
            appointmentId={appointmentId}
            token={token}
            patientData={patientData}
          />
        )
      ) : (
        <span className="hidden md:flex">
          {" "}
          <UserProfile
            name={`${firstName} ${lastName}`}
            profilePicture={profilepicture}
            styling="hidden lg:flex flex-col items-center jusify-start h-full mb-5 lg:overflow-y-auto lg:ml-5 2xl:ml-auto mt-5 xl:w-max xl:mt-auto"
            online={isOnline}
          />{" "}
        </span>
      )}
    </ChatLayout>
  );
}
