import Image from "next/image";

const Footer = () => {
  return (
    <div className="bg-custom9 flex justify-between py-10 px-5 font-montserrat text-custom1 md:px-40">
      <div className="flex flex-col">
        <div className="mb-7"><Image
          src="/images/logo/logo-white.svg"
          alt="call a doctor logo"
          className="h-75.51 w-148"
          width={148}
          height={75.51}
        /></div>
        <p className="text-3xl font-medium pb-4">Visit us</p>
        <p className="text-sm font-medium">Headquaters</p>
        <address className="text-base not-italic">
          No.12 Kilimanja District Lagos, Nigeria
        </address>
        <address className="not-italic mb-4">Nigeria</address>
        <address className="font-medium ">Branches</address>
        <address>
          No.12 Kilimanja District Lagos,
        </address>
        <address>Nigeria</address>
        <address className="not-italic">
          No.35 Lokogoma estate Lokogoma Abuja,
        </address>
        <address className="not-italic">Nigeria</address>
      </div>
      <div className="flex flex-col justify-between">
        <div className="flex space-x-8">
          <div className="text-base space-y-5">
            <p className="text-lg font-medium">Home</p>
            <p>What do we do</p>
            <p>List of specialization</p>
          </div>
          <div className="text-base space-y-5">
            <p className="text-lg font-medium">About us</p>
            <p>Our team</p>
            <p>Core values</p>
          </div>
        </div>
        <div className="flex space-x-7 items-center -ml-10">
          <p className="text-sm 2xl:text-lg">Reach us</p>
          <Image
            src="/images/icon/twitter.svg"
            alt="twitter-icon"
            className="h-5 w-5 2xl:h-11 w-11"
            width={42}
            height={42}
          />
          <Image
            src="/images/icon/facebook.svg"
            alt="facebook-icon"
            className="h-5 w-5 2xl:h-11 w-11"
            width={42}
            height={42}
          />
          <Image
            src="/images/icon/instagram.svg"
            alt="instagram-icon"
            className="h-5 w-5 2xl:h-11 w-11"
            width={42}
            height={42}
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
