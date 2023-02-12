import React from 'react';

export default function XImg({ src, className, alt }) {
  return (
    <img
      src={`https://firebasestorage.googleapis.com/v0/b/hotelbook-5c722.appspot.com/o/${src}?alt=media`}
      alt={alt}
      className={className}
    />
  );
}
