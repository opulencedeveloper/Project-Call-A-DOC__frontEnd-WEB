import Header from "@/components/dashboard/dashboard-ui/Header";
import UserProfile from "@/components/dashboard/dashboard-ui/UserProfile";
import ChatMyLayout from "@/components/chat/chat-MyLayout/ChatMyLayout";
import MyChat from "@/components/chat/chat/MyChat";
import { useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import useHttp from "@/hooks/useHttp";
import AuthContext from "@/store/context-store/auth-context";
import LoadingSpinner from "@/components/UI/LoadingSpinner";

import { userDataActions } from "../../store/redux-store/userData-slice";
const { addUserData } = userDataActions;

let isOnline = false;

export default function Chat() {
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

  if (isLoading || error) {
    return <LoadingSpinner errorMessage={error} />;
  }

  return (
    <ChatMyLayout>
      <div className="flex flex-col w-full 2xl:pr-16 lg:w-9/12">
       <Header title={`Welcome ${patientFirstName}`} />
       <MyChat />
      </div>
      <UserProfile
        name={`${patientFirstName} ${patientLastName}`}
        profilePicture={profilepicture}
        online={isOnline}
      />
      </ChatMyLayout>
  );
}
