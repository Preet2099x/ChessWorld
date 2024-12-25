import React from 'react';
import './Chessboard.scss';

const Chessboard = () => {
  const board = [];


  for (let row = 8; row >= 1; row--) {
    for (let col of ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']) {
      const squareId = col + row;  // 'a8', 'b8', etc.
 
      const isDarkSquare = (row + col.charCodeAt(0)) % 2 === 0;
      
      board.push(
        <div
          key={squareId}
          id={squareId}
          className={`square ${isDarkSquare ? 'dark' : 'light'}`}
        ></div>
      );
    }
  }

  return (
    <div className="chessboard-container">
      {/* Row numbers on the left */}
      <div className="row-labels">
        {[8, 7, 6, 5, 4, 3, 2, 1].map((num) => (
          <div key={num} className="row-label">{num}</div>
        ))}
      </div>

      {/* The chessboard */}
      <div className="board">{board}</div>

      {/* Column letters on the bottom */}
      <div className="col-labels">
        {['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'].map((col) => (
          <div key={col} className="col-label">{col}</div>
        ))}
      </div>
    </div>
  );
};

export default Chessboard;
