import Image from "next/image";

const ChatFolderInfo = (props) => {
  const { chatFolderData } = props;
  return (
    <>
      {chatFolderData.map((data, index) => (
        <div
          key={index}
          className="border border-ash6 space-y-2 rounded-xl p-3 mb-5"
        >
          <p className="text-ash5 text-[16px] md:text-[18px]">Complaints</p>
          <p className="text[17px] md:text-[20px]">{data.complaint}</p>
          <p className="text-ash5 text-[16px] md:text-[18px]">Diagnosis</p>
          <p className="text[17px] md:text-[20px]">{data.diagnosis}</p>
          <p className="text-ash5 text-[16px] md:text-[18px]">Prescription</p>
          {data.prescriptions.map((prescription, index) => (
            <p key={index} className="text-[16px] md:text-[20px]">
             {prescription}
            </p>
          ))}
          <div className="flex justify-between items-center h-[40px]">
            <p className="text-ash5 text-[13px] md:text-[18px]">2nd Nov, 2022</p>
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
      ))}
    </>
  );
};

export default ChatFolderInfo;
