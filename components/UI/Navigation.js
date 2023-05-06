import ReactDOM from "react-dom";
import Link from "next/link";

const Navigation = () => {
    return ReactDOM.createPortal(
            <div
      className="absolute p-6 rounded-lg bg-custom3 left-6 right-6 top-20 z-100 lg:hidden"
    >
      <div className="flex flex-col items-center justify-center w-full space-y-6 font-bold text-custom1 rounded-sm">
      <Link href="/" className="w-full text-center">
              Home
            </Link>
            <Link href="/about-us" className="w-full text-center">
              About us
            </Link>
            <Link href="#" className="w-full text-center">
              Services
            </Link>
            <Link href="#" className="w-full text-center">
              Pricing
            </Link>
            <button className="w-full text-center">Login</button>
            <button className="w-full text-center">Get Started</button>

      </div>
    </div>,
        document.getElementById("navigation")
      );
};

export default Navigation;
