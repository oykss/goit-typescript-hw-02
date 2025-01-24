import { useEffect, useRef, useState } from 'react';

import getPhotos from '../components/lib/api_handler';
import css from './App.module.css';

import ErrorMessage from '../components/ErrorMessage/ErrorMessage';
import ImageGallery from '../components/ImageGallery/ImageGallery';
import ImageModal from '../components/ImageModal/ImageModal';
import Loader from '../components/Loader/Loader';
import LoadMoreBtn from '../components/LoadMoreBtn/LoadMoreBtn';
import SearchBar from '../components/SearchBar/SearchBar';
import type { Image } from '../types';

export default function App() {
  const [photos, setPhotos] = useState<Image[]>([]);
  const [search, setSearch] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [modalIsOpen, setIsOpen] = useState<boolean>(false);
  const [dataModal, setDataModal] = useState<string>('');
  const [page, setPage] = useState<number>(1);
  const totalPage = useRef<number>(0);

  useEffect(() => {
    if (!search) return;

    setLoading(true);
    setError(false);

    const fetchPhotos = async () => {
      try {
        const response = await getPhotos(search, page);

        if (page === 1) totalPage.current = response.total_pages;

        setPhotos(prev => [...prev, ...response.results]);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchPhotos();
  }, [search, page]);

  const setQuery = (query: string) => {
    if (query === search) return;
    setPage(1);
    totalPage.current = 0;
    setPhotos([]);
    setSearch(query);
  };

  const openModalWithImage = (linkPhoto: string) => {
    setIsOpen(true);
    setDataModal(linkPhoto);
  };

  const handlePage = () => setPage(prev => prev + 1);
  return (
    <>
      <SearchBar modalIsOpen={modalIsOpen} setQuery={setQuery} />
      <div className={css.container}>
        {photos && (
          <ImageGallery photos={photos} handleIsOpen={openModalWithImage} />
        )}
        {loading && <Loader />}
        {error && <ErrorMessage />}
        {totalPage.current > page && <LoadMoreBtn handlePage={handlePage} />}
        <ImageModal
          state={modalIsOpen}
          linkPhoto={dataModal}
          handleIsOpen={setIsOpen}
        />
      </div>
    </>
  );
}
