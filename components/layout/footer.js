import Image from "next/image";


const Footer = () => {
  return (
    <div className="bg-custom9 flex justify-between h-96 px-40 py-10 font-montserrat text-custom1">
      <div className="flex flex-col">
        <Image
          src="/images/logo/logo-white.svg"
          alt="call a doctor logo"
          className="h-75.51 w-148 mb-7"
          width={148}
          height={75.51}
        />
        <p className="text-lg font-medium mb-4">Visit us</p>
        <p className="text-sm font-medium">Headquaters</p>
        <address className="text-sm not-italic">No.12 Kilimanja District Lagos, Nigeria</address>
        <address className="text-sm not-italic mb-4">Nigeria</address>
        <address className="text-sm font-medium not-italic">Branches</address>
        <address className="text-sm not-italic">No.12 Kilimanja District Lagos,</address>
        <address className="text-sm not-italic">Nigeria</address>
        <address className="text-sm not-italic">No.35 Lokogoma estate Lokogoma Abuja,</address>
        <address className="text-sm not-italic">Nigeria</address>
      </div>
      <div className="flex flex-col justify-between">
        <div className="flex space-x-8">
            <div className="flex flex-col space-y-6">
            <p className="text-lg ">Home</p>
            <p className="text-sm">What do we do</p>
            <p className="text-sm">List of specialization</p>
            </div>
            <div className="flex flex-col space-y-6">
            <p className="text-lg ">About us</p>
            <p className="text-sm">Our team</p>
            <p className="text-sm">Core values</p>
            </div>
        </div>
        <div className="flex space-x-7 items-center -ml-10">
            <p className="text-lg">Reach us</p>
        <Image
          src="/images/icon/twitter.svg"
          alt="twitter-icon"
          className="h-11 w-11"
          width={42}
          height={42}
        />
        <Image
          src="/images/icon/facebook.svg"
          alt="facebook-icon"
          className="h-11 w-11"
          width={42}
          height={42}
        />
        <Image
          src="/images/icon/instagram.svg"
          alt="instagram-icon"
          className="h-11 w-11"
          width={42}
          height={42}
        />
        </div>
      </div>
    </div>
  );
};

export default Footer;
