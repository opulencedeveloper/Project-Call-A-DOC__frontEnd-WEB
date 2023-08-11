import BackDrop from "@/components/UI/BackDrop";
import LoadingSpinner from "@/components/UI/LoadingSpinner";
import SuccessMessage from "@/components/dashboard/dashboard-ui/SuccessMessage";
import useHttp from "@/hooks/useHttp";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

let successHttpResponseMessage;

const PrescribeDrugs = (props) => {
  const [inputCount, setInputCount] = useState(1);
  const prescriptionContainerRef = useRef();
  const [isSuccess, setIsSuccess] = useState(false);
  const { isLoading, error, sendRequest: prescribeDrugsRequest } = useHttp();

  const { prescribeDrugsHandler, appointmentId, token } = props;

  useEffect(() => {
    const scrollToBottom = () => {
      if (prescriptionContainerRef.current) {
        prescriptionContainerRef.current.scrollTop =
          prescriptionContainerRef.current.scrollHeight;
      }
    };

    scrollToBottom();
  }, [inputCount]);

  const handleAddInput = () => {
    setInputCount((prev) => prev + 1);
  };

  const [inputValues, setInputValues] = useState([]);

  const handleInputChange = (index, field, value) => {
    const newInputValues = [...inputValues];
    newInputValues[index] = {
      ...newInputValues[index],
      [field]: value, // just incase you're wondering, this is called Computed Property Names. They allow you to use a variable (in this case, field) as the property name when creating an object literal.
    };
    setInputValues(newInputValues);
  };

  const prescribeDrugsSwitcherHandler = () => {
    setIsSuccess((prev) => !prev);
  };

  const prescribeDrugsRequestResponse = (res) => {
    const { status, message } = res;
    if (status === "success") {
      successHttpResponseMessage = message;
      prescribeDrugsSwitcherHandler();
    }
  };

  const submitPrescribedDrugsHandler = (event) => {
    event.preventDefault();
    const details = inputValues.map((input) => ({
      title: input.title,
      dosage: input.dosage,
    }));

    if (
      details.length === 0 ||
      details[0].title === "" ||
      details[0].dosage === ""
    )
      return;

    prescribeDrugsRequest(
      {
        url: "doctor/prescription/addprescription",
        method: "POST",
        body: {
          appointmentid: appointmentId,
          details: details,
        },
        token: token,
      },
      prescribeDrugsRequestResponse
    );
  };


  const inputStyles =
    "border border-ash6 outline-none h-[50px] w-full rounded-xl px-3 outline-none md:h-[68px]";
  return (
    <BackDrop>
      {isSuccess ? (
        <SuccessMessage
          successMessageHandler={prescribeDrugsHandler}
          successMessage={successHttpResponseMessage}
        />
      ) : (
        <form
          onSubmit={submitPrescribedDrugsHandler}
          className="animateSlideUp overflow-y-auto h-[462px] w-[90%] z-50 pt-7 px-5 shadow-custom-shadow2 rounded-xl bg-white md:px-9 md:w-[669px]"
        >
          {error && (
            <div className="bg-custom11 mx-10 rounded-md text-custom1 font-semibold text-sm py-3 px-5 md:px-10">
              <p className="text-center">{error}</p>
            </div>
          )}

          {isLoading ? (
            <div className="flex flex-col items-center justify-center h-full w-full">
              {" "}
              <LoadingSpinner />
            </div>
          ) : (
            <>
              <p className="text-base font-medium text-center mb-8 md:text-[20px]">
                Prescribe drugs to patient
              </p>
              <div
                ref={prescriptionContainerRef}
                className="max-h-[50%] overflow-y-auto"
              >
                {" "}
                {Array.from({ length: inputCount }).map((_, index) => (
                  <div
                    key={index}
                    className="flex flex-col justify-between my-2 border-b border-gray-500 pb-5 md:flex-row"
                  >
                    <div className="w-full space-y-1 md:w-[47%]">
                      <label className="text-sm md:text-[16px]">
                        Name of Drug
                      </label>
                      <input
                        type="text"
                        onChange={(e) =>
                          handleInputChange(index, "title", e.target.value)
                        }
                        className={inputStyles}
                      />
                    </div>
                    <div className="w-full space-y-1 md:w-[47%]">
                      <label className="text-sm md:text-[16px]">Dosage</label>
                      <input
                        onChange={(e) =>
                          handleInputChange(index, "dosage", e.target.value)
                        }
                        type="text"
                        className={inputStyles}
                      />
                    </div>
                  </div>
                ))}{" "}
              </div>

              <button
                onClick={handleAddInput}
                type="button"
                className="flex h-[17px]items-center space-x-2 mt-2"
              >
                <div className="h-[13px] w-[13px] md:h-[16px] md:w-[16px]">
                  <Image
                    src="/images/icon/add-blue-icon.svg"
                    priority
                    loading="eager"
                    alt="video call icon"
                    className="h-full w-full"
                    width={24}
                    height={24}
                  />
                </div>
                <p className="text-custom text-[10px] md:text-[13px]">
                  Add More Drugs
                </p>
              </button>
              <hr className="border-1 border-ash6 mt-5" />

              <div className="flex justify-center space-x-4 h-[45px] mt-8 text-sm md:h-[52px] md:text-16">
                <button
                  type="button"
                  onClick={prescribeDrugsHandler}
                  className="rounded-full text-ash5 border border-ash5 w-20 md:w-[27%]"
                >
                  Cancel
                </button>
                <button className="rounded-full text-white bg-custom w-24 md:w-[32%]">
                  Prescribe
                </button>
              </div>
            </>
          )}
        </form>
      )}
    </BackDrop>
  );
};

export default PrescribeDrugs;
