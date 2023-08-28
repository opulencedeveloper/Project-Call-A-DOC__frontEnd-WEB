import Image from "next/image";

import BackDrop from "@/components/UI/BackDrop";
import { useRouter } from "next/router";

const LogOut = (props) => {
  const router = useRouter();
  const { toggleLogout } = props;
  const logoutHander = () => {
    localStorage.setItem("token", "");
    router.replace("/signin");
  };
  return (
    <BackDrop>
      {" "}
      <div className="flex flex-col items-center space-y-6 animateSlideUp shadow-custom-shadow2 rounded-2xl bg-white h-[442px] pt-7 px-10 w-[90%] md:w-[475px]">
        <div className="w-[60px] h-[65px] md:w-[80px] md:h-[80px]">
          <Image
            src="/images/icon/log-out-icon.svg"
            alt="log-out-icon"
            className="w-full h-full"
            width={68}
            height={68}
          />
        </div>
        <p className="text-[18px] text-center font-semibold md:text-[20px]">
          Already Leaving?
        </p>
        <p className="text-ash5 text-[14px] text-center md:text-[16px]">
          We would be sending you updates because your health is out utmost
          priority.
        </p>
        <button
          onClick={logoutHander}
          className="h-[45px] bg-custom7 rounded-full text-white w-full text-[14px] font-medium text-center md:h-[52px] md:text-[16px] md:w-[379px]"
        >
          Yes, Log out
        </button>
        <button
          onClick={toggleLogout}
          className="h-[45px] w-[379px] text-[14px] font-medium text-center w-full md:h-[52px] md:text-[16px] md:w-[379px]"
        >
          No, I am staying
        </button>
      </div>{" "}
    </BackDrop>
  );
};

export default LogOut;
