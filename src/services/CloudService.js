const BASE_URL = "https://opendata-download-metfcst.smhi.se/api"

async function getAPI(lng, lat) {
    const url = `${BASE_URL}/category/pmp3g/version/2/geotype/point/lon/${lng}/lat/${lat}/data.json`
    const response = await fetch(url)
    const data = await response.json()
    return data
}

async function findCloudCover(lng, lat) {
    let tccData = await getAPI(lng, lat)
    let cloudValues = []
    cloudValues.push(tccData.timeSeries[2].parameters[6].values[0])
    cloudValues.push(tccData.timeSeries[3].parameters[6].values[0])
    cloudValues.push(tccData.timeSeries[4].parameters[6].values[0])
    cloudValues.push(tccData.timeSeries[5].parameters[6].values[0])
    return cloudValues
}

export default findCloudCover
