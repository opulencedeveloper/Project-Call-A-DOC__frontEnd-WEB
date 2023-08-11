import Image from "next/image";
import { useEffect } from "react";

const SuccessMessage = (props) => {
  const { successMessageHandler, successMessage } = props; 
  useEffect(() => {
    const interval = setInterval(() => {
      successMessageHandler()
    }, 1900);

    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <div className="animateSlideUp flex flex-col justify-center space-y-8 h-[400px] w-[85%] z-50 pt-5 px-5 shadow-custom-shadow2 rounded-2xl bg-white md:h-[559px] md:px-11 md:w-[479px]">
      <div className="w-[100px] h-[100px] mx-auto md:w-[199px] md:h-[199px]">
        <Image
          src="/images/animation_ll6f9sq6_small.gif"
          loading="eager"
          priority
          alt=" end-appointment-image"
          className="h-full w-full"
          width={200}
          height={181}
        />
      </div>
      <p className="text-custom9 text-[20px] mt-3 leading-snug font-medium text-center md:text-[31px]">
        {successMessage || 'Message sent successfully'}
      </p>
    </div>
  );
};

export default SuccessMessage;
