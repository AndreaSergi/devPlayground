import React, { useContext, useEffect, useState } from "react";
import "./TrisBoard.css";
import { TrisButton } from "../TrisButton/TrisButton";
import { TrisThemeContext } from "../TrisThemeContext/TrisThemeContext";
import bubblePopSound from "./bubble-pop.mp3";
import winningSound from "./winning-sound.mp3";

const BOARD_SIZE = 3;

export function TrisBoard() {
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

  const theme = useContext(TrisThemeContext);

  const bubblePopAudio = new Audio(bubblePopSound);
  const winningAudio = new Audio(winningSound);

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
      checkWinner();
      bubblePopAudio.play()
    }
  }

  function renderCell(row, col) {
    const isWinningCell = winningCells.some(
      (cell) => cell[0] === row && cell[1] === col
    );
    return (
      <div
        className={`trix-cell ${theme} 
          ${isWinningCell ? "winning-cell" : ""}  
          ${winner === null ? currentPlayer : ""}
        `}
        key={`${row}-${col}`}
        onClick={() => handleCellClick(row, col)}
      >
        {board[row][col]}
      </div>
    );
  }

  function renderBoard() {
    return board.map((row, rowIndex) => (
      <div className="trix-row" key={rowIndex}>
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
    if (winner === "X" || winner === "O") {
      winningAudio.play();
      if (winner === "X") {
        setScoreX(scoreX + 1); // Assegna un punto a X
      } else if (winner === "O") {
        setScoreO(scoreO + 1); // Assegna un punto a O
      }
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
      <p className="h1">T  R  I  X</p>

      <div className="scoreboard">
        <p>Player X: {scoreX}</p>
        <p>Player O: {scoreO}</p>

        {/* <p><button onClick={resetScore}>Resetta il punteggio!</button></p> */}
      </div>

      <div className="upper-line">
        {!winner && <p>Current player: <a className="currentP">{currentPlayer}</a></p>}
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
        <div className={theme === "light" ? "layer" : "layer dark"}>
          {" "}
          {renderBoard()}
        </div>
        {/* <div className="layer"> {renderBoard()}</div> */}
      </div>

      <div className="buttons">
        <TrisButton onClick={initializeBoard}>
          <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M15.8787 3.70705C17.0503 2.53547 18.9498 2.53548 20.1213 3.70705L20.2929 3.87862C21.4645 5.05019 21.4645 6.94969 20.2929 8.12126L18.5556 9.85857L8.70713 19.7071C8.57897 19.8352 8.41839 19.9261 8.24256 19.9701L4.24256 20.9701C3.90178 21.0553 3.54129 20.9554 3.29291 20.7071C3.04453 20.4587 2.94468 20.0982 3.02988 19.7574L4.02988 15.7574C4.07384 15.5816 4.16476 15.421 4.29291 15.2928L14.1989 5.38685L15.8787 3.70705ZM18.7071 5.12126C18.3166 4.73074 17.6834 4.73074 17.2929 5.12126L16.3068 6.10738L17.8622 7.72357L18.8787 6.70705C19.2692 6.31653 19.2692 5.68336 18.8787 5.29283L18.7071 5.12126ZM16.4477 9.13804L14.8923 7.52185L5.90299 16.5112L5.37439 18.6256L7.48877 18.097L16.4477 9.13804Z"
            />
          </svg>
          Rematch
        </TrisButton>
        <TrisButton link="/trix">
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
