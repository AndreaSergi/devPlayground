import { Link } from "react-router-dom";
import { Button } from "./Button";
import "./PingPong/Home.css";


export function Home() {

  const styleLogo = {
    marginTop: "10px",
    marginBottom: "10px",
    width: "12vw"
  }

  const styleButton = {
    width: "200px",
    height: "50px",
    marginBottom: "10px"
  }

  return (
    <div className="container">
      <img style={styleLogo} src="/pingpong/img/ic.svg"/>
      <Link to="/pvcpu">
        <Button style={styleButton} className="pvcom" text="Player VS CPU" />
      </Link>
      <Link to="/pvp">
        <Button className="pvp" text="Player VS Player" />
      </Link>
    </div>
  );
}