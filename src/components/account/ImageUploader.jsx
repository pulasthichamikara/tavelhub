import axios from 'axios';
import React, { useState } from 'react';
import { HiCloudArrowUp, HiPlus } from 'react-icons/hi2';
import { FiTrash2 } from 'react-icons/fi';

export default function ImageUploader({
  uploaderdImgs,
  setUploaderdImgs,
  deletedImages,
  setDeletedImages,
}) {
  const backendPath = process.env.REACT_APP_BACKEND_BASE;

  const [photos, setPhotos] = useState([]);
  const [photosUrl, setPhotosUrl] = useState([]);
  const imageUploadFromUrl = async (e) => {
    e.preventDefault();
    //__dirname + '/public'

    await axios
      .post(`/img-uploaded-by-link`, { photosUrl })

      .then((res) => {
        setUploaderdImgs([...uploaderdImgs, res.data]);
        setPhotosUrl('');
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const deletImage = async (img) => {
    setUploaderdImgs(uploaderdImgs.filter((item) => item !== img));
    setDeletedImages([...deletedImages, img]);
  };

  return (
    <div>
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
          uploaderdImgs.map((img) => (
            <div key={img} className="relative">
              <img src={`${backendPath}/uploads/${img}`} alt={img} />
              <FiTrash2
                className="text-3xl bg-white shadow p-2 w-[50px] h-[40px]  hover:bg-pri hover:text-white cursor-pointer absolute right-1 top-1"
                onClick={() => deletImage(img)}
              />
            </div>
          ))}
        {/*  <button className="rounded p-8 flex justify-center gap-4">
          <HiCloudArrowUp className="text-2xl" /> <span>upload</span>
        </button> */}
      </div>
    </div>
  );
}
