import Image from "next/image";
import Header from "../components/header/Header";
import Main from "../components/main/Main";
import Projects from "../components/projects/Projects";
import AboutMe from "../components/about-me/AboutMe";
import Footer from "../components/footer/Footer";
import Timeline from "../components/timeline/Timeline";
import Skills from "../components/skills/Skills";
import ContextProvider from "@/contexts/ContextProvider";

export default function App() {
   return (
      <ContextProvider>
         <Header />
         <Main />
         <AboutMe />
         <Skills />
         <Timeline />
         <Projects />
         <Footer />
      </ContextProvider>
   );
}
