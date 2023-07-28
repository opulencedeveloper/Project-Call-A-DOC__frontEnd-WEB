import Image from "next/image";
import { useRef, useState } from "react";

const personalData = [
  "Kudos",
  "Opulence",
  2348184297165,
  "victorkudos@gmail.com",
];

const personInfoInputData = [
  { type: "text", label: "FirstName" },
  { type: "text", label: "Last Name" },
  { type: "number", label: "Phone Number" },
  { type: "email", label: "Email Address" },
];

const PersonalInfo = (props) => {
  const [editMode, setEditMode] = useState(false);
  const editButtonHandler = () => {
    setEditMode(true);
    if (editMode) {
      props.setProfileUpdateHandler(true);
    }
  };
  return (
    <div className="h-max w-full py-6 px-6 border border-ash4 rounded-xl">
      <div className="flex items-center justify-between mb-8">
        <p className="text-base font-semibold md:text-[18px]">
          Personal Information
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
      <div className="w-full flex justify-between flex-wrap lg:w-[60%]">
        {personalData.map(
          (data, index) => (
            <div key={index} className="w-full mb-5 md:w-1/2 md:pr-1">
              <label
                htmlFor={data}
                className="block text-[13px] text-ash5 pl-2"
              >
                {personInfoInputData[index].label}
              </label>
              <input
                readOnly={editMode ? false : true}
                type={personInfoInputData[index].type}
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
          //     <p className="text-[13px] text-ash5">
          //       {personInfoInputData[index].label}
          //     </p>
          //     <p className="text-[16px]">{data}</p>{" "}
          //   </div>
          // )
        )}
      </div>
    </div>
  );
};

export default PersonalInfo;
