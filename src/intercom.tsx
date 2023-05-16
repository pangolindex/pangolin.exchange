import { useEffect } from 'react'

interface IntercomProps {
  appID: string
  email?: string
}

const Intercom: React.FC<IntercomProps> = ({ appID, email }) => {
  useEffect(() => {
    ;(window as any).Intercom('boot', {
      app_id: appID,
      ...(email && { email: email })
    })
  }, [appID, email])

  useEffect(() => {
    return () => {
      ;(window as any).Intercom('shutdown')
    }
  }, [])

  return null
}

export default Intercom
