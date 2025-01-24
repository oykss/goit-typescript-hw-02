import clsx from 'clsx';
import toast, { Toaster } from 'react-hot-toast';
import { CiSearch } from 'react-icons/ci';
import css from './SearchBar.module.css';

type SearchBarProps = {
  modalIsOpen: boolean;
  setQuery: (query: string) => void;
};

export default function SearchBar({ modalIsOpen, setQuery }: SearchBarProps) {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const queryInput = form.querySelector('input') as HTMLInputElement;
    const query: string = queryInput?.value.trim();

    query ? setQuery(query) : toast.error("This didn't work.");
  };

  return (
    <header className={clsx(css.header, { [css.headerDisabled]: modalIsOpen })}>
      <Toaster position="top-right" reverseOrder={false} />
      <form className={css.form} onSubmit={handleSubmit}>
        <input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          disabled={modalIsOpen}
        />
        <button type="submit" disabled={modalIsOpen}>
          <CiSearch className={css.icon} />
        </button>
      </form>
    </header>
  );
}
