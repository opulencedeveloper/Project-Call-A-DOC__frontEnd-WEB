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
    }
];

const SectionFour = (props) => {
  return (
    <div className="flex flex-col justify-end items-center h-boxh2 pb-10">
      <p className="text-2xl font-montserrat font-medium">FAQ</p>
      <p className="text-xl font-montserrat mb-5">Commonly asked questions</p>
      <div className="flex flex-wrap justify-start items-center px-80">
        {contents.map((content) => <div className="flex flex-col w-boxw1 my-5 mr-5">
          <div className="flex justify-between bg-custom3 p-5 rounded-tl-md rounded-tr-md">
            <p className="text-custom1">
              {content.content1}
            </p>
            <Image
                src="/images/icon/angle-right.svg"
                alt="doctor1"
                className="w-13 h-25 mr-5"
                width={11}
                height={23}
              />
          </div>
          <div className="flex flex-col bg-custom4 p-5 rounded-bl-md rounded-br-md">
            <p className="text-custom1">Answer</p>
            <p className="text-custom1">
            {content.content2}
            </p>
          </div>
        </div>
       )}</div>;


    </div>
  );
};

export default SectionFour;
