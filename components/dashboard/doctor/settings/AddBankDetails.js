import Image from "next/image";
import BackDrop from "@/components/UI/BackDrop";
import { useEffect, useState } from "react";
import useHttp from "@/hooks/useHttp";
import LoadingSpinner from "@/components/UI/LoadingSpinner";

const AddBankDetails = (props) => {
  const { isLoading, error, sendRequest: fetchUserData } = useHttp();
  const [banks, setBanks] = useState([]);
  const { startAddingBankDetailsHandler, token } = props;

  useEffect(() => {
    const myResponse = (res) => {
      const { data } = res;
      setBanks(res);
      console.log("data", res);
      // const data = doctor || customer;
      if (status === "success") {
        console.log("data", data);
        // setUserData(data);
      }
    };

    fetchUserData(
      {
        url: "fetchbanks",
        token: token,
      },
      myResponse
    );
  }, [fetchUserData, token]);

  const closeAddingBankDetailsHandler = () => {
    startAddingBankDetailsHandler(false);
  };

  return (
    <BackDrop>
      <form className="h-[489px] w-[90%] flex flex-col pt-10 items-center space-y-4 bg-white shadow-custom-shadow rounded-3xl md:w-[475px]">
        {isLoading || error ? (
          <LoadingSpinner errorMessage={error} pageHeight="h-max" />
        ) : (
          <>
            <div className="w-[85%] flex justify-end">
              <div className="w-[18px] h-[18px] cursor-pointer">
                <Image
                  src="/images/icon/close.svg"
                  alt="close-icon"
                  className="w-full h-full"
                  priority
                  loading="eager"
                  width={18.88}
                  height={18.88}
                  onClick={closeAddingBankDetailsHandler}
                />
              </div>
            </div>
            <p className="text-[20px] font-medium text-center">
              Add new account
            </p>
            <div className="space-y-3 w-[85%] border-b border-ash4 pb-6">
              {" "}
              <div className="w-full space-y-2">
                <label
                  htmlFor="account-number"
                  className="text-[16px] text-start pb-2 "
                >
                  Account number
                </label>
                <input
                  type="text"
                  name="account-number"
                  placeholder="Enter Account Number"
                  className="outline-none h-[62px] w-full border border-ash6 rounded-xl pl-5"
                />{" "}
              </div>
              <div className="w-full space-y-2">
                <label
                  htmlFor="bank-name"
                  className="w-full text-[16px] text-start"
                >
                  Bank
                </label>
                <div className="border border-ash6 rounded-xl px-5">
                  <select className="outline-none h-[62px] w-full rounded-xl">
                    <option value="" selected disabled>
                      Select Bank
                    </option>
                    {banks.map((bankDetails, index) => (
                      <option key={index} value={bankDetails.name}>
                        {bankDetails.name}
                      </option>
                    ))}
                  </select>
                </div>
                {/* <input
                  type="text"
                  name="bank-name"
                  placeholder="Enter Bank Name"
                  className=""
                /> */}
              </div>
              <div className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  checked={false}
                  // onChange={checkHandler}
                />
                <p className="text-[13px]">Make this my primary account</p>
              </div>
            </div>
            <div className="flex justify-between w-[85%]  h-[52px]">
              <button className="rounded-full h-full w-[40%] border border-ash5 text-ash5 md:w-[153px]">
                Cancel
              </button>
              <button className="bg-custom text-white w-[50%] rounded-full h-full md:w-[202px]">
                Add Account
              </button>
            </div>{" "}
          </>
        )}
      </form>
    </BackDrop>
  );
};

export default AddBankDetails;
