// 引入axios
import axios from 'axios';
export function request(config) {
    // 创建axios实例
    const instance = axios.create({
        baseURL: 'http://localhost:8080',
        timeout: 5000
    });
    // axios拦截器请求拦截
    instance.interceptors.request.use(config => {
        console.log(config);
        return config
    }, err => {
        console.log(err);
    });
    // 响应拦截
    instance.interceptors.response.use(res => {
        return res.data;
    }, err => {
        console.log(err);
    });
    // 最后发送网络请求
    return instance(config)
}
// 导出
export default request;