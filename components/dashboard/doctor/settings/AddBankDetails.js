import BackDrop from "@/components/UI/BackDrop";

const AddBankDetails = () => {
  return (
    <BackDrop>
      <form className="h-[489px] w-[90%] flex flex-col justify-center items-center space-y-6 bg-white shadow-custom-shadow rounded-3xl md:w-[475px]">
        <p className="text-[20px] font-medium text-center">Add new account</p>
        <div className="w-[85%] border-b border-ash4 pb-6">
          {" "}
          <label htmlFor="account-number" className=" w-full  mb-3">
            <p className="text-[16px] text-start pb-2">Account number</p>
            <input
              type="text"
              placeholder="Enter Account Number"
              className="outline-none h-[62px] w-full border border-ash6 rounded-xl pl-5"
            />{" "}
          </label>
          <label htmlFor="account-number" className="w-full pt-5">
            <p className="text-[16px] text-start pb-2">Bank</p>
            <input
              type="text"
              placeholder="Enter Bank Name"
              className="outline-none h-[62px] w-full border border-ash6 rounded-xl pl-5"
            />{" "}
          </label>
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
