import React, { useEffect } from 'react'

interface IntercomProps {
  appID: string
  onMessengerOpen?: () => void
}

const Intercom: React.FC<IntercomProps> = ({ appID, onMessengerOpen }) => {
  useEffect(() => {
    ;(window as any).Intercom('boot', {
      app_id: appID
    })
    if (onMessengerOpen) {
      ;(window as any).Intercom('onShow', onMessengerOpen)
    }
  }, [appID, onMessengerOpen])

  useEffect(() => {
    return () => {
      ;(window as any).Intercom('shutdown')
    }
  }, [])

  return null
}

export default Intercom
