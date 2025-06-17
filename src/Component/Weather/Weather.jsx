import { useEffect, useState } from 'react'
import { getWeatherData } from '../../utils/storage.js'
import './Weather.css'


const weatherIcons = {
    0: '☀️', 1: '🌤️', 2: '⛅', 3: '☁️',
    45: '🌫️', 48: '🌫️', 51: '🌦️', 61: '🌧️',
    71: '❄️', 95: '⛈️', 96: '⛈️', 99: '⛈️'
};

export default function Weather() {
    const [weather, setWeather] = useState(null)
    const [error, setError] = useState('')
    const [lang, setLang] = useState('zh');




    useEffect(() => {
        async function fetchData() {
            try {
                const data = await getWeatherData()
                setWeather(data)



            } catch (err) {
                setError('get weather was failed')
                console.log(err)
            }
        }

        fetchData()
    }, [])

    if (error) return <div className="weather"> ❌  {error}</div>
    if (!weather) return <div className="weather">Loading weather...</div>
    /*
        const formatTime = (timeStr) => {
            const date = new Date(timeStr);
            return `${date.getHours().toString().padStart(2, '0')}:${date.getMinutes()
                .toString()
                .padStart(2, '0')}`;
        };
    */
    const labels = {
        zh: {
            location: '📍 位置',
            temp: '🌡️ 温度',
            feelsLike: '🤔 体感',
            humidity: '💧 湿度',
            wind: '💨 风速',
            direction: '🧭 风向',
            time: '🕒 时间',
        },
        en: {
            location: '📍 Location',
            temp: '🌡️ Temp',
            feelsLike: '🤔 Feels Like',
            humidity: '💧 Humidity',
            wind: '💨 Wind',
            direction: '🧭 Direction',
            time: '🕒 Time',
        },
    };

    const rotateDeg = weather?.windDirection || 0;

    return (
        <>

            <div id='code' className="weather-container">
                {error && <p className="error">{error}</p>}

                {!weather ? (
                    <p className="loading">Loading weather...</p>
                ) : (
                    <div className="weather-card slide-in">
                        <div className="icon">{weatherIcons[weather.weatherCode] || '❓'}</div>
                        <p>{labels[lang].location} : {weather.city}</p>
                        <p>{labels[lang].temp} : {weather.temperature}°C</p>
                        <p>{labels[lang].feelsLike} : {weather.feelsLike}°C</p>
                        <p>{labels[lang].humidity} : {weather.humidity}%</p>
                        <p>{labels[lang].wind} : {weather.wind} km/h</p>
                        <p>{labels[lang].direction} :
                            <span style={{ display: 'inline-block', transform: `rotate (${weather.windDirection} deg)` }}></span>
                            {weather.windDirection}°
                        </p>
                        <p>{labels[lang].time} : {new Date(weather.time).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</p>
                        <button className="lang-toggle" onClick={() => setLang(lang === 'zh' ? 'en' : 'zh')}>
                            🌐 {lang === 'zh' ? 'Switch to English' : '切换为中文'}
                        </button>
                    </div>
                )}
            </div>

        </>
    )

}


