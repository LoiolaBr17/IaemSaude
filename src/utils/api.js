import axios from "axios"

const apiURL = import.meta.env.VITE_API

export default axios.create({
    baseURL: apiURL
})