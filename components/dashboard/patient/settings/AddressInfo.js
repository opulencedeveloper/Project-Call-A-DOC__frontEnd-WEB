import Image from "next/image";

const AddressInfo = () => {
  const locationData = ["New York", "USA"];

  const label = ["City/State", "Country"];
  return (
    <div className="h-max w-full py-6 px-6 border border-ash4 rounded-xl">
      <div className="flex items-center justify-between mb-8">
        <p className="text-base font-semibold md:text-[18px]">
          Address Information
        </p>
        <button className="flex justify-center items-center rounded-full space-x-1 border border-ash-4 w-[78px] h-[35px] md:w-[107px] md:h-[54px]">
        <p className="text-[14px] text-ash4 md:text-[18px]">
            Edit
          </p>
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

export default AddressInfo;
