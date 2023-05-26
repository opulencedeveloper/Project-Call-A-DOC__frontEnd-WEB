import Image from "next/image";

const DoctorSearch = () => {
  return (
    <>
      <Image
        src="/images/icon/location.svg"
        alt="close-icon"
        className=" w-auto h-auto"
        width={48.81}
        height={62.13}
      />
      <div className="text-ash2 text-lg md:text-2xl">
        Searching for any available doctors
      </div>
      <div className="text-sm md:text-lg font-light">
        This may take a few seconds
      </div>
    </>
  );
};

export default DoctorSearch;
