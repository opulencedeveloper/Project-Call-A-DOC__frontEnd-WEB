import LoadingSpinner from "@/components/UI/LoadingSpinner";
import useHttp from "@/hooks/useHttp";
import Image from "next/image";
import { useState } from "react";

const personInfoInputData = [
  { type: "text", label: "FirstName", id: "first-name" },
  { type: "text", label: "Last Name", id: "last-name" },
  { type: "number", label: "Phone Number", id: "phone-number-input" },
];

const PersonalInfo = (props) => {
  const [editMode, setEditMode] = useState(false);
  const {
    firstName,
    lastName,
    phoneNumber,
    token,
    type,
    setProfileUpdateHandler,
    setReloadComponent,
  } = props;
  
  const [myFirstName, setMyFirstName] = useState(firstName);
  const [myLastName, setMyLastName] = useState(lastName);
  const [myPhoneNumber, setMyPhoneNumber] = useState(phoneNumber);
  const { isLoading, error, sendRequest: editUserData } = useHttp();

  const personalData = [myFirstName, myLastName, myPhoneNumber];

  const inputChangeHandler = (event) => {
    switch (event.target.id) {
      case "first-name":
        return setMyFirstName(event.target.value);
      case "last-name":
        return setMyLastName(event.target.value);
      case "phone-number-input":
        return setMyPhoneNumber(event.target.value);
      default:
        return null;
    }
  };

  const myResponse = (res) => {
    const { status, message } = res;
    if (status === "success") {
      setReloadComponent((prev) => !prev);
      setProfileUpdateHandler(true, message);
    }
  };
  const editButtonHandler = () => {
    if (editMode) {
      const url = type === "Doctor" ? "doctor" : "customer";
      editUserData(
        {
          url: `${url}/updateprofile`,
          method: "POST",
          body: {
            firstname: myFirstName,
            lastname: myLastName,
            phone: myPhoneNumber,
          },
          token: token,
        },
        myResponse
      );
    }

    setEditMode(true);
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
      {error && (
        <div className="bg-custom11 mb-5 w-max rounded-md text-custom1 font-semibold text-sm py-2 px-5 md:px-10">
          <p className="text-center">{error}</p>
        </div>
      )}
      <div className="w-full flex justify-between flex-wrap lg:w-[60%]">
        {isLoading ? (
          <LoadingSpinner pageHeight="h-full" />
        ) : (
          personalData.map(
            (data, index) => (
              <div key={index} className="w-full mb-5 md:w-1/2 md:pr-1">
                <label
                  htmlFor={data}
                  className="block text-[13px] text-ash5 pl-2"
                >
                  {personInfoInputData[index].label}
                </label>
                <input
                  id={personInfoInputData[index].id}
                  readOnly={editMode ? false : true}
                  type={personInfoInputData[index].type}
                  onChange={inputChangeHandler}
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
          )
        )}
      </div>
    </div>
  );
};

export default PersonalInfo;
