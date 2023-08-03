import useHttp from "@/hooks/useHttp";
import { useRef, useState } from "react";

const AccountDetailsFormContent = (props) => {
  const { isLoading, error, sendRequest: accountDetailsRequest } = useHttp();
  const [accountNumber, setAccountNumber] = useState("");
  const [selectedBank, setSelectedBank] = useState();
  const [selectedBankId, setSelectedBankId] = useState();
  const [bankAccountName, setBankAccountName] = useState();
  const [accountIsPrimary, setAccountIsPrimary] = useState(true);
  const selectRef = useRef(null);
  const {
    banks,
    closeAddingBankDetailsHandler,
    submitAccountDetailsHandler,
    doctorId,
  } = props;

  console.log(doctorId);
  const selectedBankHandler = (event) => {
    const selectedOption =
      selectRef.current.options[selectRef.current.selectedIndex];
    const selectedBankId = selectedOption ? selectedOption.id : "";
    const selectedBankName = event.target.value;
    setSelectedBank(selectedBankName);
    setSelectedBankId(selectedBankId);
  };

  const myResponse = (res) => {
    const { account } = res;
    setBankAccountName(account.data.account_name);
  };

  const accountIsPrimaryHandler = (event) => {
    setAccountIsPrimary(event.target.checked);
  };

  const accountNumberChangeHandler = (event) => {
    const accountNumber = event.target.value;
    setAccountNumber(accountNumber);
    if (accountNumber.length === 10) {
      accountDetailsRequest(
        {
          url: `fetchaccountdetails?accountnumber=${accountNumber}&bank=${selectedBankId}`,
        },
        myResponse
      );
    }
  };

  const mySubmitAccountDetailsHandler = () => {
    submitAccountDetailsHandler(
      accountNumber,
      selectedBankId,
      accountIsPrimary
    );
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
                  id={bankDetails.bankcode}
                  value={bankDetails.name}
                >
                  {bankDetails.name}
                </option>
              ))}
            </select>
          </div>
        </div>
        {selectedBank && (
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
        )}
        {bankAccountName && accountNumber.length === 10 ? (
          <p className="text-base text-green-500">{bankAccountName}</p>
        ) : null}
        {isLoading && (
          <p className="text-sm text-green-500">Fetching account name</p>
        )}
        {error && (
          <div className="bg-custom11 rounded-md text-custom1 font-semibold text-sm py-3 px-5 md:px-10">
            <p className="text-center">{error}</p>
          </div>
        )}
        <div className="flex items-center space-x-3">
          <input
            type="checkbox"
            checked={accountIsPrimary}
            onChange={accountIsPrimaryHandler}
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
        <button
          type="button"
          onClick={mySubmitAccountDetailsHandler}
          disabled={
            accountNumber && selectedBank && bankAccountName ? false : true
          }
          className="bg-custom text-white w-[50%] rounded-full h-full md:w-[202px]"
        >
          Add Account
        </button>
      </div>{" "}
    </>
  );
};

export default AccountDetailsFormContent;
