import { MainSection } from "./SECTIONS/MAIN_SECTION/MainSection";
import { GameDetails } from "./SECTIONS/GameDetails/GameDetails";
import { Navbar } from "react-bootstrap";
import { MobileNavbar } from "../navbar/Mobilenavbar";
import { Footer } from "../Footer/Footer";

export function Homepage() {
  return (
    <>
    <MobileNavbar/>
      <MainSection />
      <GameDetails />
      <Footer/>
    </>
  );
}
