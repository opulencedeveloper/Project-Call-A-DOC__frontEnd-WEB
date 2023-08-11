import Image from "next/image";
import { useEffect, useState } from "react";
import useHttp from "@/hooks/useHttp";
import LoadingSpinner from "@/components/UI/LoadingSpinner";

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
                2nd Nov, 2022
              </p>
              <div className="flex items-center space-x-3 h-[40px] w-[131px]">
                <div className="w-[30px] h-[30px] rounded-full overflow-hidden md:w-[40px] md:h-[40px]">
                  <Image
                    className="w-full h-full"
                    loading="eager"
                    alt="doctor-5"
                    src={"/images/doctor-joseph.svg"}
                    priority
                    height={40}
                    width={40}
                  />
                </div>
                <p className="text-ash5 text-[13px] md:text-18px">Dr. Grace</p>
              </div>
            </div>
          </div>
        ))
      )}
    </>
  );
};

export default ChatFolderInfo;
