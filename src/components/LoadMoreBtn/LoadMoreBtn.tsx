import css from './LoadMoreBtn.module.css';

type LoadMoreBtnProps = {
  handlePage: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};

export default function LoadMoreBtn({ handlePage }: LoadMoreBtnProps) {
  return (
    <div className={css.wrap}>
      <button type="button" onClick={handlePage}>
        Load More
      </button>
    </div>
  );
}
