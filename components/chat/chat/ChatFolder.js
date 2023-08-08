import Image from "next/image";
import { useRouter } from "next/router";
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

const ChatFolder = () => {
  const [addFolderDetails, setAddFolderDetails] = useState(false);
  const addFolderHandler = () => {
    setAddFolderDetails((prev) => !prev);
  };

  return (
    <div className="h-[410px] overflow-y-auto mb-5 flex flex-col jusify-start px-5 md:h-full md:pr-8 lg:ml-5 2xl:ml-auto mt-5 xl:w-1/4 xl:mt-auto">
      {addFolderDetails && (
        <AddDetailsToFolderForm addFolderHandler={addFolderHandler} />
      )}
      <div className="flex items-center space-x-3 md:space-x-5">
        <div className="w-[33px] h-[25px] md:h-[30px] md:w-[37px]">
          <Image
            src="/images/icon/chat-folder-icon.svg"
            className="h-full w-full"
            loading="eager"
            priority
            height={30}
            width={37}
          />
        </div>
        <p className="text-base font-medium md:text-[20px]">Kelvin Willis Folder</p>
      </div>
      <div className="flex justify-between items-center mt-11 mb-9">
        <p className="text-base font-medium md:text-[20px]">Description</p>
        <button
          onClick={addFolderHandler}
          className="flex justify-center items-center text-white rounded-full h-[42px] w-[120px] bg-custom text-base md:h-[52px] md:w-[160px] md:text-[20px]"
        >
          Add details
        </button>
      </div>

      <ChatFolderInfo chatFolderData={chatFolderData} />
    </div>
  );
};

export default ChatFolder;
