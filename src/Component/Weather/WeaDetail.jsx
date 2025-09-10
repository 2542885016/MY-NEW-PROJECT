// 单行天气信息

export default function WeatherDetail( { label, value } ) {
    return(
        <p>
            <strong>{label}</strong>: {value}
        </p>
    )
}