import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

const contents = [
  {
    image: "/images/get-paid-image.svg",
    content1: "Get paid for Consultations",
    content2:
      "Each consultation is charged and added to your personal wallet for convienience",
  },
  {
    image: "/images/get-paid-image.svg",
    content1: "Keep digital records of patients for easy access",
    content2:
      "Patients medical records are kept on the site for easy access and can be referenced for future use.",
  },
];

const SectionThree = (props) => {
  const router = useRouter();
  return (
    <section id="doctor" className="mb-20 md:mb-96">
      {contents.map((content) => {
        return (
          <div
            className="flex flex-col border-b border-custom1 bg-57B7FF lg:flex-row border-b-2 border-ash py-10 px-5 md:px-40"
            key={content.content1}
          >
            <div className="pt-auto text-custom1 space-y-10 pt-20 lg:pt-40 lg:w-1/2">
              <div className="flex items-end justify-between max-w-xs text-base font-medium md:text-xl">
                <p>FOR DOCTORS</p>
                <div className="w-80 h-0.5 mx-4 mb-3 bg-custom1" />
                <p>001</p>
              </div>

              <p className="text-3xl pr-auto md:pr-36 md:text-5xl">
                {content.content1}
              </p>
              <p className="text-md pr-auto md:pr-10">{content.content2}</p>
              <button onClick={() => router.push('signup')} className="flex justify-center items-center">
                <p className="text-base mr-2">Get Started</p>
                <Image
                  src="/images/icon/arrow-right-white.svg"
                  alt="doctor1"
                  className="w-auto h-auto"
                   
                  width={16}
                  height={13}
                  loading="eager"
                />
              </button>
            </div>

            <div className="lg:w-1/2">
              <Image
                src={content.image}
                alt="doctor1"
                className="w-/12 h-auto"
                width={1159}
                height={1034}
                
                loading="eager"
              /> </div>
          </div>
        );
      })}
      <div className="flex flex-col justify-center items-center space-y-9 py-20 px-auto md:px-20">
        <p className="text-xl text-center font-montserrat font-medium text-ash md:text-2xl">
          WHY CHOOSE US
        </p>
        <p className="text-xl max-w-5xl px-10 md:text-3xl text-center xl:text-4xl">
          We are on a mission to bring affordable, quality medical access to
          everyone at their own convenience
        </p>
        <Link href='about-us' className="flex justify-center items-center">
          <p className="text-49207E text-sm mr-2 md:text-lg">More about us</p>
          <Image
            src="/images/icon/arrow-right-purple.svg"
            alt="doctor1"
            className="block w-3 h-3 mt-0.5 md:w-auto md:h-auto"
            width={16}
            height={13}
            
            loading="eager"
          />
        </Link>
      </div>
    </section>
  );
};

export default SectionThree;
