import Image from "next/image";

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
    <>
      <div className="flex flex-col justify-end items-center h-boxh2 pb-10">
        <p className="text-2xl font-montserrat font-medium">FAQ</p>
        <p className="text-xl font-montserrat mb-5">Commonly asked questions</p>
        <div className="flex flex-wrap justify-between items-center mx-80">
          {contents.map((content) => (
            <div key={content.content1} className="flex flex-col w-boxw1 my-7">
              <div className="flex justify-between bg-custom3 p-5 rounded-tl-md rounded-tr-md">
                <p className="text-custom1">{content.content1}</p>
                <Image
                  src="/images/icon/angle-right.svg"
                  alt="doctor1"
                  className="w-13 h-25 mr-5 z-0"
                  width={11}
                  height={23}
                />
              </div>
              <div className="flex flex-col bg-custom4 p-5 rounded-bl-md rounded-br-md">
                <p className="text-custom1">Answer</p>
                <p className="text-custom1">{content.content2}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="relative flex flex-col justify-center items-center h-boxh2 bg-custom6">
        <Image
          src="/images/icon/temp.svg"
          alt="temp"
          className="w-piw5 h-pih5 mr-5 absolute left-0 bottom-0 z-0"
          width={880}
          height={1157}
        />
        <p className="text-2xl font-montserrat font-medium text-custom1">
          Pricing
        </p>
        <p className="font-montserrat text-custom1 mx-96 text-center">
          Get the best prices for the best quality services charged based on
          frequency of consulations or pay-as-you-go depending on what works
          better for you
        </p>

        <div className="flex mt-20 mb-10">
          <button className="w-80 h-8 rounded-full font-montserrat font-normal text-base text-custom1 bg-custom3 z-10">
            Monthly
          </button>
          <button className="w-80 h-8 flex justify-end items-center pr-5 text-custom1 rounded-full -ml-10 font-montserrat font-normal text-base bg-custom1 text-custom3 z-0">
            Year
          </button>
        </div>

        <div className="flex items-center justify-center space-x-8 z-10">
          {/* DIV-1 */}
          <div className="flex flex-col justify-center align-center bg-custom5 rounded-xl px-14 py-10">
            <p className="text-center text-custom1 font-montserrat">Free</p>
            <p className="text-custom1 font-montserrat text-sm mb-2">
              <span className="text-6xl">$0.0</span>/ per appointment
            </p>
            <p className="text-center text-custom1 font-montserrat text-sm mb-5">
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
              <p className="text-custom1 font-montserrat text-sm">
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
              <p className="text-custom1 font-montserrat text-sm">
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
              <p className="text-custom1 font-montserrat text-sm">
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
              <p className="text-custom1 font-montserrat text-sm">
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
              <p className="text-custom1 font-montserrat text-sm">
                Two appointments per month
              </p>
            </div>
            <button className="w-162 h-12 border border-custom1 rounded-full font-montserrat font-normal text-custom2 text-base mx-auto">
              Get Started
            </button>
          </div>

          {/* DIV-2 */}
          <div className="relative flex flex-col justify-center align-center bg-custom5 rounded-xl px-16 py-20">
            <p className="text-center text-custom1 font-montserrat">Free</p>
            <p className="text-custom1 font-montserrat text-sm mb-2">
              <span className="text-7xl">$0.0</span>/ per appointment
            </p>
            <p className="text-center text-custom1 font-montserrat text-sm mb-5">
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
              <p className="text-custom1 font-montserrat text-sm">
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
              <p className="text-custom1 font-montserrat text-sm">
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
              <p className="text-custom1 font-montserrat text-sm">
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
              <p className="text-custom1 font-montserrat text-sm">
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
              <p className="text-custom1 font-montserrat text-sm">
                Two appointments per month
              </p>
            </div>
            <button className="w-52 h-14 bg-custom7 rounded-full font-montserrat font-normal text-custom2 text-base mx-auto">
              Get Started
            </button>
          </div>

          {/* DIV-3 */}
          <div className="flex flex-col justify-center align-center bg-custom5 rounded-xl px-14 py-10">
            <p className="text-center text-custom1 font-montserrat">Free</p>
            <p className="text-custom1 font-montserrat text-sm mb-2">
              <span className="text-6xl">$0.0</span>/ per appointment
            </p>
            <p className="text-center text-custom1 font-montserrat text-sm mb-5">
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
              <p className="text-custom1 font-montserrat text-sm">
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
              <p className="text-custom1 font-montserrat text-sm">
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
              <p className="text-custom1 font-montserrat text-sm">
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
              <p className="text-custom1 font-montserrat text-sm">
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
              <p className="text-custom1 font-montserrat text-sm">
                Two appointments per month
              </p>
            </div>
            <button className="w-162 h-12 border border-custom1 rounded-full font-montserrat font-normal text-custom2 text-base mx-auto">
              Get Started
            </button>
          </div>
        </div>
      </div>

      <div className="border border-custom flex flex-col justify-center items-center h-boxh3 space-y-5">
        <p className="text-2xl font-montserrat font-medium">
          Reach out to us
        </p>
       <div className="flex mx-auto">
        <input placeholder="Input your email" className="bg-custom8 pl-5 text-lg font-montserrat rounded-tl-full rounded-bl-full h-12 w-boxw2"/>
        <button className="w-32 h-12 text-custom1 bg-custom rounded-tr-full rounded-br-full font-montserrat font-normal text-sm">
          Submit
          </button>
        </div> 
        
      </div>
    </>
  );
};

export default SectionFour;
