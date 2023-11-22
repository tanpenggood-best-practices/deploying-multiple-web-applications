import axios from 'axios'

// create an axios instance
const service = axios.create({
    baseURL: import.meta.env.VITE_BASE_API, // url = base url + request url
    // withCredentials: true, // send cookies when cross-domain requests
    timeout: 600000, // request timeout
    withCredentials: true, // 异步请求携带cookie
});

// request interceptor
service.interceptors.request.use(
    config => {
        const token = localStorage.getItem('token')
        if (token) {
            config.headers['token'] = token
        }
        return config
    },
    error => {
        // do something with request error
        console.log(error); // for debug
        return Promise.reject(error)
    }
);

// response interceptor
service.interceptors.response.use(
    response => {
        const res = response.data
        return res
    },
    error => {
        // do something with response error
        console.log(error); // for debug
        return Promise.reject(error)
    }
);

export default service
