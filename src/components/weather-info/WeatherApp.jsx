import React, { useState, useEffect } from "react";
import WeatherData from "./weather-data";
import Form from "./Form";

export default function WeatherApp() {
  const [city, setCity] = useState("tehran");
  const [data, setData] = useState(null); // Initialize data state as null

  const api = "https://api.openweathermap.org/data/2.5/weather?q=";
  const apiKey = "c4c48b814245706f7f2ed4703bf23030";

  async function getWeather() {
    try {
      const response = await fetch(
        `${api}${city}&appid=${apiKey}&units=metric`
      );
      if (response.ok) {
        const newCity = await response.json();
        setData(newCity);
        console.log(data);
      } else {
        throw new Error(`Failed to fetch weather: ${response.statusText}`);
      }
    } catch (error) {
      console.error(error);
    }
  }
  useEffect(() => {
    if (city !== "") {
      getWeather();
    }
  }, [city]);
  function handleSubmit(e) {
    e.preventDefault();
    // Trigger weather fetching when the form is submitted
    getWeather();
  }

  return (
    <div className="weather-app">
      <div className="container w-[400px] md:w-[600px] h-[600px] bg-white rounded-2xl px-10 py-10">
        <div className="top-bar flex items-center justify-between relative">
          <div>
            <span className="text-lg font-medium absolute left-0 -top-5">
              {data && data.sys.country}
            </span>
            <h2 className="font-semibold text-4xl text-black leading-10 select-none">
              {data && data.name}
            </h2>
            {data && <h1 className="font-bold text-4xl">{data.main.temp}°C</h1>}
          </div>
          <div>
            <p className="font-medium text-lg">
              Now : <span>{new Date().toLocaleTimeString()}</span>
            </p>
          </div>
        </div>
        <Form onSetCity={setCity} city={city} onSubmit={handleSubmit} />
        {data && <WeatherData data={data} />}{" "}
      </div>
    </div>
  );
}
