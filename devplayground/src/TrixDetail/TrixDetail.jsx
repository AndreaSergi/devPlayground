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
        TRIX is a classic and fun game played on a 3x3 grid, <br />
        where players take turns placing 'X' and 'O'.
        <p>The aim is to be the first to get three symbols in a row, <br /> 
          either horizontally, vertically, or diagonally.</p>
        <p>
        The game ends when all squares are filled, <br />
        either with a winner or a draw.
        </p>
        </pre>
      </div>
    </div>
  );
}
