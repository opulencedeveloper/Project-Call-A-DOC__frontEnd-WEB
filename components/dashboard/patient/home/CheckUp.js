import { useEffect, useState } from "react";

import useHttp from "@/hooks/useHttp";

import Image from "next/image";

const CheckUp = (props) => {
  const [checkUp, setCheckUp] = useState([]);
  const { isLoading, error, sendRequest: fetchCheckupData } = useHttp();
  const { token, patientId, transformedTodaysDate } = props;
  const [todayDate, setTodayDate] = useState(transformedTodaysDate);
  useEffect(() => {
    const checkUpResponse = (res) => {
      const { data } = res;
      setCheckUp(data);
      console.log("CheckUpsssssssssssssssssssssssssss", data);
    };

    fetchCheckupData(
      {
        url: `customer/fetchcheckups?checkupdate=${todayDate}`,
        token: token,
      },
      checkUpResponse
    );
  }, [fetchCheckupData, token, todayDate]);

  const viewAllDosageHandler = (data) => {
    console.log(data);
    const info = data === transformedTodaysDate ? "" : transformedTodaysDate;
    setTodayDate(info);
  };
  return (
    <div className="w-full xl:w-1/2">
      <div className="flex justify-between pb-7">
        <p className="text-xl">Checkups</p>
        <button
          onClick={() => viewAllDosageHandler(todayDate)}
          className="text-custom text-sm font-medium"
        >{`View ${todayDate === "" ? "Today" : "All"}`}</button>
      </div>
      <p className="font-medium text-base text-ash2 pb-4">
        {todayDate === "" ? "All" : "Today"}
      </p>

      {/* EMPTY STATE */}
      <div className="h-[320px] overflow-y-auto overflow-x-hidden">
        {" "}
        {isLoading ? (
          <p className="text-center py-32 text-ash6">Loading...</p>
        ) : checkUp.length === 0 ? (
          <div className="text-center py-32 text-ash6">
            No checkups yet
            <br />
            Make an appointment
          </div>
        ) : (
          checkUp.map((checkUp, index) => (
            <div
              key={index}
              className="flex justify-between rounded-xl shadow-2xl px-3 py-7 mb-5 md:px-8"
            >
              <div className="flex items-center space-x-4 ">
                <div className="flex-shrink-0 rounded-full overflow-hidden w-[50px] h-[50px] md:h-[90px] md:w-[90px]">
                  <Image
                    src={checkUp.doctor.profilepicture}
                    alt="doctor11"
                    className="w-full h-full"
                    loading="eager"
                    priority
                    width={90}
                    height={90}
                  />
                </div>
                <div className="space-y-1">
                  <p className="text-base font-medium md:text-xl">
                    {`Dr. ${checkUp.doctor.firstname} ${checkUp.doctor.lastname}`}
                  </p>
                  <p className="text-ash2 text-sm">{checkUp.doctor.ctime}</p>
                  <p className="text-xs text-ash2">
                    Specialist clinic, Port Harcourt
                  </p>
                </div>
              </div>
              <div className="my-auto">
                <button className="bg-custom rounded-full py-2.5 px-8 text-xs text-custom1">
                  Join
                </button>
              </div>
            </div>
          ))
        )}{" "}
      </div>
    </div>
  );
};

export default CheckUp;
