import React from "react";
import Timeline from "../UI/Timeline/Timeline";
import { TDataTimeline } from "@/app/entities";
import SectionTitle from "../UI/Texts/SectionTitle";

type IPropAboutMe = {};

export default function AboutMe({}: IPropAboutMe) {
   return (
      <section className="pl-spacing-page pr-spacing-page mb-spacing-section">
         <SectionTitle title="Sobre mim" />

         <main className="flex gap-x-16">
            <div className="flex-1">
               <p className="text-lg text-color-text-secondary">
                  Olá! Sou [Seu Nome], e sou um [Sua Profissão] apaixonado por
                  [Sua Paixão ou Área de Especialização]. Bem-vindo ao meu
                  portfólio, onde compartilho minha jornada, projetos e
                  experiências no mundo fascinante de [Sua Área de Atuação].
                  Desde o início da minha carreira, tenho dedicado minha energia
                  e criatividade para desafios que me permitam explorar novas
                  possibilidades e expandir meus horizontes. Minha jornada
                  profissional tem sido uma viagem incrível, repleta de
                  aprendizados e realizações inspiradoras.
               </p>
            </div>

            <div className="flex-1"></div>
         </main>
      </section>
   );
}
