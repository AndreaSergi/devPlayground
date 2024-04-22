import { Link } from "react-router-dom";
import { Button } from "./Button";
import "./Home.css";

export function Home() {

  const styleLogo = {
    height: "150px",
    marginBottom: "80px"
  }

  const styleButton = {
    marginTop: "10px",
    marginBottom: "10px",
    width: "170px",
  }

  return (
    <div className="containerPingPong">
      <img style={styleLogo} src="/pingpong/img/ic.svg"/>
      <Link to="/pvcpu">
        <Button style={styleButton} className="pvcom" text="Player VS CPU" />
      </Link>
      <Link to="/pvp">
        <Button style={styleButton} className="pvp" text="Player VS Player" />
      </Link>
    </div>
  );
}