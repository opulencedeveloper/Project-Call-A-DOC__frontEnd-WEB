import Image from "next/image";
import Link from "next/link";

const SectionFour = (props) => {
  return  <div className="flex flex-col justify-center items-center space-y-7 py-20 px-60 border-t border-b border-custom2">
  <p className="text-9xl font-montserrat font-medium text-custom2">
    WHY CHOOSE US
  </p>
  <p className="text-8xl text-center font-montserrat">
  We are on a mission to bring affordable, quality medical access to everyone at their own convenience
  </p> 
  <Link href={'#'} className="flex justify-center items-center">
            <p className="text-49207E mr-2">More about us</p>
            <Image
              src="/images/icon/arrow-right-purple.svg"
              alt="doctor1"
              className="w-16px h-13px"
              width={16}
              height={13}
            />
          </Link>
</div>
};

export default SectionFour;
