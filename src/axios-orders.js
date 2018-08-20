import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-56c9c.firebaseio.com'
});

export default instance;