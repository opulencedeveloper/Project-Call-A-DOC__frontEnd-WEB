import { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./MedicalInfo.module.css";
import useHttp from "@/hooks/useHttp";
import LoadingSpinner from "@/components/UI/LoadingSpinner";

const medicalData = new Set([
  "Diaherra",
  "COPD",
  "Heart disease",
  "Arthritis",
  "Heart failue",
  "Stroke",
  "High blood presure",
  "Cancer",
  "Arthrithiss",
  "Heart Failure",
]);

const MedicalInfo = (props) => {
  const { isLoading, error, sendRequest: editMedicalData } = useHttp();
  const { medicalInfo, token, setProfileUpdateHandler } = props;

  const [editMode, setEditMode] = useState(false);

  const medicalDetails = medicalInfo
    ? medicalInfo.split(",").map((item) => item.trim()) //Converting the array of single single string to array seperated string
    : [];

  const [medicalDetailsData, setMedicalDetailsData] = useState(() => {
    const detailsObject = {};
    medicalDetails.forEach((item) => {
      detailsObject[item] = true;
    });
    return detailsObject;
  });

  const inputChangeHandler = (event) => {
    const { id, checked } = event.target;
    setMedicalDetailsData((prev) => {
      if (checked) {
        return { ...prev, [id]: true };
      } else {
        const { [id]: _, ...updatedData } = prev;
        return updatedData;
      }
    });
  };

  const myResponse = (res) => {
    const { status, message } = res;
    if (status === "success") {
      setProfileUpdateHandler(true, message);
    }
  };

  const handleEditMode = () => {
    if (editMode) {
      const medicalInfoString =
        Object.keys(medicalDetailsData).join(", ") || null;
      editMedicalData(
        {
          url: "customer/updatemedicaldetails",
          method: "POST",
          body: {
            medicaldetails: medicalInfoString,
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
      {error && (
        <div className="bg-custom11 mb-5 w-max rounded-md text-custom1 font-semibold text-sm py-2 px-5 md:px-10">
          <p className="text-center">{error}</p>
        </div>
      )}
      <div className="flex items-center justify-between mb-8">
        <p className="text-base font-semibold md:text-[18px]">
          Medical Information
        </p>
        <button
          onClick={handleEditMode}
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
      <div className="flex flex-col flex-wrap h-auto xl:h-72 ">
        {isLoading ? (
          <LoadingSpinner pageHeight="h-full" />
        ) : (
          Array.from(medicalData).map((content, index) => (
            <div key={index} className="flex space-x-2 pb-7">
              <input
                type="checkbox"
                id={content}
                readOnly={!editMode}
                checked={medicalDetailsData[content] || false}
                className={styles.checkbox}
                onChange={editMode ? inputChangeHandler : null}
              />
              <label
                htmlFor={content}
                className="pt-0.5 text-base md:text-[16px]"
              >
                {content}
              </label>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default MedicalInfo;

// import { useState } from "react";

// import Image from "next/image";

// import styles from "./MedicalInfo.module.css";
// import useHttp from "@/hooks/useHttp";
// import LoadingSpinner from "@/components/UI/LoadingSpinner";

// let medicalData = [
//   { content: "Diaherra", val: false },
//   { content: "COPD", val: false },
//   { content: "Heart disease", val: false },
//   { content: "Arthritis", val: false },
//   { content: "Heart failue", val: false },
//   { content: "Stroke", val: false },
//   { content: "High blood presure", val: false },
//   { content: "Cancer", val: false },
//   { content: "Arthrithiss", val: false },
//   { content: "Heart Failure", val: false },
// ];

// const MedicalInfo = (props) => {
//   const { isLoading, error, sendRequest: editMedicalData } = useHttp();
//   const [editMode, setEditMode] = useState(false);
//   const { medicalInfo, token, setProfileUpdateHandler } = props;
//   let medicalDetails = !medicalInfo ? [] : [medicalInfo];
//   medicalDetails =
//     medicalDetails.length !== 0
//       ? medicalDetails[0].split(",").map((item) => item.trim())
//       : medicalDetails;
//   const [medicalDetailsData, setMedicalDetailsData] = useState(medicalDetails);

//   const inputChangeHandler = (event) => {
//     if (!event.target.checked) {
//       setMedicalDetailsData((prev) =>
//         prev.filter((item) => item !== event.target.id)
//       );
//       return;
//     }

//     if (event.target.checked)
//       setMedicalDetailsData((prev) => [...prev, event.target.id]);
//   };

//   const myResponse = (res) => {
//     const { status, message } = res;
//     if (status === "success") {
//       setProfileUpdateHandler(true, message);
//     }
//   };

//   const editMedicalDetailsHandler = () => {
//     if (editMode) {
//       const medicalInfoString = medicalDetailsData.join(", ") || null;
//       editMedicalData(
//         {
//           url: "customer/updatemedicaldetails",
//           method: "POST",
//           body: {
//             medicaldetails: medicalInfoString,
//           },
//           token: token,
//         },
//         myResponse
//       );
//     }

//     setEditMode(true);
//   };

//   if (medicalDetailsData.length !== 0) {
//     const convertedArray = medicalDetailsData[0]
//       .split(",")
//       .map((item) => item.trim()); //Convert this string array to array of seperated string
//     medicalData = medicalData.map((item) => {
//       console.log("single data", item.content);
//       return {
//         ...item,
//         val: medicalDetailsData.includes(item.content),
//       };
//     });
//   }

//   return (
//     <div className="h-max w-full py-6 px-6 border border-ash4 rounded-xl">
//       {error && (
//         <div className="bg-custom11 mb-5 w-max rounded-md text-custom1 font-semibold text-sm py-2 px-5 md:px-10">
//           <p className="text-center">{error}</p>
//         </div>
//       )}
//       <div className="flex items-center justify-between mb-8">
//         <p className="text-base font-semibold md:text-[18px]">
//           Medical Information
//         </p>
//         <button
//           onClick={editMedicalDetailsHandler}
//           className={`flex justify-center items-center rounded-full space-x-1 border border-ash-4 w-[100px] h-[35px] md:w-[107px] md:h-[54px] ${
//             editMode ? "bg-custom" : "bg-transparent"
//           }`}
//         >
//           <p className="text-[14px] text-ash4 md:text-[18px]">
//             {editMode ? "Update" : "Edit"}
//           </p>
//           <div className="w-[10px] h-[10px]">
//             <Image
//               src={`/images/icon/${
//                 editMode ? "download-icon" : "edit-gray-icon"
//               }.svg`}
//               alt="edit-icon"
//               loading="eager"
//               priority
//               className="h-full w-full"
//               width={9.23}
//               height={9.23}
//             />
//           </div>
//         </button>
//       </div>{" "}
//       <div className="flex flex-col flex-wrap h-auto xl:h-72 ">
//         {isLoading ? (
//           <LoadingSpinner pageHeight="h-full" />
//         ) : (
//           medicalData.map((content, index) => (
//             <div key={index} className="flex space-x-2 pb-7">
//               <input
//                 type="checkbox"
//                 id={content.content}
//                 readOnly={editMode ? false : true}
//                 checked={content.val}
//                 className={styles.checkbox}
//                 onChange={editMode ? inputChangeHandler : null}
//               />
//               <label
//                 htmlFor={content.id}
//                 className="pt-0.5 text-base md:text-[16px]"
//               >
//                 {content.content}
//               </label>
//             </div>
//           ))
//         )}
//       </div>

//     </div>
//   );
// };

// export default MedicalInfo;
