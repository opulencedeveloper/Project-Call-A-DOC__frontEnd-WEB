import Image from "next/image";
import BackDrop from "@/components/UI/BackDrop";
import { useEffect, useState } from "react";
import useHttp from "@/hooks/useHttp";
import LoadingSpinner from "@/components/UI/LoadingSpinner";
import AccountDetailsFormContent from "./AccountDetailsFormContent";


const AddBankDetails = (props) => {
  const { isLoading, error, sendRequest: fetchUserData } = useHttp();
  const [banks, setBanks] = useState([]); 
  
  const { startAddingBankDetailsHandler, token } = props;

  useEffect(() => {
    const myResponse = (res) => {
      setBanks(res);
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
        {error && (
          <div className="bg-custom11 mx-10 rounded-md text-custom1 font-semibold text-sm py-3 px-5 md:px-10">
            <p className="text-center">{error}</p>
          </div>
        )}
        {isLoading ? (
          <LoadingSpinner pageHeight="h-max" />
        ) : (
          <AccountDetailsFormContent banks={banks}  closeAddingBankDetailsHandler={ closeAddingBankDetailsHandler}/>
        )}
      </form>
    </BackDrop>
  );
};

export default AddBankDetails;
