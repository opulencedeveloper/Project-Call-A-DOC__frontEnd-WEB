import Image from "next/image";
import BackDrop from "@/components/UI/BackDrop";

const ProfileUpdateSuccess = (props) => {
  const toDashBoardHandler = () => {
    props.setProfileUpdateHandler(false);
  };
  return (
    <BackDrop>
      <div className="h-[403px] w-[90%] flex flex-col justify-center items-center space-y-6 bg-white shadow-custom-shadow rounded-3xl md:w-[562px]">
        <div className="h-[103px] w-[104px]">
          <Image
            src={`/images/icon/circle-good-mark-icon.svg`}
            alt="circle-good-mark-icon.svg"
            loading="eager"
            priority
            className="h-full w-full"
            width={104}
            height={103}
          />
        </div>
        <p className="font-medium text-[31px] text-center leading-tight">
          Update successful
        </p>
        <p className="text-base text-ash2 md:text-[20px] text-center leading-tight">
          Personal information has been updated
        </p>
        <button
          onClick={toDashBoardHandler}
          className="bg-custom10 h-[62px] w-[230px] text-[20px] rounded-full text-white md:w-[288px]"
        >
          Back to Dashboard
        </button>
      </div>
    </BackDrop>
  );
};

export default ProfileUpdateSuccess;
