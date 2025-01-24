import type { URL } from '../../types';
import css from './ImageCard.module.css';

type ImageCardProps = {
  urls: URL;
  alt: string;
  handleIsOpen: (link: string) => void;
};

export default function ImageCard({
  urls: { small, regular },
  alt,
  handleIsOpen,
}: ImageCardProps) {
  return (
    <div className={css.wrap}>
      <img src={small} alt={alt} onClick={() => handleIsOpen(regular)} />
    </div>
  );
}
