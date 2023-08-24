import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const AppointmenData = (props) => {
  const [isClient, setIsClient] = useState(false);
  const {chartData} = props;

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <>
      {/* factorial! */}
      {isClient && (
        <div className="container-fluid">
          <Chart
            type="bar"
            series={[
              chartData
            ]}
            options={{
              chart: {
                id: "bar-chart",
                toolbar: {
                  show: false,
                },
              },
              yaxis: {
                labels: {
                  style: {
                    fontFamily: "@apply font-montserrat",
                    fontWeight: "font-semibold",
                    fontSize: "text-sm",
                  },
                },
              },
              xaxis: {
                labels: {
                  style: {
                    fontFamily: "@apply font-montserrat",
                    fontWeight: "font-semibold",
                    fontSize: "text-sm",
                  },
                },
                categories: [
                  "Jan",
                  "Feb",
                  "Mar",
                  "Apr",
                  "May",
                  "Jun",
                  "Jul",
                  "Aug",
                  "Sep",
                  "Oct",
                  "Nov",
                  "Dec",
                ],
              },
              plotOptions: {
                bar: {
                  barWidth: "90%", // Adjust the value as per your requirement

                  dataLabels: {
                    position: "none",
                  },
                  colors: {
                    ranges: [
                      {
                        from: 0,
                        to: 100,
                        color: "#F86A6A", // Red
                      },
                      {
                        from: 100,
                        to: 300,
                        color: "#5ED0FA", // Yellow
                      },

                      {
                        from: 300,
                        to: 1000,
                        color: "#65D6AD", // Red
                      },
                    ],
                  },
                },
              },
              //   dataLabels: {
              //     style: {
              //       fontSize: "15px",
              //     },
              //   },
            }}
          />
        </div>
      )}
    </>
  );
}

export default AppointmenData;
