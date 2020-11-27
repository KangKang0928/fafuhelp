import axios from 'axios'

export function request(config){
    // 服务端
    // axios.defaults.baseURL="https://corsun.xyz/fafuhelp"
    // 本机
    axios.defaults.baseURL="http://localhost:8080/fafuhelp_backend"
    const instance =axios.create({
        
    })
    return instance(config)
}