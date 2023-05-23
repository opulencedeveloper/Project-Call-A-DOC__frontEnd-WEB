import Image from "next/image";

const pills = ["Panadol", "Flagyl", "Aspirin"];

const CheckUp = () => {
    return <div className="flex mb-8 space-x-auto flex-col xl:space-x-7 xl:flex-row 2xl:space-x-16">
    <div className="w-full xl:w-1/2 ">
      <div className="flex justify-between pb-7">
        <p className="text-xl">Checkups</p>
        <button className="text-custom text-sm font-medium">
          View all
        </button>
      </div>
      <p className="font-medium text-base text-ash2 pb-4">Today</p>
      <div className="flex justify-between rounded-xl shadow-2xl px-8 py-7">
        <div className="flex items-center space-x-4">
          <div>
            <Image
              src="/images/doctor11.svg"
              alt="doctor11"
              className="w-auto h-auto"
              width={90}
              height={90}
            />
          </div>
          <div className="space-y-1">
            <p className="font-medium text-xl">Dr Ubong Akpan</p>
            <p className="text-ash2 text-sm">12:23pm</p>
            <p className="text-xs text-ash2">
              Specialist clinic, Port Harcourt
            </p>
          </div>
        </div>
        <div className="my-auto">
          <button className="bg-custom rounded-full py-2.5 px-8 text-xs text-custom1">
            Join
          </button>
        </div>
      </div>

      <div className="flex justify-between px-8 py-7 pt-14">
        <div className="flex items-center space-x-4">
          <div>
            <Image
              src="/images/doctor12.svg"
              alt="doctor11"
              className="w-auto h-auto"
              width={90}
              height={90}
            />
          </div>
          <div className="space-y-1">
            <p className="font-medium text-xl">Dr Ibe Micheal</p>
            <p className="text-ash2 text-sm">12:23pm</p>
            <p className="text-xs text-ash2">
              Specialist clinic, Port Harcourt
            </p>
          </div>
        </div>
        <div className="my-auto">
          <button className="bg-custom rounded-full py-2.5 px-8 text-xs text-custom1">
            Join
          </button>
        </div>
        
      </div>
    </div>
    {/* SECOND DIV */}
    <div className="w-full bg-custom9 rounded-2xl flex flex-col justify-center px-9 py-9 xl:w-1/2 xl:px-5 2xl:px-9 ">
      <div className="flex justify-between pb-6  text-custom1">
        <p className="text-xl">Dosages</p>
        <button className="text-sm font-base">View all</button>
      </div>
      <p className="font-medium text-base pb-4 text-custom1">Today</p>
      <div className="space-y-4">
        {pills.map((content, index) => (
          <div key={index} className="flex space-x-8 items-center">
            <Image
              src="/images/icon/pills.svg"
              alt="doctor11"
              className="w-auto h-auto"
              width={76}
              height={76}
            />
            <div className="space-y-1">
              <p className="text-custom1 text-xl">{content}</p>
              <div className="flex space-x-3 text-ash5 text-sm font-medium">
                <p>2 pills daily</p>
                <p>Oct 6, 2022</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
}

export default CheckUp;