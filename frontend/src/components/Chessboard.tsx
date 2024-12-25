import './Chessboard.scss';
import white_king from '../assets/pieces/white_king.png';
import black_king from '../assets/pieces/black_king.png';
import white_queen from '../assets/pieces/white_queen.png';
import black_queen from '../assets/pieces/black_queen.png';
import white_rook from '../assets/pieces/white_rook.png';
import black_rook from '../assets/pieces/black_rook.png';
import white_bishop from '../assets/pieces/white_bishop.png';
import black_bishop from '../assets/pieces/black_bishop.png';
import white_knight from '../assets/pieces/white_knight.png';
import black_knight from '../assets/pieces/black_knight.png';
import white_pawn from '../assets/pieces/white_pawn.png';
import black_pawn from '../assets/pieces/black_pawn.png';

// Defining the piece images
const pieceImages: { [key: string]: string } = {
  white_king,
  black_king,
  white_queen,
  black_queen,
  white_rook,
  black_rook,
  white_bishop,
  black_bishop,
  white_knight,
  black_knight,
  white_pawn,
  black_pawn,
};

// Example of a simple initial setup (This can be changed as per your game logic)
const initialBoardSetup: { [key: string]: string } = {
  a1: 'white_rook', h1: 'white_rook',
  a8: 'black_rook', h8: 'black_rook',
  b1: 'white_knight', g1: 'white_knight',
  b8: 'black_knight', g8: 'black_knight',
  c1: 'white_bishop', f1: 'white_bishop',
  c8: 'black_bishop', f8: 'black_bishop',
  d1: 'white_queen', d8: 'black_queen',
  e1: 'white_king', e8: 'black_king',
  a2: 'white_pawn', b2: 'white_pawn', c2: 'white_pawn', d2: 'white_pawn',
  e2: 'white_pawn', f2: 'white_pawn', g2: 'white_pawn', h2: 'white_pawn',
  a7: 'black_pawn', b7: 'black_pawn', c7: 'black_pawn', d7: 'black_pawn',
  e7: 'black_pawn', f7: 'black_pawn', g7: 'black_pawn', h7: 'black_pawn',
};

const Chessboard = () => {
  const board = [];

  // Generate the board squares and place pieces on the squares
  for (let row = 8; row >= 1; row--) {
    for (let col of ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']) {
      const squareId = col + row;  // Unique identifier for each square
      const piece = initialBoardSetup[squareId]; // Get the piece for this square

      const isDarkSquare = (row + col.charCodeAt(0)) % 2 === 0;

      board.push(
        <div
          key={squareId}
          id={squareId}
          className={`square ${isDarkSquare ? 'dark' : 'light'}`}
        >
          {/* Render the piece if there is one */}
          {piece && pieceImages[piece] && (
            <img
              src={pieceImages[piece]}
              alt={piece}
              className="piece"
            />
          )}
        </div>
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
