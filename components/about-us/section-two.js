import Image from "next/image";

const SectionTwo = () => {
  return (
    <section className="ml-20">
      <div className="space-y-9 w-2/4 mt-10 2xl:-mt-20">
        <p className="text-ash2 text-lg px-10 pt-20 2xl:px-0 pt-0">
          Who are we?
        </p>
        <p className="text-4xl font-medium leading-tight px-10 md:pr-40 2xl:px-0 pr-0">
          Our Team
        </p>
        <div className="px-10 2xl:px-0">
          <p className="text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultrices
            elit ipsum diam tellus viverra massa, laoreet vulputate. Rhoncus
            cras euismod duis massa venenatis. Est, aliquet quam magna volutpat.
            Ut proin mi vestibulum tristique urna faucibus sollicitudin lacus.
            Turpis integer est integer est elementum, aliquam. Ornare massa
            tortor in vitae tellus maecenas.
          </p>
        </div>
      </div>

      <div>
        <div className="flex space-between"><Image
            src="/images/doctor6.svg"
            alt="get medical attention image"
            className="h-pih7 w-piw7 mt-20"
            width={388}
            height={388}
          />
          <Image
            src="/images/doctor8.svg"
            alt="get medical attention image"
            className="h-pih7 w-piw7 mt-4 ml-14"
            width={388}
            height={388}
          />
          <Image
            src="/images/doctor10.svg"
            alt="get medical attention image"
            className="h-pih7 w-piw7 -mt-56 -ml-14"
            width={388}
            height={388}
          /></div>
        <div className="flex">
        <Image
            src="/images/doctor7.svg"
            alt="get medical attention image"
            className="h-pih8 w-piw8"
            width={314}
            height={314}
          />
        <Image
            src="/images/doctor9.svg"
            alt="get medical attention image"
            className="h-pih7 w-piw7"
            width={388}
            height={388}
          />
        </div>
      </div>
    </section>
  );
};

export default SectionTwo;
