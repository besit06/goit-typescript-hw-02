import { useState, useEffect } from 'react';
import SearchBar from './components/SearchBar/SearchBar.jsx';
import ImageGallery from './components/ImageGallery/ImageGallery.jsx';
import LoadMoreBtn from './components/LoadMoreBtn/LoadMoreBtn.jsx';
import Loader from './components/Loader/Loader.jsx';
import ErrorMessage from './components/ErrorMessage/ErrorMessage.jsx';
import ImageModal from './components/ImageModal/ImageModal.jsx';
import { fetchImages } from './services/api.js';
import { Toaster } from 'react-hot-toast';
import './App.module.css';

interface Image {
  id: string;
  urls: {
    small: string;
    regular: string;
  };
  alt_description: string;
};

interface FetchImagesResponse {
  results: Image[];
}

const App: React.FC = () => {
  const [query, setQuery] = useState<string>('');
  const [images, setImages] = useState<Image[]>([]);
  const [page, setPage] = useState<number>(1);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [selectedImage, setSelectedImage] = useState<Image | null>(null);

  useEffect(() => {
    if (!query) return;

    const loadImages = async () => {
      setIsLoading(true);
      try {
        const data: FetchImagesResponse = await fetchImages(query, page);
        setImages(prevImages => [...prevImages, ...data.results]);
      } catch (error: any) {
        setError((error as Error).message);
                   
      } finally {
        setIsLoading(false);
      }
    };

    loadImages();
  }, [query, page]);

  const handleSearch = (newQuery: string) => {
    if (newQuery === query) return;
    setQuery(newQuery);
    setImages([]);
    setPage(1);
    setError(null);
  };

  const handleLoadMore = () => setPage(prevPage => prevPage + 1);

  const handleImageClick = (image: Image) => setSelectedImage(image);

  const handleCloseModal = () => setSelectedImage(null);

  return (
    <div className="App">
      <Toaster
        position="bottom-center"
        reverseOrder={false}
        toastOptions={{
        duration: 2000,
        style: {
        background: '#363636',
        color: '#fff',
          }
        }}/>
      <SearchBar onSubmit={handleSearch} />
      {error && <ErrorMessage message={error} />}
      <ImageGallery images={images} onImageClick={handleImageClick} />
      {isLoading && <Loader />}
      {images.length > 0 && !isLoading && <LoadMoreBtn onClick={handleLoadMore} />}
      {selectedImage && <ImageModal image={selectedImage} onClose={handleCloseModal} />}
    </div>
  );
};

export default App;
