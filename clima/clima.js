const axios = require('axios');



const getClima = async(lat, lng) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lng }&appid=07fe1d27a7bb094316c2b3de8ca03348&units=metric`);

    return resp.data.main.temp;


}


module.exports = {
    getClima
}