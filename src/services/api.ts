import axios from 'axios';
import { Image } from '../types';

const BASE_URL = 'https://api.unsplash.com/search/photos';
const ACCESS_KEY = '-fOtwOx0CipvxMObjAGwLOpgIiL2PO84C_KcM0ntinE';

interface FetchImagesResponse {
  results: Image[];
}

export const fetchImages = async (
  query: string,
  page: number = 1,
  perPage: number = 12
): Promise<FetchImagesResponse> => {
  const response = await axios.get<FetchImagesResponse>(BASE_URL, {
    params: {
      query,
      page,
      per_page: perPage,
      client_id: ACCESS_KEY,
    },
  });
  return response.data;
};