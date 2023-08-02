import useHttp from "@/hooks/useHttp";
import { useRef, useState } from "react";

const AccountDetailsFormContent = (props) => {
  const { isLoading, error, sendRequest: fetchAccountName } = useHttp();
  const [accountNumber, setAccountNumber] = useState("");
  const [selectedBank, setSelectedBank] = useState();
  const selectRef = useRef(null); 
  const { banks, closeAddingBankDetailsHandler } = props;

  const selectedBankHandler = (event) => {
    const selectedOption = selectRef.current.options[selectRef.current.selectedIndex];
    const selectedOptionId = selectedOption ? selectedOption.id : '';
    console.log(selectedOptionId);
    console.log(event.target.value);
  }

  const myResponse = (res) => {
    console.log(res);
    //setBanks(res);
  };

  const accountNumberChangeHandler = (event) => {
    const accountNumber = event.target.value.length;
    setAccountNumber(accountNumber);

    // if (accountNumber.length === 10) {
    //   fetchUserData(
    //     {
    //       url: "fetchbanks",
    //       token: token,
    //     },
    //     myResponse
    //   );
    // }
  };

  return (
    <>
      <p className="text-[20px] font-medium text-center">Add new account</p>
      <div className="space-y-3 w-[85%] border-b border-ash4 pb-6">
        {" "}
        
        <div className="w-full space-y-2">
          <label htmlFor="bank-name" className="w-full text-[16px] text-start">
            Bank
          </label>
          <div className="border border-ash6 rounded-xl px-5">
            <select
              className="outline-none h-[62px] w-full rounded-xl"
              ref={selectRef}
              onChange={selectedBankHandler}
            >
              <option selected disabled>
                Select Bank
              </option>
              {banks.map((bankDetails, index) => (
                <option
                  key={index}
                  id={bankDetails.bankid}
                  value={bankDetails.name}
                >
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

        <div className="w-full space-y-2">
          <label
            htmlFor="account-number"
            className="text-[16px] text-start pb-2 "
          >
            Account number
          </label>
          <input
            type="text"
            pattern="[0-9]*"
            onInput={(event) => {
              event.target.value = event.target.value.replace(/\D/g, "");
            }}
            name="account-number"
            placeholder="Enter Account Number"
            value={accountNumber}
            onChange={accountNumberChangeHandler}
            className="outline-none h-[62px] w-full border border-ash6 rounded-xl px-5"
          />{" "}
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
        <button
          onClick={closeAddingBankDetailsHandler}
          className="rounded-full h-full w-[40%] border border-ash5 text-ash5 md:w-[153px]"
        >
          Cancel
        </button>
        <button className="bg-custom text-white w-[50%] rounded-full h-full md:w-[202px]">
          Add Account
        </button>
      </div>{" "}
    </>
  );
};

export default AccountDetailsFormContent;
