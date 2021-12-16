const axios = require("axios");

export const api = axios.create({
  baseURL: "http://127.0.0.1:9090",
  timeout: 5000,
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
    "Access-Control-Allow-Headers": "Origin, Content-Type, X-Auth-Token",
  },
});
