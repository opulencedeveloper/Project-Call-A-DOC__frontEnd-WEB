import Image from "next/image";
import CircularProgress from "../../dashboard-ui/CircularProgress";

const YourActivities = () => {
    return <div className="flex flex-col items-center space-x-auto lg:space-x-10 lg:flex-row">
    <div>
      <p className="text-lg font-medium pb-6">Your activties</p>
      <div className="flex text-ash2 text-sm justify-between pb-5">
        <p>Appointments</p>
        <select>
          <option>Default</option>
        </select>
      </div>
      {/* NO DATA */}
      <Image
        src="/images/appointment-line-chart-no-data.svg"
        alt="appointment-line-chart-data"
        className="w-auto h-auto"
        width={762}
        height={268}
      />
      {/* DATA STATE */}
      {/* <Image
        src="/images/appointment-line-chart-data.svg"
        alt="appointment-line-chart-data"
        className="w-auto h-auto"
        width={762}
        height={268}
      /> */}
    </div>

    {/* Data state class => bg-custom14 */}
    <div className="bg-ash6 w-72 py-10 rounded-lg px-14 mt-10 lg:mt-auto">
      <div className="flex flex-col items-center justify-center space-y-3 h-full">
        <p className="text-custom1 text-xl">You have</p>
        <div className="rounded-full bg-custom1 flex items-center justify-center">
          <CircularProgress labelValue={0} textColor="#9AA5B1" labelState = {true}
          barColor="stroke-[#9AA5B1]"/>
        </div>
        <div className="text-center text-sm text-custom1">
          Appointments left for this month
        </div>
      </div>
    </div>
  </div>
}

export default YourActivities;