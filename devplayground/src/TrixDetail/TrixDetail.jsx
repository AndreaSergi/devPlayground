import style from "./TrixDetail.module.css"

export function TrixDetail() {
  return (
    <div className={style.container}>
      <div className={style.img}>Image</div>
      <div className={style.title}>Title</div>
      <div className={style.description}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam consequuntur nesciunt iste impedit, obcaecati iure natus adipisci culpa neque praesentium ea fugit maiores earum, sapiente ullam accusamus vitae aspernatur labore?</div>
    </div>
  );
}
