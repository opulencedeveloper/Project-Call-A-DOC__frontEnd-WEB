import { useEffect, useState } from "react";
import AppointmenData from "../../dashboard-ui/AppointmentData";
import generateYearOptions from "@/helpers/generateYearOptions";
import useHttp from "@/hooks/useHttp";
import LoadingSpinner from "@/components/UI/LoadingSpinner";

const currentYear = new Date().getFullYear();
const yearOptions = generateYearOptions();

const EarningsChart = (props) => {
  const [selectedYear, setSelectedYear] = useState(currentYear);
  const [chartDataDetails, setChartDataDetails] = useState([]);
  const { isLoading, error, sendRequest: fetchEarningsChartData } = useHttp();

  const { token, doctorId } = props;

  const allZeros = chartDataDetails.every((element) => element === 0);

  useEffect(() => {
    const fetchEarningsChartDataResponse = (res) => {
      const { data } = res;
      console.log(
        "data from earning response",
        data[+selectedYear][0].earinings
      );
      setChartDataDetails(data[+selectedYear][0].earinings);
      // const modifiedAppointmentChartInfo = data[+selectedYear].map(
      //   (appointmentChartData, index) => {
      //     const {
      //       totalappointments,
      //       successfulappointments,
      //       unsuccessfulappointments,
      //       successfulcheckups,
      //       unsuccessfulcheckups,
      //     } = appointmentChartData;

      //     return {
      //       name: labelMapping[index].name,

      //       data:
      //         index === 0
      //           ? totalappointments
      //           : index === 1
      //           ? successfulappointments
      //           : index === 2
      //           ? unsuccessfulappointments
      //           : index === 3
      //           ? successfulcheckups
      //           : unsuccessfulcheckups,
      //       color: labelMapping[index].color,
      //     };
      //   }
      // );

      // setAppointmentChartData(modifiedAppointmentChartInfo);
    };

    fetchEarningsChartData(
      {
        url: `doctor/dashboard/earningchart?doctorid=${doctorId}&year=${selectedYear}`,
        token: token,
      },
      fetchEarningsChartDataResponse
    );
  }, [fetchEarningsChartData, token, selectedYear]);

  const selectedYearHandler = (event) => {
    console.log(event.target.value);
    setSelectedYear(event.target.value);
  };

  return (
    <div className="w-full xl:w-1/2">
      <div className="flex justify-between mb-4">
        <p className="text-base text-ash2 font-medium md:text-[20px]">
          Earnings
        </p>
        <select
          onChange={selectedYearHandler}
          value={selectedYear}
          className={"bg-custom1 -ml-1 outline-none text-sm md:text-[13px]"}
        >
          {yearOptions.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
      </div>
      {isLoading || error ? (
        <p className="text-center mt-10 h-24 text-ash2">
          {error || "Loading..."}
        </p>
      ) : (
        <AppointmenData
          chartData={{
            name: "Data",
            data: chartDataDetails,
          }}
        />
      )}
      {/* <Image
      src="/images/doctor-activity-bar-chart.svg"
      alt="doctor-activity-bar-chart"
      className="w-auto h-auto"
       ""
      width={614}
      height={268}
    /> */}
    </div>
  );
};

export default EarningsChart;
