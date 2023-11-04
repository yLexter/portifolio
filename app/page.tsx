import Image from "next/image";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import Skills from "./components/skills/Skills";
import Projects from "./components/projects/Projects";

export default function Home() {
   return (
      <>
         <Header />
         <Main />
         <Projects />
      </>
   );
}
