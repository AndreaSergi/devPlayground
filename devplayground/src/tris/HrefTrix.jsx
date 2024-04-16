import { Routes, Route, Link } from "react-router-dom";
import { Tris } from "./Tris";
import { TrisMenu } from "./TrisMenu/TrisMenu";
import { TrisBoard } from "./TrisBoard/TrisBoard";
import { TrisBoardComputer } from "./TrisBoard/TrisBoardComputer";

export function HrefTrix() {
  return (
    <Routes>
      <Route path="/" element={<Link to="/tris">Tris</Link>} />
      <Route path="tris" element={<Tris />}>
        <Route index element={<TrisMenu />} />
        <Route path="TrisBoardComputer" element={<TrisBoardComputer />} />
        <Route path="game" element={<TrisBoard />} />
      </Route>
    </Routes>
  );
}
