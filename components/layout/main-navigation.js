import Image from "next/image";
import Link from "next/link";
//import imageAsset from '/public/images/your-image-asset.webp'

const MainNavigation = (props) => {
  return (
    <nav className="relative px-4 mx-auto mt-5">
      <div className="flex justify-between items-center md:items-start ">
        <div className="flex">
          <Image
            src="/images/logo/logo.svg"
            alt="call a doctor logo"
            className="h-20 w-36"
            width={576}
            height={320}
          />
          <div className="hidden lg:flex space-x-8 mt-3 lg:ml-72">
            <Link href="#" className="font-montserrat font-medium text-base">
              About us
            </Link>
            <Link href="#" className="font-montserrat font-medium text-base">
              Services
            </Link>
            <Link href="#" className="font-montserrat font-medium text-base">
              Pricing
            </Link>
          </div>
        </div>

        <div className="hidden lg:flex space-x-3">
          <button className="hidden lg:block w-80 h-48  border border-custom rounded-full font-montserrat font-normal text-base">
            Login
          </button>
          <button className="hidden lg:block w-162 h-48 text-custom1 bg-custom rounded-full font-montserrat font-normal text-base">
            Get Started
          </button>
        </div>
        <div className="lg:hidden flex flex-col mt-3">
          <div className="w-8 h-0.5 mx-4 mb-2 bg-custom2" />
          <div className="w-8 h-0.5 mx-4 mb-2 bg-custom2" />
          <div className="w-8 h-0.5 mx-4 mb-2 bg-custom2" />
        </div>
      </div>
    </nav>
  );
};
export default MainNavigation;
