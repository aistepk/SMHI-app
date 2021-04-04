const BASE_URL = "https://opendata-download-metfcst.smhi.se/api";

async function getAPI(lng, lat){
    const url = `${BASE_URL}/category/pmp3g/version/2/geotype/point/lon/${lng}/lat/${lat}/data.json`;
    const response = await fetch(url)
    const data = await response.json()
    return data
}

async function findWindSpeed(lng, lat){
    let wsData = await getAPI(lng, lat)
    for(const hourlyData of wsData.timeSeries){
        const windSpeed = getParameters(hourlyData.parameters)
        return windSpeed
    }
}   

function getParameters(parameters){
    for(const param of parameters){
        if(param.name === 'ws'){
            return param.values[0]
        }
    }
}

export default findWindSpeed