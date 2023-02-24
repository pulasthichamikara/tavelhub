import React, { useContext, useEffect } from 'react';

import GridAccomadation from '../components/GridAccomadation';
import { SearchContext } from '../contex/SearchContext';

export default function Home() {
  const { setSearchQuery } = useContext(SearchContext);

  useEffect(() => {
    setSearchQuery({});
  }, []);

  return (
    <div className="">
      <GridAccomadation que={''} />
    </div>
  );
}
