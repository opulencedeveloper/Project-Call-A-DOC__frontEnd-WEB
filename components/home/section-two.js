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
      <div key={content.content1} className="border border-custom4 flex flex-wrap items-start 2xl:flex-nowrap mb-0">
        {/* <div className="flex pr-40 border-b border-custom3"> */}
        <Image
          src={content.image}
          alt="doctor1"
          className="w-piw4 h-pih4 py-20"
          width={1159} 
          height={1034}
        />
        
    
        <div className="ml-10 -mt-20 2xl:mt-20 -ml-10 space-y-10 2xlpr-56">
          <div className="flex items-end">
            <p className="text-xl font-montserrat font-medium text-ash">
              FOR PATIENTS
            </p>
            <div
              className="w-80 h-0.5 mx-4 mb-3 bg-ash"
            />
            <p className="text-xl font-montserrat font-medium text-ash">001</p>
          </div>
          <p className="text-5xl font-montserrat pr-10">
            {content.content1}
          </p>
          <p className="text-md pr-40">{content.content2}</p>
          <button className="flex justify-center items-center">
            <p className="text-md text-49207E mr-2">Get Started</p>
            <Image
              src="/images/icon/arrow-right.svg"
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
