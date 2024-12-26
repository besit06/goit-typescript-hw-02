import s from './ImageCard.module.css';
import { Image } from '../../types';


interface ImageCardProps {
  image: Image;
}

const ImageCard: React.FC<ImageCardProps> = ({ image }) => (
  <div className={s.card}>
    <img src={image.urls.small} alt={image.alt_description} className={s.image} />
  </div>
);

export default ImageCard;