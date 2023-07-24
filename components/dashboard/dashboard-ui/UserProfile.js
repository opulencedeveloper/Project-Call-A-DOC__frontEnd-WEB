import Image from "next/image";
import MyCalendar from "./Calender";

const UserProfile = (props) => {
  const { name, profilePicture, online } = props;
  const onlineStatus = online ? "online" : "offline";
  const onlineStatusText = online ? "Online" : "Offline";
  const onlineStatusTextColor = online ? "text-custom-g" : "text-custom11";

  return (
    <div className="h-full flex flex-col mb-5 items-center jusify-start lg:ml-5 2xl:ml-auto mt-5 xl:w-1/4 xl:mt-auto">
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
        <div className="rounded-full overflow-hidden">
          <Image
            src={profilePicture || "/images/profile-picture-placeholder.jpg"}
            alt="profile-picture"
            className="w-[222px] h-[222px]"
            width={222}
            height={222}
          />
        </div>
        <div className="absolute bottom-6 right-4">
          <Image
            src={`/images/icon/${onlineStatus}.svg`}
            alt="online-icon"
            className="w-auto h-auto"
            width={28}
            height={29}
          />
        </div>
      </div>
      <p className="mt-5 text-xl font-medium">{name}</p>
      <p className={`${onlineStatusTextColor} text-sm mb-5`}>
        {onlineStatusText}
      </p>
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
  );
};

export default UserProfile;
