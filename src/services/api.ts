import axios from 'axios';

const BASE_URL = 'https://api.unsplash.com/search/photos';
const ACCESS_KEY = '-fOtwOx0CipvxMObjAGwLOpgIiL2PO84C_KcM0ntinE';

interface Image {
  id: string;
  urls: {
    small: string;
    regular: string;
  };
  alt_description: string;
}

interface FetchImagesResponse {
  results: Image[];
}

export const fetchImages = async (
  query: string,
  page: number = 1,
  perPage: number = 12
): Promise<FetchImagesResponse> => {
  const response = await axios.get(BASE_URL, {
    params: {
      query,
      page,
      per_page: perPage,
      client_id: ACCESS_KEY,
    },
  });
  return response.data;
};