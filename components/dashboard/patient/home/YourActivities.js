import Image from "next/image";
import CircularProgress from "../../dashboard-ui/CircularProgress";
import Linechart from "../../dashboard-ui/ActivityChart";
import MonthlyAppoimentCount from "./MonthlyAppointmentCount";

const chartData = [{
  name: "Data",
  data: [12, 15, 17, 17, 15, 16, 7, 13, 14, 19, 17, ],
  color: "#1992D4", 
},]

const YourActivities = ({token}) => {
    return <div className="flex flex-col items-center justify-between space-x-auto lg:space-x-8 lg:flex-row">
    <div className="w-full ">
      <p className="text-xl font-medium pb-6">Your activties</p>
      <div className="flex text-ash2 text-sm justify-between pb-5">
        <p className="text-base">Appointments</p>
        <select>
          <option>Default</option>
        </select>
      </div>
      <Linechart productData={chartData}/>
      {/* NO DATA */}
      {/* <Image
        src="/images/appointment-line-chart-no-data.svg"
        alt="appointment-line-chart-data"
        className="w-auto h-auto"
         ""
        width={762}
        height={268}
      /> */}
      {/* DATA STATE */}
      {/* <Image
        src="/images/appointment-line-chart-data.svg"
        alt="appointment-line-chart-data"
        className="w-auto h-auto"
        width={762}
        height={268}
         ""
      /> */}
    </div>
    <MonthlyAppoimentCount token={token} />
  </div>
}

export default YourActivities;