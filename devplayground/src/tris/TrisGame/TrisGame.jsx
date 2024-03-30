import { Trix } from "../Trix";
import style from "./TrisGame.module.css";

export function TrisGame() {
  return (
    <div className={style.container}>
      <Trix />
    </div>
  );
}
