import Image from "next/image";

const pageContent = [
  {
    appointmentNumber: "330",
    title: "Total",
    subTitle: "Appointments",
    color: "bg-custom14",
  },
  {
    appointmentNumber: "220",
    title: "Successful",
    subTitle: "Checkups",
    color: "bg-custom-g3"
  },
  {
    appointmentNumber: "100",
    title: "Missed",
    subTitle: "Checkups",
    color: "bg-custom-r-shade1"
  },
];

const Board = () => {
  return (
    <div className="flex flex-col w-full space-y-4 space-x-auto justify-between text-custom1 xl:flex-row xl:space-x-2 xl:space-y-0">
      {pageContent.map((content, index) => (
        <div key={index} className={`${content.color} pt-8 pb-6 px-6 rounded-lg space-y-3`}>
          <div className="text-5xl font-light md:text-5xl">{content.appointmentNumber}</div>
          <div className="flex justify-between space-x-24">
            <div>
              <p className="font-semibold">{content.title}</p>
              <p className="font-semibold ">Appointments</p>

              <select className={`${content.color} -ml-1 text-sm`}>
                <option>This month</option>
              </select>
            </div>
            <Image
              src="/images/icon/bookmark.svg"
              alt="book-mark-icon"
              className="w-auto h-auto"
              width={35.63}
              height={46.31}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Board;
