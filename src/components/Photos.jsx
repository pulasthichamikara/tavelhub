import React, { useState } from 'react';
import { HiOutlineXMark, HiPhoto } from 'react-icons/hi2';

export default function Photos({ accomadation }) {
  const backendPath = process.env.REACT_APP_BACKEND_BASE;
  const [showImgs, setShowImgs] = useState(false);
  const handleGallery = () => {
    setShowImgs(!showImgs);
  };

  return (
    <div>
      <>
        {' '}
        <div className="flex gap-2 lg:gap-4 flex-wrap container mt-4 relative">
          {accomadation?.images && accomadation?.images[0] && (
            <div className="flex-1">
              <img
                src={`${backendPath}/uploads/${accomadation?.images[0]}`}
                alt={accomadation?.images[0]}
                className="rounded-2xl  object-cover max-h-[500px] w-full"
              />
            </div>
          )}
          <div className="flex-1 flex-wrap flex gap-2 lg:gap-4">
            {accomadation?.images?.length > 0 &&
              accomadation?.images?.slice(1, 3).map((item, index) => (
                <div key={item} className="bg-gray-500 rounded-2xl   flex-1">
                  <img
                    src={`${backendPath}/uploads/${item}`}
                    alt={item.name}
                    className="rounded-2xl object-cover h-full max-h-[500px] w-full"
                  />
                </div>
              ))}
            <div
              className="absolute px-3 py-2 top-4 right-8 shadow-lg font-bold bg-white rounded-xl flex items-center gap-4 cursor-pointer "
              onClick={handleGallery}
            >
              <HiPhoto /> images
            </div>
          </div>
        </div>
        {/* gallery */}
        {showImgs && (
          <div className="absolute top-0 bg-black w-full p-10  z-50 ">
            <div className="container w-full auto relative">
              <span
                className="fixed top-8 right-8 btn z-100 text-2xl shadow"
                onClick={handleGallery}
              >
                <HiOutlineXMark />
              </span>
            </div>
            <div className=" grid gap-4 container mt-20">
              {accomadation?.images?.length > 0 &&
                accomadation?.images?.map((item, index) => (
                  <div key={item} className="   flex-1">
                    <img
                      src={`${backendPath}/uploads/${item}`}
                      alt={item.name}
                      className="w-full"
                    />
                  </div>
                ))}
            </div>
          </div>
        )}
      </>
    </div>
  );
}
