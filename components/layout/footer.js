import Image from "next/image";

const Footer = () => {
  return (
    <div className="bg-custom9 flex flex-col space-y-8 justify-between py-10 px-5 font-montserrat text-custom1 md:px-28 md:flex-row md:space-y-auto">
      
      <div className="flex flex-col">
        <div className="mb-7"><Image
          src="/images/logo/logo-white.svg"
          alt="call a doctor logo white"
          className="h-75.51 w-148"
          width={148}
          height={75.51}
        /></div>
        <p className="text-3xl font-medium pb-4">Visit us</p>
        <p className="font-medium">Headquaters</p>
        <address className="text-base not-italic">
          No.12 Kilimanja District Lagos, Nigeria
        </address>
        <address className="not-italic mb-4">Nigeria</address>
        <p className="font-medium ">Branches</p>
        <address className="not-italic">
          No.12 Kilimanja District Lagos,
        </address>
        <address className="not-italic">Nigeria</address>
        <address className="not-italic">
          No.35 Lokogoma estate Lokogoma Abuja,
        </address>
        <address className="not-italic">Nigeria</address>
      </div>
      <div className="flex flex-col justify-between space-y-3">
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
        <div className="flex space-x-7 items-center ml-auto md:-ml-10">
          <p className="text-sm 2xl:text-lg">Reach us</p>
          <Image
            src="/images/icon/twitter.svg"
            alt="twitter-icon"
            className="h-auto w-auto 2xl:h-11 w-11"
            width={42}
            height={42}
          />
          <Image
            src="/images/icon/facebook.svg"
            alt="facebook-icon"
            className="h-auto w-auto 2xl:h-11 w-11"
            width={42}
            height={42}
          />
          <Image
            src="/images/icon/instagram.svg"
            alt="instagram-icon"
            className="h-auto w-auto 2xl:h-11 w-11"
            width={42}
            height={42}
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
