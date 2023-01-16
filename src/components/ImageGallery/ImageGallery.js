import css from '../ImageGallery/ImageGallery.module.css';
import {ImageGalleryItem} from '../ImageGalleryItem/ImageGalleryItem';

export const ImageGallery = ({ images, onImageClick }) => (
    <ul className={css.imageGallery}>
      {images.map((image, index) => (
        <ImageGalleryItem onclick={onImageClick} image={image} key={index} />
      ))}
    </ul>
  );