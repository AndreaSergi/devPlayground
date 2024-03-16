import { TrisLogo } from "./TrisLogo/TrisLogo";
import { TrisButton } from "./TrisButton/TrisButton";
import { TrisInlineButton } from "./TrisInlineButton/TrisInlineButton";
import style from "./Tris.module.css";
import lightStyle from "./TrisLight.module.css";
import darkStyle from "./TrisDark.module.css";
import { useState } from "react";

export function Tris() {
  const [dark, setDark] = useState(false);

  const themeStyle = dark ? darkStyle.page : lightStyle.page;

  function toggleTheme() {
    setDark((prevDark) => !prevDark);
  }

  return (
    <div className={`${themeStyle} ${style.page}`}>
      <div className={style.container}>
        <TrisLogo />
        <TrisButton>3x3</TrisButton>
        <TrisButton>
          <svg
            className={style.buttonIcon}
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M11.9511 5.00023C9.22161 5.02636 7.01518 7.23962 7.00008 9.97177C9.37173 9.36069 11.1149 7.50854 11.9511 5.00023ZM12 15C9.92508 15 8.14536 13.7361 7.3887 11.9362C10.6875 11.1335 12.9473 8.55435 13.928 5.38525C15.7323 6.13994 17 7.92192 17 10C17 12.7614 14.7614 15 12 15ZM18.9995 10.0812C18.9998 10.0542 19 10.0271 19 10C19 6.13401 15.866 3 12 3C8.13401 3 5 6.13401 5 10C5 10.0268 5.00015 10.0536 5.00045 10.0804C5.0002 10.0888 5.00005 10.0972 5 10.1056C4.9954 10.9434 4.99703 12.2057 4.99856 13.3972V13.3972L4.99856 13.3973L4.99856 13.3979C4.99929 13.9659 5 14.5178 5 15C5.00001 15.5523 5.44772 16 6 16H7.48312C5.32577 17.0824 4 18.9333 4 21C4 21.5523 4.44772 22 5 22C5.55228 22 6 21.5523 6 21C6 19.2701 7.93073 17 12 17C16.0693 17 18 19.2701 18 21C18 21.5523 18.4477 22 19 22C19.5523 22 20 21.5523 20 21C20 18.9333 18.6742 17.0824 16.5169 16H18C18.5523 16 19 15.5523 19 15C19 14.5175 19.0007 13.9651 19.0014 13.3966L19.0014 13.3951C19.0029 12.2042 19.0046 10.9429 19 10.1056C18.9999 10.0974 18.9998 10.0893 18.9995 10.0812Z"
              fill="#000000"
            />
          </svg>
          vs
          <svg
            className={style.buttonIcon}
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M18.6767 5.26328C18.4907 5.0848 17.1271 3.80947 15.1991 3.04743C13.3259 2.30709 10.8185 2.025 8.41642 3.79674C7.12122 3.6693 6.07221 3.97966 5.35131 4.75759C4.60366 5.56439 4.41416 6.66621 4.40023 7.57937C4.38588 8.52086 4.5555 9.46285 4.71764 10.1463C4.79994 10.4932 4.88316 10.785 4.94637 10.9919C4.96727 11.0603 4.98606 11.1197 5.00199 11.1689C5.05475 13.3974 6.14891 15.368 7.81654 16.613C7.16095 16.8218 6.56031 17.0781 6.02114 17.3722C4.50415 18.1996 3.37171 19.3901 3.02985 20.7575C2.8959 21.2933 3.22166 21.8363 3.75746 21.9702C4.29325 22.1042 4.83619 21.7784 4.97013 21.2426C5.12827 20.61 5.74583 19.8005 6.97884 19.128C8.18745 18.4687 9.89359 18.0001 12 18.0001C14.1064 18.0001 15.8125 18.4687 17.0211 19.128C18.2542 19.8005 18.8717 20.61 19.0299 21.2426C19.1638 21.7784 19.7067 22.1042 20.2425 21.9702C20.7783 21.8363 21.1041 21.2933 20.9701 20.7575C20.6283 19.3901 19.4958 18.1996 17.9788 17.3722C17.4397 17.0781 16.839 16.8218 16.1834 16.613C17.8742 15.3508 18.9754 13.3426 18.9996 11.0762C19.0295 10.8744 19.06 10.6775 19.0899 10.4845C19.3491 8.81198 19.5633 7.43006 18.951 5.68996C18.8996 5.54389 18.8121 5.39322 18.6767 5.26328ZM17 11.0001C17 10.2078 16.5383 9.48712 15.6035 8.91585C14.6628 8.34095 13.3508 8.00008 12 8.00008C10.6492 8.00008 9.3372 8.34095 8.39644 8.91586C7.46253 9.48658 7.00087 10.2064 6.99999 10.9978C6.99999 10.9985 6.99999 10.9993 6.99999 11.0001C6.99999 13.7615 9.23857 16.0001 12 16.0001C14.7614 16.0001 17 13.7615 17 11.0001ZM7.35354 7.20929C7.01426 7.41663 6.6934 7.65562 6.40404 7.92545C6.39989 7.81952 6.39841 7.7141 6.4 7.60985C6.41121 6.87478 6.5719 6.38288 6.81827 6.11701C7.00967 5.91048 7.43818 5.64539 8.53564 5.8294C8.82187 5.87738 9.11482 5.79866 9.33843 5.61367C11.1071 4.15042 12.9328 4.30224 14.4639 4.90742C15.7519 5.41649 16.7511 6.22531 17.1333 6.56175C17.2569 6.95997 17.3211 7.32592 17.3419 7.70285C17.1227 7.52232 16.8893 7.35769 16.6464 7.20929C15.3372 6.4092 13.6492 6.00008 12 6.00008C10.3508 6.00008 8.66278 6.40921 7.35354 7.20929Z"
            />
          </svg>
        </TrisButton>
        <TrisButton>Rules</TrisButton>
      </div>
      <div className={style.themeButton}>
        <TrisInlineButton onClick={toggleTheme}>
          {!dark ? (
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.32031 11.6835C3.32031 16.6541 7.34975 20.6835 12.3203 20.6835C16.1075 20.6835 19.3483 18.3443 20.6768 15.032C19.6402 15.4486 18.5059 15.6834 17.3203 15.6834C12.3497 15.6834 8.32031 11.654 8.32031 6.68342C8.32031 5.50338 8.55165 4.36259 8.96453 3.32996C5.65605 4.66028 3.32031 7.89912 3.32031 11.6835Z"
                stroke="#000000"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          ) : (
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 3V4M12 20V21M4 12H3M6.31412 6.31412L5.5 5.5M17.6859 6.31412L18.5 5.5M6.31412 17.69L5.5 18.5001M17.6859 17.69L18.5 18.5001M21 12H20M16 12C16 14.2091 14.2091 16 12 16C9.79086 16 8 14.2091 8 12C8 9.79086 9.79086 8 12 8C14.2091 8 16 9.79086 16 12Z"
                stroke="#000000"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          )}
        </TrisInlineButton>
      </div>
    </div>
  );
}
