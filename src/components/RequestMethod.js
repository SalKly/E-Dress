import axios from "axios"

const BASE_URL = "https:/localhost:5000/api/";
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMjI2OGZkNmExYzEzOGNhOTA1YjUyZCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0NjY4MTA5MiwiZXhwIjoxNjQ2OTQwMjkyfQ.5S8QnnYiPf4uUBaiuzcsXCKA8iqpnfopigGtpQ7J6-M"

export const PublicRequest = axios.create({
  baseURL: BASE_URL,
})

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { token: `Bearer ${TOKEN}` },

});