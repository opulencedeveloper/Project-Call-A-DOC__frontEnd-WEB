import Image from "next/image";
import Input from "../UI/Input";

const SectionThree = () => {
  return (
    <>
      <div className="flex justify-between flex-wrap mt-10 xl:mt-72 2xl:flex-nowrap">
        <div className="space-y-3 max-w-3xl">
        <p className="text-ash2 text-2xl">
            Who drives us?
          </p>
          <p className="text-2xl font-medium text-4xl 2xl:text-5xl">
          Our Mission
        </p>
            <p className="text-base pt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultrices
              elit ipsum diam tellus viverra massa, laoreet vulputate. Rhoncus
              cras euismod duis massa venenatis. Est, aliquet quam magna
              volutpat. Ut proin mi vestibulum tristique urna faucibus
              sollicitudin lacus. Turpis integer est integer est elementum,
              aliquam. Ornare massa tortor in vitae tellus maecenas.
            </p>
        </div>
       <div><Image
          src="/images/image1.svg"
          alt="doctor1"
          className="w-auto h-auto "
          width={580}
          height={762}
        /></div> 
      </div>
      <div className="flex flex-row-reverse justify-between  text-end flex-wrap 2xl:flex-nowrap">
        <div className="space-y-3 max-w-3xl">
          <p className="text-ash2 text-lg mt-0 2xl:mt-20">
            Who inspires us?
          </p>
          <p className="text-2xl font-medium text-4xl 2xl:text-5xl">
          Our Vision
        </p>
            <p className="text-base pt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultrices
              elit ipsum diam tellus viverra massa, laoreet vulputate. Rhoncus
              cras euismod duis massa venenatis. Est, aliquet quam magna
              volutpat. Ut proin mi vestibulum tristique urna faucibus
              sollicitudin lacus. Turpis integer est integer est elementum,
              aliquam. Ornare massa tortor in vitae tellus maecenas.
            </p>
        </div>
       <div><Image
          src="/images/image3.svg"
          alt="doctor1"
          className="w-auto h-auto"
          width={580}
          height={762}
        /></div> 
      </div>
     <div className="w-full px-auto md:px-52"><Input /></div> 
    </>
  );
};

export default SectionThree;
