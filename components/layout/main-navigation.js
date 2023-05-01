import Image from "next/image";
import Link from "next/link";
//import imageAsset from '/public/images/your-image-asset.webp'

const MainNavigation = (props) => {
  return (
    <nav className="mx-5 mt-5 lg:mx-24">
      <div className="flex items-center justify-between">
        <div className="flex">
          <div className="mr-64 md:mr-32"><Image
            src="/images/logo/logo.svg"
            alt="call a doctor logo"
            className="h-75.51 w-148"
            width={148}
            height={75.51}
          /></div>
          <div className="hidden lg:block space-x-8 mt-3">
            <Link href="#" className="font-montserrat font-medium text-base">About us</Link>
            <Link href="#" className="font-montserrat font-medium text-base">Services</Link>
            <Link href="#" className="font-montserrat font-medium text-base">Pricing</Link>
          </div>
        </div>
        <div className="md: flex space-x-3 ">
            <button className="hidden lg:block w-80 h-48 border border-custom rounded-full font-montserrat font-normal text-base">Login</button>
            <button className="hidden lg:block w-162 h-48 text-custom1 bg-custom rounded-full font-montserrat font-normal text-base">Get Started</button>
        </div>
      </div>
    </nav>
  );
};
export default MainNavigation;
