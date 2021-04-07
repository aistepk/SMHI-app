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

async function findTemp(lng, lat) {
    let tempData = await forecast.getForecast(lng, lat)
    for (const hourlyData of tempData.timeSeries) {
        const temp = getTemp(hourlyData.parameters)
        return temp
    }
}
function getTemp(parameters) {
    for (const param of parameters) {
        if (param.name === "t") {
            return param.values[0]
        }
    }
}

export default findTemp
