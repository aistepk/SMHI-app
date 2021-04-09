const BASE_URL = "https://opendata-download-metfcst.smhi.se/api"

async function getAPI(lng, lat) {
    const url = `${BASE_URL}/category/pmp3g/version/2/geotype/point/lon/${lng}/lat/${lat}/data.json`
    const response = await fetch(url)
    const data = await response.json()
    return data
}

async function findRain(lng, lat) {
    let tccData = await getAPI(lng, lat)
    let rainValues = []
    rainValues.push(tccData.timeSeries[2].parameters[3].values[0])
    rainValues.push(tccData.timeSeries[3].parameters[3].values[0])
    rainValues.push(tccData.timeSeries[4].parameters[3].values[0])
    rainValues.push(tccData.timeSeries[5].parameters[3].values[0])
    rainValues.push(tccData.timeSeries[6].parameters[16].values[0])
    rainValues.push(tccData.timeSeries[7].parameters[16].values[0])
    rainValues.push(tccData.timeSeries[8].parameters[16].values[0])
    rainValues.push(tccData.timeSeries[9].parameters[16].values[0])
    return rainValues
}

export default findRain
