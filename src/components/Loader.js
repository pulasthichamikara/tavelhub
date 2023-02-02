import React from 'react';
import ReactLoading from 'react-loading';

export default function Loader() {
  return (
    <div className="w-full h-full bg-opacity-50 absolute bg-white top-0 flex items-center justify-center overflow-hidden z-1000">
      <ReactLoading
        type="spinningBubbles"
        color="#ff385c"
        height={100}
        width={100}
      />
    </div>
  );
}
