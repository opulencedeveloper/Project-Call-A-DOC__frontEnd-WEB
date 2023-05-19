import Image from "next/image";

const StartingPage = () => {
  return (
    <section className="relative z-0">
      <div className="flex px-5 items-center md:justify-end lg:px-20">
        <div className="flex flex-col space-y-2 z-10">
         <Image
            src="/images/get-medical-attention.svg"
            alt="get medical attention image"
            className="h-auto w-auto"
            width={605}
            height={190}
          />
          <Image
              src="/images/globally-at-your-fingertips.svg"
              alt="globally at your fingertips"
              className="h-auto w-3/4"
              width={257}
              height={30}
            />
        </div><div></div>
        <div className=""><Image
            src="/images/hero-image.png"
            alt="get medical attention image"
            className="h-auto w-auto"
            width={609}
            height={190}
          /></div>
      </div>


      <div className="relative flex -mt-12 xl:-mt-56">
      <div>
          <div className="mb-10"><Image
            src="/images/doctor1.svg"
            alt="doctor1"
            className="w-auto h-auto"
          width={560}
          height={419}
          /></div>
          <div><Image
            src="/images/doctor4.svg"
            alt="doctor4"
            className="w-auto h-auto z-10"
            width={560}
            height={419}
          /></div>
        </div>  

        <div className="flex z-10">
        <div>
          <Image
          src="/images/doctor2.svg"
          alt="doctor2"
          className="w-auto h-auto border pt-20 xl:pt-40"
          width={560}
          height={419}
        /></div>
        <div className="hidden xl:block absolute top-96 right-96 z-0"><Image
          src="/images/dot.png"
          alt="dot"
          className="w-auto h-auto"
          width={262}
          height={262}
        /></div> 
        <div className="z-10"><Image
          src="/images/doctor3.svg"
          alt="doctor1"
          className="w-auto h-auto pt-40 xl:pt-96"
          width={560}
          height={419}
        /></div></div>
      </div>

      <div className="flex flex-col justify-center items-center space-y-10 py-20 mt-20 border-t-2 border-b-2 border-ash">
        <p className="text-center text-xl font-medium text-ash">
          WHAT WE DO
        </p>
        <p className="text-xl max-w-5xl px-10 md:text-3xl text-center xl:text-4xl">
        We connect everyday people with professional healthcare personnels
          ranging from doctors to pharmacists to lab scientists. Whether it's
          regular medical checkups, diagnosis or one time treatments, we got you
          covered.
        </p>
        <div className="border flex flex-col justify-center space-y-3 md:flex-row md:space-x-3 md:space-y-0">
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

