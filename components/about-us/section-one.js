import Image from "next/image";

const SectionOne = () => {
    return <section className="mt-20 ml-20 2xl:mt-0">
    <div className="flex justify-end 2xl:relative">
      <div className="space-y-9 2xl:absolute top-56 right-2/4">
        <p className="text-ash2 text-lg px-10 pt-20 2xl:px-0 pt-0">
          Who are we?
        </p>
        <p className="text-5xl font-medium leading-tight px-10 md:pr-40  2xl:px-0 pr-0">
          We Are a Collection of Doctors Changing The Dynamics of Healthcare
        </p>
        <div className="px-10 2xl:px-0">
          <p className="text-sm pr-0 md:pr-40 2xl:pr-56">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Semper
            cras nulla semper congue velit. Dolor, lacinia nunc consectetur
            facilisis nullam nulla. Utvel utnam nisi nulla suspendisse
            atquamin.
          </p>
        </div>
      </div>
      <Image
        className="w-piw6 h-pih6 hidden 2xl:block"
        src={"/images/doctor5.svg"}
        height={1007}
        width={1076}
      ></Image>
    </div>
  </section>
} 

export default SectionOne;