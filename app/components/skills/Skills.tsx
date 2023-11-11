import React from "react";
import SectionTitle from "../UI/Texts/SectionTitle";
import { TRandomIcon, TSkill } from "@/app/entities";
import Skill from "./Skill";
import BaseSection from "../UI/Section/BaseSection";

type IPropSkill = {};

export default function Skills({}: IPropSkill) {
   const skills: TSkill[] = [
      {
         title: "HTML, CSS & Javascript",
         icons: ["HTML", "CSS", "JavaScript"],
         description:
            "Possuo amplo conhecimento em HTML e CSS para a criação de interfaces atraentes e responsivas. No JavaScript, possuo habilidades avançadas, incluindo o domínio de tópicos avançados como Promises, async/await, e manipulação eficiente de eventos.",
      },
      {
         title: "React & Next JS",
         icons: ["React", "NextJs"],
         description:
            "Desenvolvo aplicações web modernas e eficientes utilizando React para a construção de interfaces interativas. Tenho experiência avançada com Next.js para o desenvolvimento React server-side, proporcionando uma experiência de usuário otimizada.",
      },
      {
         title: "Python, Java & C",
         icons: ["Python", "Java", "C"],
         description:
            "Em Python, domino a sintaxe e sou experiente em bibliotecas como Pandas e Matplotlib para manipulação e visualização de dados. Em Java, possuo conhecimento completo em programação orientada a objetos. Em C, tenho familiaridade com sintaxe e conceitos básicos, com ênfase na manipulação de arquivos.",
      },
      {
         title: "Git & Github",
         icons: ["Git", "Github"],
         description:
            "Sou proficiente no uso do Git, realizando operações como pull requests e gerenciamento de branches. Tenho experiência na hospedagem de repositórios no Github e compreendo os conceitos fundamentais de controle de versão.",
      },
      {
         title: "Mongo DB",
         icons: ["MongoDB"],
         description:
            "Possuo habilidades avançadas em manipulação de dados no MongoDB, incluindo operações CRUD. Sou capaz de projetar e implementar esquemas eficientes, garantindo a integridade e segurança dos dados.",
      },
   ];

   return (
      <BaseSection>
         <SectionTitle title="Skills" />

         <div className="grid grid-cols-3 gap-4">
            {skills.map((skill) => (
               <Skill key={`Skills-${skill}`} skill={skill} />
            ))}
         </div>
      </BaseSection>
   );
}
