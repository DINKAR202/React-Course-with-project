import { useRef } from "react";
import Chart from "chart.js/auto";
import Dropdown from "react-bootstrap/Dropdown";


const MyComponent = () => {
  const chartRef = useRef(null);

  const handleItemClick = () => {
    // Logic to render the pie chart
    // For example, you can set a state variable to control the rendering
    // Or directly manipulate the DOM to render the chart
    renderPieChart();
  };

  const renderPieChart = () => {
    // Logic to render the pie chart
    // For example, using a chart library like Chart.js
    // Here's a basic example using Chart.js
    const ctx = chartRef.current.getContext('2d');
    new Chart(ctx, {
      type: 'pie',
      data: {
        labels: ['Label 1', 'Label 2', 'Label 3'],
        datasets: [{
          data: [30, 40, 30],
          backgroundColor: ['red', 'blue', 'green']
        }]
      },
      options: {}
    });
  };

  return (
    <div>
      <Dropdown.Item onClick={handleItemClick}>
        <div className="drop-icons">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={16}
            height={16}
            fill="currentColor"
            className="bi bi-menu-button-wide me-2"
            viewBox="0 0 16 16"
          >
            {/* SVG path */}
          </svg>
          K12 Education
        </div>
      </Dropdown.Item>
      <div className="container-chart">
        <canvas ref={chartRef} id="pie-chart" />
      </div>
    </div>
  );
};

export default MyComponent;
