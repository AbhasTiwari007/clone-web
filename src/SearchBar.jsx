
import bed from './assets/bed.png';
import React, { useState } from 'react';
import CheckInOut from './CheckInOut';
import TotalPeople from './TotalPeople';
import './SearchBar.css'

function MyTextBox({tex='',width=''}) {
  const [text, setText] = useState('');

  const handleChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div >
      <input className='destination'
        type="text"
        value={text}
        onChange={handleChange}
        placeholder={tex}
      />
    </div>
  );
}

function Tickbox() {
  const [isChecked, setIsChecked] = useState(false);

  const handleChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className="tickbox-container">
      <input
        type="checkbox"
        id="checkbox"
        checked={isChecked}
        onChange={handleChange}
        className="styled-checkbox"
      />
      <label htmlFor="checkbox" className="checkbox-label">
        I’m looking for flights
      </label>
    </div>
  );
}
function SearchBar() {
  return (
    <>
      <div className="s_box">
        <div className="inner_box">
          <div className='dest' >
         <MyTextBox tex='Where are you going?' width='65%' />
      </div>
      <div className='date'>
          <MyTextBox tex='Select Date'/>
      </div>
      <div className='people'>
          <MyTextBox tex='Select no. of people'/>
         
      </div>
          <button className='sea'>Search</button>
        </div>
        <Tickbox />
      </div>
    </>

  );
}
export default SearchBar