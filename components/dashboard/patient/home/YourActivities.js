import MonthlyAppoimentCount from "./MonthlyAppointmentCount";
import ActivityChartData from "./ActivityChartData";



const YourActivities = ({token}) => {
    return <div className="flex flex-col items-center justify-between space-x-auto lg:space-x-8 lg:flex-row">
    <div className="w-full ">
      <p className="text-xl font-medium pb-6">Your activties</p>
     
      <ActivityChartData token={token}/>
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