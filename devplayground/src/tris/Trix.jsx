import React, { useContext, useEffect, useState } from "react";
import "./Trix.css";
import { TrisButton } from "./TrisButton/TrisButton";
import { TrisThemeContext } from "./TrisThemeContext/TrisThemeContext";

const BOARD_SIZE = 3;

export function Trix() {
  const [board, setBoard] = useState(
    Array.from({ length: BOARD_SIZE }, () =>
      Array.from({ length: BOARD_SIZE }, () => null)
    )
  );
  const [currentPlayer, setCurrentPlayer] = useState("X");
  const [winner, setWinner] = useState(null);
  const [winningCells, setWinningCells] = useState([]);
  const [scoreX, setScoreX] = useState(0);
  const [scoreO, setScoreO] = useState(0);

  const theme = useContext(TrisThemeContext)

  function checkWinner() {
    // Check rows
    for (let i = 0; i < BOARD_SIZE; i++) {
      if (
        board[i][0] &&
        board[i][0] === board[i][1] &&
        board[i][0] === board[i][2]
      ) {
        setWinner(board[i][0]);

        setWinningCells([
          [i, 0],
          [i, 1],
          [i, 2],
        ]);
        return;
      }
    }

    // Check columns
    for (let i = 0; i < BOARD_SIZE; i++) {
      if (
        board[0][i] &&
        board[0][i] === board[1][i] &&
        board[0][i] === board[2][i]
      ) {
        setWinner(board[0][i]);

        setWinningCells([
          [0, i],
          [1, i],
          [2, i],
        ]);
        return;
      }
    }

    // Check diagonals
    if (
      board[0][0] &&
      board[0][0] === board[1][1] &&
      board[0][0] === board[2][2]
    ) {
      setWinner(board[0][0]);

      setWinningCells([
        [0, 0],
        [1, 1],
        [2, 2],
      ]);
      return;
    }

    if (
      board[0][2] &&
      board[0][2] === board[1][1] &&
      board[0][2] === board[2][0]
    ) {
      setWinner(board[0][2]);

      setWinningCells([
        [0, 2],
        [1, 1],
        [2, 0],
      ]);
      return;
    }

    // Check for draw
    if (!board.flat().includes(null)) {
      setWinner("Draw");
    }
  }

  function handleCellClick(row, col) {
    if (!board[row][col] && !winner) {
      const newBoard = [...board];
      newBoard[row][col] = currentPlayer;
      setBoard(newBoard);
      setCurrentPlayer(currentPlayer === "X" ? "O" : "X");
      // if(currentPlayer==="X"){

      // }
      checkWinner();
    }
  }

  function renderCell(row, col) {
    const isWinningCell = winningCells.some(
      (cell) => cell[0] === row && cell[1] === col
    );
    return (
      <div
        className={`cell ${isWinningCell ? "winning-cell" : ""}`}
        key={`${row}-${col}`}
        onClick={() => handleCellClick(row, col)}
      >
        {board[row][col]}
      </div>
    );
  }

  function renderBoard() {
    return board.map((row, rowIndex) => (
      <div className="row" key={rowIndex}>
        {row.map((cell, colIndex) => renderCell(rowIndex, colIndex))}
      </div>
    ));
  }

  const initializeBoard = () => {
    setBoard(
      Array.from({ length: BOARD_SIZE }, () =>
        Array.from({ length: BOARD_SIZE }, () => null)
      )
    );
    setCurrentPlayer("X");
    setWinner(null);
    setWinningCells([]);
  };

  function checkWinnerAndAssignScore() {
    // Logica per controllare il vincitore rimane inalterata
    if (winner === "X") {
      setScoreX(scoreX + 1); // Assegna un punto a X
    } else if (winner === "O") {
      setScoreO(scoreO + 1); // Assegna un punto a O
    }
  }

  // function resetScore() {
  //   setScoreO(0)
  //   setScoreX(0)
  //   initializeBoard();
  // }

  useEffect(() => {
    checkWinnerAndAssignScore();
  }, [winner]);

  return (
    <div className="trix">
      <h1>TRIX</h1>
     
      <div className="scoreboard">
       

        <p>Player X:{scoreX}</p>
        <p>Player O: {scoreO}</p>

        {/* <p><button onClick={resetScore}>Resetta il punteggio!</button></p> */}
      </div>

      <div className="upper-line">
        {!winner && <p>Current player: {currentPlayer}</p>}
      </div>

      <div className="result">
      {winner && (
        <p>{winner === "Draw" ? "It's a draw!" : `Player ${winner} wins!`}</p>
      )}
      </div>
      
      {/* <button onClick={initializeBoard}>
        Rivincita
      </button> */}

      <div className="board">
        <div className={theme === "light" ? "layer" : "layer dark"}> {renderBoard()}</div>
        {/* <div className="layer"> {renderBoard()}</div> */}
      </div>

      <div className="buttons">
        <TrisButton onClick={initializeBoard}>Rematch</TrisButton>
        <TrisButton link="/tris">
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M11.3103 1.77586C11.6966 1.40805 12.3034 1.40805 12.6897 1.77586L20.6897 9.39491L23.1897 11.7759C23.5896 12.1567 23.605 12.7897 23.2241 13.1897C22.8433 13.5896 22.2103 13.605 21.8103 13.2241L21 12.4524V20C21 21.1046 20.1046 22 19 22H14H10H5C3.89543 22 3 21.1046 3 20V12.4524L2.18966 13.2241C1.78972 13.605 1.15675 13.5896 0.775862 13.1897C0.394976 12.7897 0.410414 12.1567 0.810345 11.7759L3.31034 9.39491L11.3103 1.77586ZM5 10.5476V20H9V15C9 13.3431 10.3431 12 12 12C13.6569 12 15 13.3431 15 15V20H19V10.5476L12 3.88095L5 10.5476ZM13 20V15C13 14.4477 12.5523 14 12 14C11.4477 14 11 14.4477 11 15V20H13Z"
            />
          </svg>
          Home
        </TrisButton>
      </div>
    </div>
  );
}
