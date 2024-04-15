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
          <pre>
            <p>
            TRIX is a classic and fun game played on a 3x3 grid, <br />
            where players take turns placing 'X' and 'O'.
            </p>
            <br />
            <p>
              The aim is to be the first to get three symbols in a row, <br />
              either horizontally, vertically, or diagonally.
            </p>
            <br />
            <p>
              The game ends when all squares are filled, <br />
              either with a winner or a draw.
            </p>
          </pre>
        }
      />

      <TrixDetail
        img={TrixGif}
        title={"TRIX"}
        description={
          <pre>
            <p>
            TRIX is a classic and fun game played on a 3x3 grid, <br />
            where players take turns placing 'X' and 'O'.
            </p>
            <br />
            <p>
              The aim is to be the first to get three symbols in a row, <br />
              either horizontally, vertically, or diagonally.
            </p>
            <br />
            <p>
              The game ends when all squares are filled, <br />
              either with a winner or a draw.
            </p>
          </pre>
        }
      />

      <TrixDetail
        img={TrixGif}
        title={"TRIX"}
        description={
          <pre>
            <p>
            TRIX is a classic and fun game played on a 3x3 grid, <br />
            where players take turns placing 'X' and 'O'.
            </p>
            <br />
            <p>
              The aim is to be the first to get three symbols in a row, <br />
              either horizontally, vertically, or diagonally.
            </p>
            <br />
            <p>
              The game ends when all squares are filled, <br />
              either with a winner or a draw.
            </p>
          </pre>
        }
      />
    </>
  );
}
