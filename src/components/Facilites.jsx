import React from 'react';
import { FaDog, FaSwimmingPool, FaTruckPickup, FaTv } from 'react-icons/fa';
import { HiWifi } from 'react-icons/hi2';
import { TbToolsKitchen } from 'react-icons/tb';

const fasilities = [
  {
    item: 'wify',
    title: 'Wify',
    icon: <HiWifi />,
  },
  {
    item: 'tv',
    title: 'TV',
    icon: <FaTv />,
  },
  {
    item: 'parking',
    title: 'Parking',
    icon: <FaTruckPickup />,
  },
  {
    item: 'pets',
    title: 'Pets',
    icon: <FaDog />,
  },
  {
    item: 'pool',
    title: 'Pool',
    icon: <FaSwimmingPool />,
  },
  {
    item: 'kitchen',
    title: 'Kitchen',
    icon: <TbToolsKitchen />,
  },
];

const getItem = (item) => {
  const faItem = fasilities.find((i) => i.item === item);

  return (
    <div className=" flex gap-4  justify-center items-center">
      {faItem.icon} {faItem.title}{' '}
    </div>
  );
};

export default function Facilites({ perks }) {
  return (
    <div className="">
      <h3 className="font-semibold mb-4">What this place offers</h3>
      <div className="flex gap-4 flex-wrap  w-full ">
        {perks.map((item, index) => (
          <div key={index} className="text-xl px-4 py-2 border rounded-full ">
            {getItem(item)}
          </div>
        ))}
      </div>
    </div>
  );
}
