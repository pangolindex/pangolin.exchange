import { PangolinProvider } from '@pangolindex/components'
import React, { useContext } from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { ThemeContext } from 'styled-components'
import MixPanel from './components/MixPanel'
import App from './pages/App'
import store, { AppContext } from './state'
import ThemeProvider, { FixedGlobalStyle, ThemedGlobalStyle } from './theme'
import { Web3Provider } from '@ethersproject/providers'
import { Web3ReactProvider, useWeb3React } from '@web3-react/core'

const getLibrary = (provider: any): Web3Provider => {
  const library = new Web3Provider(provider, 'any')
  library.pollingInterval = 15000
  return library
}

const ComponentThemeProvider = () => {
  const theme = useContext(ThemeContext)
  const { library, account, chainId } = useWeb3React<Web3Provider>()

  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <PangolinProvider library={library} chainId={chainId} account={account} theme={theme as any}>
        <FixedGlobalStyle />
        <ThemedGlobalStyle />
        <App />
      </PangolinProvider>
    </Web3ReactProvider>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <MixPanel />
    <Provider store={store} context={AppContext}>
      <ThemeProvider>
        <ComponentThemeProvider />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root') as HTMLElement
)
