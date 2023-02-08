import React from 'react';
import { useState } from 'react';
import { HiWifi } from 'react-icons/hi2';
import { FaDog, FaSwimmingPool, FaTruckPickup, FaTv } from 'react-icons/fa';
import { TbToolsKitchen } from 'react-icons/tb';
export default function Facilities({ onChange, perks }) {
  const handleFasilities = (item) => {
    onChange(
      perks.includes(item) ? perks.filter((i) => i !== item) : [...perks, item]
    );
  };

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

  return (
    <div className="formgroup">
      <label>Facilities</label>

      <div className="grid grid-cols-3 gap-4">
        {fasilities.map((fs) => (
          <label
            key={fs.item}
            className="border p-4 flex gap-4 justify-center items-center"
          >
            {fs.icon}
            <span> {fs.title}</span>
            <input
              type="checkbox"
              checked={perks.includes(fs.item)}
              onChange={() => handleFasilities(fs.item)}
            />
          </label>
        ))}
      </div>
    </div>
  );
}
