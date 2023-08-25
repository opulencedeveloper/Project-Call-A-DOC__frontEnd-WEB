import LoadingSpinner from "@/components/UI/LoadingSpinner";
import useHttp from "@/hooks/useHttp";
import { useEffect } from "react";
import { useState } from "react";

const TotalAppointments = (props) => {
  const [selection, setSelection] = useState("month");
  const [totalAppointment, setTotalAppointment] = useState(0);
  const {
    isLoading,
    error,
    sendRequest: fetchTotalAppoitnments,
  } = useHttp();
  const { token } = props;

  useEffect(() => {
    const fetchTotalAppoitnmentsResponse = (res) => {
      const { totalappointment } = res;
      setTotalAppointment(totalappointment)
      console.log("total up", totalappointment)
    };

    fetchTotalAppoitnments(
      {
        url: `doctor/dashboard/howmanyappointment?filteredtime=${selection}`,
        token: token,
      },
      fetchTotalAppoitnmentsResponse
    );
  }, [fetchTotalAppoitnments, token, selection]);

  const selectionHandler = (event) => {
    console.log(event.target.value);
    setSelection(event.target.value);
  };

  return (
    <div className="flex items-center space-x-4 rounded-xl bg-custom14 px-4 py-5 md:px-8">
      <div className="h-16 w-16 flex-shrink-0 flex items-center justify-center text-3xl font-medium text-custom14 rounded-full bg-custom1 md:text-4xl md:h-24 md:w-24">
        {isLoading ? <LoadingSpinner /> : totalAppointment}
      </div>
      <div className="space-y-1 text-custom1">
        <p className="font-medium text-base md:text-xl">Total Appointments</p>
        <select onChange={selectionHandler} className="bg-custom14 -ml-1 text-sm outline-none">
          <option value="month">This month</option>
          <option value="year">This year</option>
          <option value="day">This day</option>
        </select>
      </div>
    </div>
  );
};

export default TotalAppointments;
