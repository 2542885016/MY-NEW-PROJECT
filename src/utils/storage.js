export async function getWeatherData() {
    try {
        const ipRes = await fetch('https://api.ipify.org?format=json');
        const ipData = await ipRes.json();

        const locationRes = await fetch(`https://ipapi.co/${ipData.ip}/json/`);
        const locationData = await locationRes.json();
        const { city, latitude, longitude } = locationData;

        const weatherRes = await fetch(
            `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true&hourly=apparent_temperature%2Crelative_humidity_2m&timezone=auto`
        );
        const weatherData = await weatherRes.json();

        //console.log('🌍 weatherData:', weatherData);  // <-- 加上这一行！


        const current = weatherData.current_weather;
        const index = weatherData.hourly.time.findIndex(t => t === current.time);
        const feelsLike = weatherData.hourly.apparent_temperature[index];
        const humidity = weatherData.hourly.relative_humidity_2m[index];

        return {
            city,
            temperature: current.temperature,
            feelsLike,
            humidity,
            wind: current.windspeed,
            windDirection: current.winddirection,
            weatherCode: current.weathercode,
            time: current.time
        };
    } catch (err) {
        console.log('❌ 获取天气失败', err);
        throw new Error('获取天气失败');
    }
}


export function getTasks() {
    const tasks = localStorage.getItem('tasks')
    return tasks ? JSON.parse(tasks) : []
}


export function saveTasks(tasks) {
    localStorage.setItem('tasks', JSON.stringify(tasks))
}




export function CheckMidnightReset() {
    const today = new Date().toISOString().split('T')[0] // 格式化为 YYYY-MM-DD
    const lastDate = localStorage.getItem('lastDate')

    //console.log("🌙 当前日期：", today)
    //console.log("🌙 上次存储的日期：", lastDate)

    if (!lastDate) {
        // 如果没有存储 lastDate，说明是第一次访问
        localStorage.setItem('lastDate', today)
        return false
    }

    if (lastDate !== today) {
        // 如果 lastDate 不等于今天，说明跨天了，清空任务
        //  console.log("🌙 跨天了，准备清空任务")
        localStorage.setItem('lastDate', today)
        return true
    }

    return false
}

