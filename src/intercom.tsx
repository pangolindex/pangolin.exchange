import React, { useEffect } from 'react'

interface IntercomProps {
  appID: string
  walletAddress?: string
  onMessengerOpen?: () => void
}

const Intercom: React.FC<IntercomProps> = ({ appID, walletAddress, onMessengerOpen }) => {
  useEffect(() => {
    ;(window as any).Intercom('boot', {
      app_id: appID,
      ...(walletAddress && { user_id: walletAddress })
    })
    if (onMessengerOpen) {
      ;(window as any).Intercom('onShow', onMessengerOpen)
    }
  }, [appID, walletAddress, onMessengerOpen])

  useEffect(() => {
    return () => {
      ;(window as any).Intercom('shutdown')
    }
  }, [])

  return null
}

export default Intercom
