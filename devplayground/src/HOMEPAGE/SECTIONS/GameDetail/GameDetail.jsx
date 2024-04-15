import style from "./GameDetail.module.css";

export function GameDetail({ img, title, description }) {
  return (
      <div className={style.container}>
        <div className={style.img}>
          <img src={img} alt="Game Detail Gif" width="450" height="300" />
        </div>
        <div className={`${style.title} ${style.modakRegular}`}>{title}</div>
        <div className={style.description}>{description}</div>
      </div>
  );
}
