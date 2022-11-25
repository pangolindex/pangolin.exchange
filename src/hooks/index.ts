import qs from 'qs'
import { useQuery } from 'react-query'
import { directusPangoAPI } from 'src/constants'

interface DirectusBase {
  id: number
  date_created: string
}

interface Info extends DirectusBase {
  logo: string
  name: string
  url: string
}
interface Partner extends Info {
  status: string
}

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
