import Image from "next/image";
import { useRouter } from 'next/router';

const AppointmentSuccessful = (props) => {
    const router = useRouter();
    const toDashBoardHandler = () => {
        props.closeAppointmentHandler();
        router.push('/patient-dashboard');
    }
  return (
    <div className="flex flex-col items-center space-y-8">
      <Image
        src="/images/icon/success-icon.jpg"
        alt="doctor"
        className=" w-auto h-auto z-20"
        priority
        loading="eager"
        width={48.81}
        height={62.13}
      />

      <p className="font-medium text-xl">Appointment Successfully sent</p>
      <button onClick={toDashBoardHandler} className=" bg-custom rounded-full px-12 py-4 text-custom1 font-thin text-base md:text-xl">Ok</button>
    </div>
  );
};

export default AppointmentSuccessful;
