import Image from "next/image";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import Skills from "./components/skills/Skills";
import Projects from "./components/projects/Projects";
import AboutMe from "./components/aboutMe/AboutMe";

export default function Home() {
   return (
      <>
         <Header />
         <Main />
         <AboutMe />
         <Projects />
      </>
   );
}
