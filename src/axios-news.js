import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://module-work.firebaseio.com/'
});

export default instance;