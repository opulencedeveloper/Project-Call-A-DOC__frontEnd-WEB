import Image from "next/image";

const ProfileData = (props) => {
  const { type, firstName, lastName, userId } = props;

  return (
    <div className="w-full">
      <p className="text-lg font-medium md:text-[25px] mb-8">My Profile</p>
      <div className="flex items-center justify-between px-3 py-6 border border-ash4 rounded-xl w-full md:px-6">
        <div className="flex items-center space-x-3">
          <div className="h-14 w-14 md:h-[120px] md:w-[120px]">
            <Image
              src="/images/doctor-joseph.svg"
              alt="doctor"
              className="h-full w-full"
              width={82}
              height={82}
            />
          </div>
          <div className="space-y-2">
            <p className="font-medium text-base md:text-[20px]">
            {type === "Doctor" && "Dr"} {`${firstName} ${lastName}`}
            </p>
            <p className="text-xs text-ash5 md:text-[13px]">
            {type === "Doctor" ? "Doctor" : "Patient"} ID: {userId}
            </p>
          </div>
        </div>
        <button className="flex justify-center items-center rounded-full space-x-1 border border-ash-4 w-[100px] h-[35px] md:w-[107px] md:h-[54px]">
          <p className="text-[14px] text-ash4 md:text-[18px]">Edit</p>
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
      </div>
    </div>
  );
};

export default ProfileData;
