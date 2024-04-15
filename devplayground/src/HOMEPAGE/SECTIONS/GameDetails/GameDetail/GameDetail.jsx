import style from "./GameDetail.module.css";

export function GameDetail({ img, title, description, link }) {
  return (
    <div className={style.container}>
      <div className={style.img}>
        <img src={img} alt="Game Detail Gif" />
      </div>
      <div className={style.info}>
        <div className={`${style.title} modak-regular`}>{title}</div>
        <div className={style.description}>
          <div>{description}</div>
          <div className={style.buttonContainer}>
            {/* sostituire <a> con <link to={link}> */}
            <a href={link}>
              <div className={style.button}>Play</div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
