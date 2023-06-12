import Image from "next/image";

const SectionTwo = () => {
  return (
    <section>
      <div className="space-y-5 mt-10 2xl:mt-auto">
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

      <div className="text-xs md:text-base">
        <div className="flex">
          <div className="flex flex-col items-center">
           <div><Image
              src="/images/doctor6.svg"
              alt="doctor6 image"
              className="h-auto w-auto mt-24 "
              loading="eager"
              priority
              width={388}
              height={388}
            /></div> 
            <div className="w-full space-y-1 text-center -mt-2 xl:-mt-12">
              <p className="font-bold">Director</p>
            <p>Esther Howarda</p></div>
          </div>
          <div className="flex flex-col items-center mt-12 xl:-mt-4">
            
            <div><Image
            src="/images/doctor8.svg"
            alt="get medical attention image"
            className="h-auto w-auto"
            loading="eager"
            priority
            width={388}
            height={388}
          /> </div>
          
          <div className="w-full space-y-1 text-center -mt-2 xl:-mt-12">
              <p className="font-bold">Director</p>
            <p>Esther Howards</p></div></div>
          
            <div className="flex flex-col items-center md:-mt-10 xl:-mt-56">
          <div><Image
            src="/images/doctor10.svg"
            alt="get medical attention image"
            className="h-auto w-auto"
            width={388}
            height={388}
            loading="eager"
            priority
          /> </div>
          <div className="w-full space-y-1 text-center pl-10 -mt-2 md:pl-20 xl:-mt-12">
          <p className="font-bold">Director</p>
        <p >Esther Howardd</p>
        </div>
        </div>
        
        </div>
        <div className="flex justify-end items-start space-x-44">
        <div className="flex flex-col items-center -mr-48 mt-auto xl:-mt-20 xl-mr-10">
          
          <div><Image
            src="/images/doctor7.svg"
            alt="get medical attention image"
            className="h-auto w-auto"
            loading="eager"
            priority
            width={314}
            height={314}
          /></div>
          <div className="w-full space-y-1 text-center -mt-2 xl:-mt-14">
          <p className="font-bold">Director</p>
        <p>Esther Howardasaa</p></div></div>
          <div className="flex flex-col items-center -mt-20 mr-5 xl:-mt-72">
            
            <Image
            src="/images/doctor9.svg"
            alt="get medical attention image"
            className="h-auto w-auto"
            loading="eager"
            priority
            width={388}
            height={388}
          />
          <div className="w-full space-y-1 text-center pl-auto -mt-2 md:pl-12 xl:-mt-12">
          <p className="font-bold">Director</p>
        <p>Esther Howardcaa</p></div></div>
        </div>
      </div>
    </section>
  );
};

export default SectionTwo;
