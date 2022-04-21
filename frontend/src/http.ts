// import axios, { AxiosRequestConfig, AxiosResponse} from 'axios';

// //请求拦截
// axios.interceptors.request.use((config:AxiosRequestConfig) => {

//     return config;
// })

// //响应拦截
// axios.interceptors.response.use((response:AxiosResponse) => {

//     return response;
// }, error => {
//     //错误提醒
//     return Promise.reject(error);
// })
import axios from 'axios'

const http = axios.create({
    baseURL:'http://localhost:3000/user'
})

export default http;