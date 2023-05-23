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
    <div className="flex justify-between items-center pb-8 pt-2">
      <div className="space-y-2.5">
        {" "}
        <p className="font-semibold text-4xl">{title}</p>
        <p className="text-ash2 text-lg">{formattedDate}</p>
      </div>

      <div className="bg-ash4 flex rounded-full mr-2 h-12">
        <Image
          src="/images/icon/search.svg"
          alt="search-icon"
          className="w-auto h-auto p-4"
          width={16}
          height={16}
        />
        <input
          type="text"
          className="py-4 mr-1 w-full rounded-full bg-ash4 placeholder-ash2 text-base font-light focus:outline-none"
          placeholder="Search"
        />{" "}
      </div>
    </div>
  );
};

export default Header;
