import Image from "next/image";

const StartingPage = () => {
  return (
    <>
      <div className="flex flex-col lg:flex-row justify-end">
        <div className="flex flex-col space-y-6 mt-10 lg:mt-40">
          <Image
            src="/images/get-medical-attention.svg"
            alt="get medical attention image"
            className="h-190px w-609px"
            width={609}
            height={190}
          />
          <div className="flex justify-end mr-32">
            <Image
              src="/images/globally-at-your-fingertips.svg"
              alt="get medical attention image"
              className="h-30.51px w-257px md:h-30.51px w-257px"
              width={257}
              height={30}
            />
          </div>
        </div>
        <div className="flex justify-end items-end">
          <Image
            src="/images/hero-image.png"
            alt="get medical attention image"
            className="h-190px w-609px"
            width={609}
            height={190}
          />
        </div>
      </div>
      {/* DOCTORS */}
      <div className="flex -mt-60 relative">
        <div className="flex flex-col space-y-40">
          <Image
            src="/images/doctor1.svg"
            alt="doctor1"
            className="w-560px h-419px"
            width={560}
            height={419}
          />
          <Image
            src="/images/doctor4.svg"
            alt="doctor1"
            className="w-560px h-419px"
            width={560}
            height={419}
          />
        </div>
        <Image
          src="/images/doctor2.svg"
          alt="doctor1"
          className="w-462px h-462px flex relative z-10 -mt-60"
          width={462}
          height={462}
        />
        <Image
          src="/images/dot.png"
          alt="dot"
          className="w-262px h-262px absolute top-80 right-72 mr-60 mt-40 z-0"
          width={262}
          height={262}
        />
        <Image
          src="/images/doctor3.svg"
          alt="doctor1"
          className="w-462px h-462px flex relative z-10 -mt-60"
          width={462}
          height={462}
        />
      </div>
      <div className="flex flex-col justify-center items-center space-y-7 py-20 px-60 border-t border-b border-custom2">
        <p className="text-9xl font-montserrat font-medium text-custom2">
          WHAT WE DO
        </p>
        <p className="text-8xl text-center font-montserrat">
          We connect everyday people with professional healthcare personnels
          ranging from doctors to pharmacists to lab scientists. Whether it's
          regular medical checkups, diagnosis or one time treatments, we got you
          covered.
        </p>
        <div className="flex space-x-3 ">
          <button className="hidden lg:block w-162 h-48 text-custom1 bg-custom rounded-full font-montserrat font-normal text-sm">
          For Patients
          </button>
          <button className="hidden lg:block w-162 h-48 border border-custom rounded-full font-montserrat font-normal text-sm text-custom">
          For Doctors
          </button>
        </div>
      </div>
    </>
  );
};

export default StartingPage;
{
  /* <div className="md:container border border-custom ">
        <h2 className="font-montserrat font-medium text-7xl">
          Get Medical attention
        </h2>
      </div> */
}
