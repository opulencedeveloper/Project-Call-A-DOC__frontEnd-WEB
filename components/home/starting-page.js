import Image from "next/image";

const StartingPage = () => {
  return (
    <section className="border border-custom4 relative">
      <div className="flex mt-10 md:justify-end">
        <div className="flex flex-col pt-0 z-10 md:pt-20 xl:pt-44">
          <Image
            src="/images/get-medical-attention.svg"
            alt="get medical attention image"
            className="h-pih2 w-piw2"
            width={605}
            height={190}
          />
          <Image
              src="/images/globally-at-your-fingertips.svg"
              alt="globally at your fingertips"
              className="h-8 w-64 xl:ml-44"
              width={257}
              height={30}
            />
        </div><div></div>
        <div className="hidden md:block -mr-20 z-0"><Image
            src="/images/hero-image.png"
            alt="get medical attention image"
            className=" md:h-pih1i w-piw1 xl:h-pih1"
            width={609}
            height={190}
          /></div>
      </div>


      <div className="relative lg:-mt-64: xl:-mt-72 hidden lg:flex ">
      <div className="relative space-y-2 -left-20">
          <div><Image
            src="/images/doctor1.svg"
            alt="doctor1"
            className="w-piw3 h-pih3"
          width={560}
          height={419}
          /></div>
          <div><Image
            src="/images/doctor4.svg"
            alt="doctor4"
            className="w-piw3 h-pih3 z-10"
            width={560}
            height={419}
          /></div>
        </div>  

        <div className=" -ml-20 flex z-10">
        <div className="mt-40  z-10"><Image
          src="/images/doctor2.svg"
          alt="doctor2"
          className="w-piw3 h-pih3 z-10"
          width={560}
          height={419}
        /></div>
        <div className="hidden xl:block absolute top-96 right-96 z-0"><Image
          src="/images/dot.png"
          alt="dot"
          className="w-262px h-262px"
          width={262}
          height={262}
        /></div> 
        <div className="mt-96 z-10 z-10"><Image
          src="/images/doctor3.svg"
          alt="doctor1"
          className="w-piw3 h-pih3"
          width={560}
          height={419}
        /></div></div>
      </div>

      <div className="flex flex-col justify-center items-center space-y-10 py-20 mt-20 border-t-2 border-b-2 border-ash">
        <p className="text-center text-xl font-medium text-ash">
          WHAT WE DO
        </p>
        <p className="text-xl md:text-3xl text-center border border-custom4 xl:text-4xl">
        We connect everyday people with professional healthcare personnels
          ranging from doctors to pharmacists to lab scientists. Whether it's
          regular medical checkups, diagnosis or one time treatments, we got you
          covered.
        </p>
        <div className="flex space-x-3 ">
          <button className="w-162 h-48 text-custom1 bg-custom rounded-full font-base text-sm">
          For Patients
          </button>
          <button className="w-162 h-48 rounded-full border border-custom font-base text-sm text-custom">
          For Doctors
          </button>
        </div>
        
      </div>
      </section>
  );
};

export default StartingPage;

