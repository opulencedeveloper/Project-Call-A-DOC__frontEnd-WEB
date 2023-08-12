import useHttp from "@/hooks/useHttp";
import Image from "next/image";
import { useEffect, useState } from "react";

const pills = ["Panadol", "Flagyl", "Aspirin"];

const CheckUp = (props) => {
  const [checkUp, setCheckUp] = useState([]);
  const { isLoading, error, sendRequest: fetchCheckups } = useHttp();
  const { token } = props;
  useEffect(() => {
    const myResponse = (res) => {
      const { data } = res;
      setCheckUp(data);
    };

    fetchCheckups(
      {
        url: "customer/fetchcheckups",
        token: token,
      },
      myResponse
    );
  }, [fetchCheckups, token]);
  return (
    <div className=" flex mb-8 mt-12 space-x-auto flex-col xl:space-x-10 xl:flex-row 2xl:space-x-20">
      <div className="w-full xl:w-1/2">
        <div className="flex justify-between pb-7">
          <p className="text-xl">Checkups</p>
          <button className="text-custom text-sm font-medium">View all</button>
        </div>
        <p className="font-medium text-base text-ash2 pb-4">Today</p>

        {/* EMPTY STATE */}
       <div className="h-[320px]"> {isLoading ? (
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
                    src="/images/doctor11.svg"
                    alt="doctor11"
                    className="w-full h-full"
                    loading="eager"
                    priority
                    width={90}
                    height={90}
                  />
                </div>
                <div className="space-y-1">
                  <p className="text-base font-medium md:text-xl">Dr. Victor Opulence</p>
                  <p className="text-ash2 text-sm">12:23pm</p>
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
        )} </div>
      </div>
      {/* SECOND DIV */}
      <div className="w-full bg-custom9 rounded-2xl flex flex-col justify-center px-5 py-7 md:py-9 xl:w-1/2 2xl:px-9 ">
        <div className="flex items-center justify-between pb-6  text-custom1">
          <p className="text-lg md:text-xl">Dosages</p>
          <button className="text-sm font-base">View all</button>
        </div>
        <p className="font-medium text-base pb-4 text-custom1">Today</p>
        <div className="space-y-4 h-full text-center py-20 text-ash6">
          No drugs have been prescribed yet
        </div>
        {/* <div className="space-y-4">
          {pills.map((content, index) => (
            <div key={index} className="flex space-x-8 items-center">
              <Image
                src="/images/icon/pills.svg"
                alt="doctor11"
                className="w-auto h-auto"
                 ""
                width={76}
                height={76}
              />
              <div className="space-y-1">
                <p className="text-custom1 text-xl">{content}</p>
                <div className="flex space-x-3 text-ash5 text-sm font-medium">
                  <p>2 pills daily</p>
                  <p>Oct 6, 2022</p>
                </div>
              </div>
            </div>
          ))}
        </div> */}
      </div>
    </div>
  );
};

export default CheckUp;
