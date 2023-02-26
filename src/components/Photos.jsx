import React, { useState } from 'react';
import { HiOutlineXMark, HiPhoto } from 'react-icons/hi2';
import XImg from '../XImg';

export default function Photos({ accomadation }) {
  const [showImgs, setShowImgs] = useState(false);
  const handleGallery = () => {
    setShowImgs(!showImgs);
  };

  return (
    <div>
      <>
        <div className="flex gap-2 lg:gap-4 flex-wrap container mt-4 relative">
          {accomadation?.images && accomadation?.images[0] && (
            <div className="flex-1">
              <XImg
                src={accomadation?.images[0]}
                alt={accomadation?.images[0]}
                className="rounded-2xl  object-cover max-h-[500px] w-full"
              />
            </div>
          )}
          <div className="flex-1 flex-wrap flex gap-2 lg:gap-4">
            {accomadation?.images?.length > 0 &&
              accomadation?.images?.slice(1, 3).map((item, index) => (
                <div key={item} className="bg-gray-500 rounded-2xl   flex-1">
                  <XImg
                    src={item}
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
          <div className="absolute top-0 bg-black w-full p-10  z-50 min-h-fit   ">
            <div className="container w-full auto relative ">
              <span
                className="fixed top-8 right-8 btn z-100   flex justify-center shadow "
                onClick={handleGallery}
              >
                <HiOutlineXMark className="text-lg w-4 h-6" />
              </span>
            </div>
            <div className=" grid gap-4 container mt-20">
              {accomadation?.images?.length > 0 &&
                accomadation?.images?.map((item, index) => (
                  <div key={item} className="   flex-1">
                    <XImg src={`${item}`} alt={item.name} className="w-full" />
                  </div>
                ))}
            </div>
          </div>
        )}
      </>
    </div>
  );
}
