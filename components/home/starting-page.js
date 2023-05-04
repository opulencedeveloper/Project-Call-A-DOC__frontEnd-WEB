import Image from "next/image";

const StartingPage = () => {
  return (
    <>
      <div className="lg:flex flex-wrap justify-end">
        <div className="px-10 lg:flex flex-col justify-center space-y-5 h-100">
          <Image
            src="/images/get-medical-attention.svg"
            alt="get medical attention image"
            className="h-pih2 w-piw2"
            width={605}
            height={190}
          />
          <Image
              src="/images/globally-at-your-fingertips.svg"
              alt="get medical attention image"
              className="h-8 w-64 lg:ml-44"
              width={257}
              height={30}
            />
        </div>
        <Image
            src="/images/hero-image.png"
            alt="get medical attention image"
            className="h-pih1 w-piw1 hidden 2xl:block"
            width={609}
            height={190}
          />
      </div>
      <div className="relative h-boxh2 hidden lg:flex items-start space-x-5 lg:-mt-48">
      <div className="flex flex-col hidden 2xl:block">
          <Image
            src="/images/doctor1.svg"
            alt="doctor1"
            className="w-piw3 h-pih3 z-10"
          width={560}
          height={419}
          />
          <Image
            src="/images/doctor4.svg"
            alt="doctor4"
            className="w-piw3 h-pih3 z-10 lg:mt-40"
            width={560}
            height={419}
          />
        </div>

        <Image
          src="/images/doctor2.svg"
          alt="doctor2"
          className="w-piw3 h-pih3 z-10 lg:mt-40"
          width={560}
          height={419}
        />
        <Image
          src="/images/dot.png"
          alt="dot"
          className="w-262px h-262px absolute top-96 right-96 z-0"
          width={262}
          height={262}
        />
        <Image
          src="/images/doctor3.svg"
          alt="doctor1"
          className="w-piw3 h-pih3 mt-96 pt-10 z-10 z-10"
          width={560}
          height={419}
        />
      </div>
      
      <div className="flex flex-col justify-center items-center space-y-10 py-20 px-8 border-t-2 border-b-2 border-custom2 2xl:px-60">
        <p className="text-center text-xl font-montserrat font-medium text-custom2">
          WHAT WE DO
        </p>
        <p className="md:w-auto text-4xl text-center font-montserrat">
          We connect everyday people with professional healthcare personnels
          ranging from doctors to pharmacists to lab scientists. Whether it's
          regular medical checkups, diagnosis or one time treatments, we got you
          covered.
        </p>
        <div className="flex space-x-3 ">
          <button className="w-162 h-48 text-custom1 bg-custom rounded-full font-montserrat font-normal text-sm">
          For Patients
          </button>
          <button className="w-162 h-48 border border-custom rounded-full font-montserrat font-normal text-sm text-custom">
          For Doctors
          </button>
        </div>
        
      </div>
    </>
  );
};

export default StartingPage;

