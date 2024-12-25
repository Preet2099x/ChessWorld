import './Chessboard.scss';

// Importing the images for the pieces
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

// Importing the function to get the initial board setup
import getInitialBoard from '../../../game_logic/BoardSetup';

// Defining the piece images with valid keys
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

const Chessboard = () => {
  const boardSetup = getInitialBoard();  

  const board = [];

  // Loop to create the squares on the chessboard
  for (let row = 8; row >= 1; row--) {
    for (let col of ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']) {
      const squareId = col + row;  
      const piece = boardSetup[squareId];  // Get the piece for this square

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
