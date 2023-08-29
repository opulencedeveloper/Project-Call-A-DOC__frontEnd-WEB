import Image from "next/image";
import { useEffect, useState } from "react";
import useHttp from "@/hooks/useHttp";
import LoadingSpinner from "@/components/UI/LoadingSpinner";

function formatDate(inputDate) {
  const months = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
  ];

  const date = new Date(inputDate);
  const day = date.getDate();
  const month = months[date.getMonth()];
  const year = date.getFullYear();

  let daySuffix;
  if (day === 1 || day === 21 || day === 31) {
    daySuffix = "st";
  } else if (day === 2 || day === 22) {
    daySuffix = "nd";
  } else if (day === 3 || day === 23) {
    daySuffix = "rd";
  } else {
    daySuffix = "th";
  }

  const formattedDate = `${day}${daySuffix} ${month}, ${year}`;
  return formattedDate;
}

const ChatFolderInfo = (props) => {
  const [patientFolderData, setpatientFolderData] = useState([]);
  const {
    isLoading,
    error,
    sendRequest: fetchPatientFolderDetails,
  } = useHttp();

  const { chatFolderData, token, patientData, chatInfoReloader } = props;

  useEffect(() => {
    const myResponse = (res) => {
      const { data } = res;
      console.log("chat folderrrrrrrrrrrrrrrrrrrrrr", res);
      setpatientFolderData(data);
    };

    fetchPatientFolderDetails(
      {
        url: `doctor/folder/fetchdescriptions?patientid=${patientData.patientid}`,
        token: token,
      },
      myResponse
    );
  }, [token, chatInfoReloader]);

  console.log("patientFolderData", patientFolderData);
  return (
    <>
      {isLoading ? (
        <LoadingSpinner />
      ) : patientFolderData.length === 0 ? (
        <p className="text-center">Folder is Empty</p>
      ) : (
        patientFolderData.map((data, index) => (
          <div
            key={index}
            className="border border-ash6 space-y-2 rounded-xl p-3 mb-5"
          >
            <p className="text-ash5 text-[16px] md:text-[18px]">Complaints</p>
            <p className="text[17px] md:text-[20px]">{data.title}</p>
            <p className="text-ash5 text-[16px] md:text-[18px]">Diagnosis</p>
            <p className="text[17px] md:text-[20px]">{data.description}</p>
            <p className="text-ash5 text-[16px] md:text-[18px]">Prescription</p>
            <p className="text-[16px] md:text-[20px]">{data.prescription}</p>
            <div className="flex justify-between items-center h-[40px]">
              <p className="text-ash5 text-[13px] md:text-[18px]">
                {formatDate(data.created_at)}
              </p>
              <div className="flex items-center space-x-3 h-[40px] w-[131px]">
                <div className="w-[30px] h-[30px] rounded-full overflow-hidden md:w-[40px] md:h-[40px]">
                  <Image
                    className="w-full h-full"
                    loading="eager"
                    alt="doctor-5"
                    src={data.doctor.profilepicture}
                    priority
                    height={40}
                    width={40}
                  />
                </div>
                <p className="text-ash5 text-[13px] md:text-18px">{`Dr. ${data.doctor.firstname}`}</p>
              </div>
            </div>
          </div>
        ))
      )}
    </>
  );
};

export default ChatFolderInfo;
