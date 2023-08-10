export const PORT = 8080
export const URL_BASE = `http://127.0.0.1:${PORT}`

export const API_ENDPOINTS = {
  experiment: {
    post: `${URL_BASE}/experiment`,
  },
  debugDatum: {
    post: `${URL_BASE}/debugDatum`,
  },
}
