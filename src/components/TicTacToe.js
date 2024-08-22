import React, { useState } from "react";

export default function TicTacToe() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXTurn, setisXTurn] = useState(true);
  const [winner, setWinner] = useState(null);
  const rendorSquare = (index) => {
    return (
      <button className="square" onClick={() => handleClick(index)}>
        {board[index]}
      </button>
    );
  };

  const handleClick = (index) => {
    if (board[index] != null) {
      return;
    }
    // handle click event on button
    console.log(index, "clicked");
    const newBoard = [...board];
    newBoard[index] = isXTurn ? "X" : "O";
    setBoard(newBoard);
    setisXTurn(!isXTurn);
    const winnerCombination = checkWinner(newBoard); // switch turn between X and O
    if (winnerCombination) {
      setWinner(newBoard[winnerCombination[0]]);
    }
  };

  //   here is the logic of winner and loser
  const checkWinner = (newBoard) => {
    const combination = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < combination.length; i++) {
      const [a, b, c] = combination[i];
      if (board[a] && board[a] === board[b] && board[b] === board[c]) {
        return combination[i];
      }
    }
    return null;
  };

  //   reset logic here
  const handleReset = () => {
    setBoard(Array(9).fill(null));
    setWinner(null);
  };
  return (
    <>
      {/* 3 row 3 col */}
      <div className="board">
        <div className="board-row">
          {rendorSquare(0)}
          {rendorSquare(1)}
          {rendorSquare(2)}
        </div>
        <div className="board-row">
          {rendorSquare(3)}
          {rendorSquare(4)}
          {rendorSquare(5)}
        </div>
        <div className="board-row">
          {rendorSquare(6)}
          {rendorSquare(7)}
          {rendorSquare(8)}
        </div>
      </div>
      {winner && (
        <div className="winner-message">{winner} is Winner of this Game. </div>
      )}
      <button onClick={handleReset} className="reset-button">
        Reset
      </button>
    </>
  );
}
