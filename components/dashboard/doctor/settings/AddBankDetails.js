import BackDrop from "@/components/UI/BackDrop";
import { useEffect, useState } from "react";
import useHttp from "@/hooks/useHttp";
import LoadingSpinner from "@/components/UI/LoadingSpinner";
import AccountDetailsFormContent from "./AccountDetailsFormContent";
import Image from "next/image";

const AddBankDetails = (props) => {
  const { isLoading, error, sendRequest: httpRequest } = useHttp();
  const [banks, setBanks] = useState([]);
  const [accountAddedSuccess, setAccountAddedSuccess] = useState(false);

  const {
    switchAddingBankDetails,
    token,
    setProfileUpdateHandler,
    doctorId,
    toPaymentTabHandler,
  } = props;

  useEffect(() => {
    const myResponse = (res) => {
      setBanks(res);
    };

    httpRequest(
      {
        url: "fetchbanks",
        token: token,
      },
      myResponse
    );
  }, [httpRequest, token]);

  const closeAddingBankDetailsHandler = () => {
    switchAddingBankDetails();
  };

  const addingAccountResponse = (res) => {
    const { status, message } = res;
    if (status === "success") {
      setAccountAddedSuccess(true);
    }
  };

  const submitAccountDetailsHandler = (
    accountNumber,
    selectedBankId,
    accountIsPrimary
  ) => {
    console.log("Clicked");
    const isPrimary = accountIsPrimary ? "1" : "0";
    httpRequest(
      {
        url: "doctor/accounts",
        method: "POST",
        token: token,
        body: {
          doctorid: doctorId,
          accountnumber: accountNumber,
          bank: selectedBankId,
          type: isPrimary,
        },
      },
      addingAccountResponse
    );
  };

  return (
    <BackDrop>
      <div className="h-max w-[90%] flex flex-col py-10 items-center space-y-4 bg-white shadow-custom-shadow rounded-3xl md:w-[475px]">
        {accountAddedSuccess && (
          <>
            <div className="h-[103px] w-[104px]">
              <Image
                src={`/images/icon/circle-good-mark-icon.svg`}
                alt="circle-good-mark-icon.svg"
                loading="eager"
                priority
                className="h-full w-full"
                width={104}
                height={103}
              />
            </div>
            <p className="font-medium text-[31px] text-center leading-tight">
              Update successful
            </p>
            <button
              onClick={toPaymentTabHandler}
              className="bg-custom10 h-[62px] w-[230px] text-[20px] rounded-full text-white md:w-[288px]"
            >
              OK
            </button>
          </>
        )}
        {error && (
          <div className="bg-custom11 mx-10 rounded-md text-custom1 font-semibold text-sm py-3 px-5 md:px-10">
            <p className="text-center">{error}</p>
          </div>
        )}
        {isLoading ? (
          <LoadingSpinner pageHeight="h-max" />
        ) : 
          !accountAddedSuccess && <AccountDetailsFormContent
            submitAccountDetailsHandler={submitAccountDetailsHandler}
            doctorId={doctorId}
            banks={banks}
            token={token}
            closeAddingBankDetailsHandler={closeAddingBankDetailsHandler}
          />
        }
      </div>
    </BackDrop>
  );
};

export default AddBankDetails;
