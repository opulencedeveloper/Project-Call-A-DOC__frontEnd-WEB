import LoadingSpinner from "@/components/UI/LoadingSpinner";
import useHttp from "@/hooks/useHttp";
import Image from "next/image";
import { useState } from "react";

const OtherInfo = (props) => {
  const [editMode, setEditMode] = useState(false);
  const { header, label1, label1Data, label2, label2Data, token, type } = props;
  const [myLabel1Data, setMyLabel1Data] = useState(label1Data);
  const [myLabel2Data, setMyLabel2Data] = useState(label2Data);
  const { isLoading, error, sendRequest: editUserData } = useHttp();
  const id = ["1", "2"];
  console.log(header);

  const locationData = [myLabel1Data, myLabel2Data];
  const label = [label1, label2];

  const inputChangeHandler = (event) => {
    switch (event.target.id) {
      case "1":
        return setMyLabel1Data(event.target.value);
      case "2":
        return setMyLabel2Data(event.target.value);
      default:
        return null;
    }
  };
  const myResponse = (res) => {
    const { status, message } = res;
    if (status === "success") {
      props.setProfileUpdateHandler(true, message);
    }
  };
  const editButtonHandler = () => {
    if (editMode) {
      let url;
      let body;
      // const url = type === "Doctor" ? "doctor" : "customer"
      // editUserData(
      //   {
      //     url: `${url}/updateprofile`,
      if (header === "Address Information") {
        url = type === "Doctor" ? "doctor" : "customer";
        url = `${url}/updateaddress`;
        body = {
          city: myLabel1Data,
          country: myLabel2Data,
        };
      }
      if (header === "Professional Information" && type === "Doctor") {
        url = "doctor/updateprofessionaldetails";
        body = {
          aos: myLabel1Data,
          npi: myLabel2Data,
        };
      }
      editUserData(
        {
          url: url,
          method: "POST",
          body: body,
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
        <p className="text-base font-semibold md:text-[18px]">{header}</p>
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
      <div className="w-full flex justify-between flex-wrap mb-5 lg:w-[60%]">
        {isLoading ? (
          <LoadingSpinner pageHeight="h-max" />
        ) : (
          locationData.map(
            (data, index) => (
              <div key={index} className="w-full mb-5 md:w-1/2 md:pr-1">
                <label
                  htmlFor={data}
                  className="block text-[13px] text-ash5 pl-2"
                >
                  {label[index]}
                </label>
                <input
                  id={id[index]}
                  type={label[index]}
                  readOnly={editMode ? false : true}
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
            //     <p className="text-[13px] text-ash5">{label[index]}</p>
            //     <p className="text-[16px]">{data}</p>{" "}
            //   </div>
            // )
            // <div key={index} className="w-full md:w-1/2 mb-5">

            //   <p className="text-[13px] text-ash5">{label[index]}</p>
            //   <p className="text-[16px]">{data}</p>
            // </div>
          )
        )}
      </div>
    </div>
  );
};

export default OtherInfo;
