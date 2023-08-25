import generateYearOptions from "@/helpers/generateYearOptions";
import ActivityLineGraph from "../../dashboard-ui/ActivityChart";
import { useEffect, useState } from "react";
import useHttp from "@/hooks/useHttp";

const currentYear = new Date().getFullYear();
const yearOptions = generateYearOptions();

const labelMapping = [
  {
    name: "Successfulappointments",
    color: "#1992D4",
  },
  {
    name: "Unsuccessfulappointments",
    color: "#FF0000",
  },
];

const AppointmentsChart = (props) => {
  const [selectedYear, setSelectedYear] = useState(currentYear);
  const [appointmentChartData, setAppointmentChartData] = useState([
    {
      name: "No Data",
      data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      color: "#FFFFFF",
    },
  ]);
  const {
    isLoading,
    error,
    sendRequest: fetchAppointmentsChartData,
  } = useHttp();

  const { token } = props;

  useEffect(() => {
    const fetchAppointmentsChartDataResponse = (res) => {
      const { data } = res;
      console.log("response", data);
      const modifiedAppointmentChartInfo = data[+selectedYear].map(
        (appointmentChartData, index) => {
          const {
            "successful appointments": successfulAppointments,
            "unsuccessful appointments": unSuccessfulAppointments,
          } = appointmentChartData;

          return {
            name: labelMapping[index].name,

            data:
              index === 0 ? successfulAppointments : unSuccessfulAppointments,

            color: labelMapping[index].color,
          };
        }
      );
      console.log("modified is", modifiedAppointmentChartInfo);
      setAppointmentChartData(modifiedAppointmentChartInfo);
    };

    fetchAppointmentsChartData(
      {
        url: `doctor/dashboard/dashboardchart?year=${selectedYear}`,
        token: token,
      },
      fetchAppointmentsChartDataResponse
    );
  }, [fetchAppointmentsChartData, token, selectedYear]);

  const selectedYearHandler = (event) => {
    console.log(event.target.value);
    setSelectedYear(event.target.value);
  };

  return (
    <div className="w-full xl:w-1/2">
      <div className="flex justify-between mb-4">
        <p className="text-base font-medium text-ash2 md:text-[20px]">
          Appointments
        </p>
        <select
          onChange={selectedYearHandler}
          className={"bg-custom1 -ml-1 text-sm outline-none md:text-[13px]"}
          value={selectedYear}
        >
          {yearOptions.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
      </div>
      {isLoading || error ? (
        <p className="text-center mt-10 h-24 text-ash2">{error || 'Loading...'}</p>
      ) : (
        <ActivityLineGraph productData={appointmentChartData} />
      )}
    </div>
  );
};

export default AppointmentsChart;
