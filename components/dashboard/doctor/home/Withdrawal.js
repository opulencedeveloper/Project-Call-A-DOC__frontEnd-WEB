import BackDrop from "@/components/UI/BackDrop";
import LoadingSpinner from "@/components/UI/LoadingSpinner";
import useHttp from "@/hooks/useHttp";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const Withdrawal = (props) => {
  const { isLoading, error, sendRequest: fetchBankAccounts } = useHttp();
  const userInfo = useSelector((state) => state.userData);
  const doctorId = userInfo.doctorid;
  const { startWithdrawalRequestHandler, token } = props;

  useEffect(() => {
    const myResponse = (res) => {
      console.log("Withdrwal response", res);
      // setBanks(res);
    };

    fetchBankAccounts(
      {
        url: `doctor/withdrawal/fetchall?doctorid=${doctorId}`,
        token: token,
      },
      myResponse
    );
  }, [fetchBankAccounts, token]);

  return (
    <BackDrop>
      <div className="animateSlideUp shadow-custom-shadow2 rounded-2xl bg-white h-[562px] pt-7 px-10 w-[90%] md:w-[475px]">
        {error ? (
          <div className="flex flex-col items-center space-y-5">
            {" "}
            <div className="bg-custom11 mx-10 rounded-md text-custom1 font-semibold text-sm py-3 px-5 md:px-10">
              <p className="text-center">{error}</p>
            </div>
            <button
              onClick={startWithdrawalRequestHandler}
              className="rounded-full h-10 text-ash5 border border-ash5 w-[40%]"
            >
              Close
            </button>
          </div>
        ) : isLoading ? (
          <div className="flex flex-col items-center justify-center h-full w-full">
            {" "}
            <LoadingSpinner />{" "}
          </div>
        ) : (
          <>
            {" "}
            <p className="text-center font-medium text-[20px] text-custom9 mb-8">
              Withdrawal request
            </p>{" "}
            <p className="text-custom9 text-[16px]">Available Balance</p>
            <p className="text-[39px] mb-7">N203,000</p>{" "}
            <form className="space-y-8">
              <div className="border-b border-ash4 space-y-2 pb-6">
                <p className="text-[16px]">Withdraw to</p>
                <div className="border border-ash6 rounded-xl px-5">
                  <select
                    className="outline-none h-[62px] w-full text-ash rounded-xl appearance-none bg-transparent pr-8 bg-no-repeat bg-right select-button-icon"
                    //  onChange={selectedBankHandler}
                  >
                    <option selected disabled>
                      Select Bank Account
                    </option>
                    {/* {banks.map((bankDetails, index) => ( */}
                    {/* <option
                  key={index}
                  id={bankDetails.bankcode}
                  value={bankDetails.name}
                >
                  {bankDetails.name}
                </option>
              ))} */}
                  </select>
                </div>
                <div className="space-y-2">
                  <label htmlFor="amount" className="text-[16px]">
                    Amount
                  </label>
                  <div className="flex items-center h-[62px] border border-ash6 rounded-xl px-5">
                    <p className="text-ash text-[16px]">₦</p>
                    <input
                      name="amount"
                      type="text"
                      className="flex-1 outline-none pl-5"
                    />
                  </div>{" "}
                </div>{" "}
              </div>

              <div className="flex justify-between  h-[52px]">
                <button
                  onClick={startWithdrawalRequestHandler}
                  className="rounded-full text-ash5 border border-ash5 w-[40%]"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="rounded-full text-white bg-custom w-[52%]"
                >
                  Make Request
                </button>
              </div>
            </form>{" "}
          </>
        )}
      </div>
    </BackDrop>
  );
};

export default Withdrawal;
