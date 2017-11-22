import 'whatwg-fetch';
import qs from 'qs';
// import _ from 'lodash';

const API_URL = 'http://api.openweathermap.org/data/2.5/weather';

/**
 * Execute a query to OpenWeatherMap
 * @param {object} queryString 
 * @return {promise}
 */
function getPromiseFromFetch(queryString) {
    const url = API_URL + qs.stringify(queryString, {addQueryPrefix: true});

    return new Promise((resolve, reject) => {
        fetch(url).then(function (response) {
            if (response.status === 200 || response.status === 304) {
                return resolve(response.json())
            }
            return reject({code: response.status, data: response.json()});
        }, reject)
    });
}


class OpenWeatherService {
    constructor(token) {
        this.token = token;
    }

    findByCity(city, country) {
        const queryString = {
            q: city + (country && country.length > 0 ? ',' + country : ''),
            APPID: this.token
        };

        return getPromiseFromFetch(queryString);
    }

    findByCoordinates(longitud, latitud) {
        const queryString = {
            lat: latitud,
            lon: longitud,
            APPID: this.token
        };
        return getPromiseFromFetch(queryString);
    }
}

export default OpenWeatherService;