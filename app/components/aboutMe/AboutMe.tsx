import React from "react";

type IPropAboutMe = {};

export default function AboutMe({}: IPropAboutMe) {
   return (
      <section className="bg-bg-primary pl-spacing-page pr-spacing-page">
         <header>
            <h1 className="font-semibold text-[4rem] text-color-text-main">
               Sobre mim
            </h1>
         </header>

         <main className="flex mb-16 gap-x-16">
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

            <div className="flex-1">
               <figure>
                  <img
                     src="https://scalar.usc.edu/works/about-myself/media/about_me.jpg"
                     alt="About Me Imagem"
                  />
               </figure>
            </div>
         </main>
      </section>
   );
}
