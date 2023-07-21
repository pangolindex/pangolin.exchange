export interface DirectusBase {
  id: number
  date_created: string
}

export interface Info extends DirectusBase {
  logo: string
  name: string
  url: string
}
export interface Partner extends Info {
  status: string
}

export interface Chain extends Info {
  pangolin_is_live: boolean
}
