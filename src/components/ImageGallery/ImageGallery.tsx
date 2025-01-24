import type { Image } from '../../types';
import ImageCard from '../ImageCard/ImageCard';
import css from './ImageGallery.module.css';

type ImageGalleryProps = {
  photos: Image[];
  handleIsOpen: (link: string) => void;
};

export default function ImageGallery({
  photos,
  handleIsOpen,
}: ImageGalleryProps) {
  return (
    <ul className={css.list}>
      {photos.map(({ urls: { small, regular }, alt_description }, id) => (
        <li className={css.item} key={id}>
          <ImageCard
            urls={{ small, regular }}
            alt={alt_description}
            handleIsOpen={handleIsOpen}
          />
        </li>
      ))}
    </ul>
  );
}
