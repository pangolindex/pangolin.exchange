import mixpanel from 'mixpanel-browser'

export default function MixPanel(): null {
  const mixpanelToken = process.env.REACT_APP_MIXPANEL_TOKEN

  if (mixpanelToken) {
    mixpanel.init(mixpanelToken, { debug: process.env.NODE_ENV !== 'production' })
    mixpanel.track_links('a', 'Clicked in link', {
      referrer: document.referrer,
      source: 'marketing site'
    })
    mixpanel.track_links('button', 'Clicked in Button', {
      referrer: document.referrer,
      source: 'marketing site'
    })
  }

  return null
}
