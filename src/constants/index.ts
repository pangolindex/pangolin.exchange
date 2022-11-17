import { ChainId } from '@pangolindex/sdk'
import axios from 'axios'

export const directusBaseURL = 'https://pangolin.directus.app'

export const directusPangoAPI = axios.create({
  baseURL: directusBaseURL,
  timeout: 10000 // 10 seconds
})

export const chain_url: {
  [x: number]: string | undefined
} = {
  [ChainId.AVALANCHE]: 'https://www.avax.network/',
  [ChainId.SONGBIRD]: 'https://flare.xyz/introducing-songbird/'
}
