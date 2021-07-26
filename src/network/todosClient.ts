import axios from 'axios';
import { API_BASE_URL } from '../apiConfig';

const api = axios.create({
  baseURL: API_BASE_URL,
});

export default {
  get: async () => api.get('/api/todos/'),
  post: async (todo: { title?: string; description?: string; color: string }) =>
    api.post('/api/todos/', todo),
  patch: async (
    id: string,
    todo: {
      title?: string;
      description?: string;
      color?: string;
      completed?: boolean;
    },
  ) => api.patch(`/api/todos?id=${id}`, todo),
  delete: async (id: string) => api.delete(`/api/todos?id=${id}`),
};
