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
import { useRouter } from "next/router";
import MoreVertButtonDropDown from "./MoreVerButtonDropDown";
import PrescribeDrugs from "./PrescribeDrugs";
import ScheduleCheckup from "./ScheduleCheckup";
import EndAppointmentJourney from "./EndAppointmentJourney";
import DoctorEndAppointmentPatientApproval from "./DoctorEndAppointmentPatientApproval";
import LoadingSpinner from "@/components/UI/LoadingSpinner";

const convertISOTo12HourFormat = (isoDate) => {
  const date = new Date(isoDate);

  // Get the hours, minutes, and AM/PM indicator.
  let hours = date.getHours();
  let minutes = date.getMinutes();
  const amPm = hours >= 12 ? "pm" : "am";

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
  const [replierData, setReplierData] = useState({});
  const [moreVertButton, setMoreVertButton] = useState(false);
  const [prescribeDrugs, setPrescribeDrugs] = useState(false);
  const [isScheduleCheckup, setIsisScheduleCheckup] = useState(false);
  const [endAppointment, setEndAppointment] = useState(false);
  const [
    doctorEndAppointmentPatientApproval,
    setDoctorEndAppointmentPatientApproval,
  ] = useState(false);
  const [chats, setChats] = useState([]);
  const { isLoading, error, sendRequest: sendChatRequest } = useHttp();
  const router = useRouter();
  const authCtx = useContext(AuthContext);
  const { token } = authCtx;
  const { patientData, appointmentId } = props;
  console.log("MyChat AppId is", appointmentId);

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
      const { status, message, patient, chats, doctor } = res;

      if (status === "success" && message === "Fetch Successfully") {
        console.log("patient is patient", patient);
        props.userType === "patient"
          ? setReplierData(doctor)
          : setReplierData(patient);
        if (patient) {
          patientData(patient);
        }
        setChats(chats);
      }
    };

    sendChatRequest(
      {
        url: `appointment/fetchappointmentchats?appointmentid=${appointmentId}`,
        token: token,
      },
      myResponse
    );
    const chatListener = (e) => {
      setChats((prevArray) => [...prevArray, e.chat]);
    };
    window.Echo.channel(`${appointmentId}`).listen(
      "ChatMessenger",
      chatListener
    );
    return () => {
      window.Echo.leaveChannel(`${appointmentId}`);
    };
  }, [token]);

  const sendChat = (event) => {
    event.preventDefault();
    if (inputValue === "") return;
    setInputValue("");
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
        body: { appointmentid: `${appointmentId}`, message: inputValue },
        token: token,
      },
      myResponse
    );
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const startVideoCallHandler = () => {
    window.open("/video-call/" + appointmentId, "_blank");
  };

  function isURL(str) {
    const urlRegex = /^(https?|ftp):\/\/([^\s/$.?#].[^\s]*)$/i;
    return urlRegex.test(str);
  }

  const moreVertButtonHandler = () => {
    setMoreVertButton((prev) => !prev);
  };

  const prescribeDrugsHandler = () => {
    setPrescribeDrugs((prev) => !prev);
  };

  const scheduleCheckupHandler = () => {
    setIsisScheduleCheckup((prev) => !prev);
  };

  const endAppointmentHandler = () => {
    setEndAppointment((prev) => !prev);
  };

  const doctorEndAppointmentPatientApprovalHandler = () => {
    setDoctorEndAppointmentPatientApproval((prev) => !prev);
  };

  return (
    <div className="relative h-[83%] flex flex-col justify-end w-full bg-custom8 rounded-tl-2xl rounded-tr-2xl">
      {prescribeDrugs && (
        <PrescribeDrugs
          token={token}
          appointmentId={appointmentId}
          prescribeDrugsHandler={prescribeDrugsHandler}
        />
      )}
      {isScheduleCheckup && (
        <ScheduleCheckup scheduleCheckupHandler={scheduleCheckupHandler} />
      )}
      {endAppointment && (
        <EndAppointmentJourney endAppointmentHandler={endAppointmentHandler} />
      )}
      {doctorEndAppointmentPatientApproval && (
        <DoctorEndAppointmentPatientApproval
          doctorEndAppointmentPatientApprovalHandler={
            doctorEndAppointmentPatientApprovalHandler
          }
        />
      )}
      <div className="border bg-custom8 absolute top-0 right-0 left-0 flex rounded-tl-2xl rounded-tr-2xl h-20 items-center justify-between border-b border-ash pb-3 pt-6 px-3 md:h-32">
        <div className="flex items-center space-x-2 truncate mr-1 md:space-x-4">
          <div className="h-10 w-10 rounded-full flex-shrink-0 bg-white overflow-hidden md:h-[82px] md:w-[82px]">
            {Object.keys(replierData).length && (
              <Image
                src={`${replierData.profilepicture}`}
                alt="chat-profile-picture"
                className="h-full w-full"
                width={82}
                height={82}
              />
            )}
          </div>
          {Object.keys(replierData).length && (
            <div className="text-sm font-medium md:text-[25px]">
              {props.userType === "patient"
                ? `Dr. ${replierData.firstname} ${replierData.lastname}`
                : `${replierData.firstname} ${replierData.lastname}`}
            </div>
          )}
        </div>
        {props.userType === "doctor" && (
          <div className="relative flex flex-wrap items-center justify-end my-2 space-x-5">
            {/* add-checkup-calender-icon.svg */}

            <button
              onClick={prescribeDrugsHandler}
              className="flex items-center justify-center text-center h-[28px] w-[220] rounded-full border border-custom space-x-1 px-1 my-1 md:my-0 lg:p-0 lg:space-x-4 md:h-[40px] md:w-[200px] xl:h-[52px] xl:w-[239px]"
            >
              <div className=" h-[16px] w-[16px]">
                <Image
                  src="/images/icon/prescribe-drugs-icon.svg"
                  alt="prescribe-drugs-icon"
                  className="h-full w-full"
                  width={24}
                  height={24}
                />
              </div>
              <p className="text-[8px] text-custom md:text-[16px]">
                Prescribe Drug
              </p>
            </button>

            <button
              className="h-4 w-4 my-1 md:my-0 md:mb-0 md:h-[40px] md:w-[40px]"
              onClick={startVideoCallHandler}
            >
              {" "}
              <Image
                src="/images/icon/video-call-icon.svg"
                alt="video call icon"
                className="h-full w-full"
                width={24}
                height={24}
              />{" "}
            </button>

            <button
              className="relative h-4 w-4 my-1 md:my-0 md:h-[24px] md:w-[24px]"
              onClick={moreVertButtonHandler}
            >
              {moreVertButton && (
                <MoreVertButtonDropDown
                  scheduleCheckupHandler={scheduleCheckupHandler}
                  endAppointmentHandler={endAppointmentHandler}
                />
              )}
              <Image
                src={`/images/icon/${
                  moreVertButton ? "close.svg" : "three-dot-vert.svg"
                }`}
                alt="doctor"
                className="w-full h-full"
                width={24}
                height={24}
              />
            </button>
          </div>
        )}
      </div>

      <div
        ref={chatContainerRef}
        className="overflow-y-auto h-min w-full pb-20 space-y-5 px-3 md:px-8"
      >
        {/* Chats here */}

        {isLoading ? (
          <LoadingSpinner />
        ) : (
          props.userType === "doctor" &&
          chats.map((chat, index) => {
            const chatTime = convertISOTo12HourFormat(chat.created_at);
            return chat.type === "2" ? (
              <div key={index} className="flex justify-end">
                <div className="flex items-end">
                  <div className="space-y-2 flex flex-col items-end">
                    <div className="max-w-xl ml-20 bg-ash4 p-2 md:p-4 rounded-tl-xl rounded-bl-xl rounded-tr-xl text-xs md:text-base">
                      {isURL(chat.message) ? (
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          href={chat.message}
                          className="text-blue-500 underline"
                        >
                          {chat.message}
                        </a>
                      ) : (
                        chat.message
                      )}
                    </div>
                    <div className="text-xs text-ash6">{chatTime}</div>
                    {/* chatTime */}
                  </div>
                </div>{" "}
              </div>
            ) : (
              <div key={index} className="flex space-x-1 h-max w-max items-end">
                <div className="h-[42px] w-[42px] overflow-hidden rounded-full">
                  <Image
                    src={replierData.profilepicture}
                    alt="chat-profile-picture"
                    className="h-full w-full"
                    width={576}
                    height={320}
                  />{" "}
                </div>
                <div className="space-y-2">
                  <div className="mr-20 max-w-xl bg-ash4 p-2 rounded-tl-xl rounded-br-xl rounded-tr-xl text-xs md:p-4 md:text-base">
                    {isURL(chat.message) ? (
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href={chat.message}
                        className="text-blue-500 underline"
                      >
                        {chat.message}
                      </a>
                    ) : (
                      chat.message
                    )}
                  </div>
                  <div className="text-xs text-ash6">{chatTime}</div>
                </div>
              </div>
            );
          })
        )}

        {props.userType === "patient" &&
          chats.map((chat, index) => {
            const chatTime = convertISOTo12HourFormat(chat.created_at);
            console.log("The user type is", props.userType, chat.type);
            return chat.type === "2" ? (
              <div key={index} className="flex h-max w-max space-x-1 items-end">
                <div className="h-[42px] w-[42px] overflow-hidden rounded-full">
                  <Image
                    src={replierData.profilepicture}
                    alt="chat-profile-picture"
                    className="h-full w-full"
                    width={576}
                    height={320}
                  />{" "}
                </div>
                <div className="space-y-2">
                  <div className="mr-20 max-w-xl bg-ash4 p-2 rounded-tl-xl rounded-br-xl rounded-tr-xl text-xs md:p-4 md:text-base">
                    {isURL(chat.message) ? (
                      <a
                        href={chat.message}
                        className="text-blue-500 underline"
                      >
                        {chat.message}
                      </a>
                    ) : (
                      chat.message
                    )}
                  </div>
                  <div className="text-xs text-ash6">{chatTime}</div>
                </div>
              </div>
            ) : (
              <div key={index} className="flex justify-end">
                <div className="flex space-x-1 items-end">
                  <div className="space-y-2 flex flex-col items-end">
                    <div className="max-w-xl ml-20 bg-ash4 p-2 md:p-4 rounded-tl-xl rounded-bl-xl rounded-tr-xl text-xs md:text-base">
                      {isURL(chat.message) ? (
                        <a
                          href={chat.message}
                          className="text-blue-500 underline"
                        >
                          {chat.message}
                        </a>
                      ) : (
                        chat.message
                      )}
                    </div>
                    <div className="text-xs text-ash6">{chatTime}</div>
                  </div>
                </div>{" "}
              </div>
            );
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
