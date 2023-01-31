import React from 'react';
import {
  HiCloudArrowUp,
  HiDocumentPlus,
  HiOutlineArrowLeft,
  HiPlus,
} from 'react-icons/hi2';
import { Link } from 'react-router-dom';
import FormWrapper from '../FormWrapper';

export default function AddEditAccomadation() {
  return (
    <div className="container">
      <div className="flex w-full justify-between mt-4 border-b pb-4">
        <Link to="/account/accomadations/">
          <div className="btn inline-flex btn-primary ">
            <div className="flex justify-center items-center gap-4 ">
              <HiOutlineArrowLeft className="bg-white rounded-full p1 text-black " />
              Accomadations
            </div>
          </div>
        </Link>
        <h2 className="text-2xl">Add Accomadation</h2>
        <div></div>
      </div>

      <FormWrapper>
        <form>
          <div className="formgroup">
            <label>Title</label>
            <input
              type="text"
              placeholder="title, for example: my lovely apartment"
            />
          </div>
          <div className="formgroup">
            <label>Address</label>
            <input type="text" placeholder="address of the accomadation" />
          </div>
          <div className="formgroup flex justify-center items-end gap-4">
            <div className="flex-1">
              <label>Photos</label>
              <input type="text" placeholder="Add using url" />
            </div>
            <button className="text-2xl rounded flex justify-center ">
              <HiPlus />
            </button>
          </div>
          <div className="formgroup grid grid-cols-3 gap-4 ">
            {/*  <input type="text" placeholder="Add using url" /> */}
            <button className="rounded p-8 flex justify-center gap-4">
              <HiCloudArrowUp className="text-2xl" /> <span>upload</span>
            </button>
          </div>
          <div className="formgroup">
            <label>Description</label>
            <textarea
              className="rounded"
              placeholder="Say somthing about accomadeation"
            />
          </div>
          <div className="formgroup">
            <label>Facilities</label>
            <div className="grid grid-cols-3 gap-4">
              <label className="border p-4 flex gap-4 justify-center rounded">
                <span>Wifi</span>
                <input type="checkbox" />
              </label>
              <label className="border p-4 flex gap-4 justify-center rounded">
                <span>TV</span>
                <input type="checkbox" />
              </label>
              <label className="border p-4 flex gap-4 justify-center rounded">
                <span>Parking</span>
                <input type="checkbox" />
              </label>
              <label className="border p-4 flex gap-4 justify-center rounded">
                <span>Pets allowed</span>
                <input type="checkbox" />
              </label>
              <label className="border p-4 flex gap-4 justify-center rounded">
                <span>Pool</span>
                <input type="checkbox" />
              </label>
              <label className="border p-4 flex gap-4 justify-center rounded">
                <span>Kitchen</span>
                <input type="checkbox" />
              </label>
            </div>
          </div>

          <div className="formgroup grid grid-cols-3 gap-4">
            <div>
              <label>Chek in time </label>
              <input type="text" placeholder="4.53" />
            </div>
            <div>
              <label>Chek out time </label>
              <input type="text" placeholder="4.53" />
            </div>
            <div>
              <label>Max number of guests </label>
              <input type="text" />
            </div>
          </div>
          <button type="submit" className="btn btn-primary w-full my-4">
            Submit
          </button>
        </form>
      </FormWrapper>
    </div>
  );
}
