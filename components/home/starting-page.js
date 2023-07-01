import Image from "next/image";


const StartingPage = () => {
  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <section className=" mx-auto animateSlideUp relative ">
      <div className="flex px-5 items-center justify-end lg:px-20">
        <div className="space-y-2 z-10 w-[40%] h-20 md:h-42">
          <Image
            src="/images/get-medical-attention.svg"
            alt="get medical attention image"
            className="h-auto w-auto"
            priority
            loading="eager"
            width={505}
            height={120}
          /> 
          <div className="p-auto 2xl:pl-52 2xl:pt-3">
            <Image
              src="/images/globally-at-your-fingertips.svg"
              alt="globally at your fingertips image"
              className="h-auto w-auto"
              width={257}
              height={30}
              loading="eager"
              priority
            />
          </div>
        </div>
        <div className="w-[60%] h-44 md:w-[40%] md:h-[30rem] xl:h-[40rem]">
          <Image
            src="/images/hero-image.png"
            alt="phone image"
            className="h-auto w-auto"
            width={609}
            height={190}
            priority
            loading="eager"/>
        </div>
      </div>

      <div className="relative z-10 flex space-x-auto -mt-5 md:space-x-8 md:-mt-28 2xl:-mt-50">
        <div className="w-[30%]">
          <div className="h-28 w-full mb-16 md:h-64 md:mb-28 xl:h-96">
            <Image
              src="/images/doctor1.svg"
              alt="doctor1"
              className="w-auto h-auto pb-40"
              width={560}
              height={419}
              loading="eager"
              priority />
          </div>
          <div className="h-28 w-full mb-16 md:h-64 md:mb-28 xl:h-96">
            <Image
              src="/images/doctor4.svg"
              alt="doctor4"
              className="w-auto h-auto pb-40"
              width={560}
              height={419}
              priority
              loading="eager"/>
          </div>
        </div>

        <div className="relative w-[70%] flex z-10 ">
          <div className="z-10 h-28 w-full mt-14 md:mt-20 md:h-64 xl:h-96 xl:mt-40">
            <Image
              src="/images/doctor2.svg"
              alt="doctor2"
              className="w-auto h-auto "
              width={560}
              height={419}
              priority
              loading="eager"/>
          </div>
          <div className="absolute bottom-16 pl-20 lg:bottom-52 lg:left-96 z-0">
            <Image
              src="/images/dot.png"
              alt="dot"
              className="w-20 h-20 md:w-40 md:h-40 xl:w-auto xl:h-auto"
              width={262}
              height={262}
              priority
              loading="eager"
            />
          </div>
          <div className="z-10 h-28 w-full mt-36 md:h-64 md:mt-56 xl:h-96 xl:mt-96">
            <Image
              src="/images/doctor3.svg"
              alt="doctor3"
              className="w-auto h-auto "
              width={560}
              height={419}
              priority
              loading="eager"
            />
          </div>
        </div>
      </div>

     <div className="flex flex-col justify-center items-center space-y-10 py-10 border-t-2 border-b-2 border-ash md:py-20">
        <p className="text-center text-xl font-medium text-ash ">WHAT WE DO</p>
        <p className="text-xl max-w-6xl px-10 md:text-3xl text-center xl:text-4xl xl:px-0">
          We connect everyday people with professional healthcare personnels
          ranging from doctors to pharmacists to lab scientists. Whether it's
          regular medical checkups, diagnosis or one time treatments, we got you
          covered.
        </p>
        <div className="flex flex-col justify-center space-y-3 md:flex-row md:space-x-3 md:space-y-0">
          <button onClick={() => handleScroll('patient')} className="w-162 h-48 text-custom1 bg-custom rounded-full font-base text-sm">
            For Patients
          </button>
          <button onClick={() => handleScroll('doctor')} className="w-162 h-48 rounded-full border border-custom font-base text-sm text-custom">
            For Doctors
          </button>
        </div>
      </div> 
    </section>
  );
};

export default StartingPage;