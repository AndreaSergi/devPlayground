import style from "./TrixDetail.module.css";

export function TrixDetail({ img, title, description }) {
  return (
    <div className={style.container}>
      <div className={style.img}>
        <img src={img} alt="Game Detail Gif" width="450" height="300" />
      </div>
      <div className={`${style.title} ${style.modakRegular}`}>{title}</div>
      <div className={style.description}>
        {description}
      </div>
    </div>
  );
}
