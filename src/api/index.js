import { get } from './base'

export const getTrendingManga = () => {
  return get(`https://kitsu.io/api/edge/trending/manga`)
}
