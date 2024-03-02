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
      "Curriculum Development",
      "Assessment Development",
      "PPT Development",
      "2D & 3D Videos",
      "Flashcard Creation",
      "Teacher Lesson Plan",
      "eBook Creation",
      "K 6 Education",
      "Workbook Development",
    ];

    const urls = [
      "/",
      "/about",
      "/contact",
      "/login",
      "/register",
      "/localization",
      "/localization",
      "/localization",
      "/localization",
      "/localization",
    ];

    chartInstance.current = new Chart(myChartRef, {
      type: "pie",
      data: {
        labels: labels,
        datasets: [
          {
            data: [418, 263, 434, 486, 332, 300, 250, 250, 300],
            backgroundColor: [
              "rgb(255, 99, 132)",
              "rgb(54, 162, 235)",
              "rgb(255, 205, 86)",
              "rgb(31, 198, 204)",
              "rgb(255, 205, 86)",
              "rgb(252, 36, 86)",
              "rgb(103, 255, 86)",
              "rgb(83, 117, 79)",
              "rgb(218, 110, 21)",
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
        plugins: {
          legend: {
            align: "start", // Align the legend to the start
          },
          tooltip: {
            enabled: false, // Disable tooltips
          },
          datalabels: {
            color: "black", // Set label color to black
          },
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
      <h6>K12 Education</h6>
      <div>
        <canvas className="chart-size" ref={chartRef} id="pie-chart" />
      </div>
    </div>
  );
};

export default ChartComponent;
