import Image from "next/image";

const SectionOne = () => {
    return <section className="flex flex-row justify-between flex-wrap xl:flex-nowrap">
      <div className="space-y-9 2xl:-mr-96 pt-10 md:pt-40">
        <p className="text-ash2 text-2xl">
          Who are we?
        </p>
        <p className="font-medium max-w-3xl text-4xl 2xl:text-5xl">
          We Are a Collection of Doctors Changing The Dynamics of Healthcare
        </p>
          <p className="text-base max-w-xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Semper cras nulla
semper congue velit. Dolor, lacinia nunc consectetur facilisis nullam nulla.
 Utvel utnam nisi nulla suspendisse atquamin.
          </p>
      </div>
     <div className="max-w-5xl max-h-2xl"> 
     <Image
        className="w-auto h-auto"
        loading="eager"
        alt="doctor-5"
        src={"/images/doctor5.svg"}
        priority
        height={1007}
        width={1076}
      />
      </div>
  </section>
} 

export default SectionOne;