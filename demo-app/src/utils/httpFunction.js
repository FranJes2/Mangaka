const axios = require('axios');

const baseUrl = 'http://127.0.0.1:8000/'

export const httpGet = async (endpoint) => {
   return axios.get( baseUrl + endpoint)
    }

export const httpPost = async (endpoint, data) => {
    return axios.post( baseUrl + endpoint, data)
    }

