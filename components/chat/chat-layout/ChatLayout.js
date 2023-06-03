import ChatNavigation from "./ChatNavigation";

const ChatMyLayout = (props) => {
  const {type} = props;
  return (
    <div className="flex pt-8">
     <div> <ChatNavigation type={type}/> </div>
     <div className="flex flex-col w-full px-5 lg:flex-row 2xl:pl-10 2xl:pr-auto">
      {props.children}
     </div> </div>
  );
};

export default ChatMyLayout;
