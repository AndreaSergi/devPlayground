import style from "./GameDetail.module.css";

export function GameDetail({ img, title, description }) {
  return (
    <div className={style.container}>
      <div className={style.img}>
        <img src={img} alt="Game Detail Gif" />
      </div>
      <div className={style.info}>
        <div className={`${style.title} modak-regular`}>{title}</div>
        <div className={style.description}>{description}</div>
      </div>
    </div>
  );
}
