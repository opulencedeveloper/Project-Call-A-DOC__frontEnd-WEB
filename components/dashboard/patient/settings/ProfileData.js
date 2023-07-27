import Image from "next/image";

const ProfileData = () => {
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
              Kelvin Willis
            </p>
            <p className="text-xs text-ash5 md:text-[13px]">
              Patient ID: 75648736554
            </p>
          </div>
        </div>
        <button className="flex items-center rounded-full space-x-1 h-max px-3 py-3 border border-ash-4 md:px-4">
          <div className="w-5 h-5">
            <Image
              src="/images/icon/edit-gray-icon.svg"
              alt="edit-icon"
              className="h-full w-full"
              width={9.23}
              height={9.23}
            />
          </div>
          <p className="text-[10px] text-ash4  pt-0.5 md:pt-0 text-sm">Edit Profile</p>
        </button>
      </div>
    </div>
  );
};

export default ProfileData;
