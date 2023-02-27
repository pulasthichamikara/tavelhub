import React from 'react';
import ReactLoading from 'react-loading';

export default function Loader() {
  return (
    <div
      className="w-full h-full bg-opacity-70 fixed top-0 left-0 bg-white top-0 flex items-center justify-center overflow-hidden "
      style={{ zIndex: '1000' }}
    >
      <ReactLoading
        type="spinningBubbles"
        color="#ff385c"
        height={100}
        width={100}
      />
    </div>
  );
}
