import { useEffect } from "react";

import { useRouter } from 'next/router';
import Image from "next/image";

const StartingAppointment = () => {
  const router = useRouter();
  
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      router.push('/chat');
    }, 2000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);
  return (
    <>
      <Image
        src="/images/icon/options.svg"
        alt="options-icon"
        className=" w-auto h-auto"
        width={48.81}
        height={62.13}
      />
      <div className="text-ash2 text-lg md:text-2xl">
        Starting up appointment
      </div>
      <div className="text-sm md:text-lg font-light">
        This may take a few seconds
      </div>
    </>
  );
};

export default StartingAppointment;