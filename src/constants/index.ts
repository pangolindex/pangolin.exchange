import axios from 'axios'
import { Chain, Partner } from 'src/hooks/types'
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

export const chains = [
  {
    date_created: '0',
    id: 1,
    logo: 'https://raw.githubusercontent.com/pangolindex/sdk/dev/src/images/chains/avax.png',
    name: 'Avalanche',
    url: 'https://www.avax.network/',
    pangolin_is_live: true
  },
  {
    date_created: '0',
    id: 2,
    logo: 'https://raw.githubusercontent.com/pangolindex/sdk/dev/src/images/chains/sgb.png',
    name: 'Songbird',
    url: 'https://flare.network/songbird/',
    pangolin_is_live: true
  },

  {
    date_created: '0',
    id: 3,
    logo: 'https://raw.githubusercontent.com/pangolindex/sdk/dev/src/images/chains/flare.png',
    name: 'Flare',
    url: 'https://flare.network/',
    pangolin_is_live: true
  },

  {
    date_created: '0',
    id: 4,
    logo: 'https://raw.githubusercontent.com/pangolindex/sdk/dev/src/images/chains/hedera.png',
    name: 'Hedera',
    url: 'https://hedera.com/',
    pangolin_is_live: true
  },
  {
    date_created: '0',
    id: 5,
    logo: 'https://raw.githubusercontent.com/pangolindex/sdk/dev/src/images/chains/evmos.png',
    name: 'Evmos',
    url: 'https://evmos.org/',
    pangolin_is_live: true
  }
] as Chain[]
