import style from "./TrixDetail.module.css"
import TrixGif from "./trix.gif"

export function TrixDetail() {
  return (
    <div className={style.container}>
      <div className={style.img}>
        <img src={TrixGif} alt="Trix Gif" width="450" height="300" />
      </div>
      <div className={style.title}>TRIX</div>
      <div className={style.description}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam consequuntur nesciunt iste impedit, obcaecati iure natus adipisci culpa neque praesentium ea fugit maiores earum, sapiente ullam accusamus vitae aspernatur labore?</div>
    </div>
  );
}
