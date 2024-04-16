import { Homepage } from "./HOMEPAGE/Homepage";
import { MobileNavbar } from "./navbar/Mobilenavbar";
import { Footer } from "./Footer/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route, Link } from "react-router-dom";
import { Wordify } from "./WORDIFY/Wordify";
import PingPongPVCOM from "./pingPong/PingPongPVCOM";
import PingPongPVP from "./pingPong/PingPongPVP";
import { HomePingPong } from "./pingPong/HomePingPong";
import { Tris } from "./tris/Tris";
import { TrisMenu } from "./tris/TrisMenu/TrisMenu";
import { TrisBoardComputer } from "./tris/TrisBoard/TrisBoardComputer";
import { TrisBoard } from "./tris/TrisBoard/TrisBoard";

function App() {
  return (
    <>
      <MobileNavbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="wordify" element={<Wordify />} />
        <Route path="pingpong" element={<HomePingPong />} />
        <Route path="pingpong/pvcpu" element={<PingPongPVCOM />} />
        <Route path="pingpong/pvp" element={<PingPongPVP />} />
        <Route path="trix" element={<Tris />}>
          <Route index element={<TrisMenu />} />
          <Route
            path="pvcpu"
            element={<TrisBoardComputer />}
          />
          <Route path="pvp" element={<TrisBoard />} />
        </Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
