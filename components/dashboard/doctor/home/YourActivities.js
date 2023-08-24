import AppointmentsChart from "./AppointmentsChart";
import EarningsChart from "./EarningsChart";

const YourActivities = (props) => {
  const { token, doctorId } = props;
  return (
    <div className="space-y-6 ">
      <div className="font-semibold text-lg  md:text-[25px]">
        Your activities
      </div>

      <div className="flex flex-col space-y-5 space-x-0 xl:flex-row xl:space-x-5 xl:space-y-0">
        <AppointmentsChart token={token} />
        <EarningsChart token={token} doctorId={doctorId} />
      </div>
    </div>
  );
};

export default YourActivities;
