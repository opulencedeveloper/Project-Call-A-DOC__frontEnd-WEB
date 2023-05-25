import Image from "next/image";

const YourActivities = () => {
  return (
    <div className="space-y-6 border">
      <div className="font-semibold text-lg">Your activities</div>
      
      <div className="flex space-x-5">
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
