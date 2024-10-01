import axios from 'axios'

const api = axios.create({
  baseURL: 'https://unfake-core.onrender.com',
})

export default api
