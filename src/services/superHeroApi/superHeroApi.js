import { token } from '../../config/token'
import axios from 'axios'



export const axiosInstance = axios.create({
  baseURL: `https://www.superheroapi.com/api.php/${token}`
})


