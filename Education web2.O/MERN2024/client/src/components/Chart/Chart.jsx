import { useEffect, useRef } from "react";
import "./chart.css";
import Chart from "chart.js/auto";

const ChartComponent = () => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }
    const myChartRef = chartRef.current.getContext("2d");

    const labels = [
      "K12 Education",
      "Higher Education",
      "Learning Solutions",
      "Accessibility",
      "Editorial and Pre-Press",
      "Localization",
    ];

    const urls = [
      "/",
      "/about",
      "/contact",
      "/login",
      "/register",
      "/localization",
    ];

    chartInstance.current = new Chart(myChartRef, {
      type: "pie",
      data: {
        labels: labels,
        datasets: [
          {
            data: [418, 263, 434, 586, 332, 100, 150],
            backgroundColor: [
              "rgb(255, 99, 132)",
              "rgb(54, 162, 235)",
              "rgb(255, 205, 86)",
              "rgb(31, 198, 204)",
              "rgb(255, 205, 86)",
              "rgb(252, 36, 86)",
              "rgb(103, 255, 86)",
            ],
          },
        ],
      },
      options: {
        onClick: (event, elements) => {
          if (elements && elements.length > 0) {
            const clickedIndex = elements[0].index;
            if (urls[clickedIndex]) {
              window.location.href = urls[clickedIndex];
            }
          }
        },
      },
    });
    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, []); // Empty dependency array to run the effect only once when the component mounts

  return (
    <div className="container-chart">
      {/* <h1>Pie Chart for Web Development</h1> */}
      <div>
        <canvas ref={chartRef} id="pie-chart" />
      </div>
    </div>
  );
};

export default ChartComponent;
