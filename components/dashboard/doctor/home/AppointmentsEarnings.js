import Image from "next/image";
import CircularProgress from "../../dashboard-ui/CircularProgress";

const pills = ["Panadol", "Flagyl", "Aspirin"];

const AppointmentsEarnings = () => {
  return (
    <div className=" flex mb-8 mt-7 space-x-auto flex-col xl:space-x-10 w xl:flex-row">
      <div className="">
        {/* //DATA STATE  */}
        <div className="flex items-center space-x-4 rounded-xl bg-custom14 px-8 py-5">
          <div className="h-24 w-24 flex items-center justify-center text-4xl font-medium text-custom14 rounded-full bg-custom1">
            15
          </div>
          <div className="space-y-1 text-custom1">
            <p className="font-medium text-xl">Total Appointments</p>
            <select className={`bg-custom14 -ml-1 text-sm`}>
              <option>This month</option>
            </select>
          </div>
        </div>
        <div className="mt-10 ml-8 space-y-4">
          <div className="text-ash2">Upcoming checkup</div>
          <div className="flex justify-between items-center pb-3 border-b border-ash">
            <div className="flex justify-between items-center space-x-4">
              {" "}
              <div>
                <Image
                  src="/images/user1.svg"
                  alt="doctor11"
                  className="w-[68px] h-[68px]"
                  width={68}
                  height={68}
                />
              </div>
              <div className="space-y-1">
                <p className="font-semibold">Ubong John</p>
                <p className="text-ash2 font-medium text-xs">11:00pm - 11:30pm</p>
              </div>
            </div>
            <button className="text-xs bg-ash4 py-4 px-5 rounded-full text-ash5">
              Last checkup 1 week ago
            </button>
          </div>
          <div className="flex space-x-6 text-sm">
            <div className="font-semibold">Last Checkup</div>
            <div>Dr Kim on the 29th June, 2021</div>
          </div>
          <div className="flex space-x-8 text-sm">
            <div className="font-semibold">Observation:</div>
            <div>
              High BP and blood sugar levels which requires constant monitoring
              and medication
            </div>
          </div>
          <button className="text-custom text-sm">View history</button>
        </div>
      </div>
      {/* SECOND DIV */}
      <div className="rounded-2xl shadow-2xl flex flex-col justify-center px-9 pt-8 pb-14 ">
        <div className="flex justify-between pb-6 text-ash2">
          <p className="text-xl">Earnings</p>
          <select className={`-ml-1 text-sm`}>
            <option>This month</option>
          </select>
        </div>
        <div>
          <div className="flex flex-col space-y-5 justify-center items-center md:flex-row md:space-y-0">
            <div>
              <div className="h-[244.02px] w-[244.02px] flex items-center justify-center bg-custom-g4 rounded-full">
                <div className="h-[160px] w-[160.02px] flex flex-col items-center justify-center bg-custom1 rounded-full">
                  <div className="text-ash6 text-lg">Total</div>
                  <div className="font-semibold text-3xl">$4000</div>
                </div>
              </div>
            </div>

            <div>
              <div className="relative">
                <CircularProgress
                  labelValue={70}
                  labelState={false}
                  circleHeight="130"
                  circleWidth="130"
                  barThickness="stroke-[22px]"
                  barColor="stroke-[#65D6AD]"
                  trackBarColor="stroke-[#FFFFFF]"
                  circleRadius="53"
                  // progressHeight="200"
                  // circleHeight="200"
                />
                <div className="absolute top-11 w-full text-center">
                  <div className="text-ash6 text-sm">Credit</div>
                  <div className="font-semibold">$4000</div>
                </div>
              </div>

              <div className="relative">
                <CircularProgress
                  labelValue={40}
                  labelState={false}
                  circleHeight="130"
                  circleWidth="130"
                  barThickness="stroke-[22px]"
                  barColor="stroke-[#F86A6A]"
                  circleRadius="53"
                  trackBarColor="stroke-[#FFFFFF]"
                  // progressHeight="200"
                  // circleHeight="200"
                />
                <div className="absolute top-11 w-full text-center">
                  <div className="text-ash6 text-sm">Debit</div>
                  <div className="font-semibold">$1000</div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-12 mt-6">
            {" "}
            <div className="text-sm text-ash6">
              Get your funds transfered to your bank
            </div>{" "}
            <button className="flex items-center justify-center space-x-3 bg-custom text-custom1 px-8 py-3 rounded-full">
              <div className="text-sm">Withdraw</div>
              <Image
              src="/images/icon/arrow-from-bottom.svg"
              alt="arrow-from-bottom-icon"
              className="h-auto w-auto"
              width={16}
              height={16}
            />
            </button>{" "}
          </div>
        </div>

        {/* <div className="space-y-4">
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
            </div> */}
      </div>
    </div>
  );
};

export default AppointmentsEarnings;
