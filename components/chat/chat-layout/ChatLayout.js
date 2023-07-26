import ChatNavigation from "./ChatNavigation";

const ChatLayout = (props) => {
  const {type} = props;
  return (
    <div className="flex h-screen pt-2 md:pt-8">
     <ChatNavigation type={type}/>
     <div className="flex flex-col h-full w-full px-0 lg:flex-row 2xl:pl-10 2xl:pr-auto">
      {props.children}
     </div> </div>
  );
};

export default ChatLayout;
