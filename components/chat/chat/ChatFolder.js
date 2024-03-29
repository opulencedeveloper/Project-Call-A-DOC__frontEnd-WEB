import Image from "next/image";
import ChatFolderInfo from "./ChatFolderInfo";
import AddDetailsToFolderForm from "./AddDetailsToFolderForm";
import { useState } from "react";


const chatFolderData = [
  {
    complaint:
      "The patient complained of excessive headaches , pains, bitter tase and fever.",
    diagnosis: "Malaria.",
    prescriptions: ["Amartem Softgel 1x", "Panadol Extra 1 card"],
    date: "2nd Nov, 2022",
    doctorImageUrl: "",
    doctorName: "Dr. Grace",
  },
  {
    complaint:
      "The patient complained of stomach upset, heavyness and extreme tiredness",
    diagnosis: "Ulcer.",
    prescriptions: ["Paracetermol 1 card", "Gestig 1x"],
    date: "8th Nov, 2022",
    doctorImageUrl: "",
    doctorName: "Dr. Grace",
  },
  {
    complaint:
      "The patient complained of stomach upset, heavyness and extreme tiredness",
    diagnosis: "Malaria.",
    prescriptions: ["Amartem Softgel 1x", "Panadol Extra 1 card"],
    date: "8th Nov, 2022",
    doctorImageUrl: "",
    doctorName: "Dr. Grace",
  },
];

const ChatFolder = (props) => {
  const [addFolderDetails, setAddFolderDetails] =
    useState(false);

    const [chatInfoReloader, setChatInfoReloader] = useState(false);
  const addFolderHandler = () => {
    setAddFolderDetails((prev) => !prev);
  };

  const reloadChatFolderInfoHandler = () => {
    setChatInfoReloader(prev => !prev);
  }

  const { style, toggleChatFolderMobileView, patientData, token, appointmentId } = props;

  const styling =
    style ||
    "hidden lg:flex flex-col jusify-start h-[410px] pt-7 overflow-y-auto mb-5 px-5 md:h-full md:pr-8 lg:ml-5 2xl:ml-auto xl:w-1/4";

  return (
    <div className={styling}>
      {addFolderDetails && (
        <AddDetailsToFolderForm
        reloadChatFolderInfo = {reloadChatFolderInfoHandler}
         appointmentId={appointmentId} token={token} addFolderHandler={addFolderHandler} />
      )}
      
      <div className="flex items-center justify-between space-x-3 md:space-x-5">
       <div className="flex items-center space-x-2"> <div className="w-[33px] h-[25px] md:h-[30px] md:w-[37px]">
          <Image
            src="/images/icon/chat-folder-icon.svg"
            className="h-full w-full"
            alt="chat-folder-icon"
            loading="eager"
            priority
            height={30}
            width={37}
          />
        </div>
        <p className="text-base font-medium md:text-[20px]">
        {`${patientData.firstname } ${patientData.lastname} Folder`}
        </p> </div>

        <button
          onClick={toggleChatFolderMobileView}
          className="w-[18px] w-[18px]"
        >
          <Image
            src="/images/icon/close.svg"
            alt="close-icon"
            className="w-full h-full"
            priority
            loading="eager"
            width={18.88}
            height={18.88}
          />
        </button>
      </div>
      <div className="flex justify-between items-center mt-11 mb-9">
        <p className="text-base font-medium md:text-[20px]">Description</p>
        <button
          onClick={addFolderHandler}
          className="flex justify-center items-center text-white rounded-full h-[40px] w-[100px] bg-custom text-sm md:h-[52px] md:w-[160px] md:text-[20px]"
        >
          Add details
        </button>
      </div>

      <ChatFolderInfo
      chatInfoReloader={chatInfoReloader}
       chatFolderData={chatFolderData} token={token} patientData={patientData}/>
    </div>
  );
};

export default ChatFolder;
