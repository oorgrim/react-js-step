import React, { useState, useEffect } from 'react';
import './Weather.css';

function Weather() {
  const [cityName, setCityName] = useState('Алматы'); //этот дефолтный город для автозагрузки
  const [weatherData, setWeatherData] = useState(null);
  const API_KEY = 'cc2d757656721c7838f819f150c7f7e6';

  const cityChange = (event) => {
    setCityName(event.target.value);
  };

  // отправляю http запрос с помощью фетч, выбрала его потому что не была уверена что смогу с axios и у меня не особо получилось
  const fetchWeather = async () => {
    if (!cityName.trim()) return;
    const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${cityName.trim()}&appid=${API_KEY}`;
    try {
      const response = await fetch(API_URL);
      if (!response.ok) {
        alert('нет такого города!');
        return;
      }
      const data = await response.json()
      setWeatherData(data)
    }
    catch (err) {
      alert(err.message)
      setWeatherData(null)
    }
  };

  //автозагрузка данных при первом рендере
  useEffect(() => {
    fetchWeather();
  }, []);

  const getVideo = () => {
    if (!weatherData || !weatherData.weather) return '/videos/default.mp4'; // дефолтное видео не успела добавить :(
    const mWeather = weatherData.weather[0].main.toLowerCase();
    if (mWeather === 'snow') return '/videos/snow.mp4';
    if (mWeather === 'rain') return '/videos/rain.mp4';
    if (mWeather === 'clouds') return '/videos/clouds.mp4';
    return '/videos/sunny.mp4';
  }

  return (
    <div className="weather-container">
      {weatherData && (
        <video className="background-video" src={getVideo()} autoPlay loop muted />
      )}

      <div className="content">
        <input
          type="text"
          value={cityName}
          onChange={cityChange}
          placeholder="Введите город:"
        />
        <button onClick={fetchWeather}>узнать</button>

        {weatherData && weatherData.main && weatherData.weather && (
          <div className="weather-info">
            <p className="city">в городе: {cityName}</p>
            <p className="temp">
              Температура: {Math.round(weatherData.main.temp - 273)} °C
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

export default Weather;