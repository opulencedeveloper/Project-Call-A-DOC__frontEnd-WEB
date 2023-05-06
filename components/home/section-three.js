import Image from "next/image";
import Link from "next/link";

const contents = [
  {
    image: "/images/phone1.svg",
    content1: "Virtual medical consultation",
    content2:
      "Always be in touch with a medical professional no matter where you find yourself and avoid long queues at physical hospitals.",
  },
  {
    image: "/images/phone1.svg",
    content1: "Keep Digital records of patients for easy access",
    content2:
      "Doctors's are available 24/7 for consultation and diagnosis on any medical issues whether you are on the go or in your home",
  },
];

const SectionThree = (props) => {
  return (
    <section>
      {contents.map((content) => {
        return (
            <div key={content.content1} className="border border-custom1 px-5 flex flex-wrap items-start border-b border-ash bg-57B7FF md:px-20 xl:flex-nowrap ">
              {/* <div className="flex pr-40 border-b border-custom3"> */}

              <div className="mt-40 space-y-10 text-custom1">
                <div className="flex items-end font-medium">
                  <p className="text-xl ">
                    FOR PATIENTS
                  </p>
                  <div className="w-80 h-0.5 mx-4 mb-3 bg-custom1" />
                  <p className="text-xl">
                    001
                  </p>
                </div>
                <p className="text-5xl">
                  {content.content1}
                </p>
                <p className="text-md">{content.content2}</p>
                <button className="flex justify-center items-center">
                  <p className="text-md mr-2">Get Started</p>
                  <Image
                    src="/images/icon/arrow-right-white.svg"
                    alt="doctor1"
                    className="w-16px h-13px"
                    width={16}
                    height={13}
                  />
                </button>
              </div>
              <Image
                src={content.image}
                alt="doctor1"
                className="w-piw4 h-pih4 py-20"
                width={1159} 
                height={1034}
              />
            </div>
        );
      })}
      <div className="flex flex-col justify-center items-center space-y-10 py-20 px-auto md:px-44">
        <p className="text-2xl text-center font-montserrat font-medium text-ash">
          WHY CHOOSE US
        </p>
        <p className="text-4xl text-center font-montserrat px-10">
          We are on a mission to bring affordable, quality medical access to
          everyone at their own convenience
        </p>
        <Link href={"#"} className="flex justify-center items-center">
          <p className="text-49207E text-lg mr-2">More about us</p>
          <Image
            src="/images/icon/arrow-right-purple.svg"
            alt="doctor1"
            className="w-16px h-13px mt-0.5"
            width={16}
            height={13}
          />
        </Link>
      </div>
    </section>
  );
};

export default SectionThree;
