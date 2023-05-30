import React, { useState } from "react";

import dynamic from "next/dynamic";

// The dynamic import from Next.js (import dynamic from 'next/dynamic') is used to load
// the Chart component dynamically. The ssr: false option ensures that the component
// is not rendered on the server-side during server rendering, where the window object
// is not available.
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const ActivityLineGraph = (props) => {
  const { productData } = props;
  const [product, setProduct] = useState(productData);

  const [options, setOptions] = useState({
    chart: {
      toolbar: {
        show: false, // Hide the toolbar
      },
      parentHeightOffset: 0,
    //   padding: {
    //     top: 0,
    //     right: 0,
    //     bottom: 0,
    //     left: 0,
    //   },
    },

    // yaxis: {
    //     labels: {
    //       offsetX: -15,
    //     },
    //   },

    //   grid: {
    //     padding: {
    //       left: 0,
    //     },
    //   },
    xaxis: {
      title: {
       // text: "Appoinments",
        style: {
         fontFamily: '@apply font-montserrat',
          fontWeight: "font-semibold",
          fontSize: "text-sm",
          //   color: "#000000",
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
    // yaxis: {
    //   title: { text: "Product in K" }
    // }
  });

  const series = product.map((item) => ({
    name: item.name,
    data: item.data,
  }));

  const colors = product.map((item) => item.color);


  const chartOptions = {
    offsetX: -15,
    ...options,
    colors: colors,

    stroke: {
        width: 2, // Adjust the stroke width to your desired thickness
      },
    xaxis: {
      ...options.xaxis,
      labels: {
        ...options.xaxis.labels,
        style: {
          fontFamily: '@apply font-montserrat', // Apply the desired fontFamily to the categories
          fontSize: '16px', // Apply the desired font size to the categories
        },
      },
    },
    yaxis: {
        //...options.xaxis,
        labels: {
          ...options.xaxis.labels,
          offsetX: -15,
          style: {
            fontFamily: '@apply font-montserrat', // Apply the desired fontFamily to the categories
            fontSize: '16px', // Apply the desired font size to the categories
          },
        },
      },
  };

  return (
    <div>
      {typeof window !== "undefined" && (
        <Chart
          type="line"
          height={290.21}
          series={series}
          
          options={chartOptions}
        />
        
      )}
    </div>
  );
}

export default ActivityLineGraph;
