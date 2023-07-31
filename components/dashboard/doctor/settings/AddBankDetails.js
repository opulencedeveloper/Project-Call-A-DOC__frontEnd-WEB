import Image from "next/image";
import BackDrop from "@/components/UI/BackDrop";

const AddBankDetails = (props) => {
    const {startAddingBankDetailsHandler} = props;
    const closeAddingBankDetailsHandler = () => {
        startAddingBankDetailsHandler(false)
    }
  return (
    <BackDrop>
      <form className="h-[489px] w-[90%] flex flex-col pt-10 items-center space-y-4 bg-white shadow-custom-shadow rounded-3xl md:w-[475px]">
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
        <p className="text-[20px] font-medium text-center">Add new account</p>
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
            <input
              type="text"
              name="bank-name"
              placeholder="Enter Bank Name"
              className="outline-none h-[62px] w-full border border-ash6 rounded-xl pl-5"
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
          <button className="rounded-full h-full w-[153px] border border-ash5 text-ash5">
            Cancel
          </button>
          <button className="bg-custom text-white rounded-full h-full w-[202px]">
            Add Account
          </button>
        </div>
      </form>
    </BackDrop>
  );
};

export default AddBankDetails;
