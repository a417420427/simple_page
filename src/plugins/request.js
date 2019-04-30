import axios from 'axios'

const baseURL = 'http://192.168.2.122:3000'

const instance = axios.create({
    baseURL: baseURL,
    timeout: 1000,
    withCredentials: true
})

export default instance