import axios from 'axios';
import type { Response } from '../../types';

axios.defaults.baseURL = 'https://api.unsplash.com/';
const SEARCH_PATH = '/search/photos';

export default async function getPhotos(
  query: string,
  page = 1,
  per_page = 12
): Promise<Response> {
  const response = await axios.get(SEARCH_PATH, {
    params: {
      client_id: import.meta.env.VITE_API_KEY,
      query: query,
      per_page: per_page,
      page: page,
      orientation: 'landscape',
    },
  });

  return response.data;
}
