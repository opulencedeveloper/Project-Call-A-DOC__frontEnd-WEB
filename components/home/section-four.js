import Image from "next/image";
import Input from "../UI/Input";

const contents = [
  {
    content1: "How do I schedule an appointment with a doctor?",
    content2:
      "Register as a patient on the site, fill in the required details and book an appointment on your dashboard",
  },
  {
    content1: "Do I get checkups after an appointment?",
    content2:
      "Yes, a specified number of checkups are attached to each appointment based on the subscription package selected.",
  },
  {
    content1: "Can I subscribe monthly or yearly?",
    content2:
      "Yes you can, just go to the pricing section and chose the subscription model best suited to you",
  },
];

const SectionFour = (props) => {
  return (
    <section>
      <div className="flex flex-col justify-center items-center pb-10">
        <p className="text-2xl font-medium">FAQ</p>
        <p className="text-xl mb-5">Commonly asked questions</p>
        <div className="flex flex-wrap justify-center items-center px-3 md:px-20 lg:px-72 justify-between">
          {contents.map((content) => (
            <div key={content.content1} className="flex flex-col my-7 2xl:w-boxw1">
              <div className="flex justify-between bg-custom3 p-5 rounded-tl-md rounded-tr-md">
                <p className="text-custom1">{content.content1}</p>
                <Image
                  src="/images/icon/angle-right.svg"
                  alt="doctor1"
                  className="w-auto h-auto z-0 pr-2 md:pr-4"
                  width={11}
                  height={23}
                />
              </div>
              <div className="border border-custom4 flex flex-col bg-custom4 p-5 rounded-bl-md rounded-br-md">
                <p className="text-custom1">Answer</p>
                <p className="text-custom1">{content.content2}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="relative flex flex-col items-center bg-custom6 py-40 px-5 md:20">
        <Image
          src="/images/icon/temp.svg"
          alt="temp"
          className="w-piw5 h-pih5 mr-5 absolute left-0 bottom-0 z-0"
          width={880}
          height={1157}
        />
        <p className="text-2xl font-medium text-custom1 mb-3 md:text-3xl">
          Pricing
        </p>
        <p className="font-montserrat text-custom1 text-center 2xl:mx-96">
          Get the best prices for the best quality services charged based on
          frequency of consulations or pay-as-you-go depending on what works
          better for you
        </p>

        <div className="flex mt-16 mb-16">
          <button className="px-5 py-1.5 rounded-full text-sm font-normal text-base text-custom1 bg-custom3 z-10">
            MONTHLY
          </button>
          <button className="pl-9 pr-5 py-1.5 flex justify-end items-center pr-5 text-custom1 rounded-full -ml-7 font-normal text-base bg-custom1 text-custom3 z-0">
            YEAR
          </button>
        </div>

        <div className="flex flex-col justify-center space-x-auto items-center z-10 space-x-auto xl:flex-row xl:space-x-7">
          {/* DIV-1 */}
          <div className="flex flex-col justify-center align-center mb-5 bg-custom5 rounded-xl px-14 py-10">
            <p className="text-center text-custom1">Free</p>
            <p className="text-custom1 text-sm mb-2">
              <span className="text-6xl">$0.0</span>/ per appointment
            </p>
            <p className="text-center text-custom1 text-sm mb-5">
              only pay for drugs
            </p>
            <div className="flex mb-4 mt-12">
              <Image
                src="/images/icon/check.svg"
                alt="doctor1"
                className="w-13 h-25 mr-5"
                width={13}
                height={25}
              />
              <p className="text-custom1 text-sm">
                Two appointments per month
              </p>
            </div>
            <div className="flex mb-4">
              <Image
                src="/images/icon/check.svg"
                alt="doctor1"
                className="w-13 h-25 mr-5"
                width={13}
                height={25}
              />
              <p className="text-custom1 text-sm">
                Two appointments per month
              </p>
            </div>
            <div className="flex mb-5">
              <Image
                src="/images/icon/check.svg"
                alt="doctor1"
                className="w-13 h-25 mr-5"
                width={13}
                height={25}
              />
              <p className="text-custom1 text-sm">
                Two appointments per month
              </p>
            </div>
            <div className="flex mb-4">
              <Image
                src="/images/icon/check.svg"
                alt="doctor1"
                className="w-13 h-25 mr-5"
                width={13}
                height={25}
              />
              <p className="text-custom1 text-sm">
                Two appointments per month
              </p>
            </div>
            <div className="flex mb-20">
              <Image
                src="/images/icon/check.svg"
                alt="doctor1"
                className="w-13 h-25 mr-5"
                width={13}
                height={25}
              />
              <p className="text-custom1 text-sm">
                Two appointments per month
              </p>
            </div>
            <button className="py-3 px-9 border border-custom1 rounded-full font-normal text-custom1 text-base mx-auto">
              Get Started
            </button>
          </div>

          {/* DIV-2 */}
          <div className="h-boxh1 flex flex-col justify-center align-center  mb-5 bg-custom5 rounded-xl px-16 py-20">
            <p className="text-center text-custom1">Free</p>
            <p className="text-custom1 text-sm mb-2">
              <span className="text-7xl">$0.0</span>/ per appointment
            </p>
            <p className="text-center text-custom1 text-sm mb-5">
              only pay for drugs
            </p>
            <div className="flex mb-4 mt-12">
              <Image
                src="/images/icon/check.svg"
                alt="doctor1"
                className="w-13 h-25 mr-5"
                width={13}
                height={25}
              />
              <p className="text-custom1 text-sm">
                Two appointments per month
              </p>
            </div>
            <div className="flex mb-4">
              <Image
                src="/images/icon/check.svg"
                alt="doctor1"
                className="w-13 h-25 mr-5"
                width={13}
                height={25}
              />
              <p className="text-custom1 text-sm">
                Two appointments per month
              </p>
            </div>
            <div className="flex mb-5">
              <Image
                src="/images/icon/check.svg"
                alt="doctor1"
                className="w-13 h-25 mr-5"
                width={13}
                height={25}
              />
              <p className="text-custom1 text-sm">
                Two appointments per month
              </p>
            </div>
            <div className="flex mb-4">
              <Image
                src="/images/icon/check.svg"
                alt="doctor1"
                className="w-13 h-25 mr-5"
                width={13}
                height={25}
              />
              <p className="text-custom1 text-sm">
                Two appointments per month
              </p>
            </div>
            <div className="flex mb-10 md:mb-20">
              <Image
                src="/images/icon/check.svg"
                alt="doctor1"
                className="w-13 h-25 mr-5"
                width={13}
                height={25}
              />
              <p className="text-custom1 text-sm">
                Two appointments per month
              </p>
            </div>
            <button className="w-52 py-4 bg-custom7 rounded-full font-normal text-custom1 text-base mx-auto">
              Get Started
            </button>
          </div>

         {/* DIV-3 */}
         <div className="flex flex-col mb-5 justify-center align-center bg-custom5 rounded-xl px-14 py-10">
            <p className="text-center text-custom1">Free</p>
            <p className="text-custom1 text-sm mb-2">
              <span className="text-6xl">$0.0</span>/ per appointment
            </p>
            <p className="text-center text-custom1 text-sm mb-5">
              only pay for drugs
            </p>
            <div className="flex mb-4 mt-12">
              <Image
                src="/images/icon/check.svg"
                alt="doctor1"
                className="w-13 h-25 mr-5"
                width={13}
                height={25}
              />
              <p className="text-custom1 text-sm">
                Two appointments per month
              </p>
            </div>
            <div className="flex mb-4">
              <Image
                src="/images/icon/check.svg"
                alt="doctor1"
                className="w-13 h-25 mr-5"
                width={13}
                height={25}
              />
              <p className="text-custom1 text-sm">
                Two appointments per month
              </p>
            </div>
            <div className="flex mb-5">
              <Image
                src="/images/icon/check.svg"
                alt="doctor1"
                className="w-13 h-25 mr-5"
                width={13}
                height={25}
              />
              <p className="text-custom1 text-sm">
                Two appointments per month
              </p>
            </div>
            <div className="flex mb-4">
              <Image
                src="/images/icon/check.svg"
                alt="doctor1"
                className="w-13 h-25 mr-5"
                width={13}
                height={25}
              />
              <p className="text-custom1 text-sm">
                Two appointments per month
              </p>
            </div>
            <div className="flex mb-20">
              <Image
                src="/images/icon/check.svg"
                alt="doctor1"
                className="w-13 h-25 mr-5"
                width={13}
                height={25}
              />
              <p className="text-custom1 text-sm">
                Two appointments per month
              </p>
            </div>
            <button className="py-3 px-9 border border-custom1 rounded-full font-normal text-custom1 text-base mx-auto">
              Get Started
            </button>
          </div>

        </div>
      </div>

      <div className="w-full my-14 px-auto md:px-96"><Input /></div> 
    </section>
  );
};

export default SectionFour;
