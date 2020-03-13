import axios from 'axios';

const instance = axios.create({
    baseURL:'https://react-web-app-135d6.firebaseio.com/'
});

export default instance;