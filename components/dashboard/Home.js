import Image from "next/image";
import CircularProgress from "../UI/CircularProgress";

const currentDate = new Date();

const options = {
  weekday: "long",
  day: "numeric",
  month: "long",
  year: "numeric",
};

const formattedDate = currentDate.toLocaleDateString("en-US", options);

const pills = ["Panadol", "Flagyl", "Aspirin"];

const Home = () => {
  return (
    <div className="flex">
      <div className="flex-1 px-10">
        <div className="flex justify-between items-center pb-12 pt-2">
          <div className="space-y-2.5">
            {" "}
            <p className="font-semibold text-4xl">Welcome Kelvin</p>
            <p className="text-ash2 text-lg">{formattedDate}</p>
          </div>

          <div className="bg-ash4 flex rounded-full w-72 mr-2 h-12">
            <Image
              src="/images/icon/search.svg"
              alt="search-icon"
              className="w-auto h-auto p-4"
              width={16}
              height={16}
            />
            <input
              type="text"
              className="py-4 mr-1 w-full rounded-full bg-ash4 placeholder-ash2 text-base font-light focus:outline-none"
              placeholder="Search"
            />{" "}
          </div>
        </div>

        <div className="flex space-x-16 mb-14">
          <div className="w-1/2">
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
          <div className="w-1/2  bg-custom9 rounded-2xl px-11 py-6">
            <div className="flex justify-between pb-7  text-custom1">
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

        <div className="flex space-x-10">
          <div>
            <p className="text-lg font-medium pb-6">Your activties</p>
            <div className="flex text-ash2 text-sm justify-between pb-5">
              <p>Appointments</p>
              <select>
                <option>Default</option>
              </select>
            </div>
            <Image
              src="/images/line-chart.svg"
              alt="appointment-line-chart"
              className="w-auto h-auto"
              width={762}
              height={268}
            />
          </div>
          <div className="bg-custom14 flex-1 rounded-lg px-10">
  <div className="flex flex-col items-center justify-center space-y-3 h-full">
    <p className="text-custom1 text-lg">You have</p>
    <div className="rounded-full bg-custom1 flex items-center justify-center">
      <CircularProgress value={65} />
    </div>
    <div className="text-center text-sm text-custom1 px-10">Appointments
left for this month</div>
  </div>
</div>

        </div>
      </div>

      <div className="border flex flex-col items-center"> 
      <div className="relative border ">
        <Image
              src="/images/profile.svg"
              alt="profile-picture"
              className="w-auto h-auto"
              width={222}
              height={222}
            />
           <div className="absolute bottom-6 right-4"><Image
              src="/images/icon/online.svg"
              alt="profile-picture"
              className="w-auto h-auto"
              width={28}
              height={29}
            /></div> 
            
            </div>
            <p className="mt-5">Kelvin Wills</p>
            <p className="text-custom-g text-sm mb-8">Online</p>
            <button className="bg-custom px-7 flex items-center rounded-full py-2.5 space-x-2"><Image
              src="/images/icon/edit.svg"
              alt="profile-picture"
              className="w-auto h-auto"
              width={9.23}
              height={9.23}
            /><p className="text-custom1">Edit Profile</p></button>
            </div>
    </div>
  );
};

export default Home;
