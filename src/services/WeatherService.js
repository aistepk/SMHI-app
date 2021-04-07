class ForecastService {
    async getForecast(lng, lat) {
        const BASE_URL = "https://opendata-download-metfcst.smhi.se"
        const url = `${BASE_URL}/api/category/pmp3g/version/2/geotype/point/lon/${lng}/lat/${lat}/data.json`
        try {
            const response = await fetch(url)
            const data = await response.json()
            return data
        } catch (Error) {
            return "Oops! Something went wrong when fetching the API"
        }
    }
}

const forecast = new ForecastService()

async function findWS(lng, lat) {
    let weatherData = await forecast.getForecast(lng, lat)
    for (const hourlyData of weatherData.timeSeries) {
        const weather = getWS(hourlyData.parameters)
        return weather
    }
}
function getWS(parameters) {
    for (const param of parameters) {
        if (param.name === "Wsymb2") {
            return param.values[0]
        }
    }
}
export default findWS
