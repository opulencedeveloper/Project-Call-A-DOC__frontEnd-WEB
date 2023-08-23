import { useEffect, useState } from "react";
import Linechart from "../../dashboard-ui/ActivityChart";
import useHttp from "@/hooks/useHttp";
import LoadingSpinner from "@/components/UI/LoadingSpinner";
const currentYear = new Date().getFullYear();

const labelMapping = [
  {
    name: "Totalappointments",
    color: "#1992D4",
  },
  {
    name: "Successfulappointments",
    color: "#00FF00",
  },
  {
    name: "Unsuccessfulappointments",
    color: "#FF0000",
  },
  {
    name: "Successfulcheckups",
    color: "#2E8B57",
  },
  {
    name: "Unsuccessfulcheckups",
    color: "#DC143C",
  },
];

const generateYearOptions = () => {
  const currentYear = new Date().getFullYear();
  const yearOptions = [];

  for (let i = 0; i <= 10; i++) {
    const year = currentYear - i;
    yearOptions.push(year);
  }

  return yearOptions;
};



const ActivityChartData = (props) => {
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
      const modifiedAppointmentChartInfo = data[+selectedYear].map(
        (appointmentChartData, index) => {
          const {
            totalappointments,
            successfulappointments,
            unsuccessfulappointments,
            successfulcheckups,
            unsuccessfulcheckups,
          } = appointmentChartData;

          return {
            name: labelMapping[index].name,

            data:
              index === 0
                ? totalappointments
                : index === 1
                ? successfulappointments
                : index === 2
                ? unsuccessfulappointments
                : index === 3
                ? successfulcheckups
                : unsuccessfulcheckups,
            color: labelMapping[index].color,
          };
        }
      );

      setAppointmentChartData(modifiedAppointmentChartInfo);
    };

    fetchAppointmentsChartData(
      {
        url: `customer/dashboardchart?year=${selectedYear}`,
        token: token,
      },
      fetchAppointmentsChartDataResponse
    );
  }, [fetchAppointmentsChartData, token, selectedYear]);

  if (isLoading) {
    return <LoadingSpinner loadWidth="w-full lg:w-max" pageHeight="h-20"/>;
  }

  const yearOptions = generateYearOptions();

  const selectedYearHandler = (event) => {
    console.log(event.target.value);
    setSelectedYear(event.target.value);
  };

  return (
    <>
      <div className="flex text-ash2 text-sm justify-between pb-5">
        <p className="text-base">Appointments</p>
        <select
          onChange={selectedYearHandler}
          id="yearSelect"
          className="outline-none"
          value={selectedYear}
        >
          {yearOptions.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
      </div>
      <Linechart productData={appointmentChartData} />
    </>
  );
};

export default ActivityChartData;
