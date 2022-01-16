import instance from "./instance";

const key = '9b24e9e4-d48f-43c6-abec-d01e77562a5e';


class AirQualityService {


getCountries() {
    return instance.get(`http://api.airvisual.com/v2/countries?key=${key}`)
}

getStates(country) {
    return instance.get(`http://api.airvisual.com/v2/states?country=${country}&key=${key}
    `)
}

getCities(country,state) {
    return instance.get(`http://api.airvisual.com/v2/cities?state=${state}&country=${country}&key=${key}
    `)
}

getNearest(){
    return instance.get(`http://api.airvisual.com/v2/nearest_city?key=${key}`)
}
getData(country, state, city){
    return instance.get(`http://api.airvisual.com/v2/city?city=${city}&state=${state}&country=${country}&key=${key}
    `)
}
}

export default new AirQualityService();