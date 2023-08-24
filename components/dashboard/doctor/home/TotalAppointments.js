const TotalAppointments = () => {
  return (
    <div className="flex items-center space-x-4 rounded-xl bg-custom14 px-4 py-5 md:px-8">
      <div className="h-16 w-16 flex-shrink-0 flex items-center justify-center text-3xl font-medium text-custom14 rounded-full bg-custom1 md:text-4xl md:h-24 md:w-24">
        15
      </div>
      <div className="space-y-1 text-custom1">
        <p className="font-medium text-base md:text-xl">Total Appointments</p>
        <select className={`bg-custom14 -ml-1 text-sm`}>
          <option>This month</option>
        </select>
      </div>
    </div>
  );
};

export default TotalAppointments;
