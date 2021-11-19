const axios = require ('axios');

const baseUrl = 'http://localhost:3000/'

export const httpGet = async (endpoint) => {
    return axios.get(baseUrl + endpoint)
}
export const httPost = async (endpoint, data) => {
    return axios.post(baseUrl + endpoint, data)
}