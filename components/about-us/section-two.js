import Image from "next/image";

const SectionTwo = () => {
  return (
    <section>
      <div className="space-y-5 mt-10 2xl:mt-0">
      <p className="text-ash2 text-2xl">
          Who are we?
        </p>
        <p className="text-2xl font-medium max-w-3xl text-4xl 2xl:text-5xl">
          Our Team
        </p>
        <p className="text-base max-w-3xl">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultrices elit ipsum diam tellus viverra massa, laoreet vulputate. Rhoncus cras euismod duis massa venenatis. Est, aliquet quam magna volutpat. Ut proin mi vestibulum tristique urna faucibus sollicitudin lacus. Turpis integer est integer est elementum, aliquam. Ornare massa tortor in vitae tell us maecenas.
          </p>
      </div>

      <div className="hidden xl:block">
        <div className="flex space-between">
          <div className="flex flex-col items-center">
            <Image
              src="/images/doctor6.svg"
              alt="get medical attention image"
              className="h-pih7 w-piw7 mt-24 "
              width={388}
              height={388}
            />
            <div className="-mt-16 flex flex-col justify-center items-center space-y-3">
              <p className="font-medium">Director</p>
            <p>Esther Howard</p></div>
          </div>
          <div className="flex flex-col items-center -mt-4"><Image
            src="/images/doctor8.svg"
            alt="get medical attention image"
            className="h-pih7 w-piw7"
            width={388}
            height={388}
          /> <div className="-mt-16 flex flex-col justify-center items-center space-y-3">
              <p className="font-medium">Director</p>
            <p>Esther Howard</p></div></div>
          
            <div className="flex flex-col items-center -mt-56">
          <Image
            src="/images/doctor10.svg"
            alt="get medical attention image"
            className="h-pih7 w-piw7"
            width={388}
            height={388}
          /> 
          <div className="flex flex-col ml-24 -mt-16 justify-center items-center space-y-3">
          <p className="font-medium">Director</p>
        <p>Esther Howardd</p></div>
        </div>
        
        </div>
        <div className="flex justify-end items-start space-x-44">
        <div className="flex flex-col items-center -mt-36 md:-mr-48 xl-mr-10"><Image
            src="/images/doctor7.svg"
            alt="get medical attention image"
            className="h-pih8 w-piw8"
            width={314}
            height={314}
          /><div className="-mt-16 flex flex-col justify-center items-center space-y-3">
          <p className="font-medium">Director</p>
        <p>Esther Howard</p></div></div>
          <div className="flex flex-col items-center -mt-72"><Image
            src="/images/doctor9.svg"
            alt="get medical attention image"
            className="h-pih7 w-piw7"
            width={388}
            height={388}
          /><div className="-mt-16 flex flex-col justify-center items-center space-y-3">
          <p className="font-medium">Director</p>
        <p>Esther Howard</p></div></div>
        </div>
      </div>
    </section>
  );
};

export default SectionTwo;
