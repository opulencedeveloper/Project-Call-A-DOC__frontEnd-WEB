import Image from "next/image";
import Link from "next/link";
//import imageAsset from '/public/images/your-image-asset.webp'

const MainNavigation = (props) => {
  return (
    <nav className="relative container mx-20">
      <div className="flex justify-between mt-5">
        <div className="flex">
          <Image
            src="/images/logo/logo.svg"
            alt="call a doctor logo"
            className="h-75.51 w-148"
            width={148}
            height={75.51}
          />
          <div className="flex space-x-8 mt-3 ml-80">
            <Link href="#" className="font-montserrat font-medium text-base">About us</Link>
            <Link href="#" className="font-montserrat font-medium text-base">Services</Link>
            <Link href="#" className="font-montserrat font-medium text-base">Pricing</Link>
          </div>
          </div>
          

          <div className="flex space-x-3 mt-3 mr-3">
            <button className="w-80 h-48  border border-custom rounded-full font-montserrat font-normal text-base">Login</button>
            <button className="w-162 h-48 text-custom1 bg-custom rounded-full font-montserrat font-normal text-base">Get Started</button>
        </div>
      </div>
    </nav>
  );
};
export default MainNavigation;
