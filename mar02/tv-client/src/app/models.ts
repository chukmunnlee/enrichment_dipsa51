export interface TvShowSummary {
  tvid: number
  name: string
}

export interface TvShowDetails extends  TvShowSummary {
  lang: string
  official_site: string
  rating: number
  image: string
  summary: string
}
