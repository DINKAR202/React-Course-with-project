import { useEffect, useRef } from "react";
import "./chart.css";
import Chart from "chart.js/auto";

const Editorial = () => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }
    const myChartRef = chartRef.current.getContext("2d");

    const labels = [
      "Copy Editing",
      "Proofreading",
      "Typesetting",
      "Abstracting",
      "Book Indexing",
      "Image Restoration",
      "Digitization Services",
      "Metadata Tagging",
      "Flash to Html5 Conversion",
      "Kindle E-book Conversion",
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
            data: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            backgroundColor: [
              "rgb(255, 99, 132)",
              "rgb(54, 162, 235)",
              "rgb(255, 205, 86)",
              "rgb(31, 198, 204)",
              "rgb(255, 205, 86)",
              "rgb(252, 36, 86)",
              "rgb(103, 255, 86)",
              "rgb(83, 117, 79)",
              "rgb(29, 11, 70)",
              "rgb(117, 79, 98)",
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
      <h6>Editorial and pre-press</h6>
      <div>
        <canvas className="chart-size" ref={chartRef} id="pie-chart" />
      </div>
    </div>
  );
};

export default Editorial;