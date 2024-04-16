import { Routes, Route, Link } from "react-router-dom";
import { Tris } from "./tris/Tris";
import { TrisMenu } from "./tris/TrisMenu/TrisMenu";
import { TrisBoard } from "./tris/TrisBoard/TrisBoard";
import { TrisBoardComputer } from "./tris/TrisBoard/TrisBoardComputer";

export function App() {
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
