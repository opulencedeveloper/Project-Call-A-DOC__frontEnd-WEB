import Image from "next/image";

import MyCalendar from "./Calender";

const UserProfile = () => {
    return <div className="flex flex-col mb-5 items-center mt-5 xl:mr-5 xl:w-1/4 xl:mt-auto">
    <div className=" flex justify-between w-full mb-12">
      {" "}
      <Image
        src="/images/icon/angle-right-gray.svg"
        alt="angle-right-gray-icon"
        className="w-auto h-auto"
        width={9}
        height={16.5}
      />
      <Image
        src="/images/icon/three-dot.svg"
        alt="three-dot-icon"
        className="w-auto h-auto"
        width={14.25}
        height={2.25}
      />
    </div>
    <div className="relative flex-">
      <Image
        src="/images/profile.svg"
        alt="profile-picture"
        className="w-auto h-auto"
        width={222}
        height={222}
      />
      <div className="absolute bottom-6 right-4">
        <Image
          src="/images/icon/online.svg"
          alt="profile-picture"
          className="w-auto h-auto"
          width={28}
          height={29}
        />
      </div>
    </div>
    <p className="mt-5">Kelvin Wills</p>
    <p className="text-custom-g text-sm mb-5">Online</p>
    <button className="bg-custom px-7 flex items-center rounded-full py-2.5 mb-8 space-x-2">
    
      <Image
        src="/images/icon/edit.svg"
        alt="profile-picture"
        className="w-auto h-auto"
        width={9.23}
        height={9.23}
      />
      <p className="text-custom1">Edit Profile</p>
    </button>
     <div className="w-full">
      <MyCalendar />
    </div> 
  </div>
};

export default UserProfile;