import s from './ImageCard.module.css';

interface Image {
  urls: {
    small: string;
  };
  alt_description: string;
}

interface ImageCardProps {
  image: Image;
}

const ImageCard: React.FC<ImageCardProps> = ({ image }) => (
  <div className={s.card}>
    <img src={image.urls.small} alt={image.alt_description} className={s.image} />
  </div>
);

export default ImageCard;