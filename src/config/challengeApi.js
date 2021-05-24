import axios from 'axios'

const baseURL = 'http://challenge-react.alkemy.org'
export const challengeApi = axios.create({baseURL})
