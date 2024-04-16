import { Link } from "react-router-dom";
import { Button } from "./Button";
import "./HomePingPong.css";
import 'bootstrap/dist/css/bootstrap.min.css';

export function HomePingPong() {
  const styleLogo = {
    height: "150px",
    marginBottom: "80px"
  };
  return (
    <div className="containerPingPong">
      <img style={styleLogo} src="/pingpong/img/ic.svg" />
      <Link to="/pingpong/pvcpu">
        <Button className="pvcom" text="Player VS CPU" />
      </Link>
      <Link to="/pingpong/pvp">
        <Button className="pvp" text="Player VS Player" />
      </Link>
    </div>
  );
}
