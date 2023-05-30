import Header from "@/components/dashboard/dashboard-ui/Header";
import UserProfile from "@/components/dashboard/dashboard-ui/UserProfile";
import ChatLayout from "@/components/chat/chat-layout/ChatLayout";
import MyChat from "@/components/chat/chat/MyChat";

export default function Chat() {
  return (
    <ChatLayout>
      <div className="flex flex-col w-full 2xl:pr-16 lg:w-9/12">
       <Header title={"Welcome Kelvin"} />
       <MyChat />
      </div>
      <UserProfile name="Kelvin Wills" profilePicture="/images/profile.svg"  online={true}/>
      </ChatLayout>
  );
}
