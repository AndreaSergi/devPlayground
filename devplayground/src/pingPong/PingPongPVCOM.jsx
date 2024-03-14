/* eslint-disable no-unused-vars */
import React, { useState, useEffect, createContext, StrictMode } from "react";
import { PingPong } from "./PingPong";
import { Campo } from "./Campo";
import { Paddle } from "./Paddle";
import { Ball } from "./Ball";

export function PingPongPVCOM() {
    const [getTop, setTop] = useState(50);
  const [getLeft, setLeft] = useState(50);
  const [verticalDirection, setVerticalDirection] = useState(2); // Velocità verticale aumentata
  const [horizontalDirection, setHorizontalDirection] = useState(2); // Velocità orizzontale aumentata
  const [score, setScore] = useState({ player: 0, opponent: 0 });
  let [paddleLeftY, setPaddleLeftY] = useState(115); // Posizione iniziale paddle sinistro
  let [paddleRightY, setPaddleRightY] = useState(115); // Posizione iniziale paddle destro

  // Funzione per controllare se la pallina ha colpito un paddle
  const checkPaddleHit = (
    ballPos,
    paddlePos,
    paddleHeight,
    paddleWidth,
    ballSize
  ) => {
    const ballLeft = ballPos.x;
    const ballRight = ballPos.x + ballSize;
    const ballTop = ballPos.y;
    const ballBottom = ballPos.y + ballSize;

    const paddleLeft = paddlePos.x;
    const paddleRight = paddlePos.x + paddleWidth;
    const paddleTop = paddlePos.y;
    const paddleBottom = paddlePos.y + paddleHeight;

    return (
      ballRight >= paddleLeft &&
      ballLeft <= paddleRight &&
      ballBottom >= paddleTop &&
      ballTop <= paddleBottom
    );
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "ArrowUp") {
        setPaddleLeftY((paddleLeftY) => Math.max(paddleLeftY - 10, 0));
      } else if (event.key === "ArrowDown") {
        setPaddleLeftY((paddleLeftY) => Math.min(paddleLeftY + 10, 230));
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setTop((prevTop) => {
        let newTop = prevTop + verticalDirection;
        if (newTop >= 285 || newTop <= 0) {
          newTop = prevTop;
          setVerticalDirection(-verticalDirection);
        }
        return newTop;
      });

      setLeft((prevLeft) => {
        let newLeft = prevLeft + horizontalDirection;
        const ballPos = { x: newLeft, y: getTop };
        const paddleLeftPos = { x: 0, y: paddleLeftY };
        const paddleRightPos = { x: 585, y: paddleRightY };
        const paddleHeight = 70;
        const paddleWidth = 10;
        const ballSize = 15;

        if (
          checkPaddleHit(
            ballPos,
            paddleLeftPos,
            paddleHeight,
            paddleWidth,
            ballSize
          ) ||
          checkPaddleHit(
            ballPos,
            paddleRightPos,
            paddleHeight,
            paddleWidth,
            ballSize
          )
        ) {
          newLeft = prevLeft;
          setHorizontalDirection(-horizontalDirection);
        } else if (newLeft <= 0 || newLeft >= 585) {
          if (newLeft <= 0) {
            setScore((score) => ({ ...score, opponent: score.opponent + 1 }));
          } else {
            setScore((score) => ({ ...score, player: score.player + 1 }));
          }
          newLeft = 50;
        }
        return newLeft;
      });

      setPaddleRightY((prevY) => {
        const deltaY = getTop - prevY - 35;
        if (deltaY > 0) {
          return Math.min(prevY + 10, 230);
        } else if (deltaY < 0) {
          return Math.max(prevY - 10, 0);
        }
        return prevY;
      });
    }, 25);

    return () => clearInterval(interval);
  }, [getTop, verticalDirection, horizontalDirection]);

  const styleMod = {
    top: `${getTop}px`,
    left: `${getLeft}px`,
  };

  // Funzione per controllare i padlle

  const [key, setKey] = useState(null);
  const [e, setE] = useState(0);

  function handleKeyDown(event) {
    setKey(event.key);
    setE(e + 1)
  }
  useEffect(() => {
    if (key == "arrowUp") {
      setPaddleLeftY(paddleLeftY - 10)
      console.log(paddleLeftY);
    }
    if (key == "arrowDown") {
      setPaddleLeftY(paddleLeftY + 10)
      console.log(paddleLeftY);
    }

console.log(key);
  }, [e])
return (
  <div tabIndex={0} onKeyDown={handleKeyDown}>
    <h2>Punteggio - Giocatore: {score.player} - PC: {score.opponent}</h2>
    <PingPong>
      <Campo>
        <Paddle
          position="left"
          style={{ top: `${paddleLeftY}px`, left: "0" }}
        />
        <Paddle
          position="right"
          style={{ top: `${paddleRightY}px`, right: "0" }}
        />
        <Ball style={styleMod} />
      </Campo>
    </PingPong>
  </div>
);
}