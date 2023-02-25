import { useState } from 'react';
import Loader from '../Loader';

const useLoading = () => {
  const [loading, setLoading] = useState(false);

  const LoadBul = () => {
    return loading && <Loader />;
  };

  return [LoadBul, setLoading];
};

export default useLoading;
