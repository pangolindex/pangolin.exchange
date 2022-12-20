import axios from 'axios'

export const directusBaseURL = 'https://pangolin.directus.app'

export const directusPangoAPI = axios.create({
  baseURL: directusBaseURL,
  timeout: 10000 // 10 seconds
})
