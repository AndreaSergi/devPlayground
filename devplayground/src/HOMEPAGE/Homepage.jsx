import { MainSection } from "./SECTIONS/MAIN_SECTION/MainSection";
import { TrixDetail } from "./SECTIONS/TrixDetail/TrixDetail";
import TrixGif from "./SECTIONS/TrixDetail/trix.gif";

export function Homepage() {
  return (
    <>
      <MainSection />
      <TrixDetail
        img={TrixGif}
        title={"TRIX"}
        description={
          <div>
            <p>
              Be the first to get three symbols in a row, <br />
              either horizontally, vertically, or diagonally.
            </p>
            <br />
            <p>
              TRIX is a classic and fun game played on a 3x3 grid, <br />
              where players take turns placing 'X' and 'O'.
            </p>
            <br />
            <p>
              The game ends when all squares are filled, <br />
              either with a winner or a draw.
            </p>
          </div>
        }
      />

      <TrixDetail
        img={TrixGif}
        title={"TRIX"}
        description={
          <div>
            <p>
              Experience the thrill of Ping Pong, <br />
              the virtual game available on PC and mobile.
            </p>
            <br />
            <p>
              With intuitive controls and realistic gameplay, <br />
              you can challenge your opponent: <br />
              move the bar and don't let go the ball.
            </p>
            <br />
            <p>
              You will improve your skills until<br />
              you become a Ping Pong champion.
            </p>
          </div>
        }
      />

      <TrixDetail
        img={TrixGif}
        title={"TRIX"}
        description={
          <div>
            <p>
              Find the right word with WORDIFY, <br />
              the captivating word puzzle game you can play <br />
              on your PC or mobile device.
            </p>
            <br />
            <p>
              Five-letter word within six tries: <br />
              with its minimalist design and brain-teasing puzzles, <br />
              Wordle is perfect for your daily fun.
            </p>
          </div>
        }
      />
    </>
  );
}
