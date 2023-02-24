import { useState } from 'react';

export default function GuestDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const [guestCount, setGuestCount] = useState(1);

  function toggleDropdown() {
    setIsOpen(!isOpen);
  }

  function handleGuestChange(e) {
    setGuestCount(e.target.value);
  }

  return (
    <div className="relative">
      <label
        htmlFor="guests"
        className="text-gray-800"
        onClick={toggleDropdown}
      >
        Guests
      </label>
      {isOpen && (
        <div className="absolute z-10 top-full left-0 w-full border border-gray-300 bg-white">
          <select
            className="block w-full border-0 rounded-none focus:ring-0"
            value={guestCount}
            onChange={handleGuestChange}
            id="guests"
          >
            {Array.from({ length: 10 }, (_, index) => (
              <option key={index + 1} value={index + 1}>
                {index + 1}
              </option>
            ))}
          </select>
        </div>
      )}
    </div>
  );
}
