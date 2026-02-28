import { useState } from "react";
import Style from "./CinemaHall.module.css";

const ROW = 10,
  COL = 10;

export default function CinemaHall() {
  const [bookedSeat, setBookedSeat] = useState(new Set());
  const [selectedSeat, setSelectedSeat] = useState([]);

  const handleClick = (e) => {
    const value = e.target.innerText;
    if (value.length != 2) return;

    setSelectedSeat((prev) => [...prev, value]);
  };

  const handleBook = () => {
    setBookedSeat((prev) => {
      const set = new Set(prev);
      selectedSeat.map((seat, _) => set.add(seat));
      return set;
    });
    handleClear();
  };

  const handleClear = () => {
    setSelectedSeat([]);
  };

  const handleReset = () => {
    handleClear();
    setBookedSeat(new Set());
  };

  return (
    <div className={Style.mainContainer}>
      <h1>Cinema Hall</h1>
      <div className={Style.buttonSection}>
        <button onClick={handleBook} data-testid="book-button">
          Book Seats
        </button>
        <button onClick={handleClear} data-testid="clear-button">
          Clear
        </button>
        <button onClick={handleReset} data-testid="reset-button">
          Reset
        </button>
      </div>
      <div className={Style.cinemaHall} data-testid="cinema-hall">
        {Array.from({ length: ROW }, (_, rowIdx) => (
          <div className={Style.row} key={rowIdx} onClick={handleClick}>
            {Array.from({ length: COL }, (_, colIdx) => {
              let seat = String.fromCharCode(65 + rowIdx) + colIdx;
              const isSelected = selectedSeat.includes(seat);
              const isBooked = bookedSeat.has(seat);
              return (
                <div
                  className={`${Style.col} ${isBooked ? Style.disabledSeat : ""} ${isSelected ? Style.selectedSeat : ""}`}
                  key={colIdx}
                >
                  {seat}
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
}
