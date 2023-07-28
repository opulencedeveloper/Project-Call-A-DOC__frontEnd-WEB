import Image from "next/image";

import styles from "./MedicalData.module.css";

const MedicalInfo = () => {
  const medicalData = [
    { content: "Diaherra", val: true },
    { content: "COPD", val: false },
    { content: "Heart disease", val: true },
    { content: "Arthritis", val: false },
    { content: "Heart failue", val: false },
    { content: "Stroke", val: true },
    { content: "High blood presure", val: true },
    { content: "Cancer", val: true },
    { content: "Arthrithiss", val: false },
    { content: "Heart Failure", val: false },
  ];

  const checkboxHandler = (event) => {
    const id = event.target.id;
    const value = event.target.checked;
  };
  return (
    <div className="h-max w-full py-6 px-6 border border-ash4 rounded-xl">
      <div className="flex items-center justify-between mb-8">
        <p className="text-base font-semibold md:text-[18px]">
          Medical Information
        </p>
        <button className="flex justify-center items-center rounded-full space-x-1 border border-ash-4 w-[78px] h-[35px] md:w-[107px] md:h-[54px]">
        <p className="text-[14px] text-ash4 md:text-[18px]">
            Edit
          </p>
          <div className="w-[10px] h-[10px]">
            <Image
              src="/images/icon/edit-gray-icon.svg"
              alt="edit-icon"
              className="h-full w-full"
              loading="eager"
              priority
              width={9.23}
              height={9.23}
            />
          </div>
          
        </button>
      </div>{" "}
      <div className="flex flex-col flex-wrap h-auto xl:h-72 ">
        {medicalData.map((content, index) => (
          <div key={index} className="flex space-x-2 pb-7">
            <input
              type="checkbox"
              id={content.content}
              checked={content.val}
              className={styles.checkbox}
              onChange={checkboxHandler}
            />
            <label htmlFor={content.id} className="pt-0.5 text-base md:text-[16px]">
              {content.content}
            </label>
          </div>
        ))}
        {/* <div className="flex space-x-2 pb-7">
          <input
            type="checkbox"
            id="tickBox"
            className={styles.checkbox}
            onChange={checkboxHandler}
          />
          <label htmlFor="tickBox">
            Others
            <span className="text-xs font-medium">(Please specify)</span>
          </label>
        </div> */}
      </div>
      {/* <div className="w-1/2 flex justify-between flex-wrap">
        {locationData.map((data, index) => (
          <div key={index} className="w-full md:w-1/2 mb-5">
            <p className="text-[13px] text-ash5">{label[index]}</p>
            <p className="text-[16px]">{data}</p>
          </div>
        ))}
      </div> */}
    </div>
  );
};

export default MedicalInfo;
