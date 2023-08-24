export const PORT = 8080;
export const URL_BASE = `http://127.0.0.1:${PORT}`;

export const API_ENDPOINTS = {
  experiment: {
    post: `${URL_BASE}/experiment`,
    id: {
      get: `${URL_BASE}/experiment/nextID`,
    },
  },
  debugDatum: {
    post: `${URL_BASE}/debugDatum`,
  },
  mouseEvent: {
    post: `${URL_BASE}/mouseEvent`,
  },
  playerEvent: {
    post: `${URL_BASE}/playerEvent`,
  },
  scrollEvent: {
    post: `${URL_BASE}/scrollEvent`,
  },
  assessment: {
    post: `${URL_BASE}/assessment`,
  },
};
