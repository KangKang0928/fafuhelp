import request from 'axios'

export function request(config){
    axios.default.baseURL="https://corsun.xyz/fafuhelp"
    const instance =axios.created({
        
    })
    return instance(config)
}