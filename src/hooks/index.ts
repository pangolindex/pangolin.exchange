import { useQuery } from 'react-query'
import { directusPangoAPI } from 'src/constants'

interface Partner {
  id: number
  status: string
  date_created: string
  logo: string
  name: string
  url: string
}

export function useGetPartners() {
  return useQuery(
    'pango-partners',
    async () => {
      const response = await directusPangoAPI.get('/items/Partners')
      const data = response.data
      return (data.data as Partner[]).filter(partner => partner.status.toLowerCase() === 'published')
    },
    {
      cacheTime: 1 * 60 * 60 * 1000 // 1 hour
    }
  )
}
