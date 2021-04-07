const BASE_URL = "https://opendata-download-metfcst.smhi.se/api"

async function getAPI(lng, lat) {
    const url = `${BASE_URL}/category/pmp3g/version/2/geotype/point/lon/${lng}/lat/${lat}/data.json`
    const response = await fetch(url)
    const data = await response.json()
    return data
}

async function findRain(lng, lat) {
    let rainData = await getAPI(lng, lat)
    for (const hourlyData of rainData.timeSeries) {
        const rain = getParameters(hourlyData.parameters)
        return rain
    }
}

function getParameters(parameters) {
    for (const param of parameters) {
        if (param.name === "pmean") {
            return param.values[0]
        }
    }
}

export default findRain
