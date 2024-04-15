import { MainSection } from "./SECTIONS/MAIN_SECTION/MainSection";
import { GameDetail } from "./SECTIONS/GameDetail/GameDetail";
import TrixGif from "./SECTIONS/GameDetail/trix.gif";

export function Homepage() {
  return (
    <>
      <MainSection />
      <GameDetail
        img={TrixGif}
        title={"Ping Pong"}
        description={
          <div>
            <p>
              Experience the thrill of Ping Pong, the virtual game available on
              PC and mobile.
            </p>
            <p>
              With intuitive controls and realistic gameplay, you can challenge
              your opponent: move the bar and don't let go the ball.
            </p>
            <p>
              You will improve your skills until you become a Ping Pong
              champion.
            </p>
          </div>
        }
      />
      <GameDetail
        img={TrixGif}
        title={"Trix"}
        description={
          <div>
            <p>
              Be the first to get three symbols in a row, either horizontally,
              vertically, or diagonally.
            </p>
            <p>
              Trix is a classic and fun game played on a 3x3 grid, where players
              take turns placing 'X' and 'O'.
            </p>
            <p>
              The game ends when all squares are filled, either with a winner or
              a draw.
            </p>
          </div>
        }
      />

      <GameDetail
        img={TrixGif}
        title={"Wordify"}
        description={
          <div>
            <p>
              Find the right word with Wordify, the captivating word puzzle game
              you can play on your PC or mobile device.
            </p>
            <p>
              Five-letter word within six tries: with its minimalist design and
              brain-teasing puzzles, Wordle is perfect for your daily fun.
            </p>
          </div>
        }
      />
    </>
  );
}
