import Image from "next/image";
import { useRouter } from "next/router";

const contents = [
  {
    image: "/images/phone1.svg",
    content1: `Virtual medical consultation`,
    content2:
      "Always be in touch with a medical professional no matter where you find yourself and avoid long queues at physical hospitals.",
    content3: "001",
  },
  {
    image: "/images/phone1.svg",
    content1: "Anytime, Anywhere",
    content2:
      "Doctors's are available 24/7 for consultation and diagnosis on any medical issues whether you are on the go or in your home",
    content3: "002",
  },
];

const SectionTwo = (props) => {
  const router = useRouter();
  return <section id="patient">{ contents.map((content) => {
    return (
      <div
      
        className={` border flex flex-col lg:flex-row border-b-2 border-ash border py-10 px-5 md:px-40`}
        key={content.content1}
      >
        <div className="lg:w-1/2">
          <Image
            src={content.image}
            alt="doctor1"
            className="w-auto h-auto"
            width={1159}
            height={1034}
            priority={true}
            loading="eager"
          />
        </div>

        <div className="pt-auto space-y-10 md:pt-20 lg:pt-40 lg:w-1/2">
          <div className="flex items-end max-w-xs text-ash text-lg font-medium md:text-xl">
            <p>FOR PATIENTS</p>
            <div className="w-80 h-0.5 mx-3 mb-3 bg-ash" />
            <p>{content.content3}</p>
          </div>

          <p className="text-3xl pr-auto md:pr-36 md:text-5xl">
            {content.content1}
          </p>
          <p className="text-md pr-auto md:pr-10">{content.content2}</p>
          <button onClick={() => router.push('signup')} className="flex justify-center items-center">
            <p className="text-base text-49207E mr-2">Get Started</p>
            <Image
              src="/images/icon/arrow-right-purple.svg"
              alt="doctor1"
              className="w-auto h-auto"
              width={16}
              height={13}
            />
          </button>
        </div>
      </div>
    );
  })}</section>;
};

export default SectionTwo;
