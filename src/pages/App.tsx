import React, { Suspense, useCallback } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './Home'
import Layout from '../layout'
import Intercom from 'src/intercom'
import { WalletModal } from '@pangolindex/components'
import { useWeb3React } from '@web3-react/core'
import { Web3Provider } from '@ethersproject/providers'

export default function App() {
  const [walletModalActive, setWalletModalActive] = React.useState<boolean>(false)

  const handleMessengerOpen = useCallback(() => {
    setWalletModalActive(true)
  }, [setWalletModalActive])

  const { account } = useWeb3React<Web3Provider>()

  return (
    <Suspense fallback={null}>
      <Intercom appID={'uj2kwt4z'} walletAddress={account} onMessengerOpen={handleMessengerOpen} />
      {!account && (
        <WalletModal
          open={walletModalActive}
          closeModal={() => {
            setWalletModalActive(false)
          }}
          onWalletConnect={wallet => {
            console.log(wallet)
          }}
        />
      )}
      <Layout>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </Router>
      </Layout>
    </Suspense>
  )
}
