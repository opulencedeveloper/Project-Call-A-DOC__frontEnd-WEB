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
      <div className="flex pr-40 mt-20 border-b border-custom3">
        <Image
          src={content.image}
          alt="doctor1"
          className="w-1000px h-1034px py-20"
          width={1000}
          height={900}
        />
        <div className="space-y-10 ">
          <div className="flex items-end">
            <p className="text-9xl font-montserrat font-medium text-custom2 mt-60 ">
              FOR PATIENTS
            </p>
            <Image
              src="/images/icon/line.svg"
              alt="doctor1"
              className="w-165px h-4px mx-4 mb-5"
              width={165}
              height={5}
            />
            <p className="text-9xl font-montserrat font-medium text-custom2 mt-60">001</p>
          </div>
          <p className="text-11xl font-montserrat leading-none">
            {content.content1}
          </p>
          <p>{content.content2}</p>
          <button className="flex justify-center items-center">
            <p className="text-49207E mr-2">Get Started</p>
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
