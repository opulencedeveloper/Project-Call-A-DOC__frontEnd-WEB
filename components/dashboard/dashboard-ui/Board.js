import Image from "next/image";



const Board = (props) => {
 const {pageContent} = props;
  return (
    <div className="flex flex-col mt-10 space-y-4 space-x-auto justify-between text-custom1 xl:flex-row xl:space-y-0">
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
