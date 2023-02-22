import axios from 'axios';

const api = axios.create({
    baseURL: 'https://cms.ipossible.com.sg',
    // 'Content-Type': 'application/json',
    'Content-Type': 'application/x-www-form-urlencoded',
    "Access-Control-Allow-Origin": '*'
});

export default api;