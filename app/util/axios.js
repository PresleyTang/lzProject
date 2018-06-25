import axios from 'axios'
import querystring from 'querystring';

export function axiosPost(url, params , callback ,errorcallback) {
    let config = {
        'headers':{'Content-Type': 'application/x-www-form-urlencoded'},
    }
    axios.post(url, querystring.stringify(params))
        .then(result=>callback(result))
        .catch(e => {console.log("Oops, error", e);if(errorcallback != null){errorcallback(e);}});
}

export function axiosGet(url, callback ,errorcallback){
    let data = {
        'headers':{'Content-Type': 'application/x-www-form-urlencoded'}
    }
    axios.get(url, data)
        .then(result=>callback(result))
        .catch(e => {console.log("Oops, error", e);if(errorcallback != null){errorcallback(e);}});
}
