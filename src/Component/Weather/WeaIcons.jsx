// 渲染天气图标 后续可替换为 SVG or Anima

export default function WeatherIcons( {code} ) {
    const weatherIcons = {
      0: '☀️', 1: '🌤️', 2: '⛅', 3: '☁️',
      45: '🌫️', 48: '🌫️', 51: '🌦️', 61: '🌧️',
      71: '❄️', 95: '⛈️', 96: '⛈️', 99: '⛈️'
    }

    return <div className="icon">{ weatherIcons[code] || '❓' }</div>
}