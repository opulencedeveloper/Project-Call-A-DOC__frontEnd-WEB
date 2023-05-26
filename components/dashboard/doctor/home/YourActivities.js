import Image from "next/image";

const YourActivities = () => {
  return (
    <div className="space-y-6 ">
      <div className="font-semibold text-lg">Your activities</div>
      
      <div className="flex flex-col space-y-5 space-x-0 xl:flex-row xl:space-x-5 xl:space-y-0">
        <div>
          <div className="flex justify-between mb-4">
            <div>Appointments</div>
            <select className={`bg-custom1 -ml-1 text-sm`}>
              <option>This month</option>
            </select>
          </div>
          <Image
            src="/images/doctor-activity-line-chart.svg"
            alt="doctor-activity-line-chart"
            className="w-auto h-auto"
            width={614}
            height={268}
          />
        </div>

        <div>
          <div className="flex justify-between mb-4">
            <div>Appointments</div>
            <select className={`bg-custom1 -ml-1 text-sm`}>
              <option>This month</option>
            </select>
          </div>
          <Image
            src="/images/doctor-activity-bar-chart.svg"
            alt="doctor-activity-bar-chart"
            className="w-auto h-auto"
            width={614}
            height={268}
          />
        </div>
      </div>
    </div>
  );
};

export default YourActivities;
