import Image from "next/image";

const SectionOne = () => {
    return <section className="flex justify-between">
      <div className="space-y-9 2xl:-mr-96 pt-44">
        <p className="text-ash2 text-2xl">
          Who are we?
        </p>
        <p className="text-2xl font-medium max-w-3xl text-4xl 2xl:text-5xl">
          We Are a Collection of Doctors Changing The Dynamics of Healthcare
        </p>
          <p className="text-base max-w-3xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Semper cras nulla
semper congue velit. Dolor, lacinia nunc consectetur facilisis nullam nulla.
 Utvel utnam nisi nulla suspendisse atquamin.
          </p>
      </div>
      <Image
        className="w-piw6 h-pih6 -mr-16 hidden 2xl:block"
        src={"/images/doctor5.svg"}
        height={1007}
        width={1076}
      />
  </section>
} 

export default SectionOne;