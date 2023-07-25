import qs from 'qs'
import { useQuery } from 'react-query'
import { directusPangoAPI } from 'src/constants'
import { Chain, Partner } from './types'

export function useGetPartners() {
  const query = qs.stringify(
    {
      filter: {
        status: {
          _eq: 'published'
        }
      }
    },
    {
      encodeValuesOnly: true
    }
  )

  return useQuery(
    'pango-partners',
    async () => {
      const response = await directusPangoAPI.get(`items/Partners?${query}`)
      const data = response.data.data as Partner[]
      return data
    },
    {
      cacheTime: 1 * 60 * 60 * 1000 // 1 hour
    }
  )
}

export function useGetLiveChains() {
  const query = qs.stringify(
    {
      filter: {
        pangolin_is_live: {
          _eq: true
        }
      }
    },
    {
      encodeValuesOnly: true
    }
  )

  return useQuery(
    'pango-live-chains',
    async () => {
      const response = await directusPangoAPI.get(`/items/chains?${query}`)
      const data = response.data.data as Chain[]
      return data
    },
    {
      cacheTime: 1 * 60 * 60 * 1000 // 1 hour
    }
  )
}
