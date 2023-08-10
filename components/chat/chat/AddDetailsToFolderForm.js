import BackDrop from "@/components/UI/BackDrop";
import LoadingSpinner from "@/components/UI/LoadingSpinner";
import useHttp from "@/hooks/useHttp";
import { useState } from "react";

const AddDetailsToFolderForm = (props) => {
  const [complaint, setComplaint] = useState("");
  const [diagnosis, setDiagnosis] = useState("");
  const [prescription, setPrescription] = useState("");
  const {
    isLoading,
    error,
    sendRequest: addDetailstoPatientRequest,
  } = useHttp();
  const { addFolderHandler, token, appointmentId } = props;

  const inputChangeHandler = (event) => {
    switch (event.target.id) {
      case "complaint":
        return setComplaint(event.target.value);
      case "diagnosis":
        return setDiagnosis(event.target.value);
      case "prescription":
        return setPrescription(event.target.value);
      default:
        return null;
    }
  };

  const addDetailstoPatientRequestResponse = (res) => {
    const { status, message, patient, chats, doctor } = res;
    console.log("chat addded  folderrrrrrrrrrrrrrrrrrrrrr", res);
    if (status === "success") {
    }
  };

  const addDetailsHandler = (event) => {
    event.preventDefault();
    if (complaint === "" || diagnosis === "" || prescription === "") return;

    addDetailstoPatientRequest(
      {
        url: "doctor/folder/addhistory",
        method: "POST",
        body: {
          appointmentid: appointmentId,
          title: complaint,
          description: diagnosis,
          prescription: prescription,
        },
        token: token,
      },
      addDetailstoPatientRequestResponse
    );
  };

  return (
    <BackDrop>
      <form
        onSubmit={addDetailsHandler}
        className="animateSlideUp h-[550px] w-[90%] z-50 pt-5 px-5 shadow-custom-shadow2 rounded-xl bg-white md:h-[616px] md:px-11 md:w-[475px]"
      >
        {error && (
          <div className="bg-custom11 mx-10 rounded-md text-custom1 font-semibold text-sm py-3 px-5 md:px-10">
            <p className="text-center">{error}</p>
          </div>
        )}
        {isLoading ? (
          <LoadingSpinner />
        ) : (
          <>
            <p className="text-custom9 text-base mb-7 mt-3 font-medium text-center md:text-[20px]">
              Add details to folder
            </p>
            <div className="space-y-2 mb-14">
              {" "}
              <p className="text-[16px]">Complaint</p>
              <textarea
                id="complaint"
                onChange={inputChangeHandler}
                value={complaint}
                type="text"
                className="border border-ash6 rounded-md w-full h-[120px] p-3 resize-none outline-none"
              />
              <label htmlFor="diagnosis" className="text-sm md:text-[16px]">
                Diagnosis
              </label>
              <input
                id="diagnosis"
                onChange={inputChangeHandler}
                value={diagnosis}
                name="diagnosis"
                className="border border-ash6 ouline-none h-[50px] w-full rounded-xl px-3 outline-none md:h-[62px]"
              />
              <label htmlFor="prescription" className="text-sm md:text-[16px]">
                Prescription
              </label>
              <input
                id="prescription"
                value={prescription}
                onChange={inputChangeHandler}
                name="prescription"
                className="border border-ash6 ouline-none h-[50px] w-full rounded-xl px-3 outline-none  md:h-[62px]"
              />
            </div>
            <div className="flex justify-between h-[40px] text-sm md:h-[52px] md:text-[16px]">
              <button
                type="button"
                onClick={addFolderHandler}
                className="rounded-full text-ash5 border border-ash5 w-[40%]"
              >
                Cancel
              </button>
              <button className="rounded-full text-white bg-custom w-[52%]">
                Update
              </button>
            </div>
          </>
        )}
      </form>
    </BackDrop>
  );
};

export default AddDetailsToFolderForm;
