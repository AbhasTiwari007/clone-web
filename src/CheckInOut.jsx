import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './CheckInOut.css';
import calender from './assets/calendar.png';

function CheckInOut() {
  const [checkInDate, setCheckInDate] = useState(null);
  const [checkOutDate, setCheckOutDate] = useState(null);

  const formatDate = (date) => {
    if (!date) return '';
    const options = { weekday: 'short', month: 'short', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
  };

  return (
    <div className="date-picker-container">
      <div className="calendar-icon"></ div>
      <div className="date-display">
        <DatePicker
          selected={checkInDate}
          onChange={(dates) => {
            const [start, end] = dates;
            setCheckInDate(start);
            setCheckOutDate(end);
          }}
          startDate={checkInDate}
          endDate={checkOutDate}
          selectsRange
          minDate={new Date()}
          placeholderText="Select dates"
          customInput={
            <div className="custom-date-input">
              {checkInDate && checkOutDate ? (
                <span>
                  {formatDate(checkInDate)} — {formatDate(checkOutDate)}
                </span>
              ) : (
                <span className="placeholder">Select dates</span>
              )}
            </div>
          }
        />
      </div>
    </div>
  );
}

export default CheckInOut;
