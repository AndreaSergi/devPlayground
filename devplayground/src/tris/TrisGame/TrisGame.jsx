import { TrisButton } from "../TrisButton/TrisButton";
import { Trix } from "../Trix";
import style from "./TrisGame.module.css";

export function TrisGame() {
  return (
    <div className={style.container}>
      {/* <p className={style.grid}>O O X</p> */}
      {/* <p className={style.grid}>&nbsp;&nbsp;&nbsp; X O</p>
      <p className={style.grid}>X O &nbsp;&nbsp;</p> */}
      <Trix />
      <div className={style.buttons}>
        <TrisButton onClick={() => {}}>
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M8.99999 1C8.99999 0.447715 8.55228 0 7.99999 0C7.44771 0 6.99999 0.447715 6.99999 1V1.5C6.99999 2.05228 7.44771 2.5 7.99999 2.5C8.55228 2.5 8.99999 2.05228 8.99999 1.5V1ZM3.7071 2.29289C3.31657 1.90237 2.68341 1.90237 2.29288 2.29289C1.90236 2.68342 1.90236 3.31658 2.29288 3.70711L3.29288 4.70711C3.68341 5.09763 4.31657 5.09763 4.7071 4.70711C5.09762 4.31658 5.09762 3.68342 4.7071 3.29289L3.7071 2.29289ZM13.7071 3.70711C14.0976 3.31658 14.0976 2.68342 13.7071 2.29289C13.3166 1.90237 12.6834 1.90237 12.2929 2.29289L11.2929 3.29289C10.9024 3.68342 10.9024 4.31658 11.2929 4.70711C11.6834 5.09763 12.3166 5.09763 12.7071 4.70711L13.7071 3.70711ZM1 7C0.447715 7 0 7.44772 0 8C0 8.55228 0.447715 9 1 9H1.5C2.05228 9 2.5 8.55228 2.5 8C2.5 7.44772 2.05228 7 1.5 7H1ZM15 7C14.4477 7 14 7.44772 14 8C14 8.55228 14.4477 9 15 9H15.5C16.0523 9 16.5 8.55228 16.5 8C16.5 7.44772 16.0523 7 15.5 7H15ZM4.70711 12.7071C5.09763 12.3166 5.09763 11.6834 4.70711 11.2929C4.31658 10.9024 3.68342 10.9024 3.29289 11.2929L2.29289 12.2929C1.90237 12.6834 1.90237 13.3166 2.29289 13.7071C2.68342 14.0976 3.31658 14.0976 3.70711 13.7071L4.70711 12.7071ZM9 15C9 14.4477 8.55228 14 8 14C7.44772 14 7 14.4477 7 15V15.5C7 16.0523 7.44772 16.5 8 16.5C8.55228 16.5 9 16.0523 9 15.5V15ZM9.41421 4.99998C8.63316 4.21894 7.36683 4.21894 6.58579 4.99998L5 6.58577C4.21895 7.36682 4.21895 8.63315 5 9.4142L7.29289 11.7071L18.5858 23C19.3668 23.781 20.6332 23.781 21.4142 23L23 21.4142C23.781 20.6331 23.781 19.3668 23 18.5858L11.7071 7.29288L9.41421 4.99998ZM6.41421 7.99998L8 6.4142L9.58579 7.99998L8 9.58577L6.41421 7.99998ZM9.41421 11L11 9.4142L21.5858 20L20 21.5858L9.41421 11Z"
            />
          </svg>
          New Game
        </TrisButton>
        <TrisButton link="/tris">
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M11.3103 1.77586C11.6966 1.40805 12.3034 1.40805 12.6897 1.77586L20.6897 9.39491L23.1897 11.7759C23.5896 12.1567 23.605 12.7897 23.2241 13.1897C22.8433 13.5896 22.2103 13.605 21.8103 13.2241L21 12.4524V20C21 21.1046 20.1046 22 19 22H14H10H5C3.89543 22 3 21.1046 3 20V12.4524L2.18966 13.2241C1.78972 13.605 1.15675 13.5896 0.775862 13.1897C0.394976 12.7897 0.410414 12.1567 0.810345 11.7759L3.31034 9.39491L11.3103 1.77586ZM5 10.5476V20H9V15C9 13.3431 10.3431 12 12 12C13.6569 12 15 13.3431 15 15V20H19V10.5476L12 3.88095L5 10.5476ZM13 20V15C13 14.4477 12.5523 14 12 14C11.4477 14 11 14.4477 11 15V20H13Z"
            />
          </svg>
          Home
        </TrisButton>
      </div>
    </div>
  );
}
