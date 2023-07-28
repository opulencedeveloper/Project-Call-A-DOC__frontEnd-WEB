import Image from "next/image";
import { useState } from "react";

const AddressInfo = () => {
  const [editMode, setEditMode] = useState(false);

  const editButtonHandler = () => {
    setEditMode(true);
  };
  const locationData = ["New York", "USA"];

  const label = ["City/State", "Country"];
  return (
    <div className="h-max w-full py-6 px-6 border border-ash4 rounded-xl">
      <div className="flex items-center justify-between mb-8">
        <p className="text-base font-semibold md:text-[18px]">
          Address Information
        </p>
        <button
          onClick={editButtonHandler}
          className={`flex justify-center items-center rounded-full space-x-1 border border-ash-4 w-[100px] h-[35px] md:w-[107px] md:h-[54px] ${
            editMode ? "bg-custom" : "bg-transparent"
          }`}
        >
          <p className="text-[14px] text-ash4 md:text-[18px]">
            {editMode ? "Update" : "Edit"}
          </p>
          <div className="w-[10px] h-[10px]">
            <Image
              src={`/images/icon/${
                editMode ? "download-icon" : "edit-gray-icon"
              }.svg`}
              alt="edit-icon"
              loading="eager"
              priority
              className="h-full w-full"
              width={9.23}
              height={9.23}
            />
          </div>
        </button>
      </div>{" "}
      <div className="w-full flex justify-between flex-wrap mb-5 lg:w-[60%]">
        {locationData.map((data, index) =>
          (
            <div key={index} className="w-full mb-5 md:w-1/2 md:pr-1">
              <label
                htmlFor={data}
                className="block text-[13px] text-ash5 pl-2"
              >
                {label[index]}
              </label>
              <input
                type={label[index]}
                readOnly={editMode ? false : true}
                className={`block w-full h-[50px] rounded-xl pl-2 outline-none lg:w-max ${
                  editMode ? "border" : ""
                }`}
                name={data}
                value={data}
              />
            </div>
          ) 
          // : (
          //   <div key={index} className="w-full md:w-1/2 mb-5">
          //     <p className="text-[13px] text-ash5">{label[index]}</p>
          //     <p className="text-[16px]">{data}</p>{" "}
          //   </div>
          // )
          // <div key={index} className="w-full md:w-1/2 mb-5">

          //   <p className="text-[13px] text-ash5">{label[index]}</p>
          //   <p className="text-[16px]">{data}</p>
          // </div>
        )}
      </div>
    </div>
  );
};

export default AddressInfo;
