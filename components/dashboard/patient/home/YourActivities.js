import MonthlyAppoimentCount from "./MonthlyAppointmentCount";
import ActivityChartData from "./ActivityChartData";



const YourActivities = ({token}) => {
    return <div className="flex flex-col items-center justify-between space-x-auto lg:space-x-8 lg:flex-row">
    <div className="w-full ">
      <p className="text-xl font-medium pb-6">Your activties</p>
     
      <ActivityChartData token={token}/>
    </div>
    <MonthlyAppoimentCount token={token} />
  </div>
}

export default YourActivities;