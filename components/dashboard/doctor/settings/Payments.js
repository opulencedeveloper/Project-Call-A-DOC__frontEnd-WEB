import Image from "next/image";

import BankDetails from "./BankDetails";
import TransactionHistoryTable from "../../dashboard-ui/settings/TrasactionHistoryTable";

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

const Payments = (props) => {
    const {startAddingBankDetailsHandler} = props;
  return (
    <>
      {" "}
      <div className="px-0 w-full h-full space-y-6 overflow-y-auto w-full bg-white md:px-7">
        <p className="text-lg font-medium md:text-[25px] mb-8">Payments</p>
        {/* <BankDetails
          accountTypeTextStyle="text-green-500 font-semibold"
          accountType="Primary Bank Account"
          accountNumber="7045768574"
          bankName="Access bank"
        />
        <BankDetails
          accountTypeTextStyle="text-ash2"
          accountType="Secondary Bank Account"
          accountNumber="57684723621"
          bankName="United Bank of Africa"
        /> */}
        <div className="border-b border-ash4 pb-7">
          <button
          onClick={() => startAddingBankDetailsHandler(true)}
          className="flex items-center space-x-2">
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

export default Payments;
