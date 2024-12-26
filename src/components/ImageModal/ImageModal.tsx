import { useEffect } from 'react';
import Modal from 'react-modal';
import s from './ImageModal.module.css';
import { Image } from '../../types';

interface ImageModalProps {
  image: Image | null;
  onClose: () => void;
}


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
    <Modal
      isOpen={!!image}
      onRequestClose={onClose}
      className={s.modal}
      overlayClassName={s.overlay}
    >
      {image ? (
        <>
          <img
            className={s.imgModal}
            src={image.urls.regular}
            alt={image.alt_description || 'No description available'}
          />
          <p className={s.discModal}>{image.alt_description || 'No description available'}</p>
        </>
      ) : (
        <p className={s.discModal}>Image not available</p>
      )}
      <button onClick={onClose} className={s.btnModal}>
        Close
      </button>
    </Modal>
  );
};

export default ImageModal;