// src/components/weather/Weather.jsx
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { WeatherCard, WeatherDetail, WeatherIcon } from '../index' // 一次性导入
import './Weather.css'

export default function Weather() {
  const [allWeather, setAllWeather] = useState([])//所有
  const [currentWeather, setCurrentWeather] = useState(null)//当前 
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const { t, i18n } = useTranslation()

  const toggleLang = () => {
    i18n.changeLanguage(i18n.language === 'zh' ? 'en' : 'zh')
  }


  useEffect(() => {
    let mounted = true

    async function fetchData() {
      setIsLoading(true)
      try {
        //sametime fetch
        const [weatherData, ipData] = await Promise.all([
          fetch('http://localhost:3000/weather').then(r => r.json()), 
          fetch('https://ipapi.co/json/').then(r => r.json())
        ])

        if(!mounted) return
        
        //get ip
        setAllWeather(weatherData)
        const ipCity = ipData.city

        //show the address of ip city
        const defaultWeather = weatherData.find(w => w.city.toLowerCase() === ipCity?.toLowerCase) || weatherData[0]
        setCurrentWeather(defaultWeather)
        setError(null)
      } catch (err) {
        console.error(err)
        if(mounted) setError('Failed to load weather')
      } finally{
        if(mounted) setIsLoading(false)
      }
    }

    fetchData()

    return () => { mounted = false }
  }, [])

  //switch city
  const handleCityChange = (city) => {
    const selected = allWeather.find(w => w.city.toLowerCase() === city.toLowerCase())
    if(selected){
      setCurrentWeather(selected)
    }
  }

  if (isLoading) return <div className="loading">🌤️ {t('loading')}</div>
  if (error) return <div className="error">❌ {error}</div>
  if (!currentWeather) return <div className="error">{t('noData') || 'No weather data'}</div>

  const rotateDeg = currentWeather.windDirection || 0

  return (
    <WeatherCard>
      <WeatherIcon code={currentWeather.weatherCode} />
      <div className="weather-content">
        <select value={currentWeather.city ?? ''} onChange={e => handleCityChange(e.target.value)}>
          {allWeather.map(w =>(
           <option key={w.id || w.city} value={w.city}>{w.city}</option> 
          ))}
        </select>
        <WeatherDetail label={t('location')} value={currentWeather.city} />
        <WeatherDetail label={t('temp')} value={`${currentWeather.temperature}°C`} />
        <WeatherDetail label={t('feelsLike')} value={`${currentWeather.feelsLike}°C`} />
        <WeatherDetail label={t('humidity')} value={`${currentWeather.humidity}%`} />
        <WeatherDetail
          label={t('wind')}
          value={`${currentWeather.wind} km/h`}
        />
        <WeatherDetail label={t('direction')} value={`${rotateDeg}°`} />
        <WeatherDetail
          label={t('time')}
          value={new Date(currentWeather.time).toLocaleTimeString([], {
            hour: '2-digit',
            minute: '2-digit',
          })}
        />
        <button className="lang-toggle" onClick={toggleLang}>
          {t('switch')}
        </button>
      </div>
    </WeatherCard>
  )
}