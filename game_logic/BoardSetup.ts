// Define the type for the pieces on the board
type Piece = 'white_king' | 'black_king' | 'white_queen' | 'black_queen' | 'white_rook' | 'black_rook' | 'white_bishop' | 'black_bishop' | 'white_knight' | 'black_knight' | 'white_pawn' | 'black_pawn' | null;

// Define the initial board setup type
type BoardSetup = {
  [key: string]: Piece;
};

const initialBoardSetup: BoardSetup = {
// white pieces
  a1: 'white_rook', 
  b1: 'white_knight', 
  c1: 'white_bishop', 
  d1: 'white_queen', 
  e1: 'white_king', 
  f1: 'white_bishop', 
  g1: 'white_knight', 
  h1: 'white_rook',
  a2: 'white_pawn', 
  b2: 'white_pawn', 
  c2: 'white_pawn', 
  d2: 'white_pawn', 
  e2: 'white_pawn', 
  f2: 'white_pawn', 
  g2: 'white_pawn', 
  h2: 'white_pawn',
// black pieces
  a7: 'black_pawn', 
  b7: 'black_pawn', 
  c7: 'black_pawn', 
  d7: 'black_pawn', 
  e7: 'black_pawn', 
  f7: 'black_pawn', 
  g7: 'black_pawn', 
  h7: 'black_pawn',
  a8: 'black_rook', 
  b8: 'black_knight', 
  c8: 'black_bishop', 
  d8: 'black_queen', 
  e8: 'black_king', 
  f8: 'black_bishop', 
  g8: 'black_knight', 
  h8: 'black_rook'
};

const getInitialBoard = (): BoardSetup => {
  return initialBoardSetup;
};

export default getInitialBoard;
