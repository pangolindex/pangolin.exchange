import mixpanel from 'mixpanel-browser'

export default function MixPanel(): null {
  const mixpanelToken = import.meta.env.VITE_MIXPANEL_TOKEN

  if (mixpanelToken) {
    mixpanel.init(mixpanelToken, { debug: process.env.NODE_ENV !== 'production' })

    mixpanel.track_links('a', 'Clicked in link', (element: HTMLAnchorElement) => {
      return {
        source: 'marketing-site',
        button_id: element?.id || element.id.length > 0 ? element.id : element.innerText
      }
    })
    mixpanel.track_links('button', 'Clicked in Button', (element: HTMLButtonElement) => {
      return {
        source: 'marketing-site',
        button_id: element?.id || element.id.length > 0 ? element.id : element.innerText
      }
    })
  }

  return null
}
