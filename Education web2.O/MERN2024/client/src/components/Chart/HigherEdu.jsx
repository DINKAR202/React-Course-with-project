import { useEffect, useRef } from "react";
import "./chart.css";
import Chart from "chart.js/auto";

const HigherEdu = () => {
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
      "Teacher Lecture Manual",
      "Project Management",
      "PPT Development",
      "Video Lecture",
      "2D & 3D Videos",
      "Animated Videos",
    ];

    const urls = [
      "/HigherCurriculum",
      "/AssessmentDevelopment",
      "/HigerLectureManual",
      "/HigherManagement",
      "/HigherPPTDevelopment",
      "/HigherVideoLecture",
      "/Higher2D3DVideos",
      "/HigherAnimatedVideos",
    ];

    chartInstance.current = new Chart(myChartRef, {
      type: "pie",
      data: {
        labels: labels,
        datasets: [
          {
            data: [1, 1, 1, 1, 1, 1, 1, 1],
            backgroundColor: [
              "rgb(255, 99, 132)",
              "rgb(54, 162, 235)",
              "rgb(255, 205, 86)",
              "rgb(31, 198, 204)",
              "rgb(255, 205, 86)",
              "rgb(252, 36, 86)",
              "rgb(103, 255, 86)",
              "rgb(83, 117, 79)",
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
      <h6>Higher Education</h6>
      <div>
        <canvas className="chart-size" ref={chartRef} id="pie-chart" />
      </div>
    </div>
  );
};

export default HigherEdu;
