import Image from "next/image";


const StartingPage = () => {
  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <section className="animateSlideUp relative z-0 w-full">
      <div className="flex px-5 items-center md:justify-end lg:px-20">
        <div className="space-y-2 z-10">
          <Image
            src="/images/get-medical-attention.svg"
            alt="get medical attention image"
            className="h-auto w-auto"
            width={505}
            height={120}
            loading="eager"
          />
          <div className="p-auto 2xl:pl-52 2xl:pt-3">
            <Image
              src="/images/globally-at-your-fingertips.svg"
              alt="globally at your fingertips image"
              className="h-auto w-auto"
              width={257}
              height={30}
              loading="eager"
            />
          </div>
        </div>
        <div></div>
        <div>
          <Image
            src="/images/hero-image.png"
            alt="phone image"
            className="h-auto w-auto"
            placeholder="blur" 
            blurDataURL="data:image/webp;base64,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"
            width={609}
            height={190}
            // priority
            // loading="eager"
          />
        </div>
      </div>

      <div className="relative z-10 flex space-x-auto -mt-5 md:space-x-8 md:-mt-28 2xl:-mt-56">
        <div>
          <div className="mb-10">
            <Image
              src="/images/doctor1.svg"
              alt="doctor1"
              className="w-auto h-auto"
              width={560}
              height={419}
              loading="eager"
            />
          </div>
          <div>
            <Image
              src="/images/doctor4.svg"
              alt="doctor4"
              className="w-auto h-auto"
              width={560}
              height={419}
              loading="eager"
            />
          </div>
        </div>

        <div className="relative flex z-10 ">
          <div className="z-10">
            <Image
              src="/images/doctor2.svg"
              alt="doctor2"
              className="w-auto h-auto pt-14 md:pt-20 xl:pt-40"
              width={560}
              height={419}
              priority
              loading="eager"
            />
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
          <div className="z-10">
            <Image
              src="/images/doctor3.svg"
              alt="doctor3"
              className="w-auto h-auto pt-36 md:pt-56 xl:pt-96"
              width={560}
              height={419}
              priority
              loading="eager"
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center space-y-10 mt-12 py-10 border-t-2 border-b-2 border-ash md:py-20">
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