import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Bar, Line } from 'react-chartjs-2';

const App = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [filters, setFilters] = useState({
    endYear: null,
    topics: [],
    sector: null,
    region: null,
    pest: null,
    source: null,
    swot: null,
  });

  useEffect(() => {
    // Fetch data from the API when the component mounts
    const fetchData = async () => {
      const response = await axios.get('http://localhost:5000/api/data');
      setData(response.data);
      setFilteredData(response.data); // Set initial data without filters
    };

    fetchData();
  }, []);

  // Function to filter data based on the current filters
  const applyFilters = () => {
    // Implement logic to filter data based on filters state
    // Update the filteredData state with the filtered data
    setFilteredData(/* Your filtered data */);
  };

  // Function to handle changes in filters
  const handleFilterChange = (filterName, value) => {
    // Update the filters state with the new value
    setFilters({ ...filters, [filterName]: value });
  };

  // Use useEffect to apply filters whenever the filters state changes
  useEffect(() => {
    applyFilters();
  }, [filters]);

  const barChartData = {
    labels: filteredData.map(item => item.Country),
    datasets: [
      {
        label: 'Intensity',
        backgroundColor: 'rgba(75,192,192,0.2)',
        borderColor: 'rgba(75,192,192,1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(75,192,192,0.4)',
        hoverBorderColor: 'rgba(75,192,192,1)',
        data: filteredData.map(item => item.Intensity),
      },
    ],
  };

  const lineChartData = {
    labels: filteredData.map(item => item.Country),
    datasets: [
      {
        label: 'Likelihood',
        fill: false,
        lineTension: 0.1,
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: 'rgba(75,192,192,1)',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgba(75,192,192,1)',
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: filteredData.map(item => item.Likelihood),
      },
    ],
  };

  return (
    <div>
      {/* Render your filters */}
      {/* Example filter: */}
      <select onChange={(e) => handleFilterChange('region', e.target.value)}>
        <option value="">All Regions</option>
        {/* Add options dynamically based on your data */}
      </select>

      {/* Render your visualizations */}
      <div>
        <h2>Intensity Chart</h2>
        <Bar data={barChartData} />
      </div>

      <div>
        <h2>Likelihood Chart</h2>
        <Line data={lineChartData} />
      </div>
    </div>
  );
};

export default App;
