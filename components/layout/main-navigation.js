import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Navigation from "../UI/Navigation";
//import imageAsset from '/public/images/your-image-asset.webp'
let value = '';

const MainNavigation = (props) => {
  const [toggleNav, setToggleNav] = useState(true);

  const toggleNavHandler = () => {
    console.log('value')
    if(toggleNav) {
      value = 'open';
      setToggleNav((prevExpenses) => {
        return !prevExpenses;
      });
    } else {
      value = '';
      setToggleNav((prevExpenses) => {
        return !prevExpenses;
      });
    }
  };

  return (
    <nav className="border border-custom4 mt-5 mx-5 md:mx-20 ">
      <div className="flex justify-between md:items-start ">
        <div className="flex">
          <Image
            src="/images/logo/logo.svg"
            alt="call a doctor logo"
            className="h-20 w-36"
            width={576}
            height={320}
          />
          <div className="pt-3 hidden lg:flex space-x-8 md:ml-10 mr-10 xl:ml-56">
          <Link href="/" className="font-medium text-base">
              Home
            </Link>
            <Link href="/about-us" className="font-medium text-base">
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

        <div className="pt-3 hidden lg:flex space-x-3">
          <button className="hidden lg:block w-80 h-48  rounded-full font-montserrat font-normal text-base">
            Login
          </button>
          <button className="hidden lg:block w-162 h-48 text-custom1 bg-custom rounded-full font-montserrat font-normal text-base">
            Get Started
          </button>
        </div>
        <button
          className={`${value} block hamburger mt-7 lg:hidden focus:outline-none`}
          type="button"
          onClick={toggleNavHandler}
        >
          <span className="hamburger-top"></span>
          <span className="hamburger-middle"></span>
          <span className="hamburger-bottom"></span>
        </button>
        {/* <div className="lg:hidden flex flex-col mt-3">
          <div className="w-8 h-0.5 mx-4 mb-2 bg-ash" />
          <div className="w-8 h-0.5 mx-4 mb-2 bg-ash" />
          <div className="w-8 h-0.5 mx-4 mb-2 bg-ash" />
        </div> */}
      </div>
      {/* <!-- Mobile Menu --> */}
      {value && <Navigation />}
    </nav>
  );
};
export default MainNavigation;
