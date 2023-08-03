import Image from "next/image";

import BankDetails from "./BankDetails";
import TransactionHistoryTable from "../../dashboard-ui/settings/TrasactionHistoryTable";
import { useEffect, useState } from "react";
import useHttp from "@/hooks/useHttp";
import LoadingSpinner from "@/components/UI/LoadingSpinner";
import AddBankDetails from "./AddBankDetails";

const paymentHistoryData = [
  {
    invoice: "Month of May",
    amount: "USD $4.00",
    date: "August 2, 2013",
  },
  {
    invoice: "Month of June",
    amount: "USD $4.00",
    date: "August 2, 2013",
  },
  {
    invoice: "Month of May",
    amount: "USD $4.00",
    date: "August 2, 2013",
  },
  {
    invoice: "Month of July",
    amount: "USD $4.00",
    date: "August 2, 2013",
  },
];


const PaymentsTab = (props) => {
  const { startAddingBankDetailsHandler, setProfileUpdateHandler, token, doctorId } = props;
  const { isLoading, error, sendRequest: fetchUserData } = useHttp();
  const  [accountDetails, setAccountDetails] = useState([]);
  const [reloadComponent, setReloadComponent] = useState(false);
  const [isAddBankDetails, setIsAddBankDetails] = useState(false);
  
  const switchAddingBankDetailsHandler = () => {
    setIsAddBankDetails(prev => !prev);
    
  };

  const toPaymentTabHandler = () => {
    setIsAddBankDetails(prev => !prev);
    setReloadComponent(prev => !prev);
  }

  useEffect(() => {
    const myResponse = (res) => {
      const { data } = res;
      setAccountDetails(data);
      console.log("data is", data);
    };

    fetchUserData(
      {
        url: `doctor/accounts?doctorid=${doctorId}`,
        token: token,
      },
      myResponse
    );
  }, [fetchUserData, token, reloadComponent]); //reloadComponent]);

  if (isLoading || error) {
    return <LoadingSpinner errorMessage={error} pageHeight="h-full" />;
  } //setReloadComponent
  return (
    <>
    {isAddBankDetails && (
        <AddBankDetails 
          token={token}
          doctorId={doctorId}
          toPaymentTabHandler={toPaymentTabHandler}
          setReloadComponent={setReloadComponent}
          switchAddingBankDetails={switchAddingBankDetailsHandler}
          startAddingBankDetailsHandler={startAddingBankDetailsHandler}
        />
      )}
      {" "}
      <div className="px-0 w-full h-full space-y-6 overflow-y-auto w-full bg-white md:px-7">
        <p className="text-lg font-medium md:text-[25px] mb-8">Payments</p>
        {accountDetails.map((details) => {
          const isPrimary = details.type ===  "1" ? "Primary" : "Secondary";
          const style = details.type ===  "1" ? "text-green-500 font-semibold" : "text-ash2";
          return (
            <BankDetails
              accountTypeTextStyle={style}
              accountType={`${isPrimary} Bank Account`} 
              accountNumber={details.accountnumber}
              bankName={details.bankname}
            />
          );
        })}
        <div className="border-b border-ash4 pb-7">
          <button
            onClick={switchAddingBankDetailsHandler}//startAddingBankDetailsHandler(true)}
            className="flex items-center space-x-2"
          >
            <div className="h-[12px] w-[12px]">
              <Image
                src="/images/icon/add-icon-green.svg"
                alt="add-button-icon"
                className="w-full h-full"
                width={12}
                height={12}
              />
            </div>
            <p className="text-[13px] font-medium text-custom6">Add account</p>
          </button>
        </div>
        <TransactionHistoryTable
          tableData={paymentHistoryData}
          tableTitle="Payment history"
        />
      </div>
    </>
  );
};

export default PaymentsTab;
