import { API_ENDPOINTS } from './config';
import axios from 'axios';

export const api = {
  debugData: {
    post: async (data: PostDebugDatumRequestBody) => {
      try {
        const response = await axios.post(API_ENDPOINTS.debugDatum.post, data);
        return response.data;
      } catch (err) {
        throw err;
      }
    },
  },
  experiment: {
    post: async (data: PostExperimentRequestBody) => {
      try {
        const response = await axios.post(API_ENDPOINTS.experiment.post, data);
        return response.data;
      } catch (err) {
        throw err;
      }
    },
  },
  mouseEvent: {
    post: async (data: PostMouseEventRequestBody) => {
      try {
        const response = await axios.post(API_ENDPOINTS.mouseEvent.post, data);
        return response.data;
      } catch (err) {
        throw err;
      }
    },
  },
};
