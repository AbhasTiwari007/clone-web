import React, { useState } from "react";
import "./TotalPeople.css"; 

function RoomDropdown() {
  const [open, setOpen] = useState(false);
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [rooms, setRooms] = useState(1);
  const [pets, setPets] = useState(false);

  return (
    <div className="dropdown-wrapper">
      <button className="dropdown-summary" onClick={() => setOpen(!open)}>
        {adults} adults · {children} children · {rooms} room
        <span className="dropdown-arrow">{open ? "▲" : "▼"}</span>
      </button>
      {open && (
        <div className="dropdown-panel">
          <div className="dropdown-row">
            <label>Adults</label>
            <button className="icon-btn" onClick={() => setAdults(Math.max(1, adults-1))}>–</button>
            <span className="count">{adults}</span>
            <button className="icon-btn" onClick={() => setAdults(adults+1)}>+</button>
          </div>
          <div className="dropdown-row">
            <label>Children</label>
            <button className="icon-btn" onClick={() => setChildren(Math.max(0, children-1))}>–</button>
            <span className="count">{children}</span>
            <button className="icon-btn" onClick={() => setChildren(children+1)}>+</button>
          </div>
          <div className="dropdown-row">
            <label>Rooms</label>
            <button className="icon-btn" onClick={() => setRooms(Math.max(1, rooms-1))}>–</button>
            <span className="count">{rooms}</span>
            <button className="icon-btn" onClick={() => setRooms(rooms+1)}>+</button>
          </div>
          <div className="dropdown-row">
            <label>Traveling with pets?</label>
            <input type="checkbox" checked={pets} onChange={() => setPets(!pets)} />
          </div>
          <div className="small-hint">
            Assistance animals aren’t considered pets.
          </div>
          <button className="done-btn" onClick={() => setOpen(false)}>Done</button>
        </div>
      )}
    </div>
  );
}

export default RoomDropdown;
