import css from '../Modal/Modal.module.css';
import PropTypes from 'prop-types';

export const Modal = ({ src, alt, handleClose }) => (
    <div className={css.modal__backdrop} onClick={handleClose}>
      <div className={css.modal__content}>
        <img src={src} alt={alt} />
      </div>
    </div>
  );

  Modal.propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    handleClose: PropTypes.func.isRequired,
  };