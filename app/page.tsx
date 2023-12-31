import Image from "next/image";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import Projects from "./components/projects/Projects";
import AboutMe from "./components/aboutMe/AboutMe";
import Footer from "./components/footer/Footer";
import MyTimeLine from "./components/myTimeline/MyTimeLine";
import Skills from "./components/skills/Skills";
import ContextProvider from "@/contexts/ContextProvider";

export default function App() {
   return (
      <ContextProvider>
         <Header />
         <Main />
         <AboutMe />
         <Skills />
         <MyTimeLine />
         <Projects />
         <Footer />
      </ContextProvider>
   );
}
