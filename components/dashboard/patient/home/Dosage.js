import useHttp from "@/hooks/useHttp";
import Image from "next/image";
import { useEffect, useState } from "react";

const unixTimeStampConverter = (timeStamp) => {
  const date = new Date(timeStamp * 1000); // Convert to milliseconds

  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const year = date.getFullYear();
  const month = months[date.getMonth()];
  const day = date.getDate();

  const formattedDate = `${month} ${day}, ${year}`;
  return formattedDate;
};

const Dosage = (props) => {
  const { token, patientId, transformedTodaysDate } = props;
  const [dosage, setDosage] = useState([]);
  const [todayDate, setTodayDate] = useState(transformedTodaysDate);
  const { isLoading, error, sendRequest: fetchDosageData } = useHttp();

  useEffect(() => {
    const todayDosageResponse = (res) => {
      const { data } = res;
      setDosage(data);
      console.log("Dosageeeeeeeeeeeeeee", data);
    };

    fetchDosageData(
      {
        url: `customer/prescription/fetchprescriptions?patientid=${patientId}&day=${todayDate}`, //
        token: token,
      },
      todayDosageResponse
    );
  }, [fetchDosageData, token, todayDate]);

  const viewAllDosageHandler = (data) => {
    console.log(data);
    const info = data === transformedTodaysDate ? "" : transformedTodaysDate;
    setTodayDate(info);
  };
  return (
    <div className="w-full bg-custom9 rounded-2xl flex flex-col px-5 py-7 h-[450px] md:py-9 xl:w-1/2 2xl:px-9 ">
      <div className="flex items-center justify-between pb-6  text-custom1">
        <p className="text-lg md:text-xl">Dosages</p>
        <button
          onClick={() => viewAllDosageHandler(todayDate)}
          className="text-sm font-base"
        >
          {`View ${todayDate === "" ? "Today" : "All"}`}
        </button>
      </div>
      <p className="font-medium text-base pb-4 text-custom1">
        {todayDate === "" ? "All" : "Today"}
      </p>
      {isLoading ? (
        <p className="h-full text-center py-20 text-ash6">Loading...</p>
      ) : (
        <>
          {" "}
          {dosage.length === 0 && (
            <p className=" h-full text-center py-20 text-ash6">
              No drugs have been prescribed today
            </p>
          )}
          {dosage.length !== 0 && (
            <div className="space-y-4 overflow-y-auto overflow-x-hidden">
              {dosage.map((dosageData, index) => (
                <div key={index} className="flex space-x-8 items-center">
                  <Image
                    src="/images/icon/pills.svg"
                    alt="doctor11"
                    className="w-auto h-auto"
                    width={76}
                    height={76}
                  />
                  <div className="space-y-1">
                    <p className="text-custom1 text-xl">{dosageData.title}</p>
                    <div className="flex space-x-3 text-ash5 text-sm font-medium">
                      <p>{dosageData.dosage}</p>
                      <p>{unixTimeStampConverter(dosageData.ptime)}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}{" "}
        </>
      )}
    </div>
  );
};

export default Dosage;
