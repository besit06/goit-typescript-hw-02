import axios from 'axios';

const BASE_URL = 'https://api.unsplash.com/search/photos';
const ACCESS_KEY = '-fOtwOx0CipvxMObjAGwLOpgIiL2PO84C_KcM0ntinE'; 

interface fetchImagesProps {
  onSubmit: (query: string) => void;
  page: number;
};

export const fetchImages: React.FC<fetchImagesProps> = async (query, page = 1, perPage = 12) => {
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