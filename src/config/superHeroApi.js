import axios from 'axios'
import { token } from './token'

const baseURL = `https://www.superheroapi.com/api.php/${token}`

export const superHeroApi = axios.create({baseURL})
