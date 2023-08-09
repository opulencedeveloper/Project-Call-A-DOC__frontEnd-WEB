import ChatNavigation from "./ChatNavigation";

const ChatLayout = (props) => {
  const { type, toggleChatFolderMobileView } = props;
  return (
    <div className="flex h-screen overflow-y-hidden pt-5 ">
      <ChatNavigation
        toggleChatFolderMobileView={toggleChatFolderMobileView}
        type={type}
      />
      <div className="flex flex-col  h-full w-full px-0 lg:flex-row 2xl:pl-10 2xl:pr-auto">
        {props.children}
      </div>{" "}
    </div>
  );
};

export default ChatLayout;
