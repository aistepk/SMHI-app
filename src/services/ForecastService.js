class ForecastService {
    async getForecast() {
        const BASE_URL = "https://opendata-download-metfcst.smhi.se"
        const url = `${BASE_URL}/api/category/pmp3g/version/2/geotype/point/lon/16.158/lat/58.5812/data.json`
        try {
            const response = await fetch(url)
            const temp = await response.json()
            return temp
        } catch (Error) {
            return "OOps! Something went wrong when fetching the API"
        }
    }
}

const forecast = new ForecastService()

async function forecastData() {
    let weatherData = await forecast.getForecast()
    return weatherData
}

const _forecastData = forecastData()
export { _forecastData as forecastData }
