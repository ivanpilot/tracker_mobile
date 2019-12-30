import axios from 'axios';
import { AsyncStorage } from 'react-native';

const instance = axios.create({
    baseURL: 'http://localhost:5000',
});

/**
 * This will automatically appends our token to every request our react front end makes to our backend Api
 */
instance.interceptors.request.use(
    /**
     * The first function is called each time there will be a request to axios from our react side
     * The second function is called each time there is an error, not necessarily from the response but even when doing the request like no internet connection or stuff like that
     */
    async (config: any) => {
        /**
         * The config object comes with several info like the url we are bout to make the request to, the headers ...
         */
        const token = await AsyncStorage.getItem('token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        /**
         * We return our modified config object to which we appended our token
         */
        return config;
    },
    (error: any) => {
        return Promise.reject(error);
    },
);

export default instance;
