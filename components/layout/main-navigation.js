import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Navigation from "../UI/Navigation";
import { useRouter } from "next/router";
//import imageAsset from '/public/images/your-image-asset.webp'
let value = '';

const MainNavigation = (props) => {
  const [toggleNav, setToggleNav] = useState(true);
  const router = useRouter();
  console.log(router.pathname)

  const activeLink = router.pathname;

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
    <nav className="mt-5 mx-5 md:mx-20 ">
      <div className="flex justify-between md:items-start ">
        <div className="flex">
          <Image
            src="/images/logo/logo.svg"
            alt="call a doctor logo"
            className="h-auto w-auto"
            width={576}
            height={320}
          />
          <div className="pt-3 hidden lg:flex space-x-8 font-medium text-base md:ml-10 mr-10 xl:ml-56">
          
          <Link href="/" className={activeLink === '/' ? "text-custom" : ""}>
              Home
            </Link>
            <Link href="/about-us" className={activeLink === '/about-us' ? "text-custom" : ""}>
              About us
            </Link>
            <Link href="#">
              Services
            </Link>
            <Link href="#">
              Pricing
            </Link>
          </div>
        </div>

        <div className="hidden lg:flex space-x-3 pt-3 font-medium  text-base ">
          <button className="w-80 h-48 border border-custom rounded-full">
            Login
          </button>
          <button className="w-162 h-48 text-custom1 bg-custom rounded-full">
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
