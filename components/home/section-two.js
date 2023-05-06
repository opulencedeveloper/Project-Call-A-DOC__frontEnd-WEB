import Image from "next/image";

const contents = [
  {
    image: "/images/phone1.svg",
    content1: "Virtual medical consultation",
    content2:
      "Always be in touch with a medical professional no matter where you find yourself and avoid long queues at physical hospitals.",
  },
  {
    image: "/images/phone1.svg",
    content1: "Anytime, Anywhere",
    content2:
      "Doctors's are available 24/7 for consultation and diagnosis on any medical issues whether you are on the go or in your home",
  },
];

const SectionTwo = (props) => {
  return contents.map((content) => {
    return (
      <div key={content.content1} className="flex flex-wrap items-start px-5 2xl:flex-nowrap mb-0 px-20">
        {/* <div className="flex pr-40 border-b border-custom3"> */}
        <Image
          src={content.image}
          alt="doctor1"
          className="w-piw4 h-pih4 py-20"
          width={1159} 
          height={1034}
        />
        
    
        <div className="pt-40 space-y-10">
                <div className="flex items-end text-xl font-medium ">
                  <p>
                    FOR PATIENTS
                  </p>
                  <div className="w-80 h-0.5 mx-4 mb-3 bg-ash" />
                  <p>
                    001
                  </p>
                </div>
                <p className="text-5xl">
                  {content.content1}
                </p>
                <p className="text-md ">{content.content2}</p>
                <button className="flex justify-center items-center">
                  <p className="text-md  mr-2">Get Started</p>
                  <Image
                    src="/images/icon/arrow-right-white.svg"
                    alt="doctor1"
                    className="w-16px h-13px"
                    width={16}
                    height={13}
                  />
                </button>
              </div>
      </div>
      
    );
  });
};

export default SectionTwo;
