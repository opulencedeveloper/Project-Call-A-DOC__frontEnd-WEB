import useHttp from "@/hooks/useHttp";
import { useEffect, useState } from "react";
import CircularProgress from "../../dashboard-ui/CircularProgress";

const MonthlyAppoimentCount = (props) => {
  const [currentMonthAppointment, setCurrentMonthAppointment] = useState(0);
  const {
    isLoading,
    error,
    sendRequest: fetchTotalNumberOfAppointmetFortheMonth,
  } = useHttp();
  const { token } = props;
  {
    /* Data state class => bg-custom14 */
  }

  useEffect(() => {
    const totalMonthAppoitntmentResponse = (res) => {
      const { totalrecords } = res;
      setCurrentMonthAppointment(totalrecords);
    };

    fetchTotalNumberOfAppointmetFortheMonth(
      {
        url: "customer/fetchunreadappointments",
        token: token,
      },
      totalMonthAppoitntmentResponse
    );
  }, [fetchTotalNumberOfAppointmetFortheMonth, token]);
  return (
    <div
      className={`w-72 py-10 rounded-lg px-14 mt-10 lg:mt-auto ${
        currentMonthAppointment === 0 ? "bg-ash6" : "bg-custom14"
      }`}
    >
      <div className="flex flex-col items-center justify-center space-y-3 h-full">
        <p className="text-custom1 text-xl">You have</p>
        <div className="rounded-full flex items-center justify-center bg-custom1">
          <CircularProgress
            labelValue={currentMonthAppointment}
            textColor={currentMonthAppointment === 0 ? "#9AA5B1" : "#1F2933"}
            labelState={true}
            barColor={
              currentMonthAppointment === 0
                ? "stroke-[#9AA5B1]"
                : "stroke-[#9E77D1]"
            }
          />
        </div>
        <div className="text-center text-sm text-custom1">
          Appointments left for this month
        </div>
      </div>
    </div>
  );
};

export default MonthlyAppoimentCount;
