import BackDrop from "@/components/UI/BackDrop";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const PrescribeDrugs = (props) => {
  const [inputCount, setInputCount] = useState(1);
  const prescriptionContainerRef = useRef();
  const { prescribeDrugsHandler } = props;

  useEffect(() => {
    const scrollToBottom = () => {
      if (prescriptionContainerRef.current) {
        prescriptionContainerRef.current.scrollTop =
          prescriptionContainerRef.current.scrollHeight;
      }
    };

    // Scroll to the bottom after the component mounts or whenever the chats change
    scrollToBottom();
  }, [inputCount]);

  const handleAddInput = () => {
    setInputCount((prev) => prev + 1);
  };

  const inputStyles =
    "border border-ash6 outline-none h-[50px] w-full rounded-xl px-3 outline-none md:h-[68px]";
  return (
    <BackDrop>
      <form className="animateSlideUp overflow-y-auto h-[462px] w-[90%] z-50 pt-7 px-5 shadow-custom-shadow2 rounded-xl bg-white md:px-9 md:w-[669px]">
        <p className="text-base font-medium text-center mb-8 md:text-[20px]">
          Prescribe drugs to patent
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
                <label className="text-sm md:text-[16px]">Name of Drug</label>
                <input className={inputStyles} />
              </div>
              <div className="w-full space-y-1 md:w-[47%]">
                <label className="text-sm md:text-[16px]">Dosage</label>
                <input className={inputStyles} />
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
          <p className="text-custom text-[10px] md:text-[13px]">Add More Drugs</p>
        </button>
        <hr className="border-1 border-ash6 mt-5" />

        <div className="flex justify-center space-x-4 h-[32px] mt-8 text-sm md:h-[52px] md:text-16">
          <button
            type="button"
            onClick={prescribeDrugsHandler}
            className="rounded-full text-ash5 border border-ash5 w-20 md:w-[27%]"
          >
            Cancel
          </button>
          <button
            //type="submit"
            className="rounded-full text-white bg-custom w-24 md:w-[32%]"
          >
            Prescribe
          </button>
        </div>
      </form>
    </BackDrop>
  );
};

export default PrescribeDrugs;
