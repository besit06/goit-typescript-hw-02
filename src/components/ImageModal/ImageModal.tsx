import { useEffect } from 'react';
import Modal from 'react-modal';
import s from './ImageModal.module.css';

interface ImageModalProps {
  image: Image | null;
  onClose: () => void;
};

interface Image {
  urls: {
    regular: string;
  };
  alt_description: string;
};

Modal.setAppElement('#root');

const ImageModal: React.FC<ImageModalProps> = ({ image, onClose }) => {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  return (
    <Modal isOpen={!!image} onRequestClose={onClose} className={s.modal} overlayClassName={s.overlay}>
      <img className={s.imgModal} src={image.urls.regular} alt={image.alt_description} />
      <p className={s.discModal}>{image.alt_description}</p>
      <button onClick={onClose} className={s.btnModal}>Close</button>
    </Modal>
  );
};

export default ImageModal;