import React, { useState } from 'react';
import { format, isAfter, isBefore, isValid, parse } from 'date-fns';

import { DayPicker } from 'react-day-picker';

import 'react-day-picker/dist/style.css';

export default function DateRangeSet({ checkinSet, checkoutSet }) {
  const [selectedRange, setSelectedRange] = useState({});
  const [fromValue, setFromValue] = useState('');
  const [toValue, setToValue] = useState('');
  const today = new Date();
  const yesterday = new Date(today.getTime() - 24 * 60 * 60 * 1000);
  const [showCaleder, setShowCaleder] = useState(false);

  const showHideCallernder = () => {
    setShowCaleder(!showCaleder);
  };
  const handleRangeSelect = (range) => {
    setSelectedRange(range);
    if (range?.from) {
      const from = format(range.from, 'y-MM-dd');
      setFromValue(from);
      checkinSet(from);
    } else {
      setFromValue('');
    }
    if (range?.to) {
      const to = format(range.to, 'y-MM-dd');
      setToValue(to);
      checkoutSet(to);
    } else {
      setToValue('');
    }
  };

  const handleFromChange = (e) => {
    setFromValue(e.target.value);
    const date = parse(e.target.value, 'y-MM-dd', new Date());
    if (!isValid(date)) {
      return setSelectedRange({ from: undefined, to: undefined });
    }
    if (selectedRange?.to && isAfter(date, selectedRange.to)) {
      setSelectedRange({ from: selectedRange.to, to: date });
    } else {
      setSelectedRange({ from: date, to: selectedRange?.to });
    }
  };

  const handleToChange = (e) => {
    setToValue(e.target.value);
    const date = parse(e.target.value, 'y-MM-dd', new Date());

    if (!isValid(date)) {
      return setSelectedRange({ from: selectedRange?.from, to: undefined });
    }
    if (selectedRange?.from && isBefore(date, selectedRange.from)) {
      setSelectedRange({ from: date, to: selectedRange.from });
    } else {
      setSelectedRange({ from: selectedRange?.from, to: date });
    }
  };
  return (
    <div>
      <DayPicker
        mode="range"
        selected={selectedRange}
        onSelect={handleRangeSelect}
        disabled={(day) => day < yesterday}
        footer={<></>}
        className="m-auto border-2 rounded-2xl p-4 flex justify-center"
      />
      <div className="flex gap-4">
        <div>
          <label>Check in</label>
          <input
            type="date"
            value={fromValue}
            onChange={handleFromChange}
            onClick={showHideCallernder}
            required
          />
        </div>

        <div>
          <label>Check out</label>
          <input
            type="date"
            value={toValue}
            onChange={handleToChange}
            onClick={showHideCallernder}
            required
          />
        </div>
      </div>
    </div>
  );
}
