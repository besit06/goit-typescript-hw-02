import ImageCard from '../ImageCard/ImageCard.jsx';
import s from './ImageGallery.module.css';

interface Image {
  id: string;
  urls: {
    small: string;
  };
  alt_description: string;
}

interface ImageGalleryProps {
  images: Image[];
  onImageClick: (image: Image) => void;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ images, onImageClick }) => (
    <ul className={s.gallery}>
        {images.map(image => (
            <li key={image.id} onClick={() => onImageClick(image)}>
        <ImageCard image={image} />
      </li>
    ))}
  </ul>
);

export default ImageGallery;