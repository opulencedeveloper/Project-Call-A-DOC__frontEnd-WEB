import Image from "next/image";
import CircularProgress from "../../dashboard-ui/CircularProgress";
import { useEffect, useState } from "react";
import useHttp from "@/hooks/useHttp";

const waiter = <p className="text-sm text-center text-ash2">Please wait...</p>;

const Earnings = (props) => {
  const [selection, setSelection] = useState("month");
  const [credit, setCredit] = useState(0);
  const [debit, setDebit] = useState(0);
  const [totalEarnings, setTotalEarnings] = useState(0);
 

  const { isLoading, error, sendRequest: fetchTotalAppoitnments } = useHttp();
  const { startWithdrawalRequestHandler, token, doctorId } = props;

  useEffect(() => {
    const fetchTotalAppoitnmentsResponse = (res) => {
      const { credit, debit, totalearning } = res;
      setCredit(credit);
      setDebit(debit);
      setTotalEarnings(totalearning);
      console.log("earnigs", res);
    };

    fetchTotalAppoitnments(
      {
        url: `doctor/dashboard/earning?doctorid=${doctorId}&filteredtime=${selection}`,
        token: token,
      },
      fetchTotalAppoitnmentsResponse
    );
  }, [fetchTotalAppoitnments, token, selection, doctorId]);

  const selectionHandler = (event) => {
    console.log(event.target.value);
    setSelection(event.target.value);
  };

  return (
    <>
      <div className="flex justify-between pb-6 text-ash2">
        <p className="text-lg md:text-xl">Earnings</p>
        <select
          onChange={selectionHandler}
          className="-ml-1 text-sm outline-none"
        >
          <option value="month">This month</option>
          <option value="year">This year</option>
          <option value="day">This day</option>
        </select>
      </div>
      <div>
        <div className="flex flex-col space-y-5 justify-center items-center md:flex-row md:space-y-0">
          <div>
            <div className="h-[244.02px] w-[244.02px] flex items-center justify-center bg-custom-g4 rounded-full">
              <div className="h-[160px] w-[160.02px] flex flex-col items-center justify-center bg-custom1 rounded-full">
                <div className="text-ash6 text-lg">Total</div>
                <div className="font-semibold text-3xl">
                  {isLoading ? waiter : `₦${totalEarnings}`}
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="relative">
              <CircularProgress
                labelValue={+credit}
                labelState={false}
                circleHeight="130"
                circleWidth="130"
                barThickness="stroke-[22px]"
                barColor="stroke-[#65D6AD]"
                trackBarColor="stroke-[#FFFFFF]"
                circleRadius="53"
                // progressHeight="200"
                // circleHeight="200"
              />
              <div className="absolute top-11 w-full text-center">
                <div className="text-ash6 text-sm">Credit</div>
                <div className="font-semibold">
                  {isLoading ? waiter : `₦${credit}`}
                </div>
              </div>
            </div>

            <div className="relative">
              <CircularProgress
                labelValue={+debit}
                labelState={false}
                circleHeight="130"
                circleWidth="130"
                barThickness="stroke-[22px]"
                barColor="stroke-[#F86A6A]"
                circleRadius="53"
                trackBarColor="stroke-[#FFFFFF]"
                // progressHeight="200"
                // circleHeight="200"
              />
              <div className="absolute top-11 w-full text-center">
                <div className="text-ash6 text-sm">Debit</div>
                <div className="font-semibold">
                  {isLoading ? waiter : `₦${debit}`}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center space-x-12 mt-6 md:flex-row">
          {" "}
          <p className="text-sm text-ash6 mb-2 md:mb-0">
            Get your funds transfered to your bank
          </p>{" "}
          <button
            onClick={startWithdrawalRequestHandler}
            className="flex items-center justify-center space-x-3 bg-custom text-custom1 px-8 py-3 rounded-full"
          >
            <div className="text-sm">Withdraw</div>
            <Image
              src="/images/icon/arrow-from-bottom.svg"
              alt="arrow-from-bottom-icon"
              className="h-auto w-auto"
              width={16}
              height={16}
            />
          </button>{" "}
        </div>
      </div>
    </>
  );
};

export default Earnings;
