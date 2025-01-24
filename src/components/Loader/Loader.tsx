import { InfinitySpin } from 'react-loader-spinner';
import css from './Loader.module.css';

export default function Loader() {
  return (
    <div className={css.wrap}>
      <InfinitySpin width="150" color="#007bff" />
    </div>
  );
}
