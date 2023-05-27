import Image from "next/image";

const currentDate = new Date();

const options = {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  };

const formattedDate = currentDate.toLocaleDateString("en-US", options);

const Header = (props) => {
    const {title} = props;
  return (
    <div className="flex flex-col justify-between items-start pb-8 pt-2 md:flex-row md:items-center">
       {/* className={`${value} block hamburger mt-7 lg:hidden focus:outline-none`} */}
      
    <div className="flex"><button
          className={`block hamburger mt-7 mr-5 2xl:hidden focus:outline-none`}
          type="button"
          //onClick={toggleNavHandler}
        >
          <span className="hamburger-top"></span>
          <span className="hamburger-middle"></span>
          <span className="hamburger-bottom"></span>
        </button><div className="space-y-2.5">
        {" "}
        <p className="font-semibold text-3xl md:text-4xl">{title}</p>
        <p className="text-ash2 text-sm md:text-lg">{formattedDate}</p>
      </div></div>  

      <div className="bg-ash4 pl-2 flex rounded-full mr-2 mt-5 h-11 md:h-12 md:mt-auto md:pl-0">
        <Image
          src="/images/icon/search.svg"
          alt="search-icon"
          className="w-auto h-auto p-2 md:p-4"
          width={16}
          height={16}
        />
        <input
          type="text"
          className="py-4 mr-1 w-full rounded-full bg-ash4 placeholder-ash2 text-sm font-light focus:outline-none md:text-base"
          placeholder="Search"
        />{" "}
      </div>
    </div>
  );
};

export default Header;
