import { MainSection } from "./SECTIONS/MAIN_SECTION/MainSection";
import { Footer } from "../Footer/Footer";
import { ProvaNav } from "./SECTIONS/MAIN_SECTION/Provanav";
import { ButtonUp } from "./SECTIONS/MAIN_SECTION/ButtonUp";

export function Homepage() {
  return (
    <>
      <ProvaNav/>
      <MainSection /> 
      <Footer/>
      <ButtonUp/>
    </>
  );
}
