const axios = require('axios');

const baseUrl = 'http://127.0.0.1:8000/'

export const httpGet = async (endpoint) => {
    return axios.post(baseUrl + endpoint)
   return axios.get( baseUrl + endpoint, {headers:{
       authorization: 'Bearer' + localStorage.getItem('token')
       }})
    }

export const httpPost = async (endpoint, data) => {
    return axios.post(baseUrl + endpoint, data)
    return axios.post( baseUrl + endpoint, data, {headers: {
        authorization: 'Bearer' + localStorage.getItem('token')
        }})
    }

