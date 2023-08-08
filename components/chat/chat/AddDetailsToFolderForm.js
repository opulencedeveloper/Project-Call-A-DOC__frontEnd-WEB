import BackDrop from "@/components/UI/BackDrop";
import { useState } from "react";

const AddDetailsToFolderForm = (props) => {
  const { addFolderHandler } = props;
  
  return (
    <BackDrop>
      <form className="animateSlideUp h-[550px] w-[90%] z-50 pt-5 px-5 shadow-custom-shadow2 rounded-xl bg-white md:h-[616px] md:px-11 md:w-[475px]">
        <p className="text-[custom9] text-base mb-7 mt-3 font-medium text-center md:text-[20px]">
          Add details to folder
        </p>
        <div className="space-y-2 mb-14">
          {" "}
          <p className="text-[16px]">Complaint</p>
          <textarea
            type="text"
            className="border border-ash6 rounded-md w-full h-[120px] p-3 resize-none outline-none"
          />
          <label className="text-sm md:text-[16px]">Diagnosis</label>
          <input className="border border-ash6 ouline-none h-[50px] w-full rounded-xl px-3 outline-none md:h-[62px]" />
          <label className="text-sm md:text-[16px]">Prescription</label>
          <input className="border border-ash6 ouline-none h-[50px] w-full rounded-xl px-3 outline-none  md:h-[62px]" />
        </div>
        <div className="flex justify-between h-[32px] text-sm md:h-[52px] md:text-16">
          <button
            type="button"
            onClick={addFolderHandler}
            className="rounded-full text-ash5 border border-ash5 w-[40%]"
          >
            Cancel
          </button>
          <button
            //type="submit"
            className="rounded-full text-white bg-custom w-[52%]"
          >
            Update
          </button>
        </div>
      </form>
    </BackDrop>
  );
};

export default AddDetailsToFolderForm;
