import { PangolinProvider, useLibrary } from '@pangolindex/components'
import React, { useContext } from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { ThemeContext } from 'styled-components'
import App from './pages/App'
import store, { AppContext } from './state'
import ThemeProvider, { FixedGlobalStyle, ThemedGlobalStyle } from './theme'

const ComponentThemeProvider = () => {
  const theme = useContext(ThemeContext)

  const { library } = useLibrary()
  const account = undefined
  const chainId = 43114

  return (
    <PangolinProvider library={library} chainId={chainId} account={account} theme={theme as any}>
      <FixedGlobalStyle />
      <ThemedGlobalStyle />
      <App />
    </PangolinProvider>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store} context={AppContext}>
      <ThemeProvider>
        <ComponentThemeProvider />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root') as HTMLElement
)
