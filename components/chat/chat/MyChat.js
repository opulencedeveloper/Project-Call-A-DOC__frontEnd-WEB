import React, {
  useContext,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";

import Image from "next/image";

import Echo from "laravel-echo";
import Pusher from "pusher-js";

import AuthContext from "@/store/context-store/auth-context";
import useHttp from "@/hooks/useHttp";

const convertISOTo12HourFormat = (isoDate) => {
  const date = new Date(isoDate);
  
  // Get the hours, minutes, and AM/PM indicator.
  let hours = date.getHours();
  let minutes = date.getMinutes();
  const amPm = hours >= 12 ? 'pm' : 'am';

  // Convert to 12-hour format.
  hours %= 12;
  hours = hours || 12; // If hours is 0, set it to 12.

  // Pad single-digit minutes with leading zero.
  minutes = minutes < 10 ? `0${minutes}` : minutes;

  return `${hours}:${minutes} ${amPm}`;
};

if (typeof window !== "undefined") {
  window.Echo = new Echo({
    broadcaster: "pusher",
    key: "f8405d072cee469ab443",
    cluster: "us2",
    forceTLS: true,
  });
}

const MyChat = (props) => {
  const chatContainerRef = useRef();
  const inputRef = useRef();
  const [inputValue, setInputValue] = useState("");
  const { isLoading, error, sendRequest: sendChatRequest } = useHttp();
  const [chats, setChats] = useState([]);
  const authCtx = useContext(AuthContext);
  const { token } = authCtx;

  useLayoutEffect(() => {
    const scrollToBottom = () => {
      if (chatContainerRef.current) {
        chatContainerRef.current.scrollTop =
          chatContainerRef.current.scrollHeight;
      }
    };

    // Scroll to the bottom after the component mounts or whenever the chats change
    scrollToBottom();
  }, [chats]);

  useEffect(() => {
    const myResponse = (res) => {
      const { status, message, customer, chats } = res;

      if (status === "success" && message === "Fetch Successfully") {
        setChats(chats);
      }
    };

    sendChatRequest(
      {
        url: "appointment/fetchappointmentchats?appointmentid=AP1688230670",
        token: token,
      },
      myResponse
    );
    const chatListener = (e) => {
      setChats((prevArray) => [...prevArray, e.chat]);
    };
    window.Echo.channel("AP1688230670").listen("ChatMessenger", chatListener);
    return () => {
      window.Echo.leaveChannel("AP1688230670");
    };
  }, []);
  const sendChat = (event) => {
    event.preventDefault();
    if (inputValue === "") return;
    setInputValue("")
    const myResponse = (res) => {
      const { status } = res;
      console.log("In the send chat response");
      if (status === "success") {
        console.log("In the webhook success");
      }
    };

    sendChatRequest(
      {
        url: "appointment/sendchat",
        method: "POST",
        body: { appointmentid: "AP1688230670", message: inputValue },
        token: token,
      },
      myResponse
    );
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div className="relative h-full pb-5 bg-custom8 rounded-tl-2xl rounded-tr-2xl ">
      <div className="bg-custom8 absolute top-0 right-0 left-0 flex rounded-tl-2xl rounded-tr-2xl h-20 items-center justify-between border-b border-ash pb-3 pt-6 px-5 md:h-32">
        <div className="flex items-center space-x-4">
          <Image
            src="/images/doctor-joseph.svg"
            alt="doctor"
            className="h-10 w-10 md:h-[82px] md:w-[82px]"
            width={82}
            height={82}
          />
          <div className="text-sm md:text-lg">Dr. James Joseph</div>
        </div>
        <Image
          src="/images/icon/three-dot-vert.svg"
          alt="doctor"
          className="h-4 w-4 md:h-[24px] md:w-[24px]"
          width={24}
          height={24}
        />
      </div>

      <div
        ref={chatContainerRef}
        className="overflow-y-auto h-[95%] justify-end h-full pb-20 space-y-5 px-3 md:px-8"
      >
        {/* Chats here */}
        {chats.map((chat, index) => {
        const chatTime = convertISOTo12HourFormat(chat.created_at)
          return chat.type === "1" ? (
            <div key={index} className="flex justify-end">
              <div className="flex space-x-1 items-end">
                <div className="space-y-2 flex flex-col items-end">
                  <div className="max-w-xl ml-20 bg-ash4 p-2 md:p-4 rounded-tl-xl rounded-bl-xl rounded-tr-xl text-xs md:text-base">
                    {chat.message}
                  </div>
                  <div className="text-xs text-ash6">{chatTime}</div>
                </div>
                <Image
                  src="/images/doctor-joseph.svg"
                  alt="doctor"
                  className="h-8 w-8 md:h-[42px] md:w-[42px]"
                  width={576}
                  height={320}
                />
              </div>{" "}
            </div>
          ) : (
            <div key={index} className="flex space-x-1 items-end">
              <Image
                src="/images/doctor-joseph.svg"
                alt="doctor"
                className="h-[42px] w-[42px]"
                width={576}
                height={320}
              />
              <div className="space-y-2">
                <div className="mr-20 max-w-xl bg-ash4 p-2 rounded-tl-xl rounded-br-xl rounded-tr-xl text-xs md:p-4 md:text-base">
                  {chat.message}
                </div>
                <div className="text-xs text-ash6">{chatTime}</div>
              </div>
            </div>
          )
          })}
      </div>

      <form
        onSubmit={sendChat}
        className="absolute bottom-5 left-5 right-5 flex h-12 lg:h-14"
      >
        <input
          ref={inputRef}
          onChange={handleInputChange}
          value={inputValue}
          type="text"
          className="pl-7 py-4 w-full rounded-bl-xl rounded-tl-xl bg-custom1 placeholder-ash2 text-sm font-light focus:outline-none md:text-base"
          placeholder="Type in something here..."
        />{" "}
        <button className="bg-custom9 w-14 flex items-center justify-center rounded-br-xl rounded-tr-xl lg:w-[71px]">
          <Image
            src="/images/icon/send.svg"
            alt="doctor"
            className="h-3 w-3 lg:h-auto lg:w-auto"
            width={29}
            height={28}
          />{" "}
        </button>
      </form>
    </div>
  );
};

export default MyChat;

// import Image from "next/image";
// import { useEffect, useRef } from "react";

// const currentTime = new Date().toLocaleTimeString([], {
//   hour: "2-digit",
//   minute: "2-digit",
// });

// const MyChat = (props) => {
//   const { chats } = props;
//   const messagesRef = useRef();
//   useEffect(() => {
//     let objDiv = document.getElementById("divExample");
//     objDiv.scrollTop = objDiv.scrollHeight;
//   }, []);

//   return (
//     <div
//       ref={messagesRef}
//       className="relative h-full pb-5 bg-custom8 rounded-tl-2xl rounded-tr-2xl "

//       id="divExample">
//       {/* <div className="absolute top-0 right-0 left-0 flex h-32 items-center justify-between border-b border-ash pb-3 pt-6 pr-0 md:pr-8">
//         <div className="flex items-center space-x-4">
//           <Image
//             src="/images/doctor-joseph.svg"
//             alt="doctor"
//             className="h-10 w-10 md:h-[82px] md:w-[82px]"
//             width={82}
//             height={82}
//           />
//           <div className="text-sm md:text-lg">Dr. James Joseph</div>
//         </div>
//         <Image
//           src="/images/icon/three-dot-vert.svg"
//           alt="doctor"
//           className="h-4 w-4 md:h-[24px] md:w-[24px]"
//           width={24}
//           height={24}
//         />
//       </div> */}
//       <div

//         className="overflow-y-auto h-[95%] justify-end h-full py-10 space-y-5 mb-96 px-3 md:px-8"
//       >
//         {/* Chats here */}
//         {/* SENDER */}
//         {chats.map((chat, index) =>
//           chat.type === "1" ? (
//             <div key={index} className="flex justify-end">
//               {" "}
//               <div className="flex space-x-1 items-end">
//                 <div className="space-y-2 flex flex-col items-end">
//                   <div className="max-w-xl ml-20 bg-ash4 p-2 md:p-4 rounded-tl-xl rounded-bl-xl rounded-tr-xl text-xs md:text-base">
//                     {chat.message}
//                   </div>
//                   <div className="text-xs text-ash6">{currentTime}</div>
//                 </div>
//                 <Image
//                   src="/images/doctor-joseph.svg"
//                   alt="doctor"
//                   className="h-8 w-8 md:h-[42px] md:w-[42px]"
//                   width={576}
//                   height={320}
//                 />
//               </div>{" "}
//             </div>
//           ) : (
//             <div key={index} className="flex space-x-1 items-end">
//               <Image
//                 src="/images/doctor-joseph.svg"
//                 alt="doctor"
//                 className="h-[42px] w-[42px]"
//                 width={576}
//                 height={320}
//               />
//               <div className="space-y-2">
//                 <div className="mr-20 max-w-xl bg-ash4 p-2 rounded-tl-xl rounded-br-xl rounded-tr-xl text-xs md:p-4 md:text-base">
//                   {chat.message}
//                 </div>
//                 <div className="text-xs text-ash6">{currentTime}</div>
//               </div>
//             </div>
//           )
//         )}

//         {/* RECEIVER */}
//       </div>

//       <div
//         id="mychatNow"
//         className="absolute bottom-5 left-0 right-0 flex h-12"
//       >
//         <input
//           type="text"
//           className="pl-7 py-4 w-full rounded-bl-xl rounded-tl-xl bg-custom1 placeholder-ash2 text-sm font-light focus:outline-none md:text-base"
//           placeholder="Type in something here..."
//         />{" "}
//         <button
//           // onClick={() => handleScroll("mychatNow")}
//           className="bg-custom9 w-[71px] flex items-center justify-center rounded-br-xl rounded-tr-xl"
//         >
//           <Image
//             src="/images/icon/send.svg"
//             alt="doctor"
//             className="h-auto w-auto"
//             width={29}
//             height={28}
//           />{" "}
//         </button>
//       </div>
//     </div>
//   );
// };

// export default MyChat;
