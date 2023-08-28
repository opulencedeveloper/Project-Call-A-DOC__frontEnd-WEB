import BackDrop from "@/components/UI/BackDrop";
import Image from "next/image";

const Notifications = (props) => {
  const { toggleNotifications } = props;
  return (
    <BackDrop>
      {" "}
      <div className="animateSlideUp px-5 h-96 animate relative rounded-xl bg-white z-40 px-7 shadow-xl w-[90%] md:w-[50rem]">
        <div className="absolute left-5 right-5 top-5 overflow-hidden flex justify-between bg-white mb-5">
          <div className="text-xl font-semibold md:text-2xl">Notifications</div>

          <button className="w-[18px] w-[18px]" onClick={toggleNotifications}>
            <Image
              src="/images/icon/close.svg"
              alt="close-icon"
              className="w-full h-full"
              priority
              loading="eager"
              width={18.88}
              height={18.88}
            />
          </button>
        </div>
        <div className="h-full overflow-y-auto pt-12">  {props.children} </div>
      </div>{" "}
    </BackDrop>
  );
};

export default Notifications;
