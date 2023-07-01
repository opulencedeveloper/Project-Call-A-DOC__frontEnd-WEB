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
        <div className="w-[40%] h-44 md:h-[30rem] xl:h-[40rem]">
          <Image
            src="/images/hero-image.png"
            alt="phone image"
            className="h-full w-full object-contain"
            width={609}
            height={190}
            priority
            loading="eager"
            placeholder="blur"
            blurDataURL="data:image/webp;base64,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"
          />
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
              priority
              placeholder="blur"
              blurDataURL="data:image/webp;base64,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"
            />
          </div>
          <div className="h-28 w-full mb-16 md:h-64 md:mb-28 xl:h-96">
            <Image
              src="/images/doctor4.svg"
              alt="doctor4"
              className="w-auto h-auto pb-40"
              width={560}
              height={419}
              priority
              loading="eager"
              placeholder="blur"
              blurDataURL="data:image/webp;base64,UklGRnACAABXRUJQVlA4WAoAAAAgAAAAUQAAQQAASUNDUMgBAAAAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADZWUDggggAAANAFAJ0BKlIAQgA+7WyvUqmlrqKmcrtR0B2JaQb4HP4AdZq8kReXZp6Wjgv0ps9OXZf7Mv3O5GAA/u+SE4l8UJXrdxaCnUe2H87Gdr6cTRQzz/D3Zx5G9crMoUI2UyD6deK3VBlrop4iC2Z2Ph1YPMiyfqaJ+ZEsoJJg2cL8uuAAAAA="
            />
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
              loading="eager"
              placeholder="blur"
              blurDataURL="data:image/webp;base64,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"
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
          <div className="z-10 h-28 w-full mt-36 md:h-64 md:mt-56 xl:h-96 xl:mt-96">
            <Image
              src="/images/doctor3.svg"
              alt="doctor3"
              className="w-auto h-auto "
              width={560}
              height={419}
              priority
              loading="eager"
              placeholder="blur"
              blurDataURL="data:image/webp;base64,UklGRnACAABXRUJQVlA4WAoAAAAgAAAAUQAAQQAASUNDUMgBAAAAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADZWUDggggAAANAFAJ0BKlIAQgA+7WyvUqmlrqKmcrtR0B2JaQb4HP4AdZq8kReXZp6Wjgv0ps9OXZf7Mv3O5GAA/u+SE4l8UJXrdxaCnUe2H87Gdr6cTRQzz/D3Zx5G9crMoUI2UyD6deK3VBlrop4iC2Z2Ph1YPMiyfqaJ+ZEsoJJg2cL8uuAAAAA="
            
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