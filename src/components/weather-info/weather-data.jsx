import React from "react";
import "./weather-app.css";
function WeatherData({ data }) {
  const weatherImg = () => {
    if (data && data.weather && data.weather.length > 0) {
      const weatherMain = data.weather[0].main;
      if (weatherMain === "Clouds") {
        return <img src="cloudy.jpg" alt="clouds" />;
      } else if (weatherMain === "Clear") {
        return <img src="sunny.jpg" alt="sunny" />;
      } else if (weatherMain === "Rain") {
        return <img src="rainy.jpg" alt="rain" />;
      } else if (weatherMain === "Snow") {
        return <img src="snowy.jpg" alt="snowy" />;
      } else if (weatherMain === "Mist") {
        return <img src="Windy.jpg" alt="Windy" />;
      }
    }
    return null; // Return null if no matching weather condition found
  };
  return (
    <div className="weather-data">
      <div className="img-content">{weatherImg()}</div>
      {/* weather descriptions */}
      <div className="text-content flex w-full justify-between items-center">
        {/* humidity */}
        <div className="flex flex-col">
          <p className="text-lg font-medium">Wind: </p>
          {data.wind && <p>{data.wind.speed}Km/h</p>}
        </div>
        {/* wind */}
        <div className="flex flex-col">
          <p className="text-lg font-medium">Weather: </p>
          <p>{data.weather[0].main}</p>
        </div>

        {/* humidity */}
        <div className="flex flex-col">
          <p className="text-lg font-medium">Humidity: </p>
          <p>{data.main.humidity}%</p>
        </div>
      </div>
    </div>
  );
}

export default WeatherData;
