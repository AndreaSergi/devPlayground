import style from "./TrixDetail.module.css";
import TrixGif from "./trix.gif";

export function TrixDetail() {
  return (
    <div className={style.container}>
      <div className={style.img}>
        <img src={TrixGif} alt="Trix Gif" width="450" height="300" />
      </div>
      <div className={style.title}>TRIX</div>
      <div className={style.description}>
        <pre>
        The game takes place on a grid made up of 3x3 squares.
        <p>Player 1's symbol is X and his opponent's is O.</p>
        <p>
          Be the first to place 3 or 4 symbols in a row <br />
          (horizontally, vertically or diagonally) 
          to win.
        </p>
        <p>
          The game ends when all the boxes have been filled <br />
          or when someone gets
          three of a kind.
        </p>
        </pre>
      </div>
    </div>
  );
}
