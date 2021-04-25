import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:5000/api',
})


export const getUsers = () => api.get(`/users`)
export const getCities = () => api.get(`/cities`)



