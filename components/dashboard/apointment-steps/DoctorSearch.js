import Image from "next/image";

const DoctorSearch = () => {
  return (
    <>
      <div className="h-20 w-20 z-20">
        {" "}
        <Image
          src="/images/icon/location.svg"
          alt="close-icon"
          className="w-full h-full object-contain"
          priority
          loading="eager"
          width={48.81}
          height={62.13}
        />
      </div>
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
