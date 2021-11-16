import axios from "axios";
import url from "url";

const axios = require('axios');

const baseUrl = 'http://127.0.0.1:8000/'

export const httpGet = async (endpoint) => {
    axios.get( baseUrl + endpoint)
      .then((res) => {
        return res.data
    })
}