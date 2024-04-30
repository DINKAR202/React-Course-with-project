import React, { useState, useEffect } from 'react';
import axios from 'axios';

const HourlyForecast = () => {
  const [hourlyData, setHourlyData] = useState([]);

  useEffect(() => {
    // Mock API URL for demo purposes
    const mockAPIURL = 'https://api.mocki.io/v1/fb87551b';

    axios.get(mockAPIURL)
      .then(response => {
        // Assuming the response data is an array of hourly forecast objects
        setHourlyData(response.data);
      })
      .catch(error => {
        console.error('Error fetching hourly forecast:', error);
      });
  }, []);

  return (
    <div>
      <h2>Hourly Forecast</h2>
      <div className="hourly-forecast">
        {hourlyData.map(hour => (
          <div key={hour.time} className="hourly-forecast-item">
            <p>{hour.time}</p>
            <p>{hour.temperature}°C</p>
            <p>{hour.weather}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HourlyForecast;
