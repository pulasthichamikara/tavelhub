import axios from 'axios';
import React, { useState } from 'react';
import { HiCloudArrowUp, HiPlus } from 'react-icons/hi2';

export default function ImageUploader({ uploaderdImgs, onChange, refeshMe }) {
  const backendPath = process.env.REACT_APP_BACKEND_BASE;
  refeshMe(false);
  const [photos, setPhotos] = useState([]);
  const [photosUrl, setPhotosUrl] = useState([]);
  const imageUploadFromUrl = async (e) => {
    e.preventDefault();
    //__dirname + '/public'
    refeshMe(true);
    await axios
      .post(`/uploaded-by-link`, { photosUrl })

      .then((res) => {
        console.log(res.data);
        onChange([...uploaderdImgs, res.data]);
        setPhotosUrl('');
        refeshMe(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      {' '}
      {/* image upload */}
      {/* image upload url */}
      <div className="formgroup flex justify-center items-end gap-4">
        <div className="flex-1">
          <label>Photos</label>
          <input
            type="text"
            placeholder="Add using url"
            value={photosUrl}
            onChange={(e) => setPhotosUrl(e.target.value)}
          />
        </div>
        <button
          className="text-2xl rounded flex justify-center"
          onClick={imageUploadFromUrl}
        >
          <HiPlus />
        </button>
      </div>
      <div className="formgroup grid grid-cols-3 gap-4 ">
        {/*  <input type="text" placeholder="Add using url" /> */}

        {uploaderdImgs.length > 0 &&
          uploaderdImgs.map((img, index) => (
            <div key={index}>
              <img src={`${backendPath}/uploads/${img}`} alt={img} />
            </div>
          ))}
        <button className="rounded p-8 flex justify-center gap-4">
          <HiCloudArrowUp className="text-2xl" /> <span>upload</span>
        </button>
      </div>
    </div>
  );
}
