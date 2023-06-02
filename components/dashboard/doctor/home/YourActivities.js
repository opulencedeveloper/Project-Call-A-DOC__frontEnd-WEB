import Image from "next/image";
import AppointmenData from "../../dashboard-ui/AppointmentData";
import ActivityLineGraph from "../../dashboard-ui/ActivityChart";

const chartData = [{
  name: "Data",
  data: [12, 15, 17, 17, 15, 16, 7, 13, 14, 19, 17, ],
  color: "#1992D4", 
},]

const YourActivities = () => {
  return (
    <div className="space-y-6 ">
      <div className="font-semibold text-lg">Your activities</div>
      
      <div className="flex flex-col space-y-5 space-x-0 xl:flex-row xl:space-x-5 xl:space-y-0">
        <div className="w-full xl:w-1/2">
          <div className="flex justify-between mb-4">
            <div>Appointments</div>
            <select className={`bg-custom1 -ml-1 text-sm`}>
              <option>This month</option>
            </select>
          </div>
          <ActivityLineGraph productData={chartData}/>
          {/* <Image
            src="/images/doctor-activity-line-chart.svg"
            alt="doctor-activity-line-chart"
            className="w-auto h-auto"
             ""
            width={614}
            height={268}
          /> */}
        </div>

        <div className="w-full xl:w-1/2">
          <div className="flex justify-between mb-4">
            <div>Appointments</div>
            <select className={`bg-custom1 -ml-1 text-sm`}>
              <option>This month</option>
            </select>
          </div>
          <AppointmenData />
          {/* <Image
            src="/images/doctor-activity-bar-chart.svg"
            alt="doctor-activity-bar-chart"
            className="w-auto h-auto"
             ""
            width={614}
            height={268}
          /> */}
        </div>
      </div>
    </div>
  );
};

export default YourActivities;
