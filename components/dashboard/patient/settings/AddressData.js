import Image from "next/image";

const AddressData = () => {
  const locationData = ["New York", "USA"];

  const label = ["City/State", "Country"];
  return (
    <div className="h-max w-full py-6 px-6 border border-ash4 rounded-xl">
      <div className="flex items-center justify-between mb-8">
        <p className="text-base font-semibold md:text-[18px]">
          Address Information
        </p>
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
          <p className="text-[10px] text-ash4  pt-0.5 md:pt-0 md:text-sm">Edit Profile</p>
        </button>
      </div>{" "}
      <div className="w-1/2 flex justify-between flex-wrap">
        {locationData.map((data, index) => (
          <div key={index} className="w-full md:w-1/2 mb-5">
            <p className="text-[13px] text-ash5">{label[index]}</p>
            <p className="text-[16px]">{data}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AddressData;
