import axios from 'axios'
import { Partner } from 'src/hooks/types'
import CoinbaseLogo from 'src/assets/images/coinbase.png'
import ThorchainLogo from 'src/assets/svg/thorchain.svg'
import AxelarLogo from 'src/assets/svg/axelar.svg'
import FlareLogo from 'src/assets/svg/flare.svg'
import ArkhiaLogo from 'src/assets/svg/arkhia.svg'
import SquidLogo from 'src/assets/svg/squid.svg'

export const directusBaseURL = 'https://pangolin.directus.app'

export const directusPangoAPI = axios.create({
  baseURL: directusBaseURL,
  timeout: 10000 // 10 seconds
})

export const partners = [
  {
    date_created: '0',
    id: 1,
    logo: CoinbaseLogo,
    name: 'Coinbase',
    url: 'https://www.coinbase.com',
    status: ''
  },
  {
    date_created: '0',
    id: 2,
    logo: ThorchainLogo,
    name: 'Thorchain',
    url: 'https://thorchain.org',
    status: ''
  },
  {
    date_created: '0',
    id: 3,
    logo: AxelarLogo,
    name: 'Axelar',
    url: 'https://axelar.network/',
    status: ''
  },
  {
    date_created: '0',
    id: 4,
    logo: FlareLogo,
    name: 'Flare',
    url: 'https://flare.network/',
    status: ''
  },
  {
    date_created: '0',
    id: 4,
    logo: ArkhiaLogo,
    name: 'Arkhia',
    url: 'https://www.arkhia.io/',
    status: ''
  },
  {
    date_created: '0',
    id: 5,
    logo: SquidLogo,
    name: 'Squid',
    url: 'https://www.squidrouter.com/',
    status: ''
  }
] as Partner[]
