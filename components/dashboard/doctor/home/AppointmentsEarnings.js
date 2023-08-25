import { useState } from "react";

import Withdrawal from "./Withdrawal";
import TotalAppointments from "./TotalAppointments";
import UpcomingChecksups from "./UpcomingCheckups";
import Earnings from "./Earnings";

const AppointmentsEarnings = (props) => {
  const [beginWithdrwal, setBeginWithdrwal] = useState(false);
  const { token, doctorId } = props;

  const startWithdrawalRequestHandler = () => {
    setBeginWithdrwal((prev) => !prev);
  };
  return (
    <div className=" flex mb-8 mt-7 space-x-auto flex-col xl:space-x-10 w xl:flex-row">
      {beginWithdrwal && (
        <Withdrawal
          token={token}
          startWithdrawalRequestHandler={startWithdrawalRequestHandler}
        />
      )}
      <div className="mb-12 xl:mb-0">
        {/* //DATA STATE  */}
        <TotalAppointments token={token} doctorId={doctorId} />
        <UpcomingChecksups token={token} doctorId={doctorId} />
      </div>
      {/* SECOND DIV */}
      <div className="rounded-2xl shadow-custom-shadow2 flex flex-col justify-center px-5 md:px-9 pt-8 pb-14 ">
        <Earnings
          startWithdrawalRequestHandler={startWithdrawalRequestHandler}
          token={token}
          doctorId={doctorId}
        />

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

export default AppointmentsEarnings;
