import { useState } from 'react';
import Loader from '../Loader';

const useLoading = () => {
  const [loading, setLoading] = useState(false);

  const showLoading = () => setLoading(true);
  const hideLoading = () => setLoading(false);
  const LoadBul = () => {
    return loading && <Loader />;
  };

  return [LoadBul, showLoading, hideLoading];
};

export default useLoading;
